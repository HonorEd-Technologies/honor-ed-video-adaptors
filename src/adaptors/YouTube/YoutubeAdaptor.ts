import convertYTPlayer from "./convertYTPlayer"
import { HonorPlayer } from "../../HonorPlayer"
import { HonorVideoAdaptor } from "../HonorVideoAdaptor"
import { HonorVideoConfiguration } from "../../types/Shared/HonorVideoConfiguration"
import { youtubeEventHandler } from "../../utils/YouTube/events"

export type YoutubeConfig = { 
  height: number,
  width: number,
  videoId: string,
  playerVars: Object
  events?: Object
}

/**
 * Once the Youtube API is loaded, you can instantiate a player based on an elementId and a configuration object. This function does just that, and returns an object containing methods that interact with the YT.Player.
 * @param elementId The id of the element to contain the iframe
 * @param honorConfig The configuration, storing values to control things like autoplay, the id of the video to play, etc.
 * @param player The HonorPlayer
 * @returns A `HonorVideoAdaptor`, a type exposing methods that, in this case, call the corresponding methods based on Youtube's iFrame API.
 */
export const initializeYoutubeAdaptor = (elementId: string, honorConfig: HonorVideoConfiguration, player: HonorPlayer): HonorVideoAdaptor => {
  // Convert `honorConfig` to type `YoutubeConfig`, which will be passed directly into the Youtube video player provided by its iFrame API
  let config: YoutubeConfig = { 
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

  // set up event handling, mapping YoutubeEvents to HonorVideoEvents, then sending them to the emitter
  config.events = youtubeEventHandler(player)

  // instantiate YT.Player
  const YTPlayer = convertYTPlayer(elementId, config)

  // construct HonorVideoAdaptor, using the Youtube-specific methods on the YT.Player
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

  return adaptor
}