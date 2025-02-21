export enum HonorVideoEvent {
  playerReady,
  stateChanged,
  error,
  currentTimeChanged,
  playbackRateChanged,
  volumeChanged,
}

export type HonorVideoEventPayload = {
  data?: any
}
