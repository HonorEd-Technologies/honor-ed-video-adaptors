"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => {
    const iFrameReadyPromise = new Promise((resolve, reject) => {
        const tag = document.createElement('script');
        tag.src = "https://player.vimeo.com/api/player.js";
        const firstScriptTag = document.getElementsByTagName('script')[0];
        tag.onload = () => resolve();
        if (firstScriptTag.parentNode) {
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        }
    });
    return iFrameReadyPromise;
};
//# sourceMappingURL=loadVimeoAPI.js.map