"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YoutubeError = exports.YoutubePlayerState = void 0;
/**
 * Youtube's iFrame API passes changes to the state of its video player in the form of a number. See [here](https://developers.google.com/youtube/iframe_api_reference#onStateChange) for more info.
 */
var YoutubePlayerState;
(function (YoutubePlayerState) {
    YoutubePlayerState[YoutubePlayerState["unstarted"] = -1] = "unstarted";
    YoutubePlayerState[YoutubePlayerState["ended"] = 0] = "ended";
    YoutubePlayerState[YoutubePlayerState["playing"] = 1] = "playing";
    YoutubePlayerState[YoutubePlayerState["paused"] = 2] = "paused";
    YoutubePlayerState[YoutubePlayerState["buffering"] = 3] = "buffering";
    YoutubePlayerState[YoutubePlayerState["videoCued"] = 5] = "videoCued";
})(YoutubePlayerState || (exports.YoutubePlayerState = YoutubePlayerState = {}));
/**
 * Youtube's iFrame API passes error data in the form of a number. See [here](https://developers.google.com/youtube/iframe_api_reference#onError) for more info.
 */
var YoutubeError;
(function (YoutubeError) {
    YoutubeError[YoutubeError["invalidParameter"] = 2] = "invalidParameter";
    YoutubeError[YoutubeError["playerError"] = 5] = "playerError";
    YoutubeError[YoutubeError["notFound"] = 100] = "notFound";
    YoutubeError[YoutubeError["invalidPermissions"] = 101] = "invalidPermissions";
    YoutubeError[YoutubeError["invalidPermissionsAlt"] = 150] = "invalidPermissionsAlt";
    YoutubeError[YoutubeError["apiLoadError"] = 400] = "apiLoadError";
})(YoutubeError || (exports.YoutubeError = YoutubeError = {}));
//# sourceMappingURL=YouTubeEvents.js.map