import { HonorVideoEventEmitters } from "./types/Shared/HonorEventEmitter"
import { HonorVideoError } from "./types/Shared/HonorVideoError"
import { HonorVideoEvent } from "./types/Shared/HonorVideoEvent"
import { HonorVideoPlayerState } from "./types/Shared/HonorVideoPlayerState"
import { HonorVideoAdaptor } from "./types/adaptors/HonorVideoAdaptor"

export class HonorPlayer {
  private initialized = false
  private adaptor!: HonorVideoAdaptor
  emitter = new HonorVideoEventEmitters()

  constructor() { }

  setAdaptor(adaptor: HonorVideoAdaptor) { 
    this.initialized = true
    this.adaptor = adaptor
  }

  destroy = () => this.runIfInitialized(() => this.adaptor.destroy())
  getCurrentTime = (): number => this.runIfInitialized(() => this.adaptor.getCurrentTime())
  getDuration = (): number => this.runIfInitialized(() => this.adaptor.getDuration())
  getPlaybackRate = (): number => this.runIfInitialized(() => this.adaptor.getPlaybackRate())
  getVideoLoadedFraction = (): number => this.runIfInitialized(() => this.adaptor.getVideoLoadedFraction())
  getVolume = (): number => this.runIfInitialized(() => this.adaptor.getVolume())
  loadVideoById = (videoId: string, startTime?: number, endTime?: number) => this.runIfInitialized(() => this.adaptor.loadVideoById(videoId, startTime, endTime))
  seekTo = (seconds: number) => this.runIfInitialized(() => this.adaptor.seekTo(seconds))
  setPlaybackRate = (rate: number) => this.runIfInitialized(() => this.adaptor.setPlaybackRate(rate))
  setSize = (width: number, height: number): Object => this.runIfInitialized(() => this.adaptor.setSize(width, height))
  setVolume = (volume: number) => this.runIfInitialized(() => this.adaptor.setVolume(volume))
  stopVideo = () => this.runIfInitialized(() => this.adaptor.stopVideo())
  playVideo = () => this.runIfInitialized(() => this.adaptor.playVideo())
  pauseVideo = () => this.runIfInitialized(() => this.adaptor.pauseVideo())
  onReady(callback: () => void) { this.emitter.onReady(callback) }
  onError(callback: (error: HonorVideoError) => void) { this.emitter.onError(callback) }
  onCurrentTimeChanged(callback: (time: number) => void) { this.emitter.onCurrentTimeChange(callback) }
  onStateChanged(callback: (state: HonorVideoPlayerState) => void) { this.emitter.onStateChange(callback) }

  runIfInitialized<T, U>(fn: () => U): U { 
    if (!this.initialized) { 
      this.emitter.triggerEvent(HonorVideoEvent.error, { data: 5 })
    }
    return fn()
  }
}