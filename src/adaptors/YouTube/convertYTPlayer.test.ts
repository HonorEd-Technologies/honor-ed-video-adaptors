import MockPlayer from "./__mocks__/Player"
import convertYTPlayer from "./convertYTPlayer"

jest.mock("./__mocks__/Player")

describe("convertYTPlayerTests", () => { 
  const mockPlayer = jest.mocked(MockPlayer)
  beforeEach(() => { 
    mockPlayer.mockClear()
    window.YT = {
      Player: MockPlayer
    }
  })

  test("convertYTPlayer should not return an undefined object", () => { 
    const player = convertYTPlayer("", { })

    expect(player).toBeDefined()
  })

  test("play function should call the associated method on YoutubePlayer", () => { 
    const mockPlay = jest.fn()
    jest.spyOn(MockPlayer.prototype, 'playVideo')
      .mockImplementationOnce(mockPlay)

    const player = convertYTPlayer("", { })

    player?.playVideo()
    expect(mockPlay).toHaveBeenCalledTimes(1)
  })

  test("pause function should call the associated method on YoutubePlayer", () => { 
    const mockPause = jest.fn()
    jest.spyOn(MockPlayer.prototype, 'pauseVideo')
      .mockImplementationOnce(mockPause)

    const player = convertYTPlayer("", { })

    player?.pauseVideo()
    expect(mockPause).toHaveBeenCalledTimes(1)
  })

  test("stop function should call the associated method on YoutubePlayer", () => { 
    const mockStop = jest.fn()
    jest.spyOn(MockPlayer.prototype, 'stopVideo')
      .mockImplementationOnce(mockStop)

    const player = convertYTPlayer("", { })

    player?.stopVideo()
    expect(mockStop).toHaveBeenCalledTimes(1)
  })

  test("seekTo function should call the associated method on YoutubePlayer", () => { 
    const mockSeekTo = jest.fn()
    jest.spyOn(MockPlayer.prototype, 'seekTo')
      .mockImplementationOnce(mockSeekTo)

    const player = convertYTPlayer("", { })

    player?.seekTo(10, true)
    expect(mockSeekTo).toHaveBeenCalledWith(10, true)
    expect(mockSeekTo).toHaveBeenCalledTimes(1)
  })

  test("getDuration function should call the associated method on the Player object and return its value", () => {
    const mockDuration = 100
    const mockGetDuration = jest.fn().mockReturnValueOnce(mockDuration)
    jest.spyOn(MockPlayer.prototype, 'getDuration')
      .mockImplementationOnce(mockGetDuration)

    const player = convertYTPlayer("", { })

    const duration = player?.getDuration()

    expect(duration).toEqual(mockDuration)
    expect(mockGetDuration).toHaveBeenCalledTimes(1)
  })

  test("getCurrentTime function should call the associated method on the Player object and return its value", () => {
    const mockTime = 1
    const mockGetCurrentTime = jest.fn().mockReturnValueOnce(mockTime)
    jest.spyOn(MockPlayer.prototype, 'getCurrentTime')
      .mockImplementationOnce(mockGetCurrentTime)

    const player = convertYTPlayer("", { })

    const time = player?.getCurrentTime()

    expect(time).toEqual(mockTime)
    expect(mockGetCurrentTime).toHaveBeenCalledTimes(1)
  })
})