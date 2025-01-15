import load from 'load-script';
import { YTEvent } from './types/YTEvents';
export default (handleEvent) => {
    const iFrameReadyPromise = new Promise((resolve) => {
        if (window.YT && window.YT.Player && window.YT.Player instanceof Function) {
            // youtube iframe already loaded, resolve
            resolve(window.YT);
            return;
        }
        let protocol = window.location.protocol === 'http:' ? 'http:' : 'https:';
        console.log(protocol);
        load(protocol + '//www.youtube.com/iframe_api', (err) => {
            if (err) {
                console.log("ERROR");
                handleEvent(YTEvent.error);
            }
        });
        let existingValue = window.onYouTubeIframeAPIReady;
        window.onYouTubeIframeAPIReady = () => {
            if (existingValue) {
                existingValue();
            }
            if (window.YT !== undefined && window.YT.Player && window.YT.Player instanceof Function) {
                resolve(window.YT);
            }
        };
    });
    return iFrameReadyPromise;
};
