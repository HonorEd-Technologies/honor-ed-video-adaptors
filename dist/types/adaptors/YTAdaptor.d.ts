import { HonorPlayer } from "../../HonorPlayer";
import { HonorVideoConfiguration } from "../Shared/HonorVideoConfiguration";
export type YTConfig = {
    height: number;
    width: number;
    videoId: string;
    playerVars: Object;
    events?: Object;
};
export declare const bindPlayerToYoutubeAPI: (elementId: string, honorConfig: HonorVideoConfiguration, player: HonorPlayer) => Promise<void>;
//# sourceMappingURL=YTAdaptor.d.ts.map