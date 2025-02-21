import { type HonorVideoError } from "./HonorVideoError"
import { type HonorVideoPlayerState } from "./HonorVideoPlayerState"

export enum HonorVideoEvent {
  playerReady,
  stateChanged,
  error,
  currentTimeChanged,
  playbackRateChanged,
  volumeChanged,
}

export type HonorVideoEventPayload = { 
  eventType: HonorVideoEvent
  data: unknown
} 
& 
(
  { 
    eventType: HonorVideoEvent.playerReady,
    data: null
  }
| {
    eventType: HonorVideoEvent.currentTimeChanged,
    data: number
  }
| {
    eventType: HonorVideoEvent.error,
    data: HonorVideoError
  }
| {
    eventType: HonorVideoEvent.stateChanged,
    data: HonorVideoPlayerState
  }
| {
    eventType: HonorVideoEvent.playbackRateChanged,
    data: number
}
| { 
    eventType: HonorVideoEvent.volumeChanged,
    data: number
  }
)
