import { HonorPlayer } from "./HonorPlayer";
import { bindPlayerToYoutubeAPI, YTConfig } from "./types/adaptors/YTAdaptor";

window.setupPlayer = (elementId: string, config: YTConfig) => { 
  let player = new HonorPlayer()
  window.HonorPlayer = player

  bindPlayerToYoutubeAPI(elementId, config, player)
}
