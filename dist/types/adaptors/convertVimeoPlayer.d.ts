declare function _default(elementId: any, config: any): {
    loadVideoById: (id: any, start_time: any, end_time: any) => any;
    loadVideoByUrl: (url: any, start_time: any, end_time: any) => any;
    playVideo: () => any;
    pauseVideo: () => any;
    seekTo: (seconds: any) => any;
    getDuration: () => any;
    getVideoLoadedFraction: () => any;
    setVolume: (volume: any) => any;
    getVolume: () => any;
    getPlaybackRate: () => any;
    setPlaybackRate: (suggestedRate: any) => any;
    getCurrentTime: () => any;
    getVideoUrl: () => any;
    destroy: () => any;
    getIframe: () => HTMLIFrameElement | null;
    on: (event: any, callback: any) => any;
};
export default _default;
//# sourceMappingURL=convertVimeoPlayer.d.ts.map