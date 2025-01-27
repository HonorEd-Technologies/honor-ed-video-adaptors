import { YTError, YTEvent, YTPlayerState } from "../YouTube/YTEvents"
import { HonorVideoEvent } from "../Shared/HonorVideoEvent"
import loadYoutubeAPI from "../../utils/loadYoutubeAPI"
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
    .then(() => { 
      let timePoll: ReturnType<typeof setInterval> | undefined
      const setupTimePoll = () => {
        timePoll = setInterval(() => { 
          if (window.HonorPlayer) {
            window.HonorPlayer.getCurrentTime()
              .then((time) => { 
                player.emitter.triggerEvent(HonorVideoEvent.currentTimeChanged, { data: time })
              })
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
        destroy: () => Promise.resolve(YTPlayer.destroy()),
        getCurrentTime: function (): Promise<number> {
          return Promise.resolve(YTPlayer.getCurrentTime())
        },
        getDuration: function (): Promise<number> {
          return Promise.resolve(YTPlayer.getDuration())
        },
        getPlaybackRate: function (): Promise<number> {
          return Promise.resolve(YTPlayer.getPlaybackRate())
        },
        getVideoLoadedFraction: function (): Promise<number> {
          return Promise.resolve(YTPlayer.getVideoLoadedFraction())
        },
        getVolume: function (): Promise<number> {
          return Promise.resolve(YTPlayer.getVolume())
        },
        loadVideoById: function (videoId: string, startTime?: number, endTime?: number): Promise<void> {
          return Promise.resolve(YTPlayer.loadVideoById(videoId, startTime, endTime))
        },
        seekTo: function (seconds: number): Promise<void> {
          return Promise.resolve(YTPlayer.seekTo(seconds, true))
        },
        setPlaybackRate: function (rate: number): Promise<void> {
          return Promise.resolve(YTPlayer.setPlaybackRate(rate))
        },
        setSize: function (width: number, height: number) {
          return Promise.resolve(YTPlayer.setSize(width.toString(), height.toString()))
        },
        setVolume: function (volume: number): Promise<void> {
          return Promise.resolve(YTPlayer.setVolume(volume))
        },
        playVideo: function (): Promise<void> {
          return Promise.resolve(YTPlayer.playVideo())
        },
        pauseVideo: function (): Promise<void> {
          return Promise.resolve(YTPlayer.pauseVideo())
        }
      }

      player.setAdaptor(adaptor)
      resolve()
    }) 
  })
}