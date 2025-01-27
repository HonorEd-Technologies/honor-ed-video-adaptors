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

  destroy = async (): Promise<void> => this.runIfInitialized(() => this.adaptor.destroy())
  getCurrentTime = async (): Promise<number> => this.runIfInitialized(() => this.adaptor.getCurrentTime())
  getDuration = async (): Promise<number> => this.runIfInitialized(() => this.adaptor.getDuration())
  getPlaybackRate = async (): Promise<number> => this.runIfInitialized(() => this.adaptor.getPlaybackRate())
  getVideoLoadedFraction = async (): Promise<number> => this.runIfInitialized(() => this.adaptor.getVideoLoadedFraction())
  getVolume = async (): Promise<number> => this.runIfInitialized(() => this.adaptor.getVolume())
  loadVideoById = async (videoId: string, startTime?: number, endTime?: number): Promise<void> => this.runIfInitialized(() => this.adaptor.loadVideoById(videoId, startTime, endTime))
  seekTo = async (seconds: number): Promise<void> => this.runIfInitialized(() => this.adaptor.seekTo(seconds))
  setPlaybackRate = async (rate: number): Promise<void> => this.runIfInitialized(() => this.adaptor.setPlaybackRate(rate))
  setSize = (width: number, height: number) => this.runIfInitialized(() => this.adaptor.setSize(width, height))
  setVolume = async (volume: number): Promise<void> => this.runIfInitialized(() => this.adaptor.setVolume(volume))
  playVideo = async (): Promise<void> => this.runIfInitialized(() => this.adaptor.playVideo())
  pauseVideo = async (): Promise<void> => this.runIfInitialized(() => this.adaptor.pauseVideo())
  onReady(callback: () => void) { this.emitter.onReady(callback) }
  onError(callback: (error: HonorVideoError) => void) { this.emitter.onError(callback) }
  onCurrentTimeChanged(callback: (time: number) => void) { this.emitter.onCurrentTimeChange(callback) }
  onStateChanged(callback: (state: HonorVideoPlayerState) => void) { this.emitter.onStateChange(callback) }

  async runIfInitialized<T, U>(fn: () => Promise<U>): Promise<U> { 
    if (!this.initialized) { 
      this.emitter.triggerEvent(HonorVideoEvent.error, { data: 5 })
    }
    let promise = fn()
    return await promise
  }
}