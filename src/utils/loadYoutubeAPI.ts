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
  console.log('[HonorPlayer] Starting YouTube API load from:', url)

  const iFrameReadyPromise = new Promise<void>((resolve, reject) => {
    if (window.YT && window.YT.Player instanceof Function) {
      // youtube iframe already loaded, resolve
      console.log('[HonorPlayer] YouTube API already loaded, skipping script injection')
      resolve()
      return
    }

    console.log('[HonorPlayer] Creating script tag for YouTube API')
    const tag = document.createElement('script')

    tag.src = url

    // Add load and error handlers to the script tag
    tag.onload = () => {
      console.log('[HonorPlayer] YouTube API script loaded successfully')
    }

    tag.onerror = (error) => {
      console.error('[HonorPlayer] Failed to load YouTube API script:', error)
      console.error('[HonorPlayer] Script URL:', url)
      const errorMessage = `Failed to load YouTube API script from ${url}`
      triggerEvent(HonorVideoEvent.error, {
        data: {
          code: HonorVideoErrorType.apiLoadError,
          message: errorMessage,
        },
      })
      reject(new Error(errorMessage))
    }

    const scripts = document.getElementsByTagName('script')
    const firstScriptTag = document.getElementsByTagName('script')[0]

    if (scripts.length !== 0 && firstScriptTag.parentNode) {
      console.log('[HonorPlayer] Inserting YouTube API script before first script tag')
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
    } else {
      console.log('[HonorPlayer] Appending YouTube API script to document head')
      document.head.appendChild(tag)
    }

    window.onYouTubeIframeAPIReady = (): void => {
      console.log('[HonorPlayer] onYouTubeIframeAPIReady callback fired')
      console.log('[HonorPlayer] window.YT:', window.YT)
      console.log('[HonorPlayer] window.YT.Player:', window.YT?.Player)

      if (
        window.YT !== undefined &&
        window.YT.Player instanceof Function
      ) {
        console.log('[HonorPlayer] YouTube API ready and validated')
        resolve()
      } else {
        const errorMessage =
          'There was a problem loading the YouTube Iframe API'
        console.error('[HonorPlayer]', errorMessage)
        console.error('[HonorPlayer] window.YT state:', window.YT)
        triggerEvent(HonorVideoEvent.error, {
          data: {
            code: HonorVideoErrorType.apiLoadError,
            message: errorMessage,
          },
        })

        reject(new Error(errorMessage))
      }
    }

    console.log('[HonorPlayer] Waiting for onYouTubeIframeAPIReady callback...')
  })

  return iFrameReadyPromise
}
