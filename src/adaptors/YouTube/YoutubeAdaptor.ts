import convertYTPlayer, { Player } from './convertYTPlayer'
import { type HonorVideoAdaptor } from '../HonorVideoAdaptor'
import { type HonorVideoConfiguration } from '../../types/Shared/HonorVideoConfiguration'
import { loadYoutubeAPI, loadEducationYoutubeAPI } from '../../utils/loadYoutubeAPI'
import {
  parseYTPlayerState,
  youtubeEventHandler,
} from '../../utils/YouTube/events'
import { type HonorPlayer } from '../../HonorPlayer'
import { type HonorVideoPlayerState } from '../../types'
import { type CaptionOption } from '../../types/Shared/CaptionOption'

export type YoutubeConfig = {
  height: number
  width: number
  videoId: string
  host?: string
  playerVars: object
  events?: object
  embedConfig?: object
}

const EDUCATION_HOST_NAME = 'https://www.youtubeeducation.com'

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
    console.log('[HonorPlayer] YouTubeAdaptor.initialize called')
    console.log('[HonorPlayer] Element ID:', elementId)
    console.log('[HonorPlayer] Configuration:', JSON.stringify(configuration, null, 2))
    console.log('[HonorPlayer] Current protocol:', window.location.protocol)
    console.log('[HonorPlayer] Current location:', window.location.href)

    const shouldUseEducationAPI = window.location.protocol === 'https:' && configuration.useEducationApi
    console.log('[HonorPlayer] Should use Education API:', shouldUseEducationAPI)

    try {
      if (shouldUseEducationAPI) {
        console.log('[HonorPlayer] Loading Education YouTube API...')
        await loadEducationYoutubeAPI(player.emitter)
      } else {
        console.log('[HonorPlayer] Loading standard YouTube API...')
        await loadYoutubeAPI(player.emitter)
      }
      console.log('[HonorPlayer] YouTube API loaded successfully')
    } catch (error) {
      console.error('[HonorPlayer] Failed to load YouTube API:', error)
      throw error
    }

    const config: YoutubeConfig = {
      height: configuration.height,
      width: configuration.width,
      videoId: configuration.videoId,
      events: youtubeEventHandler(player),
      playerVars: {
        autoplay: configuration.autoplay ? 1 : 0,
        controls: configuration.controls ? 1 : 0,
        cc_load_policy: 1,
        fs: configuration.fullscreenEnabled ? 1 : 0,
        playsInline: configuration.playsInline ? 1 : 0,
      },
    }

    if (shouldUseEducationAPI) {
      config.embedConfig = {
        contentFilter: 0,
        enc: configuration.enc,
      }
      config.host = EDUCATION_HOST_NAME
      console.log('[HonorPlayer] Using Education API config with host:', EDUCATION_HOST_NAME)
    }

    console.log('[HonorPlayer] YouTube player config:', JSON.stringify(config, null, 2))
    console.log('[HonorPlayer] Creating YouTube player...')

    try {
      const ytPlayer = convertYTPlayer(elementId, config)
      this.YTPlayer = ytPlayer
      console.log('[HonorPlayer] YouTube player created successfully')
    } catch (error) {
      console.error('[HonorPlayer] Failed to create YouTube player:', error)
      throw error
    }
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
