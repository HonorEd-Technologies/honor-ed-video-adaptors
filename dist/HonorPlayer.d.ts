import { HonorVideoEventEmitters } from "./types/Shared/HonorEventEmitter";
import { HonorVideoError } from "./types/Shared/HonorVideoError";
import { HonorVideoPlayerState } from "./types/Shared/HonorVideoPlayerState";
import { HonorVideoAdaptor } from "./types/adaptors/HonorVideoAdaptor";
export declare class HonorPlayer {
    private initialized;
    private adaptor;
    emitter: HonorVideoEventEmitters;
    constructor();
    setAdaptor(adaptor: HonorVideoAdaptor): void;
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
    onReady(callback: () => void): void;
    onError(callback: (error: HonorVideoError) => void): void;
    onCurrentTimeChanged(callback: (time: number) => void): void;
    onStateChanged(callback: (state: HonorVideoPlayerState) => void): void;
    runIfInitialized<T, U>(fn: () => U): U;
}
//# sourceMappingURL=HonorPlayer.d.ts.map