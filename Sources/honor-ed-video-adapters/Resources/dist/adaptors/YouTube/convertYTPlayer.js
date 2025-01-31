"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (elementId, config) => {
    let player = new YT.Player(elementId, config);
    return {
        loadVideoById: (videoId, startSeconds, endSeconds) => player.loadVideoById({ videoId, startSeconds, endSeconds }),
        loadVideoByUrl: (mediaContentUrl, startSeconds, endSeconds) => player.loadVideoByUrl({ mediaContentUrl, startSeconds, endSeconds }),
        playVideo: () => player.playVideo(),
        pauseVideo: () => player.pauseVideo(),
        stopVideo: () => player.stopVideo(),
        seekTo: (seconds, allowSeekAhead) => player.seekTo(seconds, allowSeekAhead),
        getDuration: () => player.getDuration(),
        getVideoLoadedFraction: () => player.getVideoLoadedFraction(),
        setVolume: (volume) => player.setVolume(volume),
        getVolume: () => player.getVolume(),
        getPlaybackRate: () => player.getPlaybackRate(),
        setPlaybackRate: (suggestedRate) => player.setPlaybackRate(suggestedRate),
        getAvailablePlaybackRates: () => player.getAvailablePlaybackRates(),
        getCurrentTime: () => player.getCurrentTime(),
        getVideoUrl: () => player.getVideoUrl(),
        destroy: () => player.destroy(),
        setSize: (width, height) => player.setSize(width, height),
        getIframe: () => player.getIframe()
    };
};
//# sourceMappingURL=convertYTPlayer.js.map