import { YTEventEmitters } from "./types/YTEvents";
import { bindAdaptorToAPI, YTConfig } from "./types/adaptors/YTAdaptor";

window.setupPlayer = (elementId: string, config: YTConfig) => { 
  let emitter = new YTEventEmitters()

  bindAdaptorToAPI(elementId, config, emitter)
    .then((player) => { 
      window.HonorPlayer = player
    })
  
  window.eventListeners = { 
    onReady: emitter.onReady,
    onStateChanged: emitter.onStateChange,
    onError: emitter.onError,
    onCurrentTimeChanged: emitter.onCurrentTimeChange
  }
}
