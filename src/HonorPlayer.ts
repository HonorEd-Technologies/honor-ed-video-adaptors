import { HonorVideoEventEmitters } from './utils/Shared/HonorEventEmitter'
import { HonorVideoConfiguration } from './types/Shared/HonorVideoConfiguration'
import { HonorVideoError } from './types/Shared/HonorVideoError'
import { HonorVideoEvent } from './types/Shared/HonorVideoEvent'
import { HonorVideoPlayerState } from './types/Shared/HonorVideoPlayerState'
import { HonorVideoAdaptor } from './adaptors/HonorVideoAdaptor'

type Constructor = new (...args: any[]) => {}
function RequiresInitializationForAllMethods(excludeMethods: string[] = []) {
  return function <T extends Constructor>(Base: T) {
    return class extends Base {
      constructor(...args: any[]) {
        super(...args)

        // Get all method names of the class prototype
        const methodNames = Object.getOwnPropertyNames(Base.prototype).filter(
          (method) =>
            method !== 'constructor' && // Exclude constructor
            !excludeMethods.includes(method) // Exclude specified methods
        )

        for (const methodName of methodNames) {
          const originalMethod = (this as any)[methodName]

          if (typeof originalMethod === 'function') {
            // Wrap the method with initialization check
            ;(this as any)[methodName] = function (...args: any[]) {
              if (!(this as any).initialized) {
                this.emitter.triggerEvent(HonorVideoEvent.error, { data: 5 })
                throw new Error(
                  `Method ${methodName} called before adaptor was initialized`
                )
              }

              return originalMethod.apply(this, args)
            }
          }
        }
      }
    }
  }
}

@RequiresInitializationForAllMethods([
  'setAdaptor',
  'onReady',
  'onError',
  'onCurrentTimeChanged',
  'onStateChanged',
  'onPlaybackRateChanged',
  'onVolumeChanged',
  'initializeAdaptor',
])
export class HonorPlayer {
  private initialized = false
  private adaptor: HonorVideoAdaptor
  emitter = new HonorVideoEventEmitters()

  constructor(
    elementId: string,
    configuration: HonorVideoConfiguration,
    adaptor: HonorVideoAdaptor
  ) {
    this.adaptor = adaptor
    this.initializeAdaptor(elementId, configuration)
  }

  destroy = () => this.adaptor.destroy()
  getCurrentTime = (): number => this.adaptor.getCurrentTime()
  getDuration = (): number => this.adaptor.getDuration()
  getPlaybackRate = (): number => this.adaptor.getPlaybackRate()
  getVideoLoadedFraction = (): number => this.adaptor.getVideoLoadedFraction()
  getVolume = (): number => this.adaptor.getVolume()
  loadVideoById = (videoId: string, startTime?: number, endTime?: number) =>
    this.adaptor.loadVideoById(videoId, startTime, endTime)
  seekTo = (seconds: number) => this.adaptor.seekTo(seconds)
  setPlaybackRate = (rate: number) => this.adaptor.setPlaybackRate(rate)
  setSize = (width: number, height: number): Object =>
    this.adaptor.setSize(width, height)
  setVolume = (volume: number) => this.adaptor.setVolume(volume)
  stopVideo = () => this.adaptor.stopVideo()
  playVideo = () => this.adaptor.playVideo()
  pauseVideo = () => this.adaptor.pauseVideo()
  onReady(callback: () => void) {
    return this.emitter.onReady(callback)
  }
  onError(callback: (error: HonorVideoError) => void) {
    return this.emitter.onError(callback)
  }
  onCurrentTimeChanged(callback: (time: number) => void) {
    return this.emitter.onCurrentTimeChange(callback)
  }
  onStateChanged(callback: (state: HonorVideoPlayerState) => void) {
    return this.emitter.onStateChange(callback)
  }
  onPlaybackRateChanged(callback: (rate: number) => void) { 
    return this.emitter.onPlaybackRateChange(callback)
  }
  onVolumeChanged(callback: (volume: number) => void) { 
    return this.emitter.onVolumeChange(callback)
  }


  async initializeAdaptor(elementId: string, config: HonorVideoConfiguration) {
    await this.adaptor.initialize(elementId, config, this)
    this.initialized = true
  }
}
