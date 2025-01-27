import { HonorPlayer } from "./HonorPlayer";
import { bindPlayerToYoutubeAPI } from "./types/adaptors/YTAdaptor";
import { HonorVideoConfiguration } from "./types/Shared/HonorVideoConfiguration";

window.setupPlayer = (elementId: string, config: HonorVideoConfiguration) => { 
  let player = new HonorPlayer()
  window.HonorPlayer = player

  bindPlayerToYoutubeAPI(elementId, config, player)
}
