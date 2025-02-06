import HonorPlayer from "../../HonorPlayer";
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
export declare const youtubeEventHandler: (player: HonorPlayer) => Object;
//# sourceMappingURL=events.d.ts.map