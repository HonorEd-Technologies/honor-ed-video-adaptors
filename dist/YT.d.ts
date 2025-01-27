import { HonorPlayer } from "./HonorPlayer";
declare global {
    interface Window {
        YT?: {
            Player: Function;
        };
        Vimeo?: {
            Player: Function;
        };
        HonorPlayer: HonorPlayer;
        onYouTubeIframeAPIReady?: () => void;
        setupPlayer?: Function;
    }
}
//# sourceMappingURL=YT.d.ts.map