import { YTEvent } from "../YTEvents";
import loadYoutubeAPI from "../../loadYoutubeAPI";
import convertYTPlayer from "./convertYTPlayer";
export const bindAdaptorToAPI = (elementId, handler, config) => {
    return new Promise((resolve) => {
        loadYoutubeAPI(handler)
            .then((YT) => {
            if (config.events) {
                console.log("ERROR!!");
                handler(YTEvent.error);
                return;
            }
            // TODO: add 'associated value' to event values to pass data
            config.events = {
                'onReady': () => { handler(YTEvent.playerReady); },
                'onStateChange': ({ data }) => { handler(YTEvent.stateChanged); },
                'onError': ({ data }) => {
                    console.log(data);
                    handler(YTEvent.error);
                }
            };
            const YTPlayer = convertYTPlayer(elementId, config);
            let player = {
                destroy: () => { },
                getCurrentTime: function () {
                    throw new Error("Function not implemented.");
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
                    return YTPlayer.setSize(width, height);
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
