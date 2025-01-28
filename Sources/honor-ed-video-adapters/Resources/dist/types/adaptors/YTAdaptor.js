"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bindPlayerToYoutubeAPI = void 0;
const YTEvents_1 = require("../YouTube/YTEvents");
const HonorVideoEvent_1 = require("../Shared/HonorVideoEvent");
const loadYoutubeAPI_1 = __importDefault(require("../../utils/loadYoutubeAPI"));
const convertYTPlayer_1 = __importDefault(require("./convertYTPlayer"));
const HonorVideoPlayerState_1 = require("../Shared/HonorVideoPlayerState");
const HonorVideoError_1 = require("../Shared/HonorVideoError");
const parseYTPlayerState = (state) => {
    switch (state) {
        case YTEvents_1.YTPlayerState.unstarted:
            return HonorVideoPlayerState_1.HonorVideoPlayerState.unstarted;
        case YTEvents_1.YTPlayerState.playing:
            return HonorVideoPlayerState_1.HonorVideoPlayerState.playing;
        case YTEvents_1.YTPlayerState.paused:
            return HonorVideoPlayerState_1.HonorVideoPlayerState.paused;
        case YTEvents_1.YTPlayerState.buffering:
            return HonorVideoPlayerState_1.HonorVideoPlayerState.buffering;
        case YTEvents_1.YTPlayerState.ended:
            return HonorVideoPlayerState_1.HonorVideoPlayerState.ended;
        case YTEvents_1.YTPlayerState.videoCued:
            return undefined; // unneeded for our purposes
    }
};
const parseYTPlayerError = (error) => {
    switch (error) {
        case YTEvents_1.YTError.apiLoadError:
            return HonorVideoError_1.HonorVideoErrorType.apiLoadError;
        case YTEvents_1.YTError.invalidPermissions, YTEvents_1.YTError.invalidPermissionsAlt:
            return HonorVideoError_1.HonorVideoErrorType.invalidPermissions;
        case YTEvents_1.YTError.invalidParameter:
            return HonorVideoError_1.HonorVideoErrorType.playerError;
        case YTEvents_1.YTError.playerError:
            return HonorVideoError_1.HonorVideoErrorType.playerError;
        case YTEvents_1.YTError.notFound:
            return HonorVideoError_1.HonorVideoErrorType.notFound;
        default:
            return HonorVideoError_1.HonorVideoErrorType.unknown;
    }
};
const bindPlayerToYoutubeAPI = (elementId, honorConfig, player) => {
    let config = {
        height: honorConfig.height,
        width: honorConfig.width,
        videoId: honorConfig.videoId,
        playerVars: {
            autoplay: honorConfig.autoplay ? 1 : 0,
            controls: honorConfig.controls ? 1 : 0,
            fs: honorConfig.fullscreenEnabled ? 1 : 0,
            playsInline: honorConfig.playsInline ? 1 : 0
        }
    };
    return new Promise((resolve) => {
        (0, loadYoutubeAPI_1.default)(player.emitter.triggerEvent)
            .then(() => {
            let timePoll;
            const setupTimePoll = () => {
                timePoll = setInterval(() => {
                    if (window.HonorPlayer) {
                        window.HonorPlayer.getCurrentTime()
                            .then((time) => {
                            player.emitter.triggerEvent(HonorVideoEvent_1.HonorVideoEvent.currentTimeChanged, { data: time });
                        });
                    }
                }, 500);
            };
            config.events = {
                'onReady': () => { player.emitter.triggerEvent(HonorVideoEvent_1.HonorVideoEvent.playerReady); },
                'onStateChange': (event) => {
                    const { data } = event;
                    const castData = data;
                    if (castData === undefined) {
                        player.emitter.triggerEvent(HonorVideoEvent_1.HonorVideoEvent.error, {
                            data: {
                                type: HonorVideoError_1.HonorVideoErrorType.adaptorLayerError,
                                message: `Unknown player state received: ${data}`
                            }
                        });
                        return;
                    }
                    const honorPlayerState = parseYTPlayerState(castData);
                    if (!honorPlayerState) {
                        player.emitter.triggerEvent(HonorVideoEvent_1.HonorVideoEvent.error, {
                            data: {
                                type: HonorVideoError_1.HonorVideoErrorType.adaptorLayerError,
                                message: `Could not convert Youtube player event: ${castData} into Honor Event`
                            }
                        });
                        return;
                    }
                    player.emitter.triggerEvent(HonorVideoEvent_1.HonorVideoEvent.stateChanged, { data: honorPlayerState });
                    if (timePoll !== undefined && (YTEvents_1.YTPlayerState.ended === data || YTEvents_1.YTPlayerState.unstarted === data)) {
                        clearInterval(timePoll);
                    }
                    else if (timePoll === undefined) {
                        setupTimePoll();
                    }
                },
                'onError': (event) => {
                    const { data } = event;
                    var castData = data;
                    var error = HonorVideoError_1.HonorVideoErrorType.unknown;
                    if (castData) {
                        error = parseYTPlayerError(castData);
                    }
                    player.emitter.triggerEvent(HonorVideoEvent_1.HonorVideoEvent.error, { data: { type: error } });
                }
            };
            const YTPlayer = (0, convertYTPlayer_1.default)(elementId, config);
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
            player.setAdaptor(adaptor);
            resolve();
        });
    });
};
exports.bindPlayerToYoutubeAPI = bindPlayerToYoutubeAPI;
//# sourceMappingURL=YTAdaptor.js.map