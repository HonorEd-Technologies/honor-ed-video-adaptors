export enum VimeoEvent { 
  ready = 'loaded',
  play = 'play',
  pause = 'pause',
  buffering =  'bufferstart',
  timeUpdated = 'timeupdate',
  ended = 'ended',
  error = 'error'
}