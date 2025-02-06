export const enum HonorVideoEvent {
  playerReady,
  stateChanged,
  error,
  currentTimeChanged,
}

export type HonorVideoEventPayload = {
  data?: any
}
