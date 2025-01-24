import { YTEventEmitters } from "../YTEvents";
import { HonorPlayer } from "./HonorPlayer";
export type YTAdaptor = {
    loadVideoById: (videoId: string, startSeconds?: number, endSeconds?: number) => void;
    playVideo: () => void;
    pauseVideo: () => void;
    stopVideo: () => void;
};
export type YTConfig = {
    height: number;
    width: number;
    videoId: string;
    playerVars: Object;
    events?: Object;
};
export declare const bindAdaptorToAPI: (elementId: string, config: YTConfig, emitter: YTEventEmitters) => Promise<HonorPlayer>;
//# sourceMappingURL=YTAdaptor.d.ts.map