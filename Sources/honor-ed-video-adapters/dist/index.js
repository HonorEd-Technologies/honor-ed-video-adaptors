import { bindAdaptorToAPI } from "./types/adaptors/YTAdaptor";
import { YTEvent } from "./types/YTEvents";
const eventHandler = (event) => {
    switch (event) {
        case YTEvent.playerReady:
            console.log("Player Ready");
            break;
        case YTEvent.stateChanged:
            console.log("State Changed");
            break;
        case YTEvent.error:
            console.log("Error occurred");
            break;
    }
};
window.setupPlayer = (elementId, config) => {
    return bindAdaptorToAPI(elementId, eventHandler, config)
        .then((player) => {
        window.HonorPlayer = player;
    });
};
