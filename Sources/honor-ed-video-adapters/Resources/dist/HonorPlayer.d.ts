import { HonorVideoEventEmitters } from './utils/Shared/HonorEventEmitter';
import { HonorVideoConfiguration } from './types/Shared/HonorVideoConfiguration';
import { HonorVideoError } from './types/Shared/HonorVideoError';
import { HonorVideoPlayerState } from './types/Shared/HonorVideoPlayerState';
import { HonorVideoAdaptor } from './adaptors/HonorVideoAdaptor';
export declare class HonorPlayer {
    private initialized;
    private adaptor;
    emitter: HonorVideoEventEmitters;
    constructor(elementId: string, configuration: HonorVideoConfiguration, adaptor: HonorVideoAdaptor);
    destroy: () => void;
    getCurrentTime: () => number;
    getDuration: () => number;
    getPlaybackRate: () => number;
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
    onReady: (callback: () => void) => (() => void) | undefined;
    onError: (callback: (error: HonorVideoError) => void) => () => void;
    onCurrentTimeChanged: (callback: (time: number) => void) => () => void;
    onStateChanged: (callback: (state: HonorVideoPlayerState) => void) => () => void;
    onPlaybackRateChanged: (callback: (rate: number) => void) => () => void;
    onVolumeChanged: (callback: (volume: number) => void) => () => void;
    initializeAdaptor: (elementId: string, config: HonorVideoConfiguration) => Promise<void>;
}
//# sourceMappingURL=HonorPlayer.d.ts.map