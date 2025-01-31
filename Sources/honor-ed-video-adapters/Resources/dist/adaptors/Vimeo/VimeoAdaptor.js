"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeVimeoAdaptor = void 0;
const HonorVideoEvent_1 = require("../../types/Shared/HonorVideoEvent");
const HonorVideoPlayerState_1 = require("../../types/Shared/HonorVideoPlayerState");
const VimeoEvents_1 = require("../../types/Vimeo/VimeoEvents");
const convertVimeoPlayer_1 = __importDefault(require("./convertVimeoPlayer"));
const initializeVimeoAdaptor = (elementId, honorConfig, player) => {
    let config = {
        id: honorConfig.videoId,
        width: honorConfig.width,
        height: honorConfig.height,
        autoplay: true,
        controls: honorConfig.controls,
        playsinline: honorConfig.playsInline,
        vimeo_logo: false
    };
    const vimeoPlayer = (0, convertVimeoPlayer_1.default)(elementId, config);
    vimeoPlayer.on(VimeoEvents_1.VimeoEvent.ready, () => {
        player.emitter.triggerEvent(HonorVideoEvent_1.HonorVideoEvent.playerReady);
        player.emitter.triggerEvent(HonorVideoEvent_1.HonorVideoEvent.stateChanged, { data: HonorVideoPlayerState_1.HonorVideoPlayerState.unstarted });
    });
    vimeoPlayer.on(VimeoEvents_1.VimeoEvent.pause, () => {
        player.emitter.triggerEvent(HonorVideoEvent_1.HonorVideoEvent.stateChanged, { data: HonorVideoPlayerState_1.HonorVideoPlayerState.paused });
    });
    vimeoPlayer.on(VimeoEvents_1.VimeoEvent.play, () => {
        player.emitter.triggerEvent(HonorVideoEvent_1.HonorVideoEvent.stateChanged, { data: HonorVideoPlayerState_1.HonorVideoPlayerState.playing });
    });
    vimeoPlayer.on(VimeoEvents_1.VimeoEvent.buffering, () => {
        player.emitter.triggerEvent(HonorVideoEvent_1.HonorVideoEvent.stateChanged, { data: HonorVideoPlayerState_1.HonorVideoPlayerState.buffering });
    });
    vimeoPlayer.on(VimeoEvents_1.VimeoEvent.timeUpdated, ({ seconds }) => {
        player.emitter.triggerEvent(HonorVideoEvent_1.HonorVideoEvent.currentTimeChanged, { data: seconds });
    });
    vimeoPlayer.on(VimeoEvents_1.VimeoEvent.ended, () => {
        player.emitter.triggerEvent(HonorVideoEvent_1.HonorVideoEvent.stateChanged, { data: HonorVideoPlayerState_1.HonorVideoPlayerState.ended });
    });
    vimeoPlayer.on(VimeoEvents_1.VimeoEvent.error, (error) => {
        console.log("ERROR");
        console.log(error.message);
        console.log(error.name);
    });
    let adaptor = {
        destroy: () => vimeoPlayer.destroy(),
        getCurrentTime: function () {
            return vimeoPlayer.getCurrentTime();
        },
        getDuration: function () {
            return vimeoPlayer.getDuration();
        },
        getPlaybackRate: function () {
            return vimeoPlayer.getPlaybackRate();
        },
        getVideoLoadedFraction: function () {
            return vimeoPlayer.getVideoLoadedFraction();
        },
        getVolume: function () {
            return vimeoPlayer.getVolume();
        },
        loadVideoById: function (videoId, startTime, endTime) {
            return vimeoPlayer.loadVideoById(videoId, startTime, endTime);
        },
        seekTo: function (seconds) {
            return vimeoPlayer.seekTo(seconds);
        },
        setPlaybackRate: function (rate) {
            return vimeoPlayer.setPlaybackRate(rate);
        },
        setSize: function (width, height) {
            const iFrame = vimeoPlayer.getIframe();
            if (iFrame) {
                iFrame.style.width = `${width}px`;
                iFrame.style.height = `${height}px`;
            }
            return Promise.resolve();
        },
        setVolume: function (volume) {
            return vimeoPlayer.setVolume(volume);
        },
        playVideo: function () {
            return vimeoPlayer.playVideo();
        },
        pauseVideo: function () {
            return vimeoPlayer.pauseVideo();
        }
    };
    return adaptor;
};
exports.initializeVimeoAdaptor = initializeVimeoAdaptor;
//# sourceMappingURL=VimeoAdaptor.js.map