import { type HonorVideoError } from '../../types/Shared/HonorVideoError'
import {
  HonorVideoEvent,
  type HonorVideoEventPayload,
} from '../../types/Shared/HonorVideoEvent'
import { type HonorVideoPlayerState } from '../../types/Shared/HonorVideoPlayerState'

class HonorVideoEventEmitter<T> {
  private callbacks: ((data: T) => void)[] = []

  on = (callback: (data: T) => void) => {
    this.callbacks.push(callback)
    return () => {
      const idx = this.callbacks.indexOf(callback)
      if (idx !== -1) {
        this.callbacks.splice(idx, 1)
      }
    }
  }

  emit = (data: T): void => {
    for (const callback of this.callbacks) {
      callback(data)
    }
  }
}

export class HonorVideoEventEmitters {
  private stateChangeEmitter: HonorVideoEventEmitter<HonorVideoPlayerState> =
    new HonorVideoEventEmitter()
  private readyEmitter: HonorVideoEventEmitter<void> =
    new HonorVideoEventEmitter()
  private errorEmitter: HonorVideoEventEmitter<HonorVideoError> =
    new HonorVideoEventEmitter()
  private currentTimeEmitter: HonorVideoEventEmitter<number> =
    new HonorVideoEventEmitter()
  private playbackRateEmitter: HonorVideoEventEmitter<number> =
    new HonorVideoEventEmitter()
  private volumeEmitter: HonorVideoEventEmitter<number> =
    new HonorVideoEventEmitter()

  onReady = (callback: () => void): () => void => this.readyEmitter.on(callback)
  onStateChange = (callback: (data: HonorVideoPlayerState) => void): () => void =>
    this.stateChangeEmitter.on(callback)
  onError = (callback: (error: HonorVideoError) => void): () => void =>
    this.errorEmitter.on(callback)
  onCurrentTimeChange = (callback: (time: number) => void): () => void =>
    this.currentTimeEmitter.on(callback)
  onPlaybackRateChange = (callback: (rate: number) => void): () => void =>
    this.playbackRateEmitter.on(callback)
  onVolumeChange = (callback: (rate: number) => void): () => void =>
    this.volumeEmitter.on(callback)

  triggerEvent = (
    event: HonorVideoEvent,
    { data }: HonorVideoEventPayload = {}
  ): void => {
    switch (event) {
      case HonorVideoEvent.playerReady:
        this.readyEmitter.emit()
        break
      case HonorVideoEvent.stateChanged:
        if (<HonorVideoPlayerState>data) {
          this.stateChangeEmitter.emit(<HonorVideoPlayerState>data)
        }
        break
      case HonorVideoEvent.error:
        if (<HonorVideoError>data) {
          this.errorEmitter.emit(<HonorVideoError>data)
        }
        break
      case HonorVideoEvent.currentTimeChanged:
        if (<number>data) {
          this.currentTimeEmitter.emit(<number>data)
        }
        break
      case HonorVideoEvent.playbackRateChanged:
        if (<number>data) {
          this.playbackRateEmitter.emit(<number>data)
        }
        break
      case HonorVideoEvent.volumeChanged:
        if (<number>data) {
          this.volumeEmitter.emit(<number>data)
        }
        break
    }
  }
}

export type HonorVideoEventHandler = (
  event: HonorVideoEvent,
  payload: HonorVideoEventPayload
) => void
