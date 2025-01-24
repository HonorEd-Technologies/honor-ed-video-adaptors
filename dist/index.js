"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const YTEvents_1 = require("./types/YTEvents");
const YTAdaptor_1 = require("./types/adaptors/YTAdaptor");
window.setupPlayer = (elementId, config) => {
    let emitter = new YTEvents_1.YTEventEmitters();
    (0, YTAdaptor_1.bindAdaptorToAPI)(elementId, config, emitter)
        .then((player) => {
        window.HonorPlayer = player;
    });
    window.eventListeners = {
        onReady: emitter.onReady,
        onStateChanged: emitter.onStateChange,
        onError: emitter.onError,
        onCurrentTimeChanged: emitter.onCurrentTimeChange
    };
};
//# sourceMappingURL=index.js.map