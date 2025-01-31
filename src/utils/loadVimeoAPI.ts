import load from 'load-script'
import { HonorVideoEvent } from '../types/Shared/HonorVideoEvent'
import { HonorVideoErrorType } from '../types/Shared/HonorVideoError'
import { HonorVideoEventEmitters } from './Shared/HonorEventEmitter'

export default (emitter: HonorVideoEventEmitters): Promise<void> => {
  const iFrameReadyPromise = new Promise<void>((resolve, reject) => { 
    let protocol = 'http:'
    console.log(protocol)
    load(protocol + '//player.vimeo.com/api/player.js', (err, script) => { 
      if (err) {
        console.log("ERROR")
        emitter.triggerEvent(HonorVideoEvent.error, { data: { type: HonorVideoErrorType.apiLoadError, message: "Failed to load Vimeo iFrame API" } })
        reject("Failed to load Vimeo iFrame API")
      }
      console.log("resolving")
      resolve()
    })
  })

  return iFrameReadyPromise
}