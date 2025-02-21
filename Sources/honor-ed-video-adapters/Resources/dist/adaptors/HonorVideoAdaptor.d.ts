import { type HonorPlayer } from '../HonorPlayer';
import { type HonorVideoPlayerState } from '../types';
import { type HonorVideoConfiguration } from '../types/Shared/HonorVideoConfiguration';
export type HonorVideoAdaptor = {
    initialize: (elementId: string, configuration: HonorVideoConfiguration, player: HonorPlayer) => Promise<void>;
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
    setSize: (width: number, height: number) => void;
    setVolume: (volume: number) => void;
    stopVideo: () => void;
    playVideo: () => void;
    pauseVideo: () => void;
};
//# sourceMappingURL=HonorVideoAdaptor.d.ts.map