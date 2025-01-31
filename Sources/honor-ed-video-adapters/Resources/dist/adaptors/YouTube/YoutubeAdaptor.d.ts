import HonorPlayer from "../../HonorPlayer";
import { HonorVideoAdaptor } from "../HonorVideoAdaptor";
import { HonorVideoConfiguration } from "../../types/Shared/HonorVideoConfiguration";
export type YoutubeConfig = {
    height: number;
    width: number;
    videoId: string;
    playerVars: Object;
    events?: Object;
};
/**
 * Once the Youtube API is loaded, you can instantiate a player based on an elementId and a configuration object. This function does just that, and returns an object containing methods that interact with the YT.Player.
 * @param elementId The id of the element to contain the iframe
 * @param honorConfig The configuration, storing values to control things like autoplay, the id of the video to play, etc.
 * @param player The HonorPlayer
 * @returns A `HonorVideoAdaptor`, a type exposing methods that, in this case, call the corresponding methods based on Youtube's iFrame API.
 */
export declare const initializeYoutubeAdaptor: (elementId: string, honorConfig: HonorVideoConfiguration, player: HonorPlayer) => HonorVideoAdaptor;
//# sourceMappingURL=YoutubeAdaptor.d.ts.map