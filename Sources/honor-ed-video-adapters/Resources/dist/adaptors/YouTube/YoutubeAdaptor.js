import convertYTPlayer from './convertYTPlayer';
import loadYoutubeAPI from '../../utils/loadYoutubeAPI';
import { parseYTPlayerState, youtubeEventHandler, } from '../../utils/YouTube/events';
/**
 * This class will load Youtube's IFrame API upon the call of `initialize`, and upon completion will set the YT.Player object on `this` and expose methods that interact with it.
 */
export class YoutubeAdaptor {
    YTPlayer;
    initialize = async (elementId, configuration, player) => {
        await loadYoutubeAPI(player.emitter);
        const config = {
            height: configuration.height,
            width: configuration.width,
            videoId: configuration.videoId,
            events: youtubeEventHandler(player),
            playerVars: {
                autoPlay: configuration.autoplay ? 1 : 0,
                controls: configuration.controls ? 1 : 0,
                fs: configuration.fullscreenEnabled ? 1 : 0,
                playsInline: configuration.playsInline ? 1 : 0,
            },
        };
        const ytPlayer = convertYTPlayer(elementId, config);
        this.YTPlayer = ytPlayer;
    };
    destroy = () => this.YTPlayer.destroy();
    getCurrentTime = () => this.YTPlayer.getCurrentTime();
    getDuration = () => this.YTPlayer.getDuration();
    getPlaybackRate = () => this.YTPlayer.getPlaybackRate();
    getVideoLoadedFraction = () => this.YTPlayer.getVideoLoadedFraction();
    getPlayerState = () => {
        const state = this.YTPlayer.getPlayerState();
        return parseYTPlayerState(state);
    };
    getVolume = () => this.YTPlayer.getVolume();
    loadVideoById = (videoId, startTime, endTime) => this.loadVideoById(videoId, startTime, endTime);
    seekTo = (seconds) => this.YTPlayer.seekTo(seconds);
    setPlaybackRate = (rate) => this.YTPlayer.setPlaybackRate(rate);
    setSize = (width, height) => this.YTPlayer.setSize(width, height);
    setVolume = (volume) => this.YTPlayer.setVolume(volume);
    stopVideo = () => this.YTPlayer.stopVideo();
    playVideo = () => this.YTPlayer.playVideo();
    pauseVideo = () => this.YTPlayer.pauseVideo();
}
//# sourceMappingURL=YoutubeAdaptor.js.map