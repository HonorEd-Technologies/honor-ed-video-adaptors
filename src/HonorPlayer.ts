import { HonorVideoEventEmitters } from './utils/Shared/HonorEventEmitter'
import { type HonorVideoConfiguration } from './types/Shared/HonorVideoConfiguration'
import { type HonorVideoError } from './types/Shared/HonorVideoError'
import { HonorVideoEvent } from './types/Shared/HonorVideoEvent'
import { HonorVideoPlayerState } from './types/Shared/HonorVideoPlayerState'
import { type HonorVideoAdaptor } from './adaptors/HonorVideoAdaptor'

/* eslint-disable 
  @typescript-eslint/no-empty-object-type, 
  @typescript-eslint/no-explicit-any,  
  @typescript-eslint/no-unsafe-argument,
  @typescript-eslint/explicit-function-return-type,
  @typescript-eslint/no-unsafe-member-access,
  @typescript-eslint/no-unsafe-call,
  @typescript-eslint/no-unsafe-return
*/
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
          // eslint-disable-next-line 
          const originalMethod = (this as any)[methodName]

          if (typeof originalMethod === 'function') {
            // Wrap the method with initialization check
            ;(this as any)[methodName] = function (...args: any[]) {
              if (!(this).initialized) {
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
/* eslint-enable
  @typescript-eslint/no-empty-object-type, 
  @typescript-eslint/no-explicit-any,  
  @typescript-eslint/no-unsafe-argument,
  @typescript-eslint/explicit-function-return-type,
  @typescript-eslint/no-unsafe-member-access,
  @typescript-eslint/no-unsafe-call,
  @typescript-eslint/no-unsafe-return
*/

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
  emitter: HonorVideoEventEmitters

  constructor(
    elementId: string,
    configuration: HonorVideoConfiguration,
    adaptor: HonorVideoAdaptor
  ) {
    this.adaptor = adaptor
    this.emitter = new HonorVideoEventEmitters()
    void this.initializeAdaptor(elementId, configuration)
  }

  destroy = (): void => { this.adaptor.destroy(); }
  getCurrentTime = (): number => this.adaptor.getCurrentTime()
  getDuration = (): number => this.adaptor.getDuration()
  getPlaybackRate = (): number => this.adaptor.getPlaybackRate()
  getVideoLoadedFraction = (): number => this.adaptor.getVideoLoadedFraction()
  getVolume = (): number => this.adaptor.getVolume()
  loadVideoById = (videoId: string, startTime?: number, endTime?: number): void =>
    { this.adaptor.loadVideoById(videoId, startTime, endTime); }
  seekTo = (seconds: number): void => { this.adaptor.seekTo(seconds); }
  setPlaybackRate = (rate: number): void => { this.adaptor.setPlaybackRate(rate); }
  setSize = (width: number, height: number): void =>
    { this.adaptor.setSize(width, height); }
  setVolume = (volume: number): void => { this.adaptor.setVolume(volume); }
  stopVideo = (): void => { this.adaptor.stopVideo(); }
  playVideo = (): void => { this.adaptor.playVideo(); }
  pauseVideo = (): void => { this.adaptor.pauseVideo(); }
  onReady = (callback: () => void): () => void => {
    try {
      const state = this.adaptor.getPlayerState()
      if (state !== HonorVideoPlayerState.unstarted) {
        callback()
        return () => { }
      } else {
        return this.emitter.onReady(callback)
      }
    } catch {
      return this.emitter.onReady(callback)
    }
  }
  onError = (callback: (error: HonorVideoError) => void): () => void => {
    return this.emitter.onError(callback)
  }
  onCurrentTimeChanged = (callback: (time: number) => void): () => void => {
    return this.emitter.onCurrentTimeChange(callback)
  }
  onStateChanged = (callback: (state: HonorVideoPlayerState) => void): () => void => {
    return this.emitter.onStateChange(callback)
  }
  onPlaybackRateChanged = (callback: (rate: number) => void): () => void => {
    return this.emitter.onPlaybackRateChange(callback)
  }
  onVolumeChanged = (callback: (volume: number) => void): () => void => {
    return this.emitter.onVolumeChange(callback)
  }

  initializeAdaptor = async (
    elementId: string,
    config: HonorVideoConfiguration
  ): Promise<void> => {
    await this.adaptor.initialize(elementId, config, this)
    this.initialized = true
  }
}
