import { bindAdaptorToAPI, YTConfig } from "./types/adaptors/YTAdaptor";
import { YTEvent } from "./types/YTEvents";

const eventHandler = (event: YTEvent) => { 
  switch (event) { 
    case YTEvent.playerReady:
      console.log("Player Ready")
      break
    case YTEvent.stateChanged:
      console.log("State Changed")
      break
    case YTEvent.error:
      console.log("Error occurred")
      break
  }
}

window.setupPlayer = (elementId: string, config: YTConfig) => { 
  return bindAdaptorToAPI(elementId, eventHandler, config)
    .then((player) => { 
      window.HonorPlayer = player
    })
}
