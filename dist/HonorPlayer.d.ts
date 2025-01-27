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
    destroy: () => Promise<void>;
    getCurrentTime: () => Promise<number>;
    getDuration: () => Promise<number>;
    getPlaybackRate: () => Promise<number>;
    getVideoLoadedFraction: () => Promise<number>;
    getVolume: () => Promise<number>;
    loadVideoById: (videoId: string, startTime?: number, endTime?: number) => Promise<void>;
    seekTo: (seconds: number) => Promise<void>;
    setPlaybackRate: (rate: number) => Promise<void>;
    setSize: (width: number, height: number) => Promise<void>;
    setVolume: (volume: number) => Promise<void>;
    playVideo: () => Promise<void>;
    pauseVideo: () => Promise<void>;
    onReady(callback: () => void): void;
    onError(callback: (error: HonorVideoError) => void): void;
    onCurrentTimeChanged(callback: (time: number) => void): void;
    onStateChanged(callback: (state: HonorVideoPlayerState) => void): void;
    runIfInitialized<T, U>(fn: () => Promise<U>): Promise<U>;
}
//# sourceMappingURL=HonorPlayer.d.ts.map