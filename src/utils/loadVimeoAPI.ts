import load from 'load-script'
import { HonorVideoEvent } from '../types/Shared/HonorVideoEvent'
import { HonorVideoErrorType } from '../types/Shared/HonorVideoError'
import { HonorVideoEventEmitters } from './Shared/HonorEventEmitter'

export default (): Promise<void> => {
  const iFrameReadyPromise = new Promise<void>((resolve, reject) => { 
    const tag = document.createElement('script');

    tag.src = "https://player.vimeo.com/api/player.js";
    const firstScriptTag = document.getElementsByTagName('script')[0];

    tag.onload = () => resolve()

    if (firstScriptTag.parentNode) {
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }
  })

  return iFrameReadyPromise
}