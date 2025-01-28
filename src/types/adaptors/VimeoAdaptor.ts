import { HonorPlayer } from "../../HonorPlayer";
import loadVimeoAPI from "../../utils/loadVimeoAPI";
import { HonorVideoEventEmitters } from "../Shared/HonorEventEmitter";
import { HonorVideoConfiguration } from "../Shared/HonorVideoConfiguration";
import { HonorVideoEvent } from "../Shared/HonorVideoEvent";
import { HonorVideoPlayerState } from "../Shared/HonorVideoPlayerState";
import { VimeoError } from "../Vimeo/VimeoErrors";
import { VimeoEvent } from "../Vimeo/VimeoEvents";
import { HonorVideoAdaptor } from "./HonorVideoAdaptor";
import convertVimeoPlayer from "./convertVimeoPlayer";

type VimeoConfig = { 
  id: string,
  width: number,
  height: number,
  autoplay: boolean,
  controls: boolean,
  playsinline: boolean,
  vimeo_logo: boolean
}

type VimeoTimerEvent = { 
  duration: number,
  percent: number,
  seconds: number
}

export const bindPlayerToVimeoAPI = (elementId: string, honorConfig: HonorVideoConfiguration, player: HonorPlayer): Promise<void> => { 
  let config: VimeoConfig = { 
    id: honorConfig.videoId,
    width: honorConfig.width,
    height: honorConfig.height,
    autoplay: true,
    controls: honorConfig.controls,
    playsinline: honorConfig.playsInline,
    vimeo_logo: false
  }

  return new Promise<void>((resolve) => { 
    loadVimeoAPI(player.emitter.triggerEvent)
    .then(() => { 
      const vimeoPlayer = convertVimeoPlayer(elementId, config)
      vimeoPlayer.on(VimeoEvent.ready, () => { 
        player.emitter.triggerEvent(HonorVideoEvent.playerReady)
        player.emitter.triggerEvent(HonorVideoEvent.stateChanged, { data: HonorVideoPlayerState.unstarted })
      })
      vimeoPlayer.on(VimeoEvent.pause, () => { 
        player.emitter.triggerEvent(HonorVideoEvent.stateChanged, { data: HonorVideoPlayerState.paused })
      })
      vimeoPlayer.on(VimeoEvent.play, () => { 
        player.emitter.triggerEvent(HonorVideoEvent.stateChanged, { data: HonorVideoPlayerState.playing })
      })
      vimeoPlayer.on(VimeoEvent.buffering, () => { 
        player.emitter.triggerEvent(HonorVideoEvent.stateChanged, { data: HonorVideoPlayerState.buffering })
      })
      vimeoPlayer.on(VimeoEvent.timeUpdated, ({ seconds }: VimeoTimerEvent) => {
        player.emitter.triggerEvent(HonorVideoEvent.currentTimeChanged, { data: seconds })
      })
      vimeoPlayer.on(VimeoEvent.ended, () => { 
        player.emitter.triggerEvent(HonorVideoEvent.stateChanged, { data: HonorVideoPlayerState.ended })
      })
      vimeoPlayer.on(VimeoEvent.error, (error: VimeoError) => { 
        console.log("ERROR")
        console.log(error.message)
        console.log(error.name)
      });

      let adaptor: HonorVideoAdaptor = {
      destroy: () => vimeoPlayer.destroy(),
      getCurrentTime: function (): Promise<number> {
        return vimeoPlayer.getCurrentTime()
      },
      getDuration: function (): Promise<number> {
        return vimeoPlayer.getDuration()
      },
      getPlaybackRate: function (): Promise<number> {
        return vimeoPlayer.getPlaybackRate()
      },
      getVideoLoadedFraction: function (): Promise<number> {
        return vimeoPlayer.getVideoLoadedFraction()
      },
      getVolume: function (): Promise<number> {
        return vimeoPlayer.getVolume()
      },
      loadVideoById: function (videoId: string, startTime?: number, endTime?: number): Promise<void> {
        return vimeoPlayer.loadVideoById(videoId, startTime, endTime)
      },
      seekTo: function (seconds: number): Promise<void> {
        return vimeoPlayer.seekTo(seconds)
      },
      setPlaybackRate: function (rate: number): Promise<void> {
        return vimeoPlayer.setPlaybackRate(rate)
      },
      setSize: function (width: number, height: number) {
        const iFrame = vimeoPlayer.getIframe()
        if (iFrame) { 
          iFrame.style.width = `${width}px`
          iFrame.style.height = `${height}px`
        }
        return Promise.resolve()
      },
      setVolume: function (volume: number): Promise<void> {
        return vimeoPlayer.setVolume(volume)
      },
      playVideo: function (): Promise<void> {
        return vimeoPlayer.playVideo()
      },
      pauseVideo: function (): Promise<void> {
        return vimeoPlayer.pauseVideo()
      }
    }

    player.setAdaptor(adaptor)
    resolve()
    })
  })
}