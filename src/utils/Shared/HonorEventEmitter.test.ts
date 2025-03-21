import { HonorVideoEventEmitters } from './HonorEventEmitter'
import { HonorVideoEvent } from '../../types/Shared/HonorVideoEvent'
import { type HonorVideoError } from '../../types/Shared/HonorVideoError'
import { HonorVideoPlayerState } from '../../types/Shared/HonorVideoPlayerState'

describe('HonorVideoEventEmitters', () => {
  let emitters: HonorVideoEventEmitters

  beforeEach(() => {
    emitters = new HonorVideoEventEmitters()
  })

  test('should call onReady callback when playerReady event is triggered', () => {
    const callback = jest.fn()
    emitters.onReady(callback)
    emitters.triggerEvent(HonorVideoEvent.playerReady)
    expect(callback).toHaveBeenCalled()
  })

  test('should call onStateChange callback with correct data when stateChanged event is triggered', () => {
    const callback = jest.fn()
    const state: HonorVideoPlayerState = HonorVideoPlayerState.playing
    emitters.onStateChange(callback)
    emitters.triggerEvent(HonorVideoEvent.stateChanged, { data: state })
    expect(callback).toHaveBeenCalledWith(state)
  })

  test('should call onError callback with correct data when error event is triggered', () => {
    const callback = jest.fn()
    const error: HonorVideoError = { code: 1 }
    emitters.onError(callback)
    emitters.triggerEvent(HonorVideoEvent.error, { data: error })
    expect(callback).toHaveBeenCalledWith(error)
  })

  test('should call onCurrentTimeChange callback with correct data when currentTimeChanged event is triggered', () => {
    const callback = jest.fn()
    const currentTime = 120
    emitters.onCurrentTimeChange(callback)
    emitters.triggerEvent(HonorVideoEvent.currentTimeChanged, { data: currentTime })
    expect(callback).toHaveBeenCalledWith(currentTime)
  })

  test('should call onPlaybackRateChange callback with correct data when playbackRateChanged event is triggered', () => {
    const callback = jest.fn()
    const playbackRate = 1.5
    emitters.onPlaybackRateChange(callback)
    emitters.triggerEvent(HonorVideoEvent.playbackRateChanged, { data: playbackRate })
    expect(callback).toHaveBeenCalledWith(playbackRate)
  })

  test('should call onVolumeChange callback with correct data when volumeChanged event is triggered', () => {
    const callback = jest.fn()
    const volume = 0.8
    emitters.onVolumeChange(callback)
    emitters.triggerEvent(HonorVideoEvent.volumeChanged, { data: volume })
    expect(callback).toHaveBeenCalledWith(volume)
  })
})