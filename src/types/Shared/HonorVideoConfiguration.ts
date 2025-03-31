export type HonorVideoConfiguration = {
  autoplay: boolean
  height: number
  width: number
  controls: boolean
  fullscreenEnabled: boolean
  playsInline: boolean
  videoId: string
  keys?: { 
    youtubeApiKey?: string | undefined
  }
}
