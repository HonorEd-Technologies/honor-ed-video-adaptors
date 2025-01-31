"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const load_script_1 = __importDefault(require("load-script"));
const HonorVideoEvent_1 = require("../types/Shared/HonorVideoEvent");
const HonorVideoError_1 = require("../types/Shared/HonorVideoError");
exports.default = (emitter) => {
    const iFrameReadyPromise = new Promise((resolve, reject) => {
        let protocol = 'http:';
        console.log(protocol);
        (0, load_script_1.default)(protocol + '//player.vimeo.com/api/player.js', (err, script) => {
            if (err) {
                console.log("ERROR");
                emitter.triggerEvent(HonorVideoEvent_1.HonorVideoEvent.error, { data: { type: HonorVideoError_1.HonorVideoErrorType.apiLoadError, message: "Failed to load Vimeo iFrame API" } });
                reject("Failed to load Vimeo iFrame API");
            }
            console.log("resolving");
            resolve();
        });
    });
    return iFrameReadyPromise;
};
//# sourceMappingURL=loadVimeoAPI.js.map