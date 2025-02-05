/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["HE"] = factory();
	else
		root["HE"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./dist/HonorPlayer.js":
/*!*****************************!*\
  !*** ./dist/HonorPlayer.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {\n    function accept(f) { if (f !== void 0 && typeof f !== \"function\") throw new TypeError(\"Function expected\"); return f; }\n    var kind = contextIn.kind, key = kind === \"getter\" ? \"get\" : kind === \"setter\" ? \"set\" : \"value\";\n    var target = !descriptorIn && ctor ? contextIn[\"static\"] ? ctor : ctor.prototype : null;\n    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});\n    var _, done = false;\n    for (var i = decorators.length - 1; i >= 0; i--) {\n        var context = {};\n        for (var p in contextIn) context[p] = p === \"access\" ? {} : contextIn[p];\n        for (var p in contextIn.access) context.access[p] = contextIn.access[p];\n        context.addInitializer = function (f) { if (done) throw new TypeError(\"Cannot add initializers after decoration has completed\"); extraInitializers.push(accept(f || null)); };\n        var result = (0, decorators[i])(kind === \"accessor\" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);\n        if (kind === \"accessor\") {\n            if (result === void 0) continue;\n            if (result === null || typeof result !== \"object\") throw new TypeError(\"Object expected\");\n            if (_ = accept(result.get)) descriptor.get = _;\n            if (_ = accept(result.set)) descriptor.set = _;\n            if (_ = accept(result.init)) initializers.unshift(_);\n        }\n        else if (_ = accept(result)) {\n            if (kind === \"field\") initializers.unshift(_);\n            else descriptor[key] = _;\n        }\n    }\n    if (target) Object.defineProperty(target, contextIn.name, descriptor);\n    done = true;\n};\nvar __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {\n    var useValue = arguments.length > 2;\n    for (var i = 0; i < initializers.length; i++) {\n        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);\n    }\n    return useValue ? value : void 0;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst HonorEventEmitter_1 = __webpack_require__(/*! ./utils/Shared/HonorEventEmitter */ \"./dist/utils/Shared/HonorEventEmitter.js\");\nconst HonorVideoEvent_1 = __webpack_require__(/*! ./types/Shared/HonorVideoEvent */ \"./dist/types/Shared/HonorVideoEvent.js\");\nfunction RequiresInitializationForAllMethods(excludeMethods = []) {\n    return function (Base) {\n        return class extends Base {\n            constructor(...args) {\n                super(...args);\n                // Get all method names of the class prototype\n                const methodNames = Object.getOwnPropertyNames(Base.prototype)\n                    .filter((method) => method !== 'constructor' && // Exclude constructor\n                    !excludeMethods.includes(method) // Exclude specified methods\n                );\n                for (const methodName of methodNames) {\n                    const originalMethod = this[methodName];\n                    if (typeof originalMethod === 'function') {\n                        // Wrap the method with initialization check\n                        this[methodName] = function (...args) {\n                            if (!this.initialized) {\n                                this.emitter.triggerEvent(HonorVideoEvent_1.HonorVideoEvent.error, { data: 5 });\n                                throw new Error(`Method ${methodName} called before adaptor was initialized`);\n                            }\n                            return originalMethod.apply(this, args);\n                        };\n                    }\n                }\n            }\n        };\n    };\n}\nlet HonorPlayer = (() => {\n    let _classDecorators = [RequiresInitializationForAllMethods([\n            'setAdaptor',\n            'onReady',\n            'onError',\n            'onCurrentTimeChanged',\n            'onStateChanged',\n            'initializeAdaptor'\n        ])];\n    let _classDescriptor;\n    let _classExtraInitializers = [];\n    let _classThis;\n    var HonorPlayer = class {\n        static { _classThis = this; }\n        static {\n            const _metadata = typeof Symbol === \"function\" && Symbol.metadata ? Object.create(null) : void 0;\n            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: \"class\", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);\n            HonorPlayer = _classThis = _classDescriptor.value;\n            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });\n            __runInitializers(_classThis, _classExtraInitializers);\n        }\n        initialized = false;\n        adaptor;\n        emitter = new HonorEventEmitter_1.HonorVideoEventEmitters();\n        constructor(elementId, configuration, adaptor) {\n            this.adaptor = adaptor;\n            this.initializeAdaptor(elementId, configuration);\n        }\n        destroy = () => this.adaptor.destroy();\n        getCurrentTime = () => this.adaptor.getCurrentTime();\n        getDuration = () => this.adaptor.getDuration();\n        getPlaybackRate = () => this.adaptor.getPlaybackRate();\n        getVideoLoadedFraction = () => this.adaptor.getVideoLoadedFraction();\n        getVolume = () => this.adaptor.getVolume();\n        loadVideoById = (videoId, startTime, endTime) => this.adaptor.loadVideoById(videoId, startTime, endTime);\n        seekTo = (seconds) => this.adaptor.seekTo(seconds);\n        setPlaybackRate = (rate) => this.adaptor.setPlaybackRate(rate);\n        setSize = (width, height) => this.adaptor.setSize(width, height);\n        setVolume = (volume) => this.adaptor.setVolume(volume);\n        stopVideo = () => this.adaptor.stopVideo();\n        playVideo = () => this.adaptor.playVideo();\n        pauseVideo = () => this.adaptor.pauseVideo();\n        onReady(callback) { this.emitter.onReady(callback); }\n        onError(callback) { this.emitter.onError(callback); }\n        onCurrentTimeChanged(callback) { this.emitter.onCurrentTimeChange(callback); }\n        onStateChanged(callback) { this.emitter.onStateChange(callback); }\n        async initializeAdaptor(elementId, config) {\n            await this.adaptor.initialize(elementId, config, this);\n            this.initialized = true;\n        }\n    };\n    return HonorPlayer = _classThis;\n})();\nexports[\"default\"] = HonorPlayer;\n//# sourceMappingURL=HonorPlayer.js.map\n\n//# sourceURL=webpack://HE/./dist/HonorPlayer.js?");

/***/ }),

/***/ "./dist/adaptors/HonorVideoAdaptorFactory.js":
/*!***************************************************!*\
  !*** ./dist/adaptors/HonorVideoAdaptorFactory.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.HonorVideoAdaptorFactory = void 0;\nconst YoutubeAdaptor_1 = __webpack_require__(/*! ./YouTube/YoutubeAdaptor */ \"./dist/adaptors/YouTube/YoutubeAdaptor.js\");\nexports.HonorVideoAdaptorFactory = {\n    createAdaptor: (service) => {\n        switch (service) {\n            case 'youtube':\n                return new YoutubeAdaptor_1.YoutubeAdaptor();\n        }\n    }\n};\n//# sourceMappingURL=HonorVideoAdaptorFactory.js.map\n\n//# sourceURL=webpack://HE/./dist/adaptors/HonorVideoAdaptorFactory.js?");

/***/ }),

/***/ "./dist/adaptors/YouTube/YoutubeAdaptor.js":
/*!*************************************************!*\
  !*** ./dist/adaptors/YouTube/YoutubeAdaptor.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.YoutubeAdaptor = void 0;\nconst convertYTPlayer_1 = __importDefault(__webpack_require__(/*! ./convertYTPlayer */ \"./dist/adaptors/YouTube/convertYTPlayer.js\"));\nconst loadYoutubeAPI_1 = __importDefault(__webpack_require__(/*! ../../utils/loadYoutubeAPI */ \"./dist/utils/loadYoutubeAPI.js\"));\nconst events_1 = __webpack_require__(/*! ../../utils/YouTube/events */ \"./dist/utils/YouTube/events.js\");\n/**\n * This class will load Youtube's IFrame API upon the call of `initialize`, and upon completion will set the YT.Player object on `this` and expose methods that interact with it.\n */\nclass YoutubeAdaptor {\n    YTPlayer;\n    constructor() {\n    }\n    async initialize(elementId, configuration, player) {\n        await (0, loadYoutubeAPI_1.default)(player.emitter);\n        const config = {\n            height: configuration.height,\n            width: configuration.width,\n            videoId: configuration.videoId,\n            events: (0, events_1.youtubeEventHandler)(player),\n            playerVars: {\n                autoPlay: configuration.autoplay ? 1 : 0,\n                controls: configuration.controls ? 1 : 0,\n                fs: configuration.fullscreenEnabled ? 1 : 0,\n                playsInline: configuration.playsInline ? 1 : 0\n            }\n        };\n        const ytPlayer = (0, convertYTPlayer_1.default)(elementId, config);\n        this.YTPlayer = ytPlayer;\n    }\n    destroy = () => this.YTPlayer.destroy();\n    getCurrentTime = () => this.YTPlayer.getCurrentTime();\n    getDuration = () => this.YTPlayer.getDuration();\n    getPlaybackRate = () => this.YTPlayer.getPlaybackRate();\n    getVideoLoadedFraction = () => this.YTPlayer.getVideoLoadedFraction();\n    getVolume = () => this.YTPlayer.getVolume();\n    loadVideoById = (videoId, startTime, endTime) => this.loadVideoById(videoId, startTime, endTime);\n    seekTo = (seconds) => this.YTPlayer.seekTo(seconds);\n    setPlaybackRate = (rate) => this.YTPlayer.setPlaybackRate(rate);\n    setSize = (width, height) => this.YTPlayer.setSize(width, height);\n    setVolume = (volume) => this.YTPlayer.setVolume(volume);\n    stopVideo = () => this.YTPlayer.stopVideo();\n    playVideo = () => this.YTPlayer.playVideo();\n    pauseVideo = () => this.YTPlayer.pauseVideo();\n}\nexports.YoutubeAdaptor = YoutubeAdaptor;\n//# sourceMappingURL=YoutubeAdaptor.js.map\n\n//# sourceURL=webpack://HE/./dist/adaptors/YouTube/YoutubeAdaptor.js?");

/***/ }),

/***/ "./dist/adaptors/YouTube/convertYTPlayer.js":
/*!**************************************************!*\
  !*** ./dist/adaptors/YouTube/convertYTPlayer.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports[\"default\"] = (elementId, config) => {\n    let player = new YT.Player(elementId, config);\n    return {\n        loadVideoById: (videoId, startSeconds, endSeconds) => player.loadVideoById({ videoId, startSeconds, endSeconds }),\n        loadVideoByUrl: (mediaContentUrl, startSeconds, endSeconds) => player.loadVideoByUrl({ mediaContentUrl, startSeconds, endSeconds }),\n        playVideo: () => player.playVideo(),\n        pauseVideo: () => player.pauseVideo(),\n        stopVideo: () => player.stopVideo(),\n        seekTo: (seconds, allowSeekAhead) => player.seekTo(seconds, allowSeekAhead),\n        getDuration: () => player.getDuration(),\n        getVideoLoadedFraction: () => player.getVideoLoadedFraction(),\n        setVolume: (volume) => player.setVolume(volume),\n        getVolume: () => player.getVolume(),\n        getPlaybackRate: () => player.getPlaybackRate(),\n        setPlaybackRate: (suggestedRate) => player.setPlaybackRate(suggestedRate),\n        getAvailablePlaybackRates: () => player.getAvailablePlaybackRates(),\n        getCurrentTime: () => player.getCurrentTime(),\n        getVideoUrl: () => player.getVideoUrl(),\n        destroy: () => player.destroy(),\n        setSize: (width, height) => player.setSize(width, height),\n        getIframe: () => player.getIframe()\n    };\n};\n//# sourceMappingURL=convertYTPlayer.js.map\n\n//# sourceURL=webpack://HE/./dist/adaptors/YouTube/convertYTPlayer.js?");

/***/ }),

/***/ "./dist/index.js":
/*!***********************!*\
  !*** ./dist/index.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst HonorPlayer_1 = __importDefault(__webpack_require__(/*! ./HonorPlayer */ \"./dist/HonorPlayer.js\"));\nconst HonorVideoAdaptorFactory_1 = __webpack_require__(/*! ./adaptors/HonorVideoAdaptorFactory */ \"./dist/adaptors/HonorVideoAdaptorFactory.js\");\nexports[\"default\"] = {\n    HonorPlayer: HonorPlayer_1.default,\n    HonorVideoAdaptorFactory: HonorVideoAdaptorFactory_1.HonorVideoAdaptorFactory\n};\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack://HE/./dist/index.js?");

/***/ }),

/***/ "./dist/types/Shared/HonorVideoError.js":
/*!**********************************************!*\
  !*** ./dist/types/Shared/HonorVideoError.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.HonorVideoErrorType = void 0;\nvar HonorVideoErrorType;\n(function (HonorVideoErrorType) {\n    HonorVideoErrorType[HonorVideoErrorType[\"playerError\"] = 1] = \"playerError\";\n    HonorVideoErrorType[HonorVideoErrorType[\"notFound\"] = 2] = \"notFound\";\n    HonorVideoErrorType[HonorVideoErrorType[\"notInitialized\"] = 3] = \"notInitialized\";\n    HonorVideoErrorType[HonorVideoErrorType[\"apiLoadError\"] = 4] = \"apiLoadError\";\n    HonorVideoErrorType[HonorVideoErrorType[\"adaptorLayerError\"] = 5] = \"adaptorLayerError\";\n    HonorVideoErrorType[HonorVideoErrorType[\"invalidPermissions\"] = 6] = \"invalidPermissions\";\n    HonorVideoErrorType[HonorVideoErrorType[\"unknown\"] = -1] = \"unknown\";\n})(HonorVideoErrorType || (exports.HonorVideoErrorType = HonorVideoErrorType = {}));\n//# sourceMappingURL=HonorVideoError.js.map\n\n//# sourceURL=webpack://HE/./dist/types/Shared/HonorVideoError.js?");

/***/ }),

/***/ "./dist/types/Shared/HonorVideoEvent.js":
/*!**********************************************!*\
  !*** ./dist/types/Shared/HonorVideoEvent.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.HonorVideoEvent = void 0;\nvar HonorVideoEvent;\n(function (HonorVideoEvent) {\n    HonorVideoEvent[HonorVideoEvent[\"playerReady\"] = 0] = \"playerReady\";\n    HonorVideoEvent[HonorVideoEvent[\"stateChanged\"] = 1] = \"stateChanged\";\n    HonorVideoEvent[HonorVideoEvent[\"error\"] = 2] = \"error\";\n    HonorVideoEvent[HonorVideoEvent[\"currentTimeChanged\"] = 3] = \"currentTimeChanged\";\n})(HonorVideoEvent || (exports.HonorVideoEvent = HonorVideoEvent = {}));\n//# sourceMappingURL=HonorVideoEvent.js.map\n\n//# sourceURL=webpack://HE/./dist/types/Shared/HonorVideoEvent.js?");

/***/ }),

/***/ "./dist/types/Shared/HonorVideoPlayerState.js":
/*!****************************************************!*\
  !*** ./dist/types/Shared/HonorVideoPlayerState.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.HonorVideoPlayerState = void 0;\nvar HonorVideoPlayerState;\n(function (HonorVideoPlayerState) {\n    HonorVideoPlayerState[HonorVideoPlayerState[\"unstarted\"] = 0] = \"unstarted\";\n    HonorVideoPlayerState[HonorVideoPlayerState[\"ended\"] = 1] = \"ended\";\n    HonorVideoPlayerState[HonorVideoPlayerState[\"playing\"] = 2] = \"playing\";\n    HonorVideoPlayerState[HonorVideoPlayerState[\"paused\"] = 3] = \"paused\";\n    HonorVideoPlayerState[HonorVideoPlayerState[\"buffering\"] = 4] = \"buffering\";\n})(HonorVideoPlayerState || (exports.HonorVideoPlayerState = HonorVideoPlayerState = {}));\n//# sourceMappingURL=HonorVideoPlayerState.js.map\n\n//# sourceURL=webpack://HE/./dist/types/Shared/HonorVideoPlayerState.js?");

/***/ }),

/***/ "./dist/types/YouTube/YouTubeEvents.js":
/*!*********************************************!*\
  !*** ./dist/types/YouTube/YouTubeEvents.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.YoutubeError = exports.YoutubePlayerState = void 0;\n/**\n * Youtube's iFrame API passes changes to the state of its video player in the form of a number. See [here](https://developers.google.com/youtube/iframe_api_reference#onStateChange) for more info.\n */\nexports.YoutubePlayerState = {\n    unstarted: -1,\n    ended: 0,\n    playing: 1,\n    paused: 2,\n    buffering: 3,\n    videoCued: 4\n};\n/**\n * Youtube's iFrame API passes error data in the form of a number. See [here](https://developers.google.com/youtube/iframe_api_reference#onError) for more info.\n */\nexports.YoutubeError = {\n    invalidParameter: 2,\n    playerError: 5,\n    notFound: 100,\n    invalidPermissions: 101,\n    invalidPermissionsAlt: 150,\n    apiLoadError: 400\n};\n//# sourceMappingURL=YouTubeEvents.js.map\n\n//# sourceURL=webpack://HE/./dist/types/YouTube/YouTubeEvents.js?");

/***/ }),

/***/ "./dist/utils/Shared/HonorEventEmitter.js":
/*!************************************************!*\
  !*** ./dist/utils/Shared/HonorEventEmitter.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.HonorVideoEventEmitters = void 0;\nconst HonorVideoEvent_1 = __webpack_require__(/*! ../../types/Shared/HonorVideoEvent */ \"./dist/types/Shared/HonorVideoEvent.js\");\nclass HonorVideoEventEmitter {\n    callbacks = [];\n    on(callback) {\n        this.callbacks.push(callback);\n        return () => {\n            const idx = this.callbacks.indexOf(callback);\n            if (idx !== -1) {\n                this.callbacks.splice(idx, 1);\n            }\n        };\n    }\n    emit(data) {\n        for (const callback of this.callbacks) {\n            callback(data);\n        }\n    }\n}\nclass HonorVideoEventEmitters {\n    stateChangeEmitter = new HonorVideoEventEmitter();\n    readyEmitter = new HonorVideoEventEmitter();\n    errorEmitter = new HonorVideoEventEmitter();\n    currentTimeEmitter = new HonorVideoEventEmitter();\n    onReady = (callback) => this.readyEmitter.on(callback);\n    onStateChange = (callback) => this.stateChangeEmitter.on(callback);\n    onError = (callback) => this.errorEmitter.on(callback);\n    onCurrentTimeChange = (callback) => this.currentTimeEmitter.on(callback);\n    triggerEvent = (event, { data } = {}) => {\n        switch (event) {\n            case HonorVideoEvent_1.HonorVideoEvent.playerReady:\n                this.readyEmitter.emit();\n                break;\n            case HonorVideoEvent_1.HonorVideoEvent.stateChanged:\n                if (data) {\n                    this.stateChangeEmitter.emit(data);\n                }\n                break;\n            case HonorVideoEvent_1.HonorVideoEvent.error:\n                if (data) {\n                    this.errorEmitter.emit(data);\n                }\n                break;\n            case HonorVideoEvent_1.HonorVideoEvent.currentTimeChanged:\n                if (data) {\n                    this.currentTimeEmitter.emit(data);\n                }\n        }\n    };\n}\nexports.HonorVideoEventEmitters = HonorVideoEventEmitters;\n//# sourceMappingURL=HonorEventEmitter.js.map\n\n//# sourceURL=webpack://HE/./dist/utils/Shared/HonorEventEmitter.js?");

/***/ }),

/***/ "./dist/utils/YouTube/events.js":
/*!**************************************!*\
  !*** ./dist/utils/YouTube/events.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.youtubeEventHandler = void 0;\nconst HonorVideoError_1 = __webpack_require__(/*! ../../types/Shared/HonorVideoError */ \"./dist/types/Shared/HonorVideoError.js\");\nconst HonorVideoEvent_1 = __webpack_require__(/*! ../../types/Shared/HonorVideoEvent */ \"./dist/types/Shared/HonorVideoEvent.js\");\nconst HonorVideoPlayerState_1 = __webpack_require__(/*! ../../types/Shared/HonorVideoPlayerState */ \"./dist/types/Shared/HonorVideoPlayerState.js\");\nconst YouTubeEvents_1 = __webpack_require__(/*! ../../types/YouTube/YouTubeEvents */ \"./dist/types/YouTube/YouTubeEvents.js\");\nconst parseYTPlayerState = (state) => {\n    switch (state) {\n        case YouTubeEvents_1.YoutubePlayerState.unstarted:\n            return HonorVideoPlayerState_1.HonorVideoPlayerState.unstarted;\n        case YouTubeEvents_1.YoutubePlayerState.playing:\n            return HonorVideoPlayerState_1.HonorVideoPlayerState.playing;\n        case YouTubeEvents_1.YoutubePlayerState.paused:\n            return HonorVideoPlayerState_1.HonorVideoPlayerState.paused;\n        case YouTubeEvents_1.YoutubePlayerState.buffering:\n            return HonorVideoPlayerState_1.HonorVideoPlayerState.buffering;\n        case YouTubeEvents_1.YoutubePlayerState.ended:\n            return HonorVideoPlayerState_1.HonorVideoPlayerState.ended;\n        case YouTubeEvents_1.YoutubePlayerState.videoCued:\n            return undefined; // unneeded for our purposes\n    }\n};\nconst parseYTPlayerError = (error) => {\n    switch (error) {\n        case YouTubeEvents_1.YoutubeError.apiLoadError:\n            return HonorVideoError_1.HonorVideoErrorType.apiLoadError;\n        case YouTubeEvents_1.YoutubeError.invalidPermissions, YouTubeEvents_1.YoutubeError.invalidPermissionsAlt:\n            return HonorVideoError_1.HonorVideoErrorType.invalidPermissions;\n        case YouTubeEvents_1.YoutubeError.invalidParameter:\n            return HonorVideoError_1.HonorVideoErrorType.playerError;\n        case YouTubeEvents_1.YoutubeError.playerError:\n            return HonorVideoError_1.HonorVideoErrorType.playerError;\n        case YouTubeEvents_1.YoutubeError.notFound:\n            return HonorVideoError_1.HonorVideoErrorType.notFound;\n        default:\n            return HonorVideoError_1.HonorVideoErrorType.unknown;\n    }\n};\nconst youtubeStateChangeHandler = (player) => {\n    // youtube has no event for updating the current time of the video, so we need to set up an interval to publish the event\n    let timePoll;\n    const startTimePoll = () => {\n        timePoll = setInterval(() => {\n            const time = player.getCurrentTime();\n            player.emitter.triggerEvent(HonorVideoEvent_1.HonorVideoEvent.currentTimeChanged, { data: time });\n        }, 500);\n    };\n    const onStateChange = ({ data }) => {\n        const castData = data;\n        if (!castData) { // if the raw youtube player state cannot be converted into `YoutubePlayerState`, there is a state that we have not accounted for and we should emit an error\n            player.emitter.triggerEvent(HonorVideoEvent_1.HonorVideoEvent.error, {\n                data: {\n                    type: HonorVideoError_1.HonorVideoErrorType.adaptorLayerError,\n                    message: `Unknown player state received: ${data}`\n                }\n            });\n            return;\n        }\n        // convert the `YoutubePlayerState` into an `HonorVideoPlayerState`\n        const honorPlayerState = parseYTPlayerState(castData);\n        if (!honorPlayerState) {\n            player.emitter.triggerEvent(HonorVideoEvent_1.HonorVideoEvent.error, {\n                data: {\n                    type: HonorVideoError_1.HonorVideoErrorType.adaptorLayerError,\n                    message: `Could not convert Youtube player event: ${castData} into Honor Event`\n                }\n            });\n            return;\n        }\n        player.emitter.triggerEvent(HonorVideoEvent_1.HonorVideoEvent.stateChanged, { data: honorPlayerState });\n        if (timePoll !== undefined && (YouTubeEvents_1.YoutubePlayerState.ended === data || YouTubeEvents_1.YoutubePlayerState.unstarted === data)) {\n            // if we are polling for the current time and the video has ended or is unplayed, we should cancel the interval polling for the elapsed time\n            clearInterval(timePoll);\n        }\n        else if (timePoll === undefined) {\n            // if there is no interval and the video is playing or paused, start the interval polling\n            startTimePoll();\n        }\n    };\n    return onStateChange;\n};\nconst youtubeErrorHandler = (player) => {\n    return ({ data }) => {\n        var castData = data;\n        var error = HonorVideoError_1.HonorVideoErrorType.unknown;\n        if (castData) {\n            error = parseYTPlayerError(castData);\n        }\n        player.emitter.triggerEvent(HonorVideoEvent_1.HonorVideoEvent.error, { data: { type: error } });\n    };\n};\n/**\n * Youtube's video player does event handling based on an object attached to the initial configuration object of the following format:\n * {\n *  onReady: () => void,\n *  onStateChange: ({ data: any }) => void,\n *  onError: ({ data: any }) => void\n * }\n * This function takes in an `HonorPlayer` and returns an object conforming to the above, with each property a function that:\n * 1. Processes raw object events coming from the Youtube API ({ data: any })\n * 2. Converts them into TS types specific to Youtube e.g. ({ data: any }) => YoutubePlayerState\n * 3. Converts those into the appropriate Honor type e.g. (YoutubePlayerState) => HonorVideoPlayerState\n * 4. Sends those into the player's event emitter.\n * @param player The HonorPlayer\n * @returns an object containing the functions passed into the YT.Player\n */\nconst youtubeEventHandler = (player) => {\n    const onReady = () => { player.emitter.triggerEvent(HonorVideoEvent_1.HonorVideoEvent.playerReady); };\n    const onStateChange = youtubeStateChangeHandler(player);\n    const onError = youtubeErrorHandler(player);\n    return {\n        onReady,\n        onStateChange,\n        onError\n    };\n};\nexports.youtubeEventHandler = youtubeEventHandler;\n//# sourceMappingURL=events.js.map\n\n//# sourceURL=webpack://HE/./dist/utils/YouTube/events.js?");

/***/ }),

/***/ "./dist/utils/loadYoutubeAPI.js":
/*!**************************************!*\
  !*** ./dist/utils/loadYoutubeAPI.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst HonorVideoError_1 = __webpack_require__(/*! ../types/Shared/HonorVideoError */ \"./dist/types/Shared/HonorVideoError.js\");\nconst HonorVideoEvent_1 = __webpack_require__(/*! ../types/Shared/HonorVideoEvent */ \"./dist/types/Shared/HonorVideoEvent.js\");\nexports[\"default\"] = (emitter) => {\n    const iFrameReadyPromise = new Promise((resolve, reject) => {\n        if (window.YT && window.YT.Player && window.YT.Player instanceof Function) {\n            // youtube iframe already loaded, resolve\n            resolve();\n            return;\n        }\n        const tag = document.createElement('script');\n        tag.src = \"https://www.youtube.com/iframe_api\";\n        const firstScriptTag = document.getElementsByTagName('script')[0];\n        if (firstScriptTag.parentNode) {\n            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);\n        }\n        window.onYouTubeIframeAPIReady = () => {\n            if (window.YT !== undefined && window.YT.Player && window.YT.Player instanceof Function) {\n                resolve();\n            }\n            else {\n                const errorMessage = \"There was a problem loading the YouTube Iframe API\";\n                emitter.triggerEvent(HonorVideoEvent_1.HonorVideoEvent.error, {\n                    data: {\n                        code: HonorVideoError_1.HonorVideoErrorType.apiLoadError,\n                        message: errorMessage\n                    }\n                });\n                reject(errorMessage);\n            }\n        };\n    });\n    return iFrameReadyPromise;\n};\n//# sourceMappingURL=loadYoutubeAPI.js.map\n\n//# sourceURL=webpack://HE/./dist/utils/loadYoutubeAPI.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./dist/index.js");
/******/ 	__webpack_exports__ = __webpack_exports__["default"];
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});