import { type Player } from './convertYTPlayer';
import { type HonorVideoAdaptor } from '../HonorVideoAdaptor';
import { type HonorVideoConfiguration } from '../../types/Shared/HonorVideoConfiguration';
import { type HonorPlayer } from '../../HonorPlayer';
import { type HonorVideoPlayerState } from '../../types';
export type YoutubeConfig = {
    height: number;
    width: number;
    videoId: string;
    playerVars: object;
    events?: object;
};
/**
 * This class will load Youtube's IFrame API upon the call of `initialize`, and upon completion will set the YT.Player object on `this` and expose methods that interact with it.
 */
export declare class YoutubeAdaptor implements HonorVideoAdaptor {
    YTPlayer: Player;
    initialize: (elementId: string, configuration: HonorVideoConfiguration, player: HonorPlayer) => Promise<void>;
    destroy: () => void;
    getCurrentTime: () => number;
    getDuration: () => number;
    getPlaybackRate: () => number;
    getVideoLoadedFraction: () => number;
    getPlayerState: () => HonorVideoPlayerState | undefined;
    getVolume: () => number;
    loadVideoById: (videoId: string, startTime?: number, endTime?: number) => void;
    seekTo: (seconds: number) => void;
    setPlaybackRate: (rate: number) => void;
    setSize: (width: number, height: number) => void;
    setVolume: (volume: number) => void;
    stopVideo: () => void;
    playVideo: () => void;
    pauseVideo: () => void;
}
//# sourceMappingURL=YoutubeAdaptor.d.ts.map