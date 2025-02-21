import convertYTPlayer, { type Player } from './convertYTPlayer'
import { type HonorVideoAdaptor } from '../HonorVideoAdaptor'
import { type HonorVideoConfiguration } from '../../types/Shared/HonorVideoConfiguration'
import loadYoutubeAPI from '../../utils/loadYoutubeAPI'
import {
  parseYTPlayerState,
  youtubeEventHandler,
} from '../../utils/YouTube/events'
import { type HonorPlayer } from '../../HonorPlayer'
import { type HonorVideoPlayerState } from '../../types'

export type YoutubeConfig = {
  height: number
  width: number
  videoId: string
  playerVars: object
  events?: object
}

/**
 * This class will load Youtube's IFrame API upon the call of `initialize`, and upon completion will set the YT.Player object on `this` and expose methods that interact with it.
 */
export class YoutubeAdaptor implements HonorVideoAdaptor {
  YTPlayer!: Player

  initialize = async (
    elementId: string,
    configuration: HonorVideoConfiguration,
    player: HonorPlayer
  ): Promise<void> => {
    await loadYoutubeAPI(player.emitter)
    const config: YoutubeConfig = {
      height: configuration.height,
      width: configuration.width,
      videoId: configuration.videoId,
      events: youtubeEventHandler(player),
      playerVars: {
        autoPlay: configuration.autoplay ? 1 : 0,
        controls: configuration.controls ? 1 : 0,
        fs: configuration.fullscreenEnabled ? 1 : 0,
        playsInline: configuration.playsInline ? 1 : 0,
      },
    }

    const ytPlayer = convertYTPlayer(elementId, config)
    this.YTPlayer = ytPlayer
  }

  destroy = (): void => { this.YTPlayer.destroy(); }
  getCurrentTime = (): number => this.YTPlayer.getCurrentTime()
  getDuration = (): number => this.YTPlayer.getDuration()
  getPlaybackRate = (): number => this.YTPlayer.getPlaybackRate()
  getVideoLoadedFraction = (): number => this.YTPlayer.getVideoLoadedFraction()
  getPlayerState = (): HonorVideoPlayerState | undefined => {
    const state = this.YTPlayer.getPlayerState()
    return parseYTPlayerState(state)
  }
  getVolume = (): number => this.YTPlayer.getVolume()
  loadVideoById = (
    videoId: string,
    startTime?: number,
    endTime?: number
  ): void => { this.loadVideoById(videoId, startTime, endTime); }
  seekTo = (seconds: number): void => { this.YTPlayer.seekTo(seconds, true); }
  setPlaybackRate = (rate: number): void => { this.YTPlayer.setPlaybackRate(rate); }
  setSize = (width: number, height: number): void =>
    { this.YTPlayer.setSize(width, height); }
  setVolume = (volume: number): void => { this.YTPlayer.setVolume(volume); }
  stopVideo = (): void => { this.YTPlayer.stopVideo(); }
  playVideo = (): void => { this.YTPlayer.playVideo(); }
  pauseVideo = (): void => { this.YTPlayer.pauseVideo(); }
}
