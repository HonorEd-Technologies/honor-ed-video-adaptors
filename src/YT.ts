import { HonorPlayer } from "./types/adaptors/HonorPlayer"

declare global {
  interface Window { 
    YT?: { 
      Player: Function
    }

    HonorPlayer?: HonorPlayer
    
    onYouTubeIframeAPIReady?: () => void
    setupPlayer?: Function
  }
}