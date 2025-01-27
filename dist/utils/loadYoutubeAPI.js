"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const load_script_1 = __importDefault(require("load-script"));
const HonorVideoEvent_1 = require("../types/Shared/HonorVideoEvent");
const HonorVideoError_1 = require("../types/Shared/HonorVideoError");
exports.default = (handleEvent) => {
    const iFrameReadyPromise = new Promise((resolve) => {
        if (window.YT && window.YT.Player && window.YT.Player instanceof Function) {
            // youtube iframe already loaded, resolve
            resolve(window.YT);
            return;
        }
        let protocol = window.location.protocol === 'http:' ? 'http:' : 'https:';
        console.log(protocol);
        (0, load_script_1.default)(protocol + '//www.youtube.com/iframe_api', (err) => {
            if (err) {
                console.log("ERROR");
                handleEvent(HonorVideoEvent_1.HonorVideoEvent.error, { data: { type: HonorVideoError_1.HonorVideoErrorType.apiLoadError, message: "Failed to load Youtube iFrame API" } });
            }
        });
        let existingValue = window.onYouTubeIframeAPIReady;
        window.onYouTubeIframeAPIReady = () => {
            if (existingValue) {
                existingValue();
            }
            if (window.YT !== undefined && window.YT.Player && window.YT.Player instanceof Function) {
                resolve(window.YT);
            }
        };
    });
    return iFrameReadyPromise;
};
//# sourceMappingURL=loadYoutubeAPI.js.map