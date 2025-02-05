import HonorPlayer from './HonorPlayer'
import type { PlayerOptions, Player } from './adaptors/YouTube/convertYTPlayer'

declare global {
  interface Window {
    YT: {
      Player: new (
        elementId: string | HTMLElement,
        options: PlayerOptions
      ) => Player
    }

    HonorPlayer: HonorPlayer

    onYouTubeIframeAPIReady?: () => void
    setupPlayer?: Function
  }
}
