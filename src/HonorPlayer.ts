import { HonorVideoEventEmitters } from "./utils/Shared/HonorEventEmitter"
import { HonorVideoConfiguration } from "./types/Shared/HonorVideoConfiguration"
import { HonorVideoError } from "./types/Shared/HonorVideoError"
import { HonorVideoEvent } from "./types/Shared/HonorVideoEvent"
import { HonorVideoPlayerState } from "./types/Shared/HonorVideoPlayerState"
import { HonorVideoAdaptor } from "./adaptors/HonorVideoAdaptor"
import loadYoutubeAPI from "./utils/loadYoutubeAPI"
import { initializeYoutubeAdaptor } from "./adaptors/YouTube/YoutubeAdaptor"
import { VideoServiceProvider } from "./types/Shared/VideoServiceProvider"
import loadVimeoAPI from "./utils/loadVimeoAPI"
import { initializeVimeoAdaptor } from "./adaptors/Vimeo/VimeoAdaptor"

type Constructor = new (...args: any[]) => {};
function RequiresInitializationForAllMethods(excludeMethods: string[] = []) {
  return function <T extends Constructor>(Base: T) {
    return class extends Base {
      constructor(...args: any[]) { 
        super(...args)

        // Get all method names of the class prototype
        const methodNames = Object.getOwnPropertyNames(Base.prototype)
          .filter(
            (method) =>
              method !== 'constructor' && // Exclude constructor
              !excludeMethods.includes(method) // Exclude specified methods
          )
        
        for (const methodName of methodNames) { 
          const originalMethod = (this as any)[methodName]

          if (typeof originalMethod === 'function') { 
            // Wrap the method with initialization check
            (this as any)[methodName] = function (...args: any[]) { 
              if (!(this as any).initialized) { 
                this.emitter.triggerEvent(HonorVideoEvent.error, { data: 5 })
                throw new Error(`Method ${methodName} called before adaptor was initialized`);
              }

              return originalMethod.apply(this, args)
            }
          }
        }
      }
    }
  }
}

@RequiresInitializationForAllMethods(
  [
    'setAdaptor',
    'onReady',
    'onError',
    'onCurrentTimeChanged',
    'onStateChanged',
    'initializeAdaptor'
  ]
)
export default class HonorPlayer {
  private initialized = false
  private adaptor!: HonorVideoAdaptor
  emitter = new HonorVideoEventEmitters()

  constructor(elementId: string, configuration: HonorVideoConfiguration) { 
    this.initializeAdaptor(elementId, configuration)
  }

  setAdaptor(adaptor: HonorVideoAdaptor) { 
    this.initialized = true
    this.adaptor = adaptor
  }

  destroy = async () => await this.adaptor.destroy()
  getCurrentTime = async () => await this.adaptor.getCurrentTime()
  getDuration =  async () => await this.adaptor.getDuration()
  getPlaybackRate = async () => await this.adaptor.getPlaybackRate()
  getVideoLoadedFraction = async () => await this.adaptor.getVideoLoadedFraction()
  getVolume = async () => await this.adaptor.getVolume()
  seekTo = async (seconds: number) => await this.adaptor.seekTo(seconds)
  setPlaybackRate = async (rate: number) => await this.adaptor.setPlaybackRate(rate)
  setSize = (width: number, height: number) => this.adaptor.setSize(width, height)
  setVolume = async (volume: number) => await this.adaptor.setVolume(volume)
  playVideo = async () => await this.adaptor.playVideo()
  pauseVideo = async () => await this.adaptor.pauseVideo()
  onReady(callback: () => void) { this.emitter.onReady(callback) }
  onError(callback: (error: HonorVideoError) => void) { this.emitter.onError(callback) }
  onCurrentTimeChanged(callback: (time: number) => void) { this.emitter.onCurrentTimeChange(callback) }
  onStateChanged(callback: (state: HonorVideoPlayerState) => void) { this.emitter.onStateChange(callback) }

  initializeAdaptor = (elementId: string, config: HonorVideoConfiguration) => {
    switch (config.provider) {
      case VideoServiceProvider.youtube:
        // load the Youtube Iframe API 
        loadYoutubeAPI(this.emitter)
          .then(() => {
            const adaptor = initializeYoutubeAdaptor(elementId, config, this) // Once iframe is loaded, instantiate YT.Player and return the adaptor
            this.setAdaptor(adaptor)
          })
      case VideoServiceProvider.vimeo:
        // load the Vimeo Iframe API
        loadVimeoAPI()
          .then(() => { 
            const adaptor = initializeVimeoAdaptor(elementId, config, this) // Once iframe is loaded, instantiate YT.Player and return the adaptor
            this.setAdaptor(adaptor)
          })
    }
  }
}