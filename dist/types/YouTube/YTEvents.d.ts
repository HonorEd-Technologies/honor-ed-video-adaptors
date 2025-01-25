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
//# sourceMappingURL=YTEvents.d.ts.map