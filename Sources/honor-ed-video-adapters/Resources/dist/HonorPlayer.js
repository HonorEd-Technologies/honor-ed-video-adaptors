"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HonorPlayer = void 0;
const HonorEventEmitter_1 = require("./types/Shared/HonorEventEmitter");
const HonorVideoEvent_1 = require("./types/Shared/HonorVideoEvent");
class HonorPlayer {
    constructor() {
        this.initialized = false;
        this.emitter = new HonorEventEmitter_1.HonorVideoEventEmitters();
        this.destroy = () => this.runIfInitialized(() => this.adaptor.destroy());
        this.getCurrentTime = () => this.runIfInitialized(() => this.adaptor.getCurrentTime());
        this.getDuration = () => this.runIfInitialized(() => this.adaptor.getDuration());
        this.getPlaybackRate = () => this.runIfInitialized(() => this.adaptor.getPlaybackRate());
        this.getVideoLoadedFraction = () => this.runIfInitialized(() => this.adaptor.getVideoLoadedFraction());
        this.getVolume = () => this.runIfInitialized(() => this.adaptor.getVolume());
        this.loadVideoById = (videoId, startTime, endTime) => this.runIfInitialized(() => this.adaptor.loadVideoById(videoId, startTime, endTime));
        this.seekTo = (seconds) => this.runIfInitialized(() => this.adaptor.seekTo(seconds));
        this.setPlaybackRate = (rate) => this.runIfInitialized(() => this.adaptor.setPlaybackRate(rate));
        this.setSize = (width, height) => this.runIfInitialized(() => this.adaptor.setSize(width, height));
        this.setVolume = (volume) => this.runIfInitialized(() => this.adaptor.setVolume(volume));
        this.stopVideo = () => this.runIfInitialized(() => this.adaptor.stopVideo());
        this.playVideo = () => this.runIfInitialized(() => this.adaptor.playVideo());
        this.pauseVideo = () => this.runIfInitialized(() => this.adaptor.pauseVideo());
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
        if (!this.initialized) {
            this.emitter.triggerEvent(HonorVideoEvent_1.HonorVideoEvent.error, { data: 5 });
        }
        return fn();
    }
}
exports.HonorPlayer = HonorPlayer;
//# sourceMappingURL=HonorPlayer.js.map