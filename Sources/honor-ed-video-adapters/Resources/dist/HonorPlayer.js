"use strict";
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HonorEventEmitter_1 = require("./utils/Shared/HonorEventEmitter");
const HonorVideoEvent_1 = require("./types/Shared/HonorVideoEvent");
const loadYoutubeAPI_1 = __importDefault(require("./utils/loadYoutubeAPI"));
const YoutubeAdaptor_1 = require("./adaptors/YouTube/YoutubeAdaptor");
const VideoServiceProvider_1 = require("./types/Shared/VideoServiceProvider");
const loadVimeoAPI_1 = __importDefault(require("./utils/loadVimeoAPI"));
const VimeoAdaptor_1 = require("./adaptors/Vimeo/VimeoAdaptor");
function RequiresInitializationForAllMethods(excludeMethods = []) {
    return function (Base) {
        return class extends Base {
            constructor(...args) {
                super(...args);
                // Get all method names of the class prototype
                const methodNames = Object.getOwnPropertyNames(Base.prototype)
                    .filter((method) => method !== 'constructor' && // Exclude constructor
                    !excludeMethods.includes(method) // Exclude specified methods
                );
                for (const methodName of methodNames) {
                    const originalMethod = this[methodName];
                    if (typeof originalMethod === 'function') {
                        // Wrap the method with initialization check
                        this[methodName] = function (...args) {
                            if (!this.initialized) {
                                this.emitter.triggerEvent(HonorVideoEvent_1.HonorVideoEvent.error, { data: 5 });
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
let HonorPlayer = (() => {
    let _classDecorators = [RequiresInitializationForAllMethods([
            'setAdaptor',
            'onReady',
            'onError',
            'onCurrentTimeChanged',
            'onStateChanged',
            'initializeAdaptor'
        ])];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var HonorPlayer = _classThis = class {
        constructor(elementId, configuration) {
            this.initialized = false;
            this.emitter = new HonorEventEmitter_1.HonorVideoEventEmitters();
            this.destroy = () => __awaiter(this, void 0, void 0, function* () { return yield this.adaptor.destroy(); });
            this.getCurrentTime = () => __awaiter(this, void 0, void 0, function* () { return yield this.adaptor.getCurrentTime(); });
            this.getDuration = () => __awaiter(this, void 0, void 0, function* () { return yield this.adaptor.getDuration(); });
            this.getPlaybackRate = () => __awaiter(this, void 0, void 0, function* () { return yield this.adaptor.getPlaybackRate(); });
            this.getVideoLoadedFraction = () => __awaiter(this, void 0, void 0, function* () { return yield this.adaptor.getVideoLoadedFraction(); });
            this.getVolume = () => __awaiter(this, void 0, void 0, function* () { return yield this.adaptor.getVolume(); });
            this.seekTo = (seconds) => __awaiter(this, void 0, void 0, function* () { return yield this.adaptor.seekTo(seconds); });
            this.setPlaybackRate = (rate) => __awaiter(this, void 0, void 0, function* () { return yield this.adaptor.setPlaybackRate(rate); });
            this.setSize = (width, height) => this.adaptor.setSize(width, height);
            this.setVolume = (volume) => __awaiter(this, void 0, void 0, function* () { return yield this.adaptor.setVolume(volume); });
            this.playVideo = () => __awaiter(this, void 0, void 0, function* () { return yield this.adaptor.playVideo(); });
            this.pauseVideo = () => __awaiter(this, void 0, void 0, function* () { return yield this.adaptor.pauseVideo(); });
            this.initializeAdaptor = (elementId, config) => {
                switch (config.provider) {
                    case VideoServiceProvider_1.VideoServiceProvider.youtube:
                        // load the Youtube Iframe API 
                        (0, loadYoutubeAPI_1.default)(this.emitter)
                            .then(() => {
                            const adaptor = (0, YoutubeAdaptor_1.initializeYoutubeAdaptor)(elementId, config, this); // Once iframe is loaded, instantiate YT.Player and return the adaptor
                            this.setAdaptor(adaptor);
                        });
                    case VideoServiceProvider_1.VideoServiceProvider.vimeo:
                        // load the Vimeo Iframe API
                        (0, loadVimeoAPI_1.default)(this.emitter)
                            .then(() => {
                            const adaptor = (0, VimeoAdaptor_1.initializeVimeoAdaptor)(elementId, config, this); // Once iframe is loaded, instantiate YT.Player and return the adaptor
                            this.setAdaptor(adaptor);
                        });
                }
            };
            this.initializeAdaptor(elementId, configuration);
        }
        setAdaptor(adaptor) {
            this.initialized = true;
            this.adaptor = adaptor;
        }
        onReady(callback) { this.emitter.onReady(callback); }
        onError(callback) { this.emitter.onError(callback); }
        onCurrentTimeChanged(callback) { this.emitter.onCurrentTimeChange(callback); }
        onStateChanged(callback) { this.emitter.onStateChange(callback); }
    };
    __setFunctionName(_classThis, "HonorPlayer");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        HonorPlayer = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return HonorPlayer = _classThis;
})();
exports.default = HonorPlayer;
//# sourceMappingURL=HonorPlayer.js.map