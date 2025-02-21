import { type HonorVideoError } from '../../types/Shared/HonorVideoError';
import { type HonorVideoEventPayload } from '../../types/Shared/HonorVideoEvent';
import { type HonorVideoPlayerState } from '../../types/Shared/HonorVideoPlayerState';
export declare class HonorVideoEventEmitters {
    private stateChangeEmitter;
    private readyEmitter;
    private errorEmitter;
    private currentTimeEmitter;
    private playbackRateEmitter;
    private volumeEmitter;
    onReady: (callback: () => void) => () => void;
    onStateChange: (callback: (data: HonorVideoPlayerState) => void) => () => void;
    onError: (callback: (error: HonorVideoError) => void) => () => void;
    onCurrentTimeChange: (callback: (time: number) => void) => () => void;
    onPlaybackRateChange: (callback: (rate: number) => void) => () => void;
    onVolumeChange: (callback: (rate: number) => void) => () => void;
    triggerEvent: ({ eventType, data }: HonorVideoEventPayload) => void;
}
//# sourceMappingURL=HonorEventEmitter.d.ts.map