import HonorPlayer from "./HonorPlayer"

declare global {
  interface Window { 
    YT?: { 
      Player: Function
    }

    HonorPlayer: HonorPlayer
    
    onYouTubeIframeAPIReady?: () => void
    setupPlayer?: Function
  }
}