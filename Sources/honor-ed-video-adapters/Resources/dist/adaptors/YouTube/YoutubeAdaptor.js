"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeYoutubeAdaptor = void 0;
const convertYTPlayer_1 = __importDefault(require("./convertYTPlayer"));
const events_1 = require("../../utils/YouTube/events");
/**
 * Once the Youtube API is loaded, you can instantiate a player based on an elementId and a configuration object. This function does just that, and returns an object containing methods that interact with the YT.Player.
 * @param elementId The id of the element to contain the iframe
 * @param honorConfig The configuration, storing values to control things like autoplay, the id of the video to play, etc.
 * @param player The HonorPlayer
 * @returns A `HonorVideoAdaptor`, a type exposing methods that, in this case, call the corresponding methods based on Youtube's iFrame API.
 */
const initializeYoutubeAdaptor = (elementId, honorConfig, player) => {
    // Convert `honorConfig` to type `YoutubeConfig`, which will be passed directly into the Youtube video player provided by its iFrame API
    let config = {
        height: honorConfig.height,
        width: honorConfig.width,
        videoId: honorConfig.videoId,
        playerVars: {
            autoPlay: honorConfig.autoplay ? 1 : 0,
            controls: honorConfig.controls ? 1 : 0,
            fs: honorConfig.fullscreenEnabled ? 1 : 0,
            playsInline: honorConfig.playsInline ? 1 : 0
        }
    };
    // set up event handling, mapping YoutubeEvents to HonorVideoEvents, then sending them to the emitter
    config.events = (0, events_1.youtubeEventHandler)(player);
    // instantiate YT.Player
    const YTPlayer = (0, convertYTPlayer_1.default)(elementId, config);
    // construct HonorVideoAdaptor, using the Youtube-specific methods on the YT.Player
    let adaptor = {
        destroy: () => Promise.resolve(YTPlayer.destroy()),
        getCurrentTime: function () {
            return Promise.resolve(YTPlayer.getCurrentTime());
        },
        getDuration: function () {
            return Promise.resolve(YTPlayer.getDuration());
        },
        getPlaybackRate: function () {
            return Promise.resolve(YTPlayer.getPlaybackRate());
        },
        getVideoLoadedFraction: function () {
            return Promise.resolve(YTPlayer.getVideoLoadedFraction());
        },
        getVolume: function () {
            return Promise.resolve(YTPlayer.getVolume());
        },
        loadVideoById: function (videoId, startTime, endTime) {
            return Promise.resolve(YTPlayer.loadVideoById(videoId, startTime, endTime));
        },
        seekTo: function (seconds) {
            return Promise.resolve(YTPlayer.seekTo(seconds, true));
        },
        setPlaybackRate: function (rate) {
            return Promise.resolve(YTPlayer.setPlaybackRate(rate));
        },
        setSize: function (width, height) {
            return Promise.resolve(YTPlayer.setSize(width.toString(), height.toString()));
        },
        setVolume: function (volume) {
            return Promise.resolve(YTPlayer.setVolume(volume));
        },
        playVideo: function () {
            return Promise.resolve(YTPlayer.playVideo());
        },
        pauseVideo: function () {
            return Promise.resolve(YTPlayer.pauseVideo());
        }
    };
    return adaptor;
};
exports.initializeYoutubeAdaptor = initializeYoutubeAdaptor;
//# sourceMappingURL=YoutubeAdaptor.js.map