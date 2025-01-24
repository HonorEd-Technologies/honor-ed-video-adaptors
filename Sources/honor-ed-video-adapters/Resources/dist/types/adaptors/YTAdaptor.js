"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bindAdaptorToAPI = void 0;
const YTEvents_1 = require("../YTEvents");
const loadYoutubeAPI_1 = __importDefault(require("../../loadYoutubeAPI"));
const convertYTPlayer_1 = __importDefault(require("./convertYTPlayer"));
const bindAdaptorToAPI = (elementId, config, emitter) => {
    return new Promise((resolve) => {
        (0, loadYoutubeAPI_1.default)(emitter.triggerEvent)
            .then((YT) => {
            let timePoll;
            const setupTimePoll = () => {
                timePoll = setInterval(() => {
                    if (window.HonorPlayer) {
                        const time = window.HonorPlayer.getCurrentTime();
                        emitter.triggerEvent(YTEvents_1.YTEventType.currentTimeChanged, { data: time });
                    }
                }, 500);
            };
            config.events = {
                'onReady': () => { emitter.triggerEvent(YTEvents_1.YTEventType.playerReady); },
                'onStateChange': (event) => {
                    emitter.triggerEvent(YTEvents_1.YTEventType.stateChanged, event);
                    const { data } = event;
                    if (timePoll !== undefined && (YTEvents_1.YTPlayerState.ended === data || YTEvents_1.YTPlayerState.unstarted === data)) {
                        clearInterval(timePoll);
                    }
                    else if (timePoll === undefined) {
                        setupTimePoll();
                    }
                },
                'onError': (event) => { emitter.triggerEvent(YTEvents_1.YTEventType.error, event); }
            };
            const YTPlayer = (0, convertYTPlayer_1.default)(elementId, config);
            let player = {
                destroy: () => { },
                getCurrentTime: function () {
                    return YTPlayer.getCurrentTime();
                },
                getDuration: function () {
                    return YTPlayer.getDuration();
                },
                getPlaybackRate: function () {
                    return YTPlayer.getPlaybackRate();
                },
                getVideoLoadedFraction: function () {
                    return YTPlayer.getVideoLoadedFraction();
                },
                getVolume: function () {
                    return YTPlayer.getVolume();
                },
                loadVideoById: function (videoId, startTime, endTime) {
                    YTPlayer.loadVideoById(videoId, startTime, endTime);
                },
                seekTo: function (seconds) {
                    YTPlayer.seekTo(seconds, true);
                },
                setPlaybackRate: function (rate) {
                    YTPlayer.setPlaybackRate(rate);
                },
                setSize: function (width, height) {
                    return YTPlayer.setSize(width.toString(), height.toString());
                },
                setVolume: function (volume) {
                    YTPlayer.setVolume(volume);
                },
                stopVideo: function () {
                    YTPlayer.stopVideo();
                },
                playVideo: function () {
                    YTPlayer.playVideo();
                },
                pauseVideo: function () {
                    YTPlayer.pauseVideo();
                }
            };
            resolve(player);
        });
    });
};
exports.bindAdaptorToAPI = bindAdaptorToAPI;
//# sourceMappingURL=YTAdaptor.js.map