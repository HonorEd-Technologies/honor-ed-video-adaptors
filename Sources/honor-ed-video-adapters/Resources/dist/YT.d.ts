import { HonorPlayer } from "./types/adaptors/HonorPlayer";
import { YTEventListeners } from "./types/YTEvents";
declare global {
    interface Window {
        YT?: {
            Player: Function;
        };
        HonorPlayer?: HonorPlayer;
        eventListeners?: YTEventListeners;
        onYouTubeIframeAPIReady?: () => void;
        setupPlayer?: Function;
    }
}
//# sourceMappingURL=YT.d.ts.map