import { HonorPlayer } from "../../HonorPlayer";
export type YTConfig = {
    height: number;
    width: number;
    videoId: string;
    playerVars: Object;
    events?: Object;
};
export declare const bindPlayerToYoutubeAPI: (elementId: string, config: YTConfig, player: HonorPlayer) => Promise<void>;
//# sourceMappingURL=YTAdaptor.d.ts.map