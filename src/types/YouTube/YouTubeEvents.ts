/**
 * Whenever Youtube's iFrame API publishes an event, it does so by running the closures passed in the `config.events` object. 
 * For some events, the iFrame API passes in an object with relevant data (e.g. a number indicating the current state of the player.)
 * See [here](https://developers.google.com/youtube/iframe_api_reference#Events) for more info.
 */
export type YoutubeEvent = { 
  data?: any
}

/**
 * Youtube's iFrame API passes changes to the state of its video player in the form of a number. See [here](https://developers.google.com/youtube/iframe_api_reference#onStateChange) for more info.
 */
export const YoutubePlayerState = { 
  unstarted: -1,
  ended: 0,
  playing: 1,
  paused: 2,
  buffering: 3,
  videoCued: 4
} as const

export type YoutubePlayerState = typeof YoutubePlayerState[keyof typeof YoutubePlayerState]

/**
 * Youtube's iFrame API passes error data in the form of a number. See [here](https://developers.google.com/youtube/iframe_api_reference#onError) for more info.
 */
export const YoutubeError = { 
  invalidParameter: 2,
  playerError: 5,
  notFound: 100,
  invalidPermissions: 101,
  invalidPermissionsAlt: 150,
  apiLoadError: 400
} as const

export type YoutubeError = typeof YoutubeError[keyof typeof YoutubeError]