"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HonorVideoEventEmitters = void 0;
const HonorVideoEvent_1 = require("../../types/Shared/HonorVideoEvent");
class HonorVideoEventEmitter {
    callbacks = [];
    on(callback) {
        this.callbacks.push(callback);
        return () => {
            const idx = this.callbacks.indexOf(callback);
            if (idx !== -1) {
                this.callbacks.splice(idx, 1);
            }
        };
    }
    emit(data) {
        for (const callback of this.callbacks) {
            callback(data);
        }
    }
}
class HonorVideoEventEmitters {
    stateChangeEmitter = new HonorVideoEventEmitter();
    readyEmitter = new HonorVideoEventEmitter();
    errorEmitter = new HonorVideoEventEmitter();
    currentTimeEmitter = new HonorVideoEventEmitter();
    onReady = (callback) => this.readyEmitter.on(callback);
    onStateChange = (callback) => this.stateChangeEmitter.on(callback);
    onError = (callback) => this.errorEmitter.on(callback);
    onCurrentTimeChange = (callback) => this.currentTimeEmitter.on(callback);
    triggerEvent = (event, { data } = {}) => {
        switch (event) {
            case HonorVideoEvent_1.HonorVideoEvent.playerReady:
                this.readyEmitter.emit();
                break;
            case HonorVideoEvent_1.HonorVideoEvent.stateChanged:
                if (data) {
                    this.stateChangeEmitter.emit(data);
                }
                break;
            case HonorVideoEvent_1.HonorVideoEvent.error:
                if (data) {
                    this.errorEmitter.emit(data);
                }
                break;
            case HonorVideoEvent_1.HonorVideoEvent.currentTimeChanged:
                if (data) {
                    this.currentTimeEmitter.emit(data);
                }
        }
    };
}
exports.HonorVideoEventEmitters = HonorVideoEventEmitters;
//# sourceMappingURL=HonorEventEmitter.js.map