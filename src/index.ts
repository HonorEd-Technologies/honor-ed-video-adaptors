import { HonorPlayer } from "./HonorPlayer";
import { HonorVideoConfiguration } from "./types/Shared/HonorVideoConfiguration";

window.setupPlayer = (elementId: string, config: HonorVideoConfiguration) => { 
  const player = new HonorPlayer()
  window.HonorPlayer = player
  player.initializeAdaptor(elementId, config)
}
