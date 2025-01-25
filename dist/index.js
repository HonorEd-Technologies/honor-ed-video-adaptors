"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HonorPlayer_1 = require("./HonorPlayer");
const YTAdaptor_1 = require("./types/adaptors/YTAdaptor");
window.setupPlayer = (elementId, config) => {
    let player = new HonorPlayer_1.HonorPlayer();
    window.HonorPlayer = player;
    (0, YTAdaptor_1.bindPlayerToYoutubeAPI)(elementId, config, player);
};
//# sourceMappingURL=index.js.map