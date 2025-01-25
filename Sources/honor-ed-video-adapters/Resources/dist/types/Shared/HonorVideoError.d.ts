export declare const enum HonorVideoErrorType {
    playerError = 1,
    notFound = 2,
    notInitialized = 3,
    apiLoadError = 4,
    adaptorLayerError = 5,
    invalidPermissions = 6,
    unknown = -1
}
export type HonorVideoError = {
    code: HonorVideoErrorType;
    message?: string;
};
//# sourceMappingURL=HonorVideoError.d.ts.map