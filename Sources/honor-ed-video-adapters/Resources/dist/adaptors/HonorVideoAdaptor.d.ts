import { HonorPlayer } from '../HonorPlayer';
import { HonorVideoPlayerState } from '../types';
import { HonorVideoConfiguration } from '../types/Shared/HonorVideoConfiguration';
export type HonorVideoAdaptor = {
    initialize: (videoId: string, configuration: HonorVideoConfiguration, player: HonorPlayer) => Promise<void>;
    destroy: () => void;
    getCurrentTime: () => number;
    getDuration: () => number;
    getPlaybackRate: () => number;
    getPlayerState: () => HonorVideoPlayerState | undefined;
    getVideoLoadedFraction: () => number;
    getVolume: () => number;
    loadVideoById: (videoId: string, startTime?: number, endTime?: number) => void;
    seekTo: (seconds: number) => void;
    setPlaybackRate: (rate: number) => void;
    setSize: (width: number, height: number) => Object;
    setVolume: (volume: number) => void;
    stopVideo: () => void;
    playVideo: () => void;
    pauseVideo: () => void;
};
//# sourceMappingURL=HonorVideoAdaptor.d.ts.map