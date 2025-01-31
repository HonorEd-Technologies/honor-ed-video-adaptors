import Foundation

public enum EntryPoint {
    public static let playerUrl = Bundle.module.url(forResource: "HonorPlayer", withExtension: "html")
}

public enum HEVideoPlayerState: Int, Equatable {
    case unstarted = 0
    case ended = 1
    case playing = 2
    case paused = 3
    case buffering = 4
}

public enum HEVideoPlayerError: Int, Error {
    case playerError = 1
    case notFound = 2
    case notInitialized = 3
    case apiLoadError = 4
    case adaptorLayerError = 5
    case invalidPermissions = 6
    case unknown = -1
}
