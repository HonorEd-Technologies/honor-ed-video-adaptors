import load from 'load-script'
import { YTEventType, YTEvent, YTEventHandler, YTError } from './types/YTEvents'
import { IFrameYTPlayer } from './types/types'

export default (handleEvent: YTEventHandler): Promise<IFrameYTPlayer> => {
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
        handleEvent(YTEventType.error, { data: YTError.apiLoadError })
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