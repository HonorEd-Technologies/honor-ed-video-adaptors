"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HonorPlayer = void 0;
const HonorEventEmitter_1 = require("./types/Shared/HonorEventEmitter");
const HonorVideoEvent_1 = require("./types/Shared/HonorVideoEvent");
class HonorPlayer {
    constructor() {
        this.initialized = false;
        this.emitter = new HonorEventEmitter_1.HonorVideoEventEmitters();
        this.destroy = () => __awaiter(this, void 0, void 0, function* () { return this.runIfInitialized(() => this.adaptor.destroy()); });
        this.getCurrentTime = () => __awaiter(this, void 0, void 0, function* () { return this.runIfInitialized(() => this.adaptor.getCurrentTime()); });
        this.getDuration = () => __awaiter(this, void 0, void 0, function* () { return this.runIfInitialized(() => this.adaptor.getDuration()); });
        this.getPlaybackRate = () => __awaiter(this, void 0, void 0, function* () { return this.runIfInitialized(() => this.adaptor.getPlaybackRate()); });
        this.getVideoLoadedFraction = () => __awaiter(this, void 0, void 0, function* () { return this.runIfInitialized(() => this.adaptor.getVideoLoadedFraction()); });
        this.getVolume = () => __awaiter(this, void 0, void 0, function* () { return this.runIfInitialized(() => this.adaptor.getVolume()); });
        this.loadVideoById = (videoId, startTime, endTime) => __awaiter(this, void 0, void 0, function* () { return this.runIfInitialized(() => this.adaptor.loadVideoById(videoId, startTime, endTime)); });
        this.seekTo = (seconds) => __awaiter(this, void 0, void 0, function* () { return this.runIfInitialized(() => this.adaptor.seekTo(seconds)); });
        this.setPlaybackRate = (rate) => __awaiter(this, void 0, void 0, function* () { return this.runIfInitialized(() => this.adaptor.setPlaybackRate(rate)); });
        this.setSize = (width, height) => this.runIfInitialized(() => this.adaptor.setSize(width, height));
        this.setVolume = (volume) => __awaiter(this, void 0, void 0, function* () { return this.runIfInitialized(() => this.adaptor.setVolume(volume)); });
        this.playVideo = () => __awaiter(this, void 0, void 0, function* () { return this.runIfInitialized(() => this.adaptor.playVideo()); });
        this.pauseVideo = () => __awaiter(this, void 0, void 0, function* () { return this.runIfInitialized(() => this.adaptor.pauseVideo()); });
    }
    setAdaptor(adaptor) {
        this.initialized = true;
        this.adaptor = adaptor;
    }
    onReady(callback) { this.emitter.onReady(callback); }
    onError(callback) { this.emitter.onError(callback); }
    onCurrentTimeChanged(callback) { this.emitter.onCurrentTimeChange(callback); }
    onStateChanged(callback) { this.emitter.onStateChange(callback); }
    runIfInitialized(fn) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.initialized) {
                this.emitter.triggerEvent(HonorVideoEvent_1.HonorVideoEvent.error, { data: 5 });
            }
            let promise = fn();
            return yield promise;
        });
    }
}
exports.HonorPlayer = HonorPlayer;
//# sourceMappingURL=HonorPlayer.js.map