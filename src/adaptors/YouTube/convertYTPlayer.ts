export default (elementId: string, config: PlayerOptions) => {
  if (!window.YT) { return }
  const player = new window.YT.Player(elementId, config)
  return {
    loadVideoById: (
      videoId: string,
      startSeconds?: number,
      endSeconds?: number
    ): void => { player.loadVideoById({ videoId, startSeconds, endSeconds }); },
    loadVideoByUrl: (
      mediaContentUrl: string,
      startSeconds?: number,
      endSeconds?: number
    ): void => { player.loadVideoByUrl({ mediaContentUrl, startSeconds, endSeconds }); },
    playVideo: (): void => { player.playVideo(); },
    pauseVideo: (): void => { player.pauseVideo(); },
    stopVideo: (): void => { player.stopVideo(); },
    seekTo: (seconds: number, allowSeekAhead: boolean): void =>
      { player.seekTo(seconds, allowSeekAhead); },
    getDuration: (): number => player.getDuration(),
    getVideoLoadedFraction: (): number => player.getVideoLoadedFraction(),
    setVolume: (volume: number): void => { player.setVolume(volume); },
    getVolume: (): number => player.getVolume(),
    getPlaybackRate: (): number => player.getPlaybackRate(),
    setPlaybackRate: (suggestedRate: number): void =>
      { player.setPlaybackRate(suggestedRate); },
    getPlayerState: (): PlayerState => player.getPlayerState(),
    getAvailablePlaybackRates: (): number[] => player.getAvailablePlaybackRates(),
    getCurrentTime: (): number => player.getCurrentTime(),
    getVideoUrl: (): string => player.getVideoUrl(),
    destroy: (): void => { player.destroy(); },
    setSize: (width: number, height: number): void => { player.setSize(width, height); },
    getIframe: (): HTMLIFrameElement => player.getIframe(),
  }
}

export type Player = {
  cueVideoById(videoId: string, startSeconds?: number): void
  cueVideoById(options: {
    videoId: string
    startSeconds?: number
    endSeconds?: number
  }): void
  loadVideoById(videoId: string, startSeconds?: number): void
  loadVideoById(options: {
    videoId: string
    startSeconds?: number
    endSeconds?: number
  }): void
  cueVideoByUrl(mediaContentUrl: string, startSeconds?: number): void
  cueVideoByUrl(options: {
    mediaContentUrl: string
    startSeconds?: number
    endSeconds?: number
  }): void
  loadVideoByUrl(mediaContentUrl: string, startSeconds?: number): void
  loadVideoByUrl(options: {
    mediaContentUrl: string
    startSeconds?: number
    endSeconds?: number
  }): void

  // Queueing functions for playlists
  cuePlaylist(
    playlist: string | string[],
    index?: number,
    startSeconds?: number
  ): void
  cuePlaylist(options: {
    listType?: 'playlist' | 'user_uploads'
    list: string
    index?: number
    startSeconds?: number
  }): void
  loadPlaylist(
    playlist: string | string[],
    index?: number,
    startSeconds?: number
  ): void
  loadPlaylist(options: {
    listType?: 'playlist' | 'user_uploads'
    list: string
    index?: number
    startSeconds?: number
  }): void

  // Playing
  playVideo(): void
  pauseVideo(): void
  stopVideo(): void
  seekTo(seconds: number, allowSeekAhead: boolean): void
  nextVideo(): void
  previousVideo(): void
  playVideoAt(index: number): void

  // Volume
  mute(): void
  unMute(): void
  isMuted(): boolean
  setVolume(volume: number): void
  getVolume(): number

  // Size
  setSize(width: number, height: number): void

  // Playback rate
  getPlaybackRate(): number
  setPlaybackRate(suggestedRate: number): void
  getAvailablePlaybackRates(): number[]

  // Playlist
  setLoop(loopPlaylists: boolean): void
  setShuffle(shufflePlaylist: boolean): void
  getVideoLoadedFraction(): number

  // Playback status
  getPlayerState(): PlayerState
  getCurrentTime(): number
  getDuration(): number

  // Video information
  getVideoUrl(): string
  getVideoEmbedCode(): string
  getPlaylist(): string[]
  getPlaylistIndex(): number

  // DOM
  addEventListener<T extends keyof Events>(
    event: T,
    listener: (event: Events[T]) => void
  ): void
  removeEventListener<T extends keyof Events>(
    event: T,
    listener: (event: Events[T]) => void
  ): void
  getIframe(): HTMLIFrameElement
  destroy(): void

  // 360° Video
  getSphericalProperties(): SphericalProperties
  setSphericalProperties(properties: Partial<SphericalProperties>): void
}

export type PlayerOptions = {
  width?: number
  height?: number
  videoId?: string
  playerVars?: PlayerVars
  events?: Events
}

type PlayerVars = {
  autohide?: 0 | 1 | 2
  autoplay?: 0 | 1
  cc_load_policy?: 1
  color?: 'red' | 'white'
  controls?: 0 | 1 | 2
  disablekb?: 0 | 1
  enablejsapi?: 0 | 1
  end?: number
  fs?: 0 | 1
  hl?: string
  iv_load_policy?: 1 | 3
  list?: string
  listType?: 'playlist' | 'user_uploads'
  loop?: 0 | 1
  modestbranding?: 1
  origin?: string
  playlist?: string
  playsinline?: 0 | 1
  rel?: 0 | 1
  showinfo?: 0 | 1
  start?: number
}

export type PlayerState =
  | 'UNSTARTED'
  | 'ENDED'
  | 'PLAYING'
  | 'PAUSED'
  | 'BUFFERING'
  | 'CUED'

type Events = {
  onReady?: (event: OnReadyEvent) => void
  onStateChange?: (event: OnStateChangeEvent) => void
  onPlaybackQualityChange?: (event: OnPlaybackQualityChangeEvent) => void
  onPlaybackRateChange?: (event: OnPlaybackRateChangeEvent) => void
  onError?: (event: OnErrorEvent) => void
  onApiChange?: (event: OnApiChangeEvent) => void
  onAutoplayBlocked?: (event: OnAutoplayBlockedEvent) => void
}

interface BaseEvent {
  target: Player
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface OnReadyEvent extends BaseEvent {}
interface OnStateChangeEvent extends BaseEvent {
  data: PlayerState
}
interface OnPlaybackQualityChangeEvent extends BaseEvent {
  data: string
}
interface OnPlaybackRateChangeEvent extends BaseEvent {
  data: number
}
interface OnErrorEvent extends BaseEvent {
  data: number
}
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface OnApiChangeEvent extends BaseEvent {}
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface OnAutoplayBlockedEvent extends BaseEvent {}

interface SphericalProperties {
  yaw: number
  pitch: number
  roll: number
  fov: number
  enableOrientationSensor?: boolean
}

export type PlayerError =
  | 'INVALID_PARAM'
  | 'HTML5_ERROR'
  | 'NOT_FOUND'
  | 'NOT_ALLOWED'
  | 'NOT_ALLOWED_EMBEDDED'
