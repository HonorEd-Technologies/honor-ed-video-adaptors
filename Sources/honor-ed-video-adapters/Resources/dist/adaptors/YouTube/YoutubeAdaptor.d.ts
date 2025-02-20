import { HonorVideoAdaptor } from '../HonorVideoAdaptor';
import { HonorVideoConfiguration } from '../../types/Shared/HonorVideoConfiguration';
import { HonorPlayer } from '../../HonorPlayer';
import { HonorVideoPlayerState } from '../../types';
export type YoutubeConfig = {
    height: number;
    width: number;
    videoId: string;
    playerVars: Object;
    events?: Object;
};
/**
 * This class will load Youtube's IFrame API upon the call of `initialize`, and upon completion will set the YT.Player object on `this` and expose methods that interact with it.
 */
export declare class YoutubeAdaptor implements HonorVideoAdaptor {
    YTPlayer: any | null;
    initialize: (elementId: string, configuration: HonorVideoConfiguration, player: HonorPlayer) => Promise<void>;
    destroy: () => any;
    getCurrentTime: () => number;
    getDuration: () => number;
    getPlaybackRate: () => number;
    getVideoLoadedFraction: () => number;
    getPlayerState: () => HonorVideoPlayerState | undefined;
    getVolume: () => number;
    loadVideoById: (videoId: string, startTime?: number, endTime?: number) => void;
    seekTo: (seconds: number) => void;
    setPlaybackRate: (rate: number) => void;
    setSize: (width: number, height: number) => Object;
    setVolume: (volume: number) => void;
    stopVideo: () => any;
    playVideo: () => any;
    pauseVideo: () => any;
}
//# sourceMappingURL=YoutubeAdaptor.d.ts.map