import { HonorPlayer } from "./HonorPlayer";
import { bindPlayerToVimeoAPI } from "./types/adaptors/VimeoAdaptor";
import { bindPlayerToYoutubeAPI } from "./types/adaptors/YTAdaptor";
import { HonorVideoConfiguration } from "./types/Shared/HonorVideoConfiguration";
import { VideoServiceProvider } from "./types/Shared/VideoServiceProvider";

window.setupPlayer = (elementId: string, config: HonorVideoConfiguration) => { 
  let player = new HonorPlayer()
  window.HonorPlayer = player

  switch (config.provider) { 
    case VideoServiceProvider.youtube:
      bindPlayerToYoutubeAPI(elementId, config, player)
      break
    case VideoServiceProvider.vimeo:
      bindPlayerToVimeoAPI(elementId, config, player)
      break
  }
}
