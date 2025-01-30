"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HonorVideoEventEmitters = void 0;
const HonorVideoEvent_1 = require("../../types/Shared/HonorVideoEvent");
class HonorVideoEventEmitter {
    constructor() {
        this.callbacks = [];
    }
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
    constructor() {
        this.stateChangeEmitter = new HonorVideoEventEmitter();
        this.readyEmitter = new HonorVideoEventEmitter();
        this.errorEmitter = new HonorVideoEventEmitter();
        this.currentTimeEmitter = new HonorVideoEventEmitter();
        this.onReady = (callback) => this.readyEmitter.on(callback);
        this.onStateChange = (callback) => this.stateChangeEmitter.on(callback);
        this.onError = (callback) => this.errorEmitter.on(callback);
        this.onCurrentTimeChange = (callback) => this.currentTimeEmitter.on(callback);
        this.triggerEvent = (event, { data } = {}) => {
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
}
exports.HonorVideoEventEmitters = HonorVideoEventEmitters;
//# sourceMappingURL=HonorEventEmitter.js.map