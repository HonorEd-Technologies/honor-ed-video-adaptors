import Foundation

public enum EntryPoint {
    public static let playerUrl = Bundle.module.url(forResource: "HonorPlayer", withExtension: "html")
}

public enum YTPlayerState: Int, Equatable {
    case unstarted = -1
    case ended = 0
    case playing = 1
    case paused = 2
    case buffering = 3
    case videoCued = 5
}

public enum YTError: Int, Error {
    case invalidParameter = 2
    case playerError = 5
    case notFound = 100
    case invalidPermissions = 101
    case invalidPermissionsAlt = 150
    case apiLoadError = 400
}
