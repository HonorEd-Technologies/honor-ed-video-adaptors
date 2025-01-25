import load from 'load-script'
import { HonorVideoEventHandler } from '../types/Shared/HonorEventEmitter'
import { IFrameYTPlayer } from '../types/YouTube/IFrameYTPlayer'
import { HonorVideoEvent } from '../types/Shared/HonorVideoEvent'
import { HonorVideoErrorType } from '../types/Shared/HonorVideoError'

export default (handleEvent: HonorVideoEventHandler): Promise<IFrameYTPlayer> => {
  const iFrameReadyPromise = new Promise<IFrameYTPlayer>((resolve) => { 
    if (window.YT && window.YT.Player && window.YT.Player instanceof Function) { 
      // youtube iframe already loaded, resolve
      resolve(window.YT)
      return
    }

    let protocol = window.location.protocol === 'http:' ? 'http:' : 'https:'
    console.log(protocol)
    load(protocol + '//www.youtube.com/iframe_api', (err) => { 
      if (err) {
        console.log("ERROR")
        handleEvent(HonorVideoEvent.error, { data: { type: HonorVideoErrorType.apiLoadError, message: "Failed to load Youtube iFrame API" } })
      }
    })

    let existingValue = window.onYouTubeIframeAPIReady

    window.onYouTubeIframeAPIReady = () => {
      if (existingValue) { 
        existingValue()
      }
      if (window.YT !== undefined && window.YT.Player && window.YT.Player instanceof Function) { 
        resolve(window.YT)
      }
    }
  })

  return iFrameReadyPromise
}