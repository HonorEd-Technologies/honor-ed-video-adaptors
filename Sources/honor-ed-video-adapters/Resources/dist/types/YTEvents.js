"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YTEventEmitters = exports.YTError = exports.YTPlayerState = exports.YTEventType = void 0;
var YTEventType;
(function (YTEventType) {
    YTEventType[YTEventType["playerReady"] = 0] = "playerReady";
    YTEventType[YTEventType["stateChanged"] = 1] = "stateChanged";
    YTEventType[YTEventType["error"] = 2] = "error";
    YTEventType[YTEventType["currentTimeChanged"] = 3] = "currentTimeChanged";
})(YTEventType || (exports.YTEventType = YTEventType = {}));
var YTPlayerState;
(function (YTPlayerState) {
    YTPlayerState[YTPlayerState["unstarted"] = -1] = "unstarted";
    YTPlayerState[YTPlayerState["ended"] = 0] = "ended";
    YTPlayerState[YTPlayerState["playing"] = 1] = "playing";
    YTPlayerState[YTPlayerState["paused"] = 2] = "paused";
    YTPlayerState[YTPlayerState["buffering"] = 3] = "buffering";
    YTPlayerState[YTPlayerState["videoCued"] = 5] = "videoCued";
})(YTPlayerState || (exports.YTPlayerState = YTPlayerState = {}));
var YTError;
(function (YTError) {
    YTError[YTError["invalidParameter"] = 2] = "invalidParameter";
    YTError[YTError["playerError"] = 5] = "playerError";
    YTError[YTError["notFound"] = 100] = "notFound";
    YTError[YTError["invalidPermissions"] = 101] = "invalidPermissions";
    YTError[YTError["invalidPermissionsAlt"] = 150] = "invalidPermissionsAlt";
    YTError[YTError["apiLoadError"] = 400] = "apiLoadError";
})(YTError || (exports.YTError = YTError = {}));
class YTEventEmitter {
    constructor() {
        this.callbacks = [];
    }
    on(callback) {
        this.callbacks.push(callback);
    }
    off(callback) {
        let index = this.callbacks.indexOf(callback);
        if (index > -1) {
            this.callbacks.splice(index, 1);
        }
    }
    emit(data) {
        for (const callback of this.callbacks) {
            callback(data);
        }
    }
}
class YTEventEmitters {
    constructor() {
        this.stateChangeEmitter = new YTEventEmitter();
        this.readyEmitter = new YTEventEmitter();
        this.errorEmitter = new YTEventEmitter();
        this.currentTimeEmitter = new YTEventEmitter();
        this.onReady = (callback) => {
            this.readyEmitter.on(callback);
        };
        this.onStateChange = (callback) => {
            this.stateChangeEmitter.on(callback);
        };
        this.onError = (callback) => {
            this.errorEmitter.on(callback);
        };
        this.onCurrentTimeChange = (callback) => {
            this.currentTimeEmitter.on(callback);
        };
        this.triggerEvent = (event, { data } = {}) => {
            switch (event) {
                case YTEventType.playerReady:
                    this.readyEmitter.emit();
                    break;
                case YTEventType.stateChanged:
                    if (data) {
                        this.stateChangeEmitter.emit(data);
                    }
                    break;
                case YTEventType.error:
                    if (data) {
                        this.errorEmitter.emit(data);
                    }
                    break;
                case YTEventType.currentTimeChanged:
                    if (data) {
                        this.currentTimeEmitter.emit(data);
                    }
            }
        };
    }
}
exports.YTEventEmitters = YTEventEmitters;
//# sourceMappingURL=YTEvents.js.map