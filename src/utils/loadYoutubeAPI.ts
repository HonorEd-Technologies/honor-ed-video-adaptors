import { type HonorVideoEventEmitters } from './Shared/HonorEventEmitter'
import { HonorVideoErrorType } from '../types/Shared/HonorVideoError'
import { HonorVideoEvent } from '../types/Shared/HonorVideoEvent'
import { YOUTUBE_API, YOUTUBE_EDUCATION_API } from '../adaptors'

export default (emitter: HonorVideoEventEmitters, isEducationApi: boolean): Promise<void> => {
  const triggerEvent = emitter.triggerEvent.bind(emitter)
  const iFrameReadyPromise = new Promise<void>((resolve, reject) => {
    if (window.YT && window.YT.Player instanceof Function) {
      // youtube iframe already loaded, resolve
      resolve()
      return
    }

    const tag = document.createElement('script')
    const tagSource = isEducationApi ? YOUTUBE_EDUCATION_API : YOUTUBE_API

    tag.src = tagSource
    const firstScriptTag = document.getElementsByTagName('script').length > 0 ? document.getElementsByTagName('script')[0] : undefined

    if (firstScriptTag && firstScriptTag.parentNode) {
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
    } else { 
      document.head.appendChild(tag)
    }

    window.onYouTubeIframeAPIReady = (): void => {
      if (
        window.YT !== undefined &&
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

        reject(new Error(errorMessage))
      }
    }
  })

  return iFrameReadyPromise
}
