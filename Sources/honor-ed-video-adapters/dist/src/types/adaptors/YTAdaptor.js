import { YTEvent } from "../YTEvents";
import loadYoutubeAPI from "../../loadYoutubeAPI";
import convertYTPlayer from "./convertYTPlayer";
let globalPlayer;
export const bindAdaptorToAPI = (elementId, handler, config) => {
    return new Promise((resolve) => {
        loadYoutubeAPI(handler)
            .then((YT) => {
            if (config.events) {
                handler(YTEvent.error);
                return;
            }
            // TODO: add 'associated value' to event values to pass data
            config.events = {
                'onReady': () => { handler(YTEvent.playerReady); },
                'onStateChange': ({ data: number }) => { handler(YTEvent.stateChanged); },
                'onError': ({ data: number }) => { handler(YTEvent.error); }
            };
            const { loadVideoById, playVideo, pauseVideo, stopVideo, getDuration, seekTo } = convertYTPlayer(elementId, config);
            let player = {
                destroy: () => { },
                getCurrentTime: function () {
                    throw new Error("Function not implemented.");
                },
                getDuration: function () {
                    const duration = getDuration();
                    return duration;
                },
                getPlaybackRate: function () {
                    throw new Error("Function not implemented.");
                },
                getVideoLoadedFraction: function () {
                    throw new Error("Function not implemented.");
                },
                getVolume: function () {
                    throw new Error("Function not implemented.");
                },
                loadVideoById: function (videoId, startTime, endTime) {
                    loadVideoById(videoId, startTime, endTime);
                },
                seekTo: function (seconds) {
                    seekTo(seconds, true);
                },
                setPlaybackRate: function (rate) {
                    throw new Error("Function not implemented.");
                },
                setSize: function (width, height) {
                    throw new Error("Function not implemented.");
                },
                setVolume: function (volume) {
                    throw new Error("Function not implemented.");
                },
                stopVideo: function () {
                    stopVideo();
                },
                playVideo: function () {
                    playVideo();
                },
                pauseVideo: function () {
                    pauseVideo();
                }
            };
            globalPlayer = player;
            resolve(player);
        });
    });
};
