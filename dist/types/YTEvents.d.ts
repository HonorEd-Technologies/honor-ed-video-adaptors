export declare const enum YTEventType {
    playerReady = 0,
    stateChanged = 1,
    error = 2,
    currentTimeChanged = 3
}
export type YTEvent = {
    data?: any;
};
export declare const enum YTPlayerState {
    unstarted = -1,
    ended = 0,
    playing = 1,
    paused = 2,
    buffering = 3,
    videoCued = 5
}
export declare enum YTError {
    invalidParameter = 2,
    playerError = 5,
    notFound = 100,
    invalidPermissions = 101,
    invalidPermissionsAlt = 150,
    apiLoadError = 400
}
export type YTEventListeners = {
    onReady: (callback: () => void) => void;
    onStateChanged: (callback: (state: YTPlayerState) => void) => void;
    onError: (callback: (error: YTError) => void) => void;
    onCurrentTimeChanged: (callback: (time: number) => void) => void;
};
export declare class YTEventEmitters {
    private stateChangeEmitter;
    private readyEmitter;
    private errorEmitter;
    private currentTimeEmitter;
    onReady: (callback: () => void) => void;
    onStateChange: (callback: (data: YTPlayerState) => void) => void;
    onError: (callback: (error: YTError) => void) => void;
    onCurrentTimeChange: (callback: (time: number) => void) => void;
    triggerEvent: (event: YTEventType, { data }?: YTEvent) => void;
}
export type YTEventHandler = (event: YTEventType, payload: YTEvent) => void;
//# sourceMappingURL=YTEvents.d.ts.map