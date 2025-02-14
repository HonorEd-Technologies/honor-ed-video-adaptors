"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.youtubeEventHandler = void 0;
const HonorVideoError_1 = require("../../types/Shared/HonorVideoError");
const HonorVideoEvent_1 = require("../../types/Shared/HonorVideoEvent");
const HonorVideoPlayerState_1 = require("../../types/Shared/HonorVideoPlayerState");
const YouTubeEvents_1 = require("../../types/YouTube/YouTubeEvents");
const parseYTPlayerState = (state) => {
    switch (state) {
        case YouTubeEvents_1.YoutubePlayerState.unstarted:
            return HonorVideoPlayerState_1.HonorVideoPlayerState.unstarted;
        case YouTubeEvents_1.YoutubePlayerState.playing:
            return HonorVideoPlayerState_1.HonorVideoPlayerState.playing;
        case YouTubeEvents_1.YoutubePlayerState.paused:
            return HonorVideoPlayerState_1.HonorVideoPlayerState.paused;
        case YouTubeEvents_1.YoutubePlayerState.buffering:
            return HonorVideoPlayerState_1.HonorVideoPlayerState.buffering;
        case YouTubeEvents_1.YoutubePlayerState.ended:
            return HonorVideoPlayerState_1.HonorVideoPlayerState.ended;
        case YouTubeEvents_1.YoutubePlayerState.videoCued:
            return undefined; // unneeded for our purposes
    }
};
const parseYTPlayerError = (error) => {
    switch (error) {
        case YouTubeEvents_1.YoutubeError.apiLoadError:
            return HonorVideoError_1.HonorVideoErrorType.apiLoadError;
        case (YouTubeEvents_1.YoutubeError.invalidPermissions, YouTubeEvents_1.YoutubeError.invalidPermissionsAlt):
            return HonorVideoError_1.HonorVideoErrorType.invalidPermissions;
        case YouTubeEvents_1.YoutubeError.invalidParameter:
            return HonorVideoError_1.HonorVideoErrorType.playerError;
        case YouTubeEvents_1.YoutubeError.playerError:
            return HonorVideoError_1.HonorVideoErrorType.playerError;
        case YouTubeEvents_1.YoutubeError.notFound:
            return HonorVideoError_1.HonorVideoErrorType.notFound;
        default:
            return HonorVideoError_1.HonorVideoErrorType.unknown;
    }
};
const youtubeStateChangeHandler = (player) => {
    // youtube has no event for updating the current time of the video, so we need to set up an interval to publish the event
    let timePoll;
    const startTimePoll = () => {
        timePoll = setInterval(() => {
            const time = player.getCurrentTime();
            player.emitter.triggerEvent(HonorVideoEvent_1.HonorVideoEvent.currentTimeChanged, {
                data: time,
            });
        }, 500);
    };
    const onStateChange = ({ data }) => {
        const castData = data;
        if (!castData) {
            // if the raw youtube player state cannot be converted into `YoutubePlayerState`, there is a state that we have not accounted for and we should emit an error
            player.emitter.triggerEvent(HonorVideoEvent_1.HonorVideoEvent.error, {
                data: {
                    type: HonorVideoError_1.HonorVideoErrorType.adaptorLayerError,
                    message: `Unknown player state received: ${data}`,
                },
            });
            return;
        }
        // convert the `YoutubePlayerState` into an `HonorVideoPlayerState`
        const honorPlayerState = parseYTPlayerState(castData);
        if (!honorPlayerState) {
            player.emitter.triggerEvent(HonorVideoEvent_1.HonorVideoEvent.error, {
                data: {
                    type: HonorVideoError_1.HonorVideoErrorType.adaptorLayerError,
                    message: `Could not convert Youtube player event: ${castData} into Honor Event`,
                },
            });
            return;
        }
        player.emitter.triggerEvent(HonorVideoEvent_1.HonorVideoEvent.stateChanged, {
            data: honorPlayerState,
        });
        if (timePoll !== undefined &&
            (YouTubeEvents_1.YoutubePlayerState.ended === data ||
                YouTubeEvents_1.YoutubePlayerState.unstarted === data)) {
            // if we are polling for the current time and the video has ended or is unplayed, we should cancel the interval polling for the elapsed time
            clearInterval(timePoll);
        }
        else if (timePoll === undefined) {
            // if there is no interval and the video is playing or paused, start the interval polling
            startTimePoll();
        }
    };
    return onStateChange;
};
const youtubeErrorHandler = (player) => {
    return ({ data }) => {
        var castData = data;
        var error = HonorVideoError_1.HonorVideoErrorType.unknown;
        if (castData) {
            error = parseYTPlayerError(castData);
        }
        player.emitter.triggerEvent(HonorVideoEvent_1.HonorVideoEvent.error, {
            data: { type: error },
        });
    };
};
/**
 * Youtube's video player does event handling based on an object attached to the initial configuration object of the following format:
 * {
 *  onReady: () => void,
 *  onStateChange: ({ data: any }) => void,
 *  onError: ({ data: any }) => void
 * }
 * This function takes in an `HonorPlayer` and returns an object conforming to the above, with each property a function that:
 * 1. Processes raw object events coming from the Youtube API ({ data: any })
 * 2. Converts them into TS types specific to Youtube e.g. ({ data: any }) => YoutubePlayerState
 * 3. Converts those into the appropriate Honor type e.g. (YoutubePlayerState) => HonorVideoPlayerState
 * 4. Sends those into the player's event emitter.
 * @param player The HonorPlayer
 * @returns an object containing the functions passed into the YT.Player
 */
const youtubeEventHandler = (player) => {
    const onReady = () => {
        player.emitter.triggerEvent(HonorVideoEvent_1.HonorVideoEvent.playerReady);
    };
    const onStateChange = youtubeStateChangeHandler(player);
    const onError = youtubeErrorHandler(player);
    return {
        onReady,
        onStateChange,
        onError,
    };
};
exports.youtubeEventHandler = youtubeEventHandler;
//# sourceMappingURL=events.js.map