export default (elementId, config) => {
    if (!window.YT) {
        return;
    }
    const player = new window.YT.Player(elementId, config);
    return {
        loadVideoById: (videoId, startSeconds, endSeconds) => { player.loadVideoById({ videoId, startSeconds, endSeconds }); },
        loadVideoByUrl: (mediaContentUrl, startSeconds, endSeconds) => { player.loadVideoByUrl({ mediaContentUrl, startSeconds, endSeconds }); },
        playVideo: () => { player.playVideo(); },
        pauseVideo: () => { player.pauseVideo(); },
        stopVideo: () => { player.stopVideo(); },
        seekTo: (seconds, allowSeekAhead) => { player.seekTo(seconds, allowSeekAhead); },
        getDuration: () => player.getDuration(),
        getVideoLoadedFraction: () => player.getVideoLoadedFraction(),
        setVolume: (volume) => { player.setVolume(volume); },
        getVolume: () => player.getVolume(),
        getOptions: (module) => player.getOptions(module),
        getOption: (module, option) => player.getOption(module, option),
        setOption: (module, option, data) => { player.setOption(module, option, data); },
        getPlaybackRate: () => player.getPlaybackRate(),
        setPlaybackRate: (suggestedRate) => { player.setPlaybackRate(suggestedRate); },
        getPlayerState: () => player.getPlayerState(),
        getAvailablePlaybackRates: () => player.getAvailablePlaybackRates(),
        getCurrentTime: () => player.getCurrentTime(),
        getVideoUrl: () => player.getVideoUrl(),
        destroy: () => { player.destroy(); },
        setSize: (width, height) => { player.setSize(width, height); },
        getIframe: () => player.getIframe(),
    };
};
//# sourceMappingURL=convertYTPlayer.js.map