export default (elementId, config) => { 
  console.log(window.Vimeo)
  let player = new Vimeo.Player(elementId, config)
  return { 
    loadVideoById: (id, start_time, end_time) => player.loadVideoById({ id, start_time, end_time }),
    loadVideoByUrl: (url, start_time, end_time) => player.loadVideoByUrl({ url, start_time, end_time }),
    playVideo: () => player.play(),
    pauseVideo: () => player.pause(),
    seekTo: (seconds) => player.setCurrentTime(seconds),
    getDuration: () => player.getDuration(),
    getVideoLoadedFraction: () => player.getVideoLoadedFraction(),
    setVolume: (volume) =>  player.setVolume(volume),
    getVolume: () => player.getVolume(),
    getPlaybackRate: () => player.getPlaybackRate(),
    setPlaybackRate: (suggestedRate) => player.setPlaybackRate(suggestedRate),
    getCurrentTime: () => player.getCurrentTime(),
    getVideoUrl: () => player.getVideoUrl(),
    destroy: () => player.destroy(),
    getIframe: () => document.querySelector('iframe'),
    on: (event, callback) => player.on(event, callback)
  }
}