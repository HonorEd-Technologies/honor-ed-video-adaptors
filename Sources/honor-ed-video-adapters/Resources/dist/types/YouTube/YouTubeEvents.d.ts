/**
 * Whenever Youtube's iFrame API publishes an event, it does so by running the closures passed in the `config.events` object.
 * For some events, the iFrame API passes in an object with relevant data (e.g. a number indicating the current state of the player.)
 * See [here](https://developers.google.com/youtube/iframe_api_reference#Events) for more info.
 */
export type YoutubeEvent = {
    data: number | undefined;
};
/**
 * Youtube's iFrame API passes changes to the state of its video player in the form of a number. See [here](https://developers.google.com/youtube/iframe_api_reference#onStateChange) for more info.
 */
export declare const YoutubePlayerState: {
    readonly unstarted: -1;
    readonly ended: 0;
    readonly playing: 1;
    readonly paused: 2;
    readonly buffering: 3;
    readonly videoCued: 5;
};
export type YoutubePlayerState = (typeof YoutubePlayerState)[keyof typeof YoutubePlayerState];
/**
 * Youtube's iFrame API passes error data in the form of a number. See [here](https://developers.google.com/youtube/iframe_api_reference#onError) for more info.
 */
export declare const YoutubeError: {
    readonly invalidParameter: 2;
    readonly playerError: 5;
    readonly notFound: 100;
    readonly invalidPermissions: 101;
    readonly invalidPermissionsAlt: 150;
    readonly apiLoadError: 400;
};
export type YoutubeError = (typeof YoutubeError)[keyof typeof YoutubeError];
//# sourceMappingURL=YouTubeEvents.d.ts.map