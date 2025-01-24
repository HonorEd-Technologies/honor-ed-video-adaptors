import { YTEventType, YTEventEmitters, YTEvent, YTPlayerState } from "../YTEvents"
import { YTFunction } from "../YTFunctions"
import loadYoutubeAPI from "../../loadYoutubeAPI"
import { IFrameYTPlayer } from "../types"
import convertYTPlayer from "./convertYTPlayer"
import { HonorPlayer } from "./HonorPlayer"

export type YTAdaptor = {
  loadVideoById: (videoId: string, startSeconds?: number, endSeconds?: number) => void,
  playVideo: () => void,
  pauseVideo: () => void,
  stopVideo: () => void,

}

export type YTConfig = { 
  height: number,
  width: number,
  videoId: string,
  playerVars: Object
  events?: Object
}

export const bindAdaptorToAPI = (elementId: string, config: YTConfig, emitter: YTEventEmitters): Promise<HonorPlayer> => {
  return new Promise<HonorPlayer>((resolve) => { 
    loadYoutubeAPI(emitter.triggerEvent)
    .then((YT: IFrameYTPlayer) => { 
      let timePoll: ReturnType<typeof setInterval> | undefined
      const setupTimePoll = () => {
        timePoll = setInterval(() => { 
          if (window.HonorPlayer) {
            const time = window.HonorPlayer.getCurrentTime()
            emitter.triggerEvent(YTEventType.currentTimeChanged, { data: time })
          }
        }, 500)
      }

      config.events = { 
        'onReady': () => { emitter.triggerEvent(YTEventType.playerReady) },
        'onStateChange': (event: YTEvent) => { 
          emitter.triggerEvent(YTEventType.stateChanged, event)
          const { data } = event
          if (timePoll !== undefined && (YTPlayerState.ended === data || YTPlayerState.unstarted === data)) { 
            clearInterval(timePoll)
          } else if (timePoll === undefined) { 
            setupTimePoll()
          }
        },
        'onError': (event: YTEvent) => { emitter.triggerEvent(YTEventType.error, event) }
      }

      const YTPlayer = convertYTPlayer(elementId, config)

      let player: HonorPlayer = {
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
      resolve(player)
    }) 
  })
}