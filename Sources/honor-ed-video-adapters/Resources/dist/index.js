"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HonorPlayer_1 = require("./HonorPlayer");
const VimeoAdaptor_1 = require("./types/adaptors/VimeoAdaptor");
const YTAdaptor_1 = require("./types/adaptors/YTAdaptor");
const VideoServiceProvider_1 = require("./types/Shared/VideoServiceProvider");
window.setupPlayer = (elementId, config) => {
    let player = new HonorPlayer_1.HonorPlayer();
    window.HonorPlayer = player;
    switch (config.provider) {
        case VideoServiceProvider_1.VideoServiceProvider.youtube:
            (0, YTAdaptor_1.bindPlayerToYoutubeAPI)(elementId, config, player);
            break;
        case VideoServiceProvider_1.VideoServiceProvider.vimeo:
            (0, VimeoAdaptor_1.bindPlayerToVimeoAPI)(elementId, config, player);
            break;
    }
};
//# sourceMappingURL=index.js.map