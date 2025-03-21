import { YoutubeAdaptor } from "./adaptors";
import MockPlayer from "./adaptors/YouTube/__mocks__/Player";
import { HonorPlayer } from "./HonorPlayer";
import { HonorVideoEvent, HonorVideoPlayerState, type HonorVideoConfiguration } from "./types";

jest.mock("./utils/loadYoutubeAPI", () => { return (): Promise<void> => Promise.resolve() })

const defaultConfiguration: HonorVideoConfiguration = {
  autoplay: false,
  height: 0,
  width: 0,
  controls: false,
  fullscreenEnabled: false,
  playsInline: false,
  videoId: ""
}

describe("HonorPlayer Tests", () => { 
  window.YT = { 
    Player: MockPlayer
  }

  test("Upon creation, should call initializeAdaptor with args", () => {
    const mockInitialization = jest.spyOn(HonorPlayer.prototype, 'initializeAdaptor').mockResolvedValueOnce()
    const adaptor = new YoutubeAdaptor()
    const _player = new HonorPlayer("", defaultConfiguration, adaptor)

    expect(mockInitialization).toHaveBeenCalledWith("", defaultConfiguration)
    expect(mockInitialization.mock.calls[0][0]).toBe("")
    expect(mockInitialization.mock.calls[0][1]).toStrictEqual(defaultConfiguration)
  })

  test("Upon creation, should call initialize function on adaptor", () => { 
    const mockInitialize = jest.fn().mockImplementationOnce((_elementId: string, _config: HonorVideoConfiguration, _player: HonorPlayer) => Promise.resolve())
    const adaptor = new YoutubeAdaptor()
    adaptor.initialize = mockInitialize
    const player = new HonorPlayer("", defaultConfiguration, adaptor)

    expect(mockInitialize).toHaveBeenCalledWith("", defaultConfiguration, player)
  })

  test("Once initialized, playingVideo calls associated method on the adaptor", () => { 
    const mockPlay = jest.fn()
    const adaptor = new YoutubeAdaptor()
    adaptor.playVideo = mockPlay
    const player = new HonorPlayer("", defaultConfiguration, adaptor)

    player.playVideo()

    expect(mockPlay).toHaveBeenCalledTimes(1)
  })

  test("Once initialized, pauseVideo calls associated method on the adaptor", () => {
    const mockPause = jest.fn()
    const adaptor = new YoutubeAdaptor()
    adaptor.pauseVideo = mockPause
    const player = new HonorPlayer("", defaultConfiguration, adaptor)

    player.pauseVideo()

    expect(mockPause).toHaveBeenCalledTimes(1)
  })

  test("Once initialized, stopVideo calls associated method on the adaptor", () => {
    const mockStop = jest.fn()
    const adaptor = new YoutubeAdaptor()
    adaptor.stopVideo = mockStop
    const player = new HonorPlayer("", defaultConfiguration, adaptor)

    player.stopVideo()

    expect(mockStop).toHaveBeenCalledTimes(1)
  })

  test("Once initialized, setVolume calls associated method on the adaptor", () => {
    const mockSetVolume = jest.fn()
    const adaptor = new YoutubeAdaptor()
    adaptor.setVolume = mockSetVolume
    const player = new HonorPlayer("", defaultConfiguration, adaptor)

    player.setVolume(0.5)

    expect(mockSetVolume).toHaveBeenCalledWith(0.5)
  })

  test("Once initialized, seekTo calls associated method on the adaptor", () => {
    const mockSeekTo = jest.fn()
    const adaptor = new YoutubeAdaptor()
    adaptor.seekTo = mockSeekTo
    const player = new HonorPlayer("", defaultConfiguration, adaptor)

    player.seekTo(10)

    expect(mockSeekTo).toHaveBeenCalledWith(10)
  })

  test("When ready event received, calls associated callback", () => { 
    const onReady = jest.fn()

    const adaptor = new YoutubeAdaptor()
    const player = new HonorPlayer("", defaultConfiguration, adaptor)

    player.onReady(onReady)

    player.emitter.triggerEvent(HonorVideoEvent.playerReady)

    expect(onReady).toHaveBeenCalledTimes(1)
  })

  test("When state change event received, calls associated callback", () => { 
    const onStateChange = jest.fn()
    const onStateChange2 = jest.fn()

    const adaptor = new YoutubeAdaptor()
    const player = new HonorPlayer("", defaultConfiguration, adaptor)

    player.onStateChanged(onStateChange)
    player.onStateChanged(onStateChange2)

    player.emitter.triggerEvent(HonorVideoEvent.stateChanged, { data: HonorVideoPlayerState.playing })

    expect(onStateChange).toHaveBeenCalledWith(HonorVideoPlayerState.playing)
    expect(onStateChange2).toHaveBeenCalledWith(HonorVideoPlayerState.playing)
  })
})