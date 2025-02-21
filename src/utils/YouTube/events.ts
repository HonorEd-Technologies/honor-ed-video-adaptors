import { type HonorPlayer } from '../../HonorPlayer'
import { HonorVideoErrorType } from '../../types/Shared/HonorVideoError'
import { HonorVideoEvent } from '../../types/Shared/HonorVideoEvent'
import { HonorVideoPlayerState } from '../../types/Shared/HonorVideoPlayerState'
import {
  YoutubeError,
  type YoutubeEvent,
  YoutubePlayerState,
} from '../../types/YouTube/YouTubeEvents'

export const parseYTPlayerState = (
  state: YoutubePlayerState
): HonorVideoPlayerState | undefined => {
  switch (state) {
    case YoutubePlayerState.unstarted:
      return HonorVideoPlayerState.unstarted
    case YoutubePlayerState.playing:
      return HonorVideoPlayerState.playing
    case YoutubePlayerState.paused:
      return HonorVideoPlayerState.paused
    case YoutubePlayerState.buffering:
      return HonorVideoPlayerState.buffering
    case YoutubePlayerState.ended:
      return HonorVideoPlayerState.ended
    case YoutubePlayerState.videoCued:
      return HonorVideoPlayerState.ready
  }
}

const parseYTPlayerError = (error: YoutubeError): HonorVideoErrorType => {
  switch (error) {
    case YoutubeError.apiLoadError:
      return HonorVideoErrorType.apiLoadError
    case (YoutubeError.invalidPermissions, YoutubeError.invalidPermissionsAlt):
      return HonorVideoErrorType.invalidPermissions
    case YoutubeError.invalidParameter:
      return HonorVideoErrorType.playerError
    case YoutubeError.playerError:
      return HonorVideoErrorType.playerError
    case YoutubeError.notFound:
      return HonorVideoErrorType.notFound
    default:
      return HonorVideoErrorType.unknown
  }
}

const youtubeReadyHandler = (player: HonorPlayer): (() => void) => {
  return () => {
    player.emitter.triggerEvent({ eventType: HonorVideoEvent.playerReady, data: null })
    // youtube has no event for updating the current volume of the video, so we need to set up an interval to publish the event
    setInterval(() => {
      const volume = player.getVolume()
      player.emitter.triggerEvent({
        eventType: HonorVideoEvent.volumeChanged,
        data: volume,
      })
    }, 250)
  }
}

const youtubeStateChangeHandler = (
  player: HonorPlayer
): ((event: YoutubeEvent) => void) => {
  // youtube has no event for updating the current time of the video, so we need to set up an interval to publish the event
  let timePoll: ReturnType<typeof setInterval> | undefined
  const startTimePoll = (): void => {
    timePoll = setInterval(() => {
      const time = player.getCurrentTime()
      player.emitter.triggerEvent({
        eventType: HonorVideoEvent.currentTimeChanged,
        data: time,
      })
    }, 500)
  }

  const onStateChange = ({ data }: YoutubeEvent): void => {
    const castData = <YoutubePlayerState>data
    // convert the `YoutubePlayerState` into an `HonorVideoPlayerState`
    const honorPlayerState = parseYTPlayerState(castData)

    if (!honorPlayerState) {
      player.emitter.triggerEvent({
        eventType: HonorVideoEvent.error,
        data: {
          code: HonorVideoErrorType.adaptorLayerError,
          message: `Could not convert Youtube player event: ${castData.toString()} into Honor Event`,
        },
      })
      return
    }
    player.emitter.triggerEvent({
      eventType: HonorVideoEvent.stateChanged,
      data: honorPlayerState,
    })

    if (
      timePoll !== undefined &&
      (YoutubePlayerState.ended === data ||
        YoutubePlayerState.unstarted === data)
    ) {
      // if we are polling for the current time and the video has ended or is unplayed, we should cancel the interval polling for the elapsed time
      clearInterval(timePoll)
    } else if (timePoll === undefined) {
      // if there is no interval and the video is playing or paused, start the interval polling
      startTimePoll()
    }
  }

  return onStateChange
}

const youtubeErrorHandler = (
  player: HonorPlayer
): ((event: YoutubeEvent) => void) => {
  return ({ data }: YoutubeEvent) => {
    const castData = <YoutubeError>data
    const error = parseYTPlayerError(castData)

    player.emitter.triggerEvent({ 
      eventType: HonorVideoEvent.error, 
      data: { 
        code: error,
      }
    })
  }
}

const youtubePlaybackHandler = (
  player: HonorPlayer
): ((event: YoutubeEvent) => void) => {
  return ({ data }: YoutubeEvent) => {
    const rate = <number>data
    if (rate) {
      player.emitter.triggerEvent({
        eventType: HonorVideoEvent.playbackRateChanged,
        data: rate,
      })
    }
  }
}

/**
 * Youtube's video player does event handling based on an object attached to the initial configuration object of the following format:
 * {
 *  onReady: () => void,
 *  onStateChange: ({ data: any }) => void,
 *  onError: ({ data: any }) => void
 * }
 * This function takes in an `HonorPlayer` and returns an object conforming to the above, with each property a function that:
 * 1. Processes raw object events coming from the Youtube API ({ data: any })
 * 2. Converts them into TS types specific to Youtube e.g. ({ data: any }) => YoutubePlayerState
 * 3. Converts those into the appropriate Honor type e.g. (YoutubePlayerState) => HonorVideoPlayerState
 * 4. Sends those into the player's event emitter.
 * @param player The HonorPlayer
 * @returns an object containing the functions passed into the YT.Player
 */
export const youtubeEventHandler = (player: HonorPlayer): object => {
  const onReady = youtubeReadyHandler(player)
  const onStateChange = youtubeStateChangeHandler(player)
  const onError = youtubeErrorHandler(player)
  const onPlaybackRateChange = youtubePlaybackHandler(player)

  return {
    onReady,
    onStateChange,
    onError,
    onPlaybackRateChange,
  }
}
