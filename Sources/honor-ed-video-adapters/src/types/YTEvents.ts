export enum YTEvent { 
  playerReady,
  stateChanged,
  error
}

export type YTEventHandler = (event: YTEvent) => void