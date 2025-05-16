import { type HonorVideoEventEmitters } from './Shared/HonorEventEmitter'
import { HonorVideoErrorType } from '../types/Shared/HonorVideoError'
import { HonorVideoEvent } from '../types/Shared/HonorVideoEvent'

export const loadYoutubeAPI = (emitter: HonorVideoEventEmitters): Promise<void> => {
  return loadYoutubeScript(emitter, 'https://www.youtube.com/iframe_api')
}

export const loadEducationYoutubeAPI = (emitter: HonorVideoEventEmitters): Promise<void> => {
  return loadYoutubeScript(emitter, 'https://www.youtubeeducation.com/iframe_api')
}

const loadYoutubeScript = (emitter: HonorVideoEventEmitters, url: string): Promise<void> => { 
  const triggerEvent = emitter.triggerEvent.bind(emitter)
  const iFrameReadyPromise = new Promise<void>((resolve, reject) => {
    if (window.YT && window.YT.Player instanceof Function) {
      // youtube iframe already loaded, resolve
      resolve()
      return
    }

    const tag = document.createElement('script')

    tag.src = url
    const scripts = document.getElementsByTagName('script')
    const firstScriptTag = document.getElementsByTagName('script')[0]

    if (scripts.length !== 0 && firstScriptTag.parentNode) {
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
