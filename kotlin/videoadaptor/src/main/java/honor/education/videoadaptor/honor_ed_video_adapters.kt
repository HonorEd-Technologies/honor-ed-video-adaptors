package honor.education.videoadaptor

import android.content.Context

public object EntryPoint {
    // These will refer to assets, since there's no Bundle.module in Android
    const val playerUrl: String = "file:///android_asset/HonorPlayer.html"
    const val playerJsUrl: String = "file:///android_asset/main.js"
}

public enum class HEVideoPlayerState(val value: Int) {
    UNSTARTED(0),
    ENDED(1),
    PLAYING(2),
    PAUSED(3),
    BUFFERING(4);

    companion object {
        fun from(value: Int): HEVideoPlayerState? = values().find { it.value == value }
    }
}

public enum class HEVideoPlayerError(val code: Int) {
    PLAYER_ERROR(1),
    NOT_FOUND(2),
    NOT_INITIALIZED(3),
    API_LOAD_ERROR(4),
    ADAPTOR_LAYER_ERROR(5),
    INVALID_PERMISSIONS(6),
    UNKNOWN(-1);

    companion object {
        fun from(code: Int): HEVideoPlayerError? = values().find { it.code == code }
    }
}