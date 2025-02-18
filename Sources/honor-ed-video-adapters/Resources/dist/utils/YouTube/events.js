import { HonorVideoErrorType } from '../../types/Shared/HonorVideoError';
import { HonorVideoEvent } from '../../types/Shared/HonorVideoEvent';
import { HonorVideoPlayerState } from '../../types/Shared/HonorVideoPlayerState';
import { YoutubeError, YoutubePlayerState, } from '../../types/YouTube/YouTubeEvents';
const parseYTPlayerState = (state) => {
    switch (state) {
        case YoutubePlayerState.unstarted:
            return HonorVideoPlayerState.unstarted;
        case YoutubePlayerState.playing:
            return HonorVideoPlayerState.playing;
        case YoutubePlayerState.paused:
            return HonorVideoPlayerState.paused;
        case YoutubePlayerState.buffering:
            return HonorVideoPlayerState.buffering;
        case YoutubePlayerState.ended:
            return HonorVideoPlayerState.ended;
        case YoutubePlayerState.videoCued:
            return undefined; // unneeded for our purposes
    }
};
const parseYTPlayerError = (error) => {
    switch (error) {
        case YoutubeError.apiLoadError:
            return HonorVideoErrorType.apiLoadError;
        case (YoutubeError.invalidPermissions, YoutubeError.invalidPermissionsAlt):
            return HonorVideoErrorType.invalidPermissions;
        case YoutubeError.invalidParameter:
            return HonorVideoErrorType.playerError;
        case YoutubeError.playerError:
            return HonorVideoErrorType.playerError;
        case YoutubeError.notFound:
            return HonorVideoErrorType.notFound;
        default:
            return HonorVideoErrorType.unknown;
    }
};
const youtubeReadyHandler = (player) => {
    return () => {
        player.emitter.triggerEvent(HonorVideoEvent.playerReady);
        // youtube has no event for updating the current volume of the video, so we need to set up an interval to publish the event
        setInterval(() => {
            const volume = player.getVolume();
            player.emitter.triggerEvent(HonorVideoEvent.volumeChanged, {
                data: volume
            });
        }, 250);
    };
};
const youtubeStateChangeHandler = (player) => {
    // youtube has no event for updating the current time of the video, so we need to set up an interval to publish the event
    let timePoll;
    const startTimePoll = () => {
        timePoll = setInterval(() => {
            const time = player.getCurrentTime();
            player.emitter.triggerEvent(HonorVideoEvent.currentTimeChanged, {
                data: time,
            });
        }, 500);
    };
    const onStateChange = ({ data }) => {
        const castData = data;
        if (!castData) {
            // if the raw youtube player state cannot be converted into `YoutubePlayerState`, there is a state that we have not accounted for and we should emit an error
            player.emitter.triggerEvent(HonorVideoEvent.error, {
                data: {
                    type: HonorVideoErrorType.adaptorLayerError,
                    message: `Unknown player state received: ${data}`,
                },
            });
            return;
        }
        // convert the `YoutubePlayerState` into an `HonorVideoPlayerState`
        const honorPlayerState = parseYTPlayerState(castData);
        if (!honorPlayerState) {
            player.emitter.triggerEvent(HonorVideoEvent.error, {
                data: {
                    type: HonorVideoErrorType.adaptorLayerError,
                    message: `Could not convert Youtube player event: ${castData} into Honor Event`,
                },
            });
            return;
        }
        player.emitter.triggerEvent(HonorVideoEvent.stateChanged, {
            data: honorPlayerState,
        });
        if (timePoll !== undefined &&
            (YoutubePlayerState.ended === data ||
                YoutubePlayerState.unstarted === data)) {
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
        var error = HonorVideoErrorType.unknown;
        if (castData) {
            error = parseYTPlayerError(castData);
        }
        player.emitter.triggerEvent(HonorVideoEvent.error, {
            data: { type: error },
        });
    };
};
const youtubePlaybackHandler = (player) => {
    return ({ data }) => {
        const rate = data;
        if (rate) {
            player.emitter.triggerEvent(HonorVideoEvent.playbackRateChanged, {
                data: rate
            });
        }
    };
};
const youtubeVolumeHandler = (player) => {
    return ({ data }) => {
        const volume = data;
        if (volume) {
            player.emitter.triggerEvent(HonorVideoEvent.volumeChanged, {
                data: volume
            });
        }
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
export const youtubeEventHandler = (player) => {
    const onReady = youtubeReadyHandler(player);
    const onStateChange = youtubeStateChangeHandler(player);
    const onError = youtubeErrorHandler(player);
    const onPlaybackRateChange = youtubePlaybackHandler(player);
    return {
        onReady,
        onStateChange,
        onError,
        onPlaybackRateChange,
    };
};
//# sourceMappingURL=events.js.map