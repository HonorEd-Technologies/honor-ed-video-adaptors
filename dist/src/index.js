import { bindAdaptorToAPI } from "./types/adaptors/YTAdaptor";
import { YTEvent } from "./types/YTEvents";
const eventHandler = (event) => {
    switch (event) {
        case YTEvent.playerReady:
            console.log("Player Ready");
        case YTEvent.stateChanged:
            console.log("State Changed");
        case YTEvent.error:
            console.log("Error occurred");
    }
};
export const setupPlayer = (elementId, config) => {
    bindAdaptorToAPI(elementId, eventHandler, config);
};
