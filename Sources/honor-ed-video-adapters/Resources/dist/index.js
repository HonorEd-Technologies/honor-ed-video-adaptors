"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HonorPlayer_1 = require("./HonorPlayer");
window.setupPlayer = (elementId, config) => {
    const player = new HonorPlayer_1.HonorPlayer();
    window.HonorPlayer = player;
    player.initializeAdaptor(elementId, config);
};
//# sourceMappingURL=index.js.map