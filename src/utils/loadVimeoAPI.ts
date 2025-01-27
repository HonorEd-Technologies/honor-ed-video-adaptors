import load from 'load-script'
import { HonorVideoEventHandler } from '../types/Shared/HonorEventEmitter'
import { HonorVideoEvent } from '../types/Shared/HonorVideoEvent'
import { HonorVideoErrorType } from '../types/Shared/HonorVideoError'

export default (handleEvent: HonorVideoEventHandler): Promise<void> => {
  const iFrameReadyPromise = new Promise<void>((resolve, reject) => { 
    let protocol = window.location.protocol === 'http:' ? 'http:' : 'https:'
    console.log(protocol)
    load(protocol + '//player.vimeo.com/api/player.js', (err, script) => { 
      if (err) {
        console.log("ERROR")
        handleEvent(HonorVideoEvent.error, { data: { type: HonorVideoErrorType.apiLoadError, message: "Failed to load Vimeo iFrame API" } })
        reject("Failed to load Vimeo iFrame API")
      }
      console.log("resolving")
      resolve()
    })
  })

  return iFrameReadyPromise
}