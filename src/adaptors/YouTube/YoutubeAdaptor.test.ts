import { YoutubeAdaptor } from "./YoutubeAdaptor";

describe('Youtube Adaptor Tests', () => {
  let adaptor: YoutubeAdaptor

  beforeEach(() => { 
    adaptor = new YoutubeAdaptor()
  })

  test("play function should call the associated method on its YTPlayer", () => { 
    const mockPlay = jest.fn()
    
    adaptor.YTPlayer = { 
      playVideo: mockPlay
    }

    adaptor.playVideo()

    expect(mockPlay).toHaveBeenCalledTimes(1)
  })

  test("pause function should call the associated method on its YTPlayer", () => { 
    const mockPause = jest.fn()
    
    adaptor.YTPlayer = { 
      pauseVideo: mockPause
    }

    adaptor.pauseVideo()

    expect(mockPause).toHaveBeenCalledTimes(1)
  })

  test("stop function should call the associated method on its YTPlayer", () => { 
    const mockStop = jest.fn()
    
    adaptor.YTPlayer = { 
      stopVideo: mockStop
    }

    adaptor.stopVideo()

    expect(mockStop).toHaveBeenCalledTimes(1)
  })

  test("seekTo function should call the associated method on its YTPlayer", () => { 
    const mockSeekTo = jest.fn()
    
    adaptor.YTPlayer = { 
      seekTo: mockSeekTo
    }

    adaptor.seekTo(10)

    expect(mockSeekTo).toHaveBeenCalledWith(10)
    expect(mockSeekTo).toHaveBeenCalledTimes(1)
  })

  test("getDuration function should call the associated method on its YTPlayer and return its value", () => {
    const mockDuration = 100
    const mockGetDuration = jest.fn().mockReturnValue(mockDuration)
    
    adaptor.YTPlayer = { 
      getDuration: mockGetDuration
    }

    const duration = adaptor.getDuration()

    expect(duration).toEqual(mockDuration)
    expect(mockGetDuration).toHaveBeenCalledTimes(1)
  })

  test("getCurrentTime function should call the associated method on its YTPlayer and return its value", () => {
    const mockTime = 1
    const mockGetCurrentTime = jest.fn().mockReturnValue(mockTime)
    
    adaptor.YTPlayer = { 
      getCurrentTime: mockGetCurrentTime
    }

    const time = adaptor.getCurrentTime()

    expect(time).toEqual(mockTime)
    expect(mockGetCurrentTime).toHaveBeenCalledTimes(1)
  })
  
  test("getCurrentVolume scales the domain specific volume to [0,1]", () => { 
    const mockVolume = 70
    const mockGetVolume = jest.fn().mockReturnValue(mockVolume)

    adaptor.YTPlayer = { 
      getVolume: mockGetVolume
    }

    const volume = adaptor.getVolume()

    expect(volume).toEqual(mockVolume / 100)
    expect(mockGetVolume).toHaveBeenCalledTimes(1)
  })
})