var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
import { HonorVideoEventEmitters } from './utils/Shared/HonorEventEmitter';
import { HonorVideoEvent } from './types/Shared/HonorVideoEvent';
import { HonorVideoPlayerState } from './types/Shared/HonorVideoPlayerState';
function RequiresInitializationForAllMethods(excludeMethods = []) {
    return function (Base) {
        return class extends Base {
            constructor(...args) {
                super(...args);
                // Get all method names of the class prototype
                const methodNames = Object.getOwnPropertyNames(Base.prototype).filter((method) => method !== 'constructor' && // Exclude constructor
                    !excludeMethods.includes(method) // Exclude specified methods
                );
                for (const methodName of methodNames) {
                    // eslint-disable-next-line 
                    const originalMethod = this[methodName];
                    if (typeof originalMethod === 'function') {
                        // Wrap the method with initialization check
                        ;
                        this[methodName] = function (...args) {
                            if (!(this).initialized) {
                                this.emitter.triggerEvent(HonorVideoEvent.error, { data: 5 });
                                throw new Error(`Method ${methodName} called before adaptor was initialized`);
                            }
                            return originalMethod.apply(this, args);
                        };
                    }
                }
            }
        };
    };
}
/* eslint-enable
  @typescript-eslint/no-empty-object-type,
  @typescript-eslint/no-explicit-any,
  @typescript-eslint/no-unsafe-argument,
  @typescript-eslint/explicit-function-return-type,
  @typescript-eslint/no-unsafe-member-access,
  @typescript-eslint/no-unsafe-call,
  @typescript-eslint/no-unsafe-return
*/
let HonorPlayer = (() => {
    let _classDecorators = [RequiresInitializationForAllMethods([
            'setAdaptor',
            'onReady',
            'onError',
            'onCurrentTimeChanged',
            'onStateChanged',
            'onPlaybackRateChanged',
            'onVolumeChanged',
            'initializeAdaptor',
        ])];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var HonorPlayer = class {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            HonorPlayer = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        initialized = false;
        adaptor;
        emitter;
        constructor(elementId, configuration, adaptor) {
            this.adaptor = adaptor;
            this.emitter = new HonorVideoEventEmitters();
            void this.initializeAdaptor(elementId, configuration);
        }
        destroy = () => { this.adaptor.destroy(); };
        getCurrentTime = () => this.adaptor.getCurrentTime();
        getDuration = () => this.adaptor.getDuration();
        getPlaybackRate = () => this.adaptor.getPlaybackRate();
        getVideoLoadedFraction = () => this.adaptor.getVideoLoadedFraction();
        getVolume = () => this.adaptor.getVolume();
        loadVideoById = (videoId, startTime, endTime) => { this.adaptor.loadVideoById(videoId, startTime, endTime); };
        seekTo = (seconds) => { this.adaptor.seekTo(seconds); };
        setPlaybackRate = (rate) => { this.adaptor.setPlaybackRate(rate); };
        setSize = (width, height) => { this.adaptor.setSize(width, height); };
        setVolume = (volume) => { this.adaptor.setVolume(volume); };
        stopVideo = () => { this.adaptor.stopVideo(); };
        playVideo = () => { this.adaptor.playVideo(); };
        pauseVideo = () => { this.adaptor.pauseVideo(); };
        onReady = (callback) => {
            try {
                const state = this.adaptor.getPlayerState();
                if (state !== HonorVideoPlayerState.unstarted) {
                    callback();
                    return () => { };
                }
                else {
                    return this.emitter.onReady(callback);
                }
            }
            catch {
                return this.emitter.onReady(callback);
            }
        };
        onError = (callback) => {
            return this.emitter.onError(callback);
        };
        onCurrentTimeChanged = (callback) => {
            return this.emitter.onCurrentTimeChange(callback);
        };
        onStateChanged = (callback) => {
            return this.emitter.onStateChange(callback);
        };
        onPlaybackRateChanged = (callback) => {
            return this.emitter.onPlaybackRateChange(callback);
        };
        onVolumeChanged = (callback) => {
            return this.emitter.onVolumeChange(callback);
        };
        initializeAdaptor = async (elementId, config) => {
            await this.adaptor.initialize(elementId, config, this);
            this.initialized = true;
        };
    };
    return HonorPlayer = _classThis;
})();
export { HonorPlayer };
//# sourceMappingURL=HonorPlayer.js.map