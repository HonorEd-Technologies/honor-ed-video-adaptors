import { YTEvent, YTEventHandler } from "../YTEvents"
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
  initialHeight: number,
  initialWidth: number,
  videoId: string,
  playerVars: YTPlayerVars
  events?: Object
}

export type YTPlayerVars = {
  autoplay?: number,
  cc_lang_pref?: string,
  cc_load_policy?: number,
  color?: string,
  control?: number,
  disablekb?: number,
  enablejsapi?: number,
  end?: number,
  fs?: number,
  hl?: string,
  playsInline?: number,
  start?: number
}

type YTEventPayload = { 
  data: number
}

export const bindAdaptorToAPI = (elementId: string, handler: YTEventHandler, config: YTConfig): Promise<HonorPlayer> => {
  return new Promise<HonorPlayer>((resolve) => { 
    loadYoutubeAPI(handler)
    .then((YT: IFrameYTPlayer) => { 
      if (config.events) { 
        console.log("ERROR!!")
        handler(YTEvent.error)
        return
      }
// TODO: add 'associated value' to event values to pass data
      config.events = { 
        'onReady': () => { handler(YTEvent.playerReady) },
        'onStateChange': ({ data }: YTEventPayload) => { handler(YTEvent.stateChanged) },
        'onError': ({ data }: YTEventPayload) => { 
          console.log(data)
          handler(YTEvent.error) 
        }
      }

      const YTPlayer = convertYTPlayer(elementId, config)

      let player: HonorPlayer = {
        destroy: () => { },
        getCurrentTime: function (): number {
          throw new Error("Function not implemented.")
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
          return YTPlayer.setSize(width, height)
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