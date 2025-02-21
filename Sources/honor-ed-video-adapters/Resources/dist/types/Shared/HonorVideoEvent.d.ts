import { type HonorVideoError } from "./HonorVideoError";
import { type HonorVideoPlayerState } from "./HonorVideoPlayerState";
export declare enum HonorVideoEvent {
    playerReady = 0,
    stateChanged = 1,
    error = 2,
    currentTimeChanged = 3,
    playbackRateChanged = 4,
    volumeChanged = 5
}
export type HonorVideoEventPayload = {
    eventType: HonorVideoEvent;
    data: unknown;
} & ({
    eventType: HonorVideoEvent.playerReady;
    data: null;
} | {
    eventType: HonorVideoEvent.currentTimeChanged;
    data: number;
} | {
    eventType: HonorVideoEvent.error;
    data: HonorVideoError;
} | {
    eventType: HonorVideoEvent.stateChanged;
    data: HonorVideoPlayerState;
} | {
    eventType: HonorVideoEvent.playbackRateChanged;
    data: number;
} | {
    eventType: HonorVideoEvent.volumeChanged;
    data: number;
});
//# sourceMappingURL=HonorVideoEvent.d.ts.map