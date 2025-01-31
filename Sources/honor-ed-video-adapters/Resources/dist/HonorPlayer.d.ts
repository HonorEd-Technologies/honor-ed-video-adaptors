import { HonorVideoEventEmitters } from "./utils/Shared/HonorEventEmitter";
import { HonorVideoConfiguration } from "./types/Shared/HonorVideoConfiguration";
import { HonorVideoError } from "./types/Shared/HonorVideoError";
import { HonorVideoPlayerState } from "./types/Shared/HonorVideoPlayerState";
import { HonorVideoAdaptor } from "./adaptors/HonorVideoAdaptor";
export default class HonorPlayer {
    private initialized;
    private adaptor;
    emitter: HonorVideoEventEmitters;
    constructor(elementId: string, configuration: HonorVideoConfiguration);
    setAdaptor(adaptor: HonorVideoAdaptor): void;
    destroy: () => Promise<void>;
    getCurrentTime: () => Promise<number>;
    getDuration: () => Promise<number>;
    getPlaybackRate: () => Promise<number>;
    getVideoLoadedFraction: () => Promise<number>;
    getVolume: () => Promise<number>;
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
    initializeAdaptor: (elementId: string, config: HonorVideoConfiguration) => void;
}
//# sourceMappingURL=HonorPlayer.d.ts.map