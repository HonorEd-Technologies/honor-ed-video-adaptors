export type HonorVideoAdaptor = { 
  destroy: () => Promise<void>
  getCurrentTime: () => Promise<number>
  getDuration: () => Promise<number>
  getPlaybackRate: () => Promise<number>
  getVideoLoadedFraction: () => Promise<number>
  getVolume: () => Promise<number>
  loadVideoById: (videoId: string, startTime?: number, endTime?: number) => Promise<void>
  seekTo: (seconds: number) => Promise<void>
  setPlaybackRate: (rate: number) => Promise<void>
  setSize: (width: number, height: number) => Promise<void>
  setVolume: (volume: number) => Promise<void>
  playVideo: () => Promise<void>
  pauseVideo: () => Promise<void>
}