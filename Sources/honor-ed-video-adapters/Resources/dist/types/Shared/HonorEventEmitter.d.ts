import { HonorVideoError } from "./HonorVideoError";
import { HonorVideoEvent, HonorVideoEventPayload } from "./HonorVideoEvent";
import { HonorVideoPlayerState } from "./HonorVideoPlayerState";
export declare class HonorVideoEventEmitters {
    private stateChangeEmitter;
    private readyEmitter;
    private errorEmitter;
    private currentTimeEmitter;
    onReady: (callback: () => void) => void;
    onStateChange: (callback: (data: HonorVideoPlayerState) => void) => void;
    onError: (callback: (error: HonorVideoError) => void) => void;
    onCurrentTimeChange: (callback: (time: number) => void) => void;
    triggerEvent: (event: HonorVideoEvent, { data }?: HonorVideoEventPayload) => void;
}
export type HonorVideoEventHandler = (event: HonorVideoEvent, payload: HonorVideoEventPayload) => void;
//# sourceMappingURL=HonorEventEmitter.d.ts.map