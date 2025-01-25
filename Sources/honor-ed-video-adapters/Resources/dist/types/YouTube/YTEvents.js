"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YTError = exports.YTPlayerState = void 0;
var YTPlayerState;
(function (YTPlayerState) {
    YTPlayerState[YTPlayerState["unstarted"] = -1] = "unstarted";
    YTPlayerState[YTPlayerState["ended"] = 0] = "ended";
    YTPlayerState[YTPlayerState["playing"] = 1] = "playing";
    YTPlayerState[YTPlayerState["paused"] = 2] = "paused";
    YTPlayerState[YTPlayerState["buffering"] = 3] = "buffering";
    YTPlayerState[YTPlayerState["videoCued"] = 5] = "videoCued";
})(YTPlayerState || (exports.YTPlayerState = YTPlayerState = {}));
var YTError;
(function (YTError) {
    YTError[YTError["invalidParameter"] = 2] = "invalidParameter";
    YTError[YTError["playerError"] = 5] = "playerError";
    YTError[YTError["notFound"] = 100] = "notFound";
    YTError[YTError["invalidPermissions"] = 101] = "invalidPermissions";
    YTError[YTError["invalidPermissionsAlt"] = 150] = "invalidPermissionsAlt";
    YTError[YTError["apiLoadError"] = 400] = "apiLoadError";
})(YTError || (exports.YTError = YTError = {}));
//# sourceMappingURL=YTEvents.js.map