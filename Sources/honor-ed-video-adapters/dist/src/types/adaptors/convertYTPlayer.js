export default (elementId, config) => {
    let player = new window.YT.Player(elementId, config);
    return {
        loadVideoById: (videoId, startSeconds, endSeconds) => player.loadVideoById({ videoId, startSeconds, endSeconds }),
        loadVideoByUrl: (mediaContentUrl, startSeconds, endSeconds) => player.loadVideoByUrl({ mediaContentUrl, startSeconds, endSeconds }),
        playVideo: () => player.playVideo(),
        pauseVideo: () => player.pauseVideo(),
        stopVideo: () => player.stopVideo(),
        seekTo: (seconds, allowSeekAhead) => player.seekTo(seconds, allowSeekAhead),
        getDuration: () => player.getDuration()
    };
};
