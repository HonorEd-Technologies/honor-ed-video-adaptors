"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HonorVideoError_1 = require("../types/Shared/HonorVideoError");
const HonorVideoEvent_1 = require("../types/Shared/HonorVideoEvent");
exports.default = (emitter) => {
    const iFrameReadyPromise = new Promise((resolve, reject) => {
        if (window.YT && window.YT.Player && window.YT.Player instanceof Function) {
            // youtube iframe already loaded, resolve
            resolve();
            return;
        }
        const tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName('script')[0];
        if (firstScriptTag.parentNode) {
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        }
        window.onYouTubeIframeAPIReady = () => {
            if (window.YT !== undefined && window.YT.Player && window.YT.Player instanceof Function) {
                resolve();
            }
            else {
                const errorMessage = "There was a problem loading the YouTube Iframe API";
                emitter.triggerEvent(HonorVideoEvent_1.HonorVideoEvent.error, {
                    data: {
                        code: HonorVideoError_1.HonorVideoErrorType.apiLoadError,
                        message: errorMessage
                    }
                });
                reject(errorMessage);
            }
        };
    });
    return iFrameReadyPromise;
};
//# sourceMappingURL=loadYoutubeAPI.js.map