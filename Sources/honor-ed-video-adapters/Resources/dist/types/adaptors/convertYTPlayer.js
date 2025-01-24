"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (elementId, config) => {
    let player = new window.YT.Player(elementId, config);
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
// stopVideo = 'stopVideo',
//   getVideoLoadedFraction = 'getVideoLoadedFraction',
//   playVideoAt = 'playVideoAt',
//   setOption = 'setOption',
//   mute = 'mute',
//   unMute = 'unMute',
//   isMuted = 'isMuted',
//   setVolume = 'setVolume',
//   getVolume = 'getVolume',
//   seekTo = 'seekTo',
//   getPlayerState = 'getPlayerState',
//   getPlaybackRate = 'getPlaybackRate',
//   setPlaybackRate = 'setPlaybackRate',
//   getAvailablePlaybackRates = 'getAvailablePlaybackRates',
//   getPlaybackQuality = 'getPlaybackQuality',
//   setPlaybackQuality = 'setPlaybackQuality',
//   getAvailableQualityLevels = 'getAvailableQualityLevels',
//   getCurrentTime = 'getCurrentTime',
//   getDuration = 'getDuration',
//   removeEventListener = 'removeEventListener',
//   getVideoUrl = 'getVideoUrl',
//   getOptions = 'getOptions',
//   getOption = 'getOption',
//   addEventListener = 'addEventListener',
//   destroy = 'destroy',
//   setSize = 'setSize',
//   getIframe = 'getIframe'
//# sourceMappingURL=convertYTPlayer.js.map