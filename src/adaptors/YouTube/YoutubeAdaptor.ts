import convertYTPlayer from './convertYTPlayer'
import { type HonorVideoAdaptor } from '../HonorVideoAdaptor'
import { type HonorVideoConfiguration } from '../../types/Shared/HonorVideoConfiguration'
import loadYoutubeAPI from '../../utils/loadYoutubeAPI'
import {
  parseYTPlayerState,
  youtubeEventHandler,
} from '../../utils/YouTube/events'
import { type HonorPlayer } from '../../HonorPlayer'
import { type HonorVideoPlayerState } from '../../types'
import { type CaptionOption } from '../../types/Shared/CaptionOption'
import { YOUTUBE_EDUCATION_HOSTNAME } from './constants'

export type YoutubeConfig = {
  height: number
  width: number
  videoId: string
  playerVars: object
  host: string | undefined
  events?: object
  embedConfig?: object
}

/**
 * This class will load Youtube's IFrame API upon the call of `initialize`, and upon completion will set the YT.Player object on `this` and expose methods that interact with it.
 */
export class YoutubeAdaptor implements HonorVideoAdaptor {
  YTPlayer: any | null

  initialize = async (
    elementId: string,
    configuration: HonorVideoConfiguration,
    player: HonorPlayer
  ): Promise<void> => {
    await loadYoutubeAPI(player.emitter)

    const shouldUseEducationApi = true

    if (!configuration.keys?.youtubeApiKey) { 
      throw new Error('Education API key must be provided in configuration object.')
    }
    const config: YoutubeConfig = {
      height: configuration.height,
      width: configuration.width,
      videoId: configuration.videoId,
      events: youtubeEventHandler(player),
      host: shouldUseEducationApi ? YOUTUBE_EDUCATION_HOSTNAME : undefined,
      playerVars: {
        autoplay: configuration.autoplay ? 1 : 0,
        controls: configuration.controls ? 1 : 0,
        cc_load_policy: 1,
        fs: configuration.fullscreenEnabled ? 1 : 0,
        playsInline: configuration.playsInline ? 1 : 0,
      },
      embedConfig: shouldUseEducationApi ? { 
        apiKey: configuration.keys.youtubeApiKey
      } : undefined
    }

    const ytPlayer = convertYTPlayer(elementId, config)
    this.YTPlayer = ytPlayer
  }

  destroy = () => { this.YTPlayer.destroy(); }
  getCurrentTime = (): number => this.YTPlayer.getCurrentTime()
  getDuration = (): number => this.YTPlayer.getDuration()
  getVideoLoadedFraction = (): number => this.YTPlayer.getVideoLoadedFraction()
  getPlayerState = (): HonorVideoPlayerState | undefined => {
    const state = this.YTPlayer.getPlayerState()
    return parseYTPlayerState(state)
  }
  getVolume = (): number => this.YTPlayer.getVolume() / 100
  loadVideoById = (
    videoId: string,
    startTime?: number,
    endTime?: number
  ): void => this.loadVideoById(videoId, startTime, endTime)
  seekTo = (seconds: number): void => this.YTPlayer.seekTo(seconds)
  getPlaybackRate = (): number => this.YTPlayer.getPlaybackRate()
  getAvailablePlaybackRates = (): number[] => this.YTPlayer.getAvailablePlaybackRates()
  setPlaybackRate = (rate: number): void => this.YTPlayer.setPlaybackRate(rate)
  getAvailableLanguages = (): CaptionOption[] => { 
    const options: { languageCode: string, languageName: string }[] | undefined = this.YTPlayer.getOption('captions', 'tracklist') 
    if (options) { 
      return options.flatMap(({ languageCode, languageName }) => ({ languageCode, languageIdentifier: languageName }))
    }
    return []
  }
  getCurrentLanguage = (): CaptionOption | undefined => { 
    const option: { languageCode: string, languageName: string } | undefined = this.YTPlayer.getOption('captions', 'track')
    return option ? { languageCode: option.languageCode, languageIdentifier: option.languageName } : undefined
  }
  setCaptionLanguage = (languageCode: string): void => { this.YTPlayer.setOption('captions', 'track', { languageCode }) }
  removeCaptions = (): void => this.YTPlayer.setOption('captions', 'track', { })
  setSize = (width: number, height: number): void =>
    this.YTPlayer.setSize(width, height)
  setVolume = (volume: number): void => this.YTPlayer.setVolume(volume * 100)
  stopVideo = () => this.YTPlayer.stopVideo()
  playVideo = () => this.YTPlayer.playVideo()
  pauseVideo = () => this.YTPlayer.pauseVideo()
}
