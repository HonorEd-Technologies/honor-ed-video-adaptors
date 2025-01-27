import { YTError, YTEvent, YTPlayerState } from "../YouTube/YTEvents"
import { HonorVideoEvent } from "../Shared/HonorVideoEvent"
import loadYoutubeAPI from "../../utils/loadYoutubeAPI"
import { IFrameYTPlayer } from "../YouTube/IFrameYTPlayer"
import convertYTPlayer from "./convertYTPlayer"
import { HonorPlayer } from "../../HonorPlayer"
import { HonorVideoAdaptor } from "./HonorVideoAdaptor"
import { HonorVideoPlayerState } from "../Shared/HonorVideoPlayerState"
import { HonorVideoErrorType } from "../Shared/HonorVideoError"
import { HonorVideoConfiguration } from "../Shared/HonorVideoConfiguration"

export type YTConfig = { 
  height: number,
  width: number,
  videoId: string,
  playerVars: Object
  events?: Object
}

const parseYTPlayerState = (state: YTPlayerState): HonorVideoPlayerState | undefined => { 
  switch (state) { 
    case YTPlayerState.unstarted:
      return HonorVideoPlayerState.unstarted
    case YTPlayerState.playing:
      return HonorVideoPlayerState.playing
    case YTPlayerState.paused:
      return HonorVideoPlayerState.paused
    case YTPlayerState.buffering:
      return HonorVideoPlayerState.buffering
    case YTPlayerState.ended:
      return HonorVideoPlayerState.ended
    case YTPlayerState.videoCued:
      return undefined // unneeded for our purposes
  }
}

const parseYTPlayerError = (error: YTError): HonorVideoErrorType => { 
  switch (error) { 
    case YTError.apiLoadError:
      return HonorVideoErrorType.apiLoadError
    case YTError.invalidPermissions, YTError.invalidPermissionsAlt:
      return HonorVideoErrorType.invalidPermissions
    case YTError.invalidParameter:
      return HonorVideoErrorType.playerError
    case YTError.playerError:
      return HonorVideoErrorType.playerError
    case YTError.notFound:
      return HonorVideoErrorType.notFound
    default:
      return HonorVideoErrorType.unknown
  }
}

export const bindPlayerToYoutubeAPI = (elementId: string, honorConfig: HonorVideoConfiguration, player: HonorPlayer): Promise<void> => {
  let config: YTConfig = { 
    height: honorConfig.height,
    width: honorConfig.width,
    videoId: honorConfig.videoId,
    playerVars: { 
      autoPlay: honorConfig.autoplay ? 1 : 0,
      controls: honorConfig.controls ? 1 : 0,
      fs: honorConfig.fullscreenEnabled ? 1 : 0,
      playsInline: honorConfig.playsInline ? 1 : 0
    }
  }
  return new Promise<void>((resolve) => { 
    loadYoutubeAPI(player.emitter.triggerEvent)
    .then((YT: IFrameYTPlayer) => { 
      let timePoll: ReturnType<typeof setInterval> | undefined
      const setupTimePoll = () => {
        timePoll = setInterval(() => { 
          if (window.HonorPlayer) {
            const time = window.HonorPlayer.getCurrentTime()
            player.emitter.triggerEvent(HonorVideoEvent.currentTimeChanged, { data: time })
          }
        }, 500)
      }

      config.events = { 
        'onReady': () => { player.emitter.triggerEvent(HonorVideoEvent.playerReady) },
        'onStateChange': (event: YTEvent) => { 
          const { data } = event
          const castData = <YTPlayerState>data
          if (castData === undefined) { 
            player.emitter.triggerEvent(
              HonorVideoEvent.error, { 
                data: { 
                  type: HonorVideoErrorType.adaptorLayerError, 
                  message: `Unknown player state received: ${data}` 
                }
              }
            )
            return
          }
          const honorPlayerState = parseYTPlayerState(castData)

          if (!honorPlayerState) { 
            player.emitter.triggerEvent(
              HonorVideoEvent.error, { 
                data: { 
                  type: HonorVideoErrorType.adaptorLayerError, 
                  message: `Could not convert Youtube player event: ${castData} into Honor Event` 
                }
              }
            )
            return
          }
          player.emitter.triggerEvent(HonorVideoEvent.stateChanged, { data: honorPlayerState })

          if (timePoll !== undefined && (YTPlayerState.ended === data || YTPlayerState.unstarted === data)) { 
            clearInterval(timePoll)
          } else if (timePoll === undefined) { 
            setupTimePoll()
          }
        },
        'onError': (event: YTEvent) => { 
          const { data } = event
          var castData = <YTError>data
          var error = HonorVideoErrorType.unknown

          if (castData) { 
            error = parseYTPlayerError(castData)
          }
          player.emitter.triggerEvent(HonorVideoEvent.error, { data: { type: error }}) 
        }
      }

      const YTPlayer = convertYTPlayer(elementId, config)

      let adaptor: HonorVideoAdaptor = {
        destroy: () => { },
        getCurrentTime: function (): number {
          return YTPlayer.getCurrentTime()
        },
        getDuration: function (): number {
          return YTPlayer.getDuration()
        },
        getPlaybackRate: function (): number {
          return YTPlayer.getPlaybackRate()
        },
        getVideoLoadedFraction: function (): number {
          return YTPlayer.getVideoLoadedFraction()
        },
        getVolume: function (): number {
          return YTPlayer.getVolume()
        },
        loadVideoById: function (videoId: string, startTime?: number, endTime?: number): void {
          YTPlayer.loadVideoById(videoId, startTime, endTime)
        },
        seekTo: function (seconds: number): void {
          YTPlayer.seekTo(seconds, true)
        },
        setPlaybackRate: function (rate: number): void {
          YTPlayer.setPlaybackRate(rate)
        },
        setSize: function (width: number, height: number): Object {
          return YTPlayer.setSize(width.toString(), height.toString())
        },
        setVolume: function (volume: number): void {
          YTPlayer.setVolume(volume)
        },
        stopVideo: function (): void {
          YTPlayer.stopVideo()
        },
        playVideo: function (): void {
          YTPlayer.playVideo()
        },
        pauseVideo: function (): void {
          YTPlayer.pauseVideo()
        }
      }

      player.setAdaptor(adaptor)
      resolve()
    }) 
  })
}