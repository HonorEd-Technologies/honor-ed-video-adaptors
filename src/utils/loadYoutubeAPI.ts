import { HonorVideoEventEmitters } from './Shared/HonorEventEmitter'
import { HonorVideoErrorType } from '../types/Shared/HonorVideoError'
import { HonorVideoEvent } from '../types/Shared/HonorVideoEvent'

export default (emitter: HonorVideoEventEmitters): Promise<void> => {
  const triggerEvent = emitter.triggerEvent.bind(emitter)
  const iFrameReadyPromise = new Promise<void>((resolve, reject) => {
    if (window.YT && window.YT.Player && window.YT.Player instanceof Function) {
      // youtube iframe already loaded, resolve
      resolve()
      return
    }

    const tag = document.createElement('script')

    tag.src = 'https://www.youtube.com/iframe_api'
    const firstScriptTag = document.getElementsByTagName('script')[0]

    if (firstScriptTag.parentNode) {
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
    }

    window.onYouTubeIframeAPIReady = () => {
      if (
        window.YT !== undefined &&
        window.YT.Player &&
        window.YT.Player instanceof Function
      ) {
        resolve()
      } else {
        const errorMessage =
          'There was a problem loading the YouTube Iframe API'
          triggerEvent(HonorVideoEvent.error, {
          data: {
            code: HonorVideoErrorType.apiLoadError,
            message: errorMessage,
          },
        })

        reject(errorMessage)
      }
    }
  })

  return iFrameReadyPromise
}
