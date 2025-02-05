"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.YoutubeAdaptor = void 0;
const convertYTPlayer_1 = __importDefault(require("./convertYTPlayer"));
const loadYoutubeAPI_1 = __importDefault(require("../../utils/loadYoutubeAPI"));
const events_1 = require("../../utils/YouTube/events");
/**
 * This class will load Youtube's IFrame API upon the call of `initialize`, and upon completion will set the YT.Player object on `this` and expose methods that interact with it.
 */
class YoutubeAdaptor {
    YTPlayer;
    constructor() {
    }
    async initialize(elementId, configuration, player) {
        await (0, loadYoutubeAPI_1.default)(player.emitter);
        const config = {
            height: configuration.height,
            width: configuration.width,
            videoId: configuration.videoId,
            events: (0, events_1.youtubeEventHandler)(player),
            playerVars: {
                autoPlay: configuration.autoplay ? 1 : 0,
                controls: configuration.controls ? 1 : 0,
                fs: configuration.fullscreenEnabled ? 1 : 0,
                playsInline: configuration.playsInline ? 1 : 0
            }
        };
        const ytPlayer = (0, convertYTPlayer_1.default)(elementId, config);
        this.YTPlayer = ytPlayer;
    }
    destroy = () => this.YTPlayer.destroy();
    getCurrentTime = () => this.YTPlayer.getCurrentTime();
    getDuration = () => this.YTPlayer.getDuration();
    getPlaybackRate = () => this.YTPlayer.getPlaybackRate();
    getVideoLoadedFraction = () => this.YTPlayer.getVideoLoadedFraction();
    getVolume = () => this.YTPlayer.getVolume();
    loadVideoById = (videoId, startTime, endTime) => this.loadVideoById(videoId, startTime, endTime);
    seekTo = (seconds) => this.YTPlayer.seekTo(seconds);
    setPlaybackRate = (rate) => this.YTPlayer.setPlaybackRate(rate);
    setSize = (width, height) => this.YTPlayer.setSize(width, height);
    setVolume = (volume) => this.YTPlayer.setVolume(volume);
    stopVideo = () => this.YTPlayer.stopVideo();
    playVideo = () => this.YTPlayer.playVideo();
    pauseVideo = () => this.YTPlayer.pauseVideo();
}
exports.YoutubeAdaptor = YoutubeAdaptor;
//# sourceMappingURL=YoutubeAdaptor.js.map