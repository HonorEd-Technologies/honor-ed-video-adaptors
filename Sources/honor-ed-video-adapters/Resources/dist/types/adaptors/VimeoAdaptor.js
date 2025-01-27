"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bindPlayerToVimeoAPI = void 0;
const loadVimeoAPI_1 = __importDefault(require("../../utils/loadVimeoAPI"));
const HonorVideoEvent_1 = require("../Shared/HonorVideoEvent");
const HonorVideoPlayerState_1 = require("../Shared/HonorVideoPlayerState");
const VimeoEvents_1 = require("../Vimeo/VimeoEvents");
const convertVimeoPlayer_1 = __importDefault(require("./convertVimeoPlayer"));
const bindPlayerToVimeoAPI = (elementId, honorConfig, player) => {
    let config = {
        id: honorConfig.videoId,
        width: honorConfig.width,
        height: honorConfig.height,
        autoplay: honorConfig.autoplay,
        controls: honorConfig.controls,
        playsinline: honorConfig.playsInline,
        vimeo_logo: false
    };
    return new Promise((resolve) => {
        (0, loadVimeoAPI_1.default)(player.emitter.triggerEvent)
            .then(() => {
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
            player.setAdaptor(adaptor);
            resolve();
        });
    });
};
exports.bindPlayerToVimeoAPI = bindPlayerToVimeoAPI;
//# sourceMappingURL=VimeoAdaptor.js.map