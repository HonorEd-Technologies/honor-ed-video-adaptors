"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YoutubeError = exports.YoutubePlayerState = void 0;
/**
 * Youtube's iFrame API passes changes to the state of its video player in the form of a number. See [here](https://developers.google.com/youtube/iframe_api_reference#onStateChange) for more info.
 */
exports.YoutubePlayerState = {
    unstarted: -1,
    ended: 0,
    playing: 1,
    paused: 2,
    buffering: 3,
    videoCued: 4
};
/**
 * Youtube's iFrame API passes error data in the form of a number. See [here](https://developers.google.com/youtube/iframe_api_reference#onError) for more info.
 */
exports.YoutubeError = {
    invalidParameter: 2,
    playerError: 5,
    notFound: 100,
    invalidPermissions: 101,
    invalidPermissionsAlt: 150,
    apiLoadError: 400
};
//# sourceMappingURL=YouTubeEvents.js.map