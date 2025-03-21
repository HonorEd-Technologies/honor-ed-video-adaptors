import { type CaptionOption } from "../../../types/Shared/CaptionOption"
import type { OnApiChangeEvent, OnAutoplayBlockedEvent, OnErrorEvent, OnPlaybackQualityChangeEvent, OnPlaybackRateChangeEvent, OnReadyEvent, OnStateChangeEvent, PlayerOptions, PlayerState, SphericalProperties } from "../convertYTPlayer"

/* eslint-disable @typescript-eslint/no-unused-vars */

export default class MockPlayer { 
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(elementId: string | HTMLElement, config: PlayerOptions) {  }
  cueVideoById (videoId: string | { videoId: string; startSeconds?: number; endSeconds?: number }, startSeconds?: number): void {
    throw new Error("Function not implemented.")
  }
  loadVideoById (videoId: string | { videoId: string; startSeconds?: number; endSeconds?: number }, startSeconds?: number): void {
    throw new Error("Function not implemented.")
  }
  cueVideoByUrl (mediaContentUrl: string | { mediaContentUrl: string; startSeconds?: number; endSeconds?: number }, startSeconds?: number): void {
    throw new Error("Function not implemented.")
  }
  loadVideoByUrl (mediaContentUrl: string | { mediaContentUrl: string; startSeconds?: number; endSeconds?: number }, startSeconds?: number): void {
    throw new Error("Function not implemented.")
  }
  cuePlaylist (playlist: string | string[] | { listType?: "playlist" | "user_uploads"; list: string; index?: number; startSeconds?: number }, index?: number, startSeconds?: number): void {
    throw new Error("Function not implemented.")
  }
  loadPlaylist (playlist: string | string[] | { listType?: "playlist" | "user_uploads"; list: string; index?: number; startSeconds?: number }, index?: number, startSeconds?: number): void {
    throw new Error("Function not implemented.")
  }
  playVideo (): void {
    throw new Error("Function not implemented.")
  }
  pauseVideo (): void {
    throw new Error("Function not implemented.")
  }
  stopVideo (): void {
    throw new Error("Function not implemented.")
  }
  seekTo (seconds: number, allowSeekAhead: boolean): void {
    throw new Error("Function not implemented.")
  }
  nextVideo (): void {
    throw new Error("Function not implemented.")
  }
  previousVideo (): void {
    throw new Error("Function not implemented.")
  }
  playVideoAt (index: number): void {
    throw new Error("Function not implemented.")
  }
  mute (): void {
    throw new Error("Function not implemented.")
  }
  unMute (): void {
    throw new Error("Function not implemented.")
  }
  isMuted (): boolean {
    throw new Error("Function not implemented.")
  }
  setVolume (volume: number): void {
    throw new Error("Function not implemented.")
  }
  getVolume (): number {
    throw new Error("Function not implemented.")
  }
  setSize (width: number, height: number): void {
    throw new Error("Function not implemented.")
  }
  getPlaybackRate (): number {
    throw new Error("Function not implemented.")
  }
  setPlaybackRate (suggestedRate: number): void {
    throw new Error("Function not implemented.")
  }
  getAvailablePlaybackRates (): number[] {
    throw new Error("Function not implemented.")
  }
  setLoop (loopPlaylists: boolean): void {
    throw new Error("Function not implemented.")
  }
  setShuffle (shufflePlaylist: boolean): void {
    throw new Error("Function not implemented.")
  }
  getVideoLoadedFraction (): number {
    throw new Error("Function not implemented.")
  }
  getPlayerState (): PlayerState {
    throw new Error("Function not implemented.")
  }
  getCurrentTime (): number {
    throw new Error("Function not implemented.")
  }
  getDuration (): number {
    throw new Error("Function not implemented.")
  }
  getVideoUrl (): string {
    throw new Error("Function not implemented.")
  }
  getVideoEmbedCode (): string {
    throw new Error("Function not implemented.")
  }
  getPlaylist (): string[] {
    throw new Error("Function not implemented.")
  }
  getPlaylistIndex (): number {
    throw new Error("Function not implemented.")
  }
  getOptions (module: string): string[] {
    throw new Error("Function not implemented.")
  }
  getOption (module: string, option: string): CaptionOption[] {
    throw new Error("Function not implemented.")
  }
  setOption (module: string, option: string, data: object): void {
    throw new Error("Function not implemented.")
  }
  addEventListener <T extends keyof { onReady?: (event: OnReadyEvent) => void; onStateChange?: (event: OnStateChangeEvent) => void; onPlaybackQualityChange?: (event: OnPlaybackQualityChangeEvent) => void; onPlaybackRateChange?: (event: OnPlaybackRateChangeEvent) => void; onError?: (event: OnErrorEvent) => void; onApiChange?: (event: OnApiChangeEvent) => void; onAutoplayBlocked?: (event: OnAutoplayBlockedEvent) => void }>(event: T, listener: (event: { onReady?: (event: OnReadyEvent) => void; onStateChange?: (event: OnStateChangeEvent) => void; onPlaybackQualityChange?: (event: OnPlaybackQualityChangeEvent) => void; onPlaybackRateChange?: (event: OnPlaybackRateChangeEvent) => void; onError?: (event: OnErrorEvent) => void; onApiChange?: (event: OnApiChangeEvent) => void; onAutoplayBlocked?: (event: OnAutoplayBlockedEvent) => void }[T]) => void): void {
    throw new Error("Function not implemented.")
  }
  removeEventListener <T extends keyof { onReady?: (event: OnReadyEvent) => void; onStateChange?: (event: OnStateChangeEvent) => void; onPlaybackQualityChange?: (event: OnPlaybackQualityChangeEvent) => void; onPlaybackRateChange?: (event: OnPlaybackRateChangeEvent) => void; onError?: (event: OnErrorEvent) => void; onApiChange?: (event: OnApiChangeEvent) => void; onAutoplayBlocked?: (event: OnAutoplayBlockedEvent) => void }>(event: T, listener: (event: { onReady?: (event: OnReadyEvent) => void; onStateChange?: (event: OnStateChangeEvent) => void; onPlaybackQualityChange?: (event: OnPlaybackQualityChangeEvent) => void; onPlaybackRateChange?: (event: OnPlaybackRateChangeEvent) => void; onError?: (event: OnErrorEvent) => void; onApiChange?: (event: OnApiChangeEvent) => void; onAutoplayBlocked?: (event: OnAutoplayBlockedEvent) => void }[T]) => void): void {
    throw new Error("Function not implemented.")
  }
  getIframe (): HTMLIFrameElement {
    throw new Error("Function not implemented.")
  }
  destroy (): void {
    throw new Error("Function not implemented.")
  }
  getSphericalProperties (): SphericalProperties {
    throw new Error("Function not implemented.")
  }
  setSphericalProperties (properties: Partial<SphericalProperties>): void {
    throw new Error("Function not implemented.")
  }
}