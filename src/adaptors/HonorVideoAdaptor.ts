import HonorPlayer from "../HonorPlayer"
import { HonorVideoConfiguration } from "../types/Shared/HonorVideoConfiguration"

export type HonorVideoAdaptor = { 
  initialize: (videoId: string, configuration: HonorVideoConfiguration, player: HonorPlayer) => Promise<void>
  destroy: () => void
  getCurrentTime: () => number
  getDuration: () => number
  getPlaybackRate: () => number
  getVideoLoadedFraction: () => number
  getVolume: () => number
  loadVideoById: (videoId: string, startTime?: number, endTime?: number) => void
  seekTo: (seconds: number) => void
  setPlaybackRate: (rate: number) => void
  setSize: (width: number, height: number) => Object
  setVolume: (volume: number) => void
  stopVideo: () => void
  playVideo: () => void
  pauseVideo: () => void
}