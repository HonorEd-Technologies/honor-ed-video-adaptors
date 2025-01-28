/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./dist/HonorPlayer.js":
/*!*****************************!*\
  !*** ./dist/HonorPlayer.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.HonorPlayer = void 0;\nconst HonorEventEmitter_1 = __webpack_require__(/*! ./types/Shared/HonorEventEmitter */ \"./dist/types/Shared/HonorEventEmitter.js\");\nconst HonorVideoEvent_1 = __webpack_require__(/*! ./types/Shared/HonorVideoEvent */ \"./dist/types/Shared/HonorVideoEvent.js\");\nclass HonorPlayer {\n    constructor() {\n        this.initialized = false;\n        this.emitter = new HonorEventEmitter_1.HonorVideoEventEmitters();\n        this.destroy = () => __awaiter(this, void 0, void 0, function* () { return this.runIfInitialized(() => this.adaptor.destroy()); });\n        this.getCurrentTime = () => __awaiter(this, void 0, void 0, function* () { return this.runIfInitialized(() => this.adaptor.getCurrentTime()); });\n        this.getDuration = () => __awaiter(this, void 0, void 0, function* () { return this.runIfInitialized(() => this.adaptor.getDuration()); });\n        this.getPlaybackRate = () => __awaiter(this, void 0, void 0, function* () { return this.runIfInitialized(() => this.adaptor.getPlaybackRate()); });\n        this.getVideoLoadedFraction = () => __awaiter(this, void 0, void 0, function* () { return this.runIfInitialized(() => this.adaptor.getVideoLoadedFraction()); });\n        this.getVolume = () => __awaiter(this, void 0, void 0, function* () { return this.runIfInitialized(() => this.adaptor.getVolume()); });\n        this.loadVideoById = (videoId, startTime, endTime) => __awaiter(this, void 0, void 0, function* () { return this.runIfInitialized(() => this.adaptor.loadVideoById(videoId, startTime, endTime)); });\n        this.seekTo = (seconds) => __awaiter(this, void 0, void 0, function* () { return this.runIfInitialized(() => this.adaptor.seekTo(seconds)); });\n        this.setPlaybackRate = (rate) => __awaiter(this, void 0, void 0, function* () { return this.runIfInitialized(() => this.adaptor.setPlaybackRate(rate)); });\n        this.setSize = (width, height) => this.runIfInitialized(() => this.adaptor.setSize(width, height));\n        this.setVolume = (volume) => __awaiter(this, void 0, void 0, function* () { return this.runIfInitialized(() => this.adaptor.setVolume(volume)); });\n        this.playVideo = () => __awaiter(this, void 0, void 0, function* () { return this.runIfInitialized(() => this.adaptor.playVideo()); });\n        this.pauseVideo = () => __awaiter(this, void 0, void 0, function* () { return this.runIfInitialized(() => this.adaptor.pauseVideo()); });\n    }\n    setAdaptor(adaptor) {\n        this.initialized = true;\n        this.adaptor = adaptor;\n    }\n    onReady(callback) { this.emitter.onReady(callback); }\n    onError(callback) { this.emitter.onError(callback); }\n    onCurrentTimeChanged(callback) { this.emitter.onCurrentTimeChange(callback); }\n    onStateChanged(callback) { this.emitter.onStateChange(callback); }\n    runIfInitialized(fn) {\n        return __awaiter(this, void 0, void 0, function* () {\n            if (!this.initialized) {\n                this.emitter.triggerEvent(HonorVideoEvent_1.HonorVideoEvent.error, { data: 5 });\n            }\n            let promise = fn();\n            return yield promise;\n        });\n    }\n}\nexports.HonorPlayer = HonorPlayer;\n//# sourceMappingURL=HonorPlayer.js.map\n\n//# sourceURL=webpack://honor-ed-video-adapters/./dist/HonorPlayer.js?");

/***/ }),

/***/ "./dist/index.js":
/*!***********************!*\
  !*** ./dist/index.js ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst HonorPlayer_1 = __webpack_require__(/*! ./HonorPlayer */ \"./dist/HonorPlayer.js\");\nconst VimeoAdaptor_1 = __webpack_require__(/*! ./types/adaptors/VimeoAdaptor */ \"./dist/types/adaptors/VimeoAdaptor.js\");\nconst YTAdaptor_1 = __webpack_require__(/*! ./types/adaptors/YTAdaptor */ \"./dist/types/adaptors/YTAdaptor.js\");\nconst VideoServiceProvider_1 = __webpack_require__(/*! ./types/Shared/VideoServiceProvider */ \"./dist/types/Shared/VideoServiceProvider.js\");\nwindow.setupPlayer = (elementId, config) => {\n    let player = new HonorPlayer_1.HonorPlayer();\n    window.HonorPlayer = player;\n    switch (config.provider) {\n        case VideoServiceProvider_1.VideoServiceProvider.youtube:\n            (0, YTAdaptor_1.bindPlayerToYoutubeAPI)(elementId, config, player);\n            break;\n        case VideoServiceProvider_1.VideoServiceProvider.vimeo:\n            (0, VimeoAdaptor_1.bindPlayerToVimeoAPI)(elementId, config, player);\n            break;\n    }\n};\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack://honor-ed-video-adapters/./dist/index.js?");

/***/ }),

/***/ "./dist/types/Shared/HonorEventEmitter.js":
/*!************************************************!*\
  !*** ./dist/types/Shared/HonorEventEmitter.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.HonorVideoEventEmitters = void 0;\nconst HonorVideoEvent_1 = __webpack_require__(/*! ./HonorVideoEvent */ \"./dist/types/Shared/HonorVideoEvent.js\");\nclass HonorVideoEventEmitter {\n    constructor() {\n        this.callbacks = [];\n    }\n    on(callback) {\n        this.callbacks.push(callback);\n    }\n    off(callback) {\n        let index = this.callbacks.indexOf(callback);\n        if (index > -1) {\n            this.callbacks.splice(index, 1);\n        }\n    }\n    emit(data) {\n        for (const callback of this.callbacks) {\n            callback(data);\n        }\n    }\n}\nclass HonorVideoEventEmitters {\n    constructor() {\n        this.stateChangeEmitter = new HonorVideoEventEmitter();\n        this.readyEmitter = new HonorVideoEventEmitter();\n        this.errorEmitter = new HonorVideoEventEmitter();\n        this.currentTimeEmitter = new HonorVideoEventEmitter();\n        this.onReady = (callback) => {\n            this.readyEmitter.on(callback);\n        };\n        this.onStateChange = (callback) => {\n            this.stateChangeEmitter.on(callback);\n        };\n        this.onError = (callback) => {\n            this.errorEmitter.on(callback);\n        };\n        this.onCurrentTimeChange = (callback) => {\n            this.currentTimeEmitter.on(callback);\n        };\n        this.triggerEvent = (event, { data } = {}) => {\n            switch (event) {\n                case HonorVideoEvent_1.HonorVideoEvent.playerReady:\n                    this.readyEmitter.emit();\n                    break;\n                case HonorVideoEvent_1.HonorVideoEvent.stateChanged:\n                    if (data) {\n                        this.stateChangeEmitter.emit(data);\n                    }\n                    break;\n                case HonorVideoEvent_1.HonorVideoEvent.error:\n                    if (data) {\n                        this.errorEmitter.emit(data);\n                    }\n                    break;\n                case HonorVideoEvent_1.HonorVideoEvent.currentTimeChanged:\n                    if (data) {\n                        this.currentTimeEmitter.emit(data);\n                    }\n            }\n        };\n    }\n}\nexports.HonorVideoEventEmitters = HonorVideoEventEmitters;\n//# sourceMappingURL=HonorEventEmitter.js.map\n\n//# sourceURL=webpack://honor-ed-video-adapters/./dist/types/Shared/HonorEventEmitter.js?");

/***/ }),

/***/ "./dist/types/Shared/HonorVideoError.js":
/*!**********************************************!*\
  !*** ./dist/types/Shared/HonorVideoError.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.HonorVideoErrorType = void 0;\nvar HonorVideoErrorType;\n(function (HonorVideoErrorType) {\n    HonorVideoErrorType[HonorVideoErrorType[\"playerError\"] = 1] = \"playerError\";\n    HonorVideoErrorType[HonorVideoErrorType[\"notFound\"] = 2] = \"notFound\";\n    HonorVideoErrorType[HonorVideoErrorType[\"notInitialized\"] = 3] = \"notInitialized\";\n    HonorVideoErrorType[HonorVideoErrorType[\"apiLoadError\"] = 4] = \"apiLoadError\";\n    HonorVideoErrorType[HonorVideoErrorType[\"adaptorLayerError\"] = 5] = \"adaptorLayerError\";\n    HonorVideoErrorType[HonorVideoErrorType[\"invalidPermissions\"] = 6] = \"invalidPermissions\";\n    HonorVideoErrorType[HonorVideoErrorType[\"unknown\"] = -1] = \"unknown\";\n})(HonorVideoErrorType || (exports.HonorVideoErrorType = HonorVideoErrorType = {}));\n//# sourceMappingURL=HonorVideoError.js.map\n\n//# sourceURL=webpack://honor-ed-video-adapters/./dist/types/Shared/HonorVideoError.js?");

/***/ }),

/***/ "./dist/types/Shared/HonorVideoEvent.js":
/*!**********************************************!*\
  !*** ./dist/types/Shared/HonorVideoEvent.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.HonorVideoEvent = void 0;\nvar HonorVideoEvent;\n(function (HonorVideoEvent) {\n    HonorVideoEvent[HonorVideoEvent[\"playerReady\"] = 0] = \"playerReady\";\n    HonorVideoEvent[HonorVideoEvent[\"stateChanged\"] = 1] = \"stateChanged\";\n    HonorVideoEvent[HonorVideoEvent[\"error\"] = 2] = \"error\";\n    HonorVideoEvent[HonorVideoEvent[\"currentTimeChanged\"] = 3] = \"currentTimeChanged\";\n})(HonorVideoEvent || (exports.HonorVideoEvent = HonorVideoEvent = {}));\n//# sourceMappingURL=HonorVideoEvent.js.map\n\n//# sourceURL=webpack://honor-ed-video-adapters/./dist/types/Shared/HonorVideoEvent.js?");

/***/ }),

/***/ "./dist/types/Shared/HonorVideoPlayerState.js":
/*!****************************************************!*\
  !*** ./dist/types/Shared/HonorVideoPlayerState.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.HonorVideoPlayerState = void 0;\nvar HonorVideoPlayerState;\n(function (HonorVideoPlayerState) {\n    HonorVideoPlayerState[HonorVideoPlayerState[\"unstarted\"] = 0] = \"unstarted\";\n    HonorVideoPlayerState[HonorVideoPlayerState[\"ended\"] = 1] = \"ended\";\n    HonorVideoPlayerState[HonorVideoPlayerState[\"playing\"] = 2] = \"playing\";\n    HonorVideoPlayerState[HonorVideoPlayerState[\"paused\"] = 3] = \"paused\";\n    HonorVideoPlayerState[HonorVideoPlayerState[\"buffering\"] = 4] = \"buffering\";\n})(HonorVideoPlayerState || (exports.HonorVideoPlayerState = HonorVideoPlayerState = {}));\n//# sourceMappingURL=HonorVideoPlayerState.js.map\n\n//# sourceURL=webpack://honor-ed-video-adapters/./dist/types/Shared/HonorVideoPlayerState.js?");

/***/ }),

/***/ "./dist/types/Shared/VideoServiceProvider.js":
/*!***************************************************!*\
  !*** ./dist/types/Shared/VideoServiceProvider.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.VideoServiceProvider = void 0;\nvar VideoServiceProvider;\n(function (VideoServiceProvider) {\n    VideoServiceProvider[\"youtube\"] = \"youtube\";\n    VideoServiceProvider[\"vimeo\"] = \"vimeo\";\n})(VideoServiceProvider || (exports.VideoServiceProvider = VideoServiceProvider = {}));\n//# sourceMappingURL=VideoServiceProvider.js.map\n\n//# sourceURL=webpack://honor-ed-video-adapters/./dist/types/Shared/VideoServiceProvider.js?");

/***/ }),

/***/ "./dist/types/Vimeo/VimeoEvents.js":
/*!*****************************************!*\
  !*** ./dist/types/Vimeo/VimeoEvents.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.VimeoEvent = void 0;\nvar VimeoEvent;\n(function (VimeoEvent) {\n    VimeoEvent[\"ready\"] = \"loaded\";\n    VimeoEvent[\"play\"] = \"play\";\n    VimeoEvent[\"pause\"] = \"pause\";\n    VimeoEvent[\"buffering\"] = \"bufferstart\";\n    VimeoEvent[\"timeUpdated\"] = \"timeupdate\";\n    VimeoEvent[\"ended\"] = \"ended\";\n    VimeoEvent[\"error\"] = \"error\";\n})(VimeoEvent || (exports.VimeoEvent = VimeoEvent = {}));\n//# sourceMappingURL=VimeoEvents.js.map\n\n//# sourceURL=webpack://honor-ed-video-adapters/./dist/types/Vimeo/VimeoEvents.js?");

/***/ }),

/***/ "./dist/types/YouTube/YTEvents.js":
/*!****************************************!*\
  !*** ./dist/types/YouTube/YTEvents.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.YTError = exports.YTPlayerState = void 0;\nvar YTPlayerState;\n(function (YTPlayerState) {\n    YTPlayerState[YTPlayerState[\"unstarted\"] = -1] = \"unstarted\";\n    YTPlayerState[YTPlayerState[\"ended\"] = 0] = \"ended\";\n    YTPlayerState[YTPlayerState[\"playing\"] = 1] = \"playing\";\n    YTPlayerState[YTPlayerState[\"paused\"] = 2] = \"paused\";\n    YTPlayerState[YTPlayerState[\"buffering\"] = 3] = \"buffering\";\n    YTPlayerState[YTPlayerState[\"videoCued\"] = 5] = \"videoCued\";\n})(YTPlayerState || (exports.YTPlayerState = YTPlayerState = {}));\nvar YTError;\n(function (YTError) {\n    YTError[YTError[\"invalidParameter\"] = 2] = \"invalidParameter\";\n    YTError[YTError[\"playerError\"] = 5] = \"playerError\";\n    YTError[YTError[\"notFound\"] = 100] = \"notFound\";\n    YTError[YTError[\"invalidPermissions\"] = 101] = \"invalidPermissions\";\n    YTError[YTError[\"invalidPermissionsAlt\"] = 150] = \"invalidPermissionsAlt\";\n    YTError[YTError[\"apiLoadError\"] = 400] = \"apiLoadError\";\n})(YTError || (exports.YTError = YTError = {}));\n//# sourceMappingURL=YTEvents.js.map\n\n//# sourceURL=webpack://honor-ed-video-adapters/./dist/types/YouTube/YTEvents.js?");

/***/ }),

/***/ "./dist/types/adaptors/VimeoAdaptor.js":
/*!*********************************************!*\
  !*** ./dist/types/adaptors/VimeoAdaptor.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.bindPlayerToVimeoAPI = void 0;\nconst loadVimeoAPI_1 = __importDefault(__webpack_require__(/*! ../../utils/loadVimeoAPI */ \"./dist/utils/loadVimeoAPI.js\"));\nconst HonorVideoEvent_1 = __webpack_require__(/*! ../Shared/HonorVideoEvent */ \"./dist/types/Shared/HonorVideoEvent.js\");\nconst HonorVideoPlayerState_1 = __webpack_require__(/*! ../Shared/HonorVideoPlayerState */ \"./dist/types/Shared/HonorVideoPlayerState.js\");\nconst VimeoEvents_1 = __webpack_require__(/*! ../Vimeo/VimeoEvents */ \"./dist/types/Vimeo/VimeoEvents.js\");\nconst convertVimeoPlayer_1 = __importDefault(__webpack_require__(/*! ./convertVimeoPlayer */ \"./dist/types/adaptors/convertVimeoPlayer.js\"));\nconst bindPlayerToVimeoAPI = (elementId, honorConfig, player) => {\n    let config = {\n        id: honorConfig.videoId,\n        width: honorConfig.width,\n        height: honorConfig.height,\n        autoplay: true,\n        controls: honorConfig.controls,\n        playsinline: honorConfig.playsInline,\n        vimeo_logo: false\n    };\n    return new Promise((resolve) => {\n        (0, loadVimeoAPI_1.default)(player.emitter.triggerEvent)\n            .then(() => {\n            const vimeoPlayer = (0, convertVimeoPlayer_1.default)(elementId, config);\n            vimeoPlayer.on(VimeoEvents_1.VimeoEvent.ready, () => {\n                player.emitter.triggerEvent(HonorVideoEvent_1.HonorVideoEvent.playerReady);\n                player.emitter.triggerEvent(HonorVideoEvent_1.HonorVideoEvent.stateChanged, { data: HonorVideoPlayerState_1.HonorVideoPlayerState.unstarted });\n            });\n            vimeoPlayer.on(VimeoEvents_1.VimeoEvent.pause, () => {\n                player.emitter.triggerEvent(HonorVideoEvent_1.HonorVideoEvent.stateChanged, { data: HonorVideoPlayerState_1.HonorVideoPlayerState.paused });\n            });\n            vimeoPlayer.on(VimeoEvents_1.VimeoEvent.play, () => {\n                player.emitter.triggerEvent(HonorVideoEvent_1.HonorVideoEvent.stateChanged, { data: HonorVideoPlayerState_1.HonorVideoPlayerState.playing });\n            });\n            vimeoPlayer.on(VimeoEvents_1.VimeoEvent.buffering, () => {\n                player.emitter.triggerEvent(HonorVideoEvent_1.HonorVideoEvent.stateChanged, { data: HonorVideoPlayerState_1.HonorVideoPlayerState.buffering });\n            });\n            vimeoPlayer.on(VimeoEvents_1.VimeoEvent.timeUpdated, ({ seconds }) => {\n                player.emitter.triggerEvent(HonorVideoEvent_1.HonorVideoEvent.currentTimeChanged, { data: seconds });\n            });\n            vimeoPlayer.on(VimeoEvents_1.VimeoEvent.ended, () => {\n                player.emitter.triggerEvent(HonorVideoEvent_1.HonorVideoEvent.stateChanged, { data: HonorVideoPlayerState_1.HonorVideoPlayerState.ended });\n            });\n            vimeoPlayer.on(VimeoEvents_1.VimeoEvent.error, (error) => {\n                console.log(\"ERROR\");\n                console.log(error.message);\n                console.log(error.name);\n            });\n            let adaptor = {\n                destroy: () => vimeoPlayer.destroy(),\n                getCurrentTime: function () {\n                    return vimeoPlayer.getCurrentTime();\n                },\n                getDuration: function () {\n                    return vimeoPlayer.getDuration();\n                },\n                getPlaybackRate: function () {\n                    return vimeoPlayer.getPlaybackRate();\n                },\n                getVideoLoadedFraction: function () {\n                    return vimeoPlayer.getVideoLoadedFraction();\n                },\n                getVolume: function () {\n                    return vimeoPlayer.getVolume();\n                },\n                loadVideoById: function (videoId, startTime, endTime) {\n                    return vimeoPlayer.loadVideoById(videoId, startTime, endTime);\n                },\n                seekTo: function (seconds) {\n                    return vimeoPlayer.seekTo(seconds);\n                },\n                setPlaybackRate: function (rate) {\n                    return vimeoPlayer.setPlaybackRate(rate);\n                },\n                setSize: function (width, height) {\n                    const iFrame = vimeoPlayer.getIframe();\n                    if (iFrame) {\n                        iFrame.style.width = `${width}px`;\n                        iFrame.style.height = `${height}px`;\n                    }\n                    return Promise.resolve();\n                },\n                setVolume: function (volume) {\n                    return vimeoPlayer.setVolume(volume);\n                },\n                playVideo: function () {\n                    return vimeoPlayer.playVideo();\n                },\n                pauseVideo: function () {\n                    return vimeoPlayer.pauseVideo();\n                }\n            };\n            player.setAdaptor(adaptor);\n            resolve();\n        });\n    });\n};\nexports.bindPlayerToVimeoAPI = bindPlayerToVimeoAPI;\n//# sourceMappingURL=VimeoAdaptor.js.map\n\n//# sourceURL=webpack://honor-ed-video-adapters/./dist/types/adaptors/VimeoAdaptor.js?");

/***/ }),

/***/ "./dist/types/adaptors/YTAdaptor.js":
/*!******************************************!*\
  !*** ./dist/types/adaptors/YTAdaptor.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.bindPlayerToYoutubeAPI = void 0;\nconst YTEvents_1 = __webpack_require__(/*! ../YouTube/YTEvents */ \"./dist/types/YouTube/YTEvents.js\");\nconst HonorVideoEvent_1 = __webpack_require__(/*! ../Shared/HonorVideoEvent */ \"./dist/types/Shared/HonorVideoEvent.js\");\nconst loadYoutubeAPI_1 = __importDefault(__webpack_require__(/*! ../../utils/loadYoutubeAPI */ \"./dist/utils/loadYoutubeAPI.js\"));\nconst convertYTPlayer_1 = __importDefault(__webpack_require__(/*! ./convertYTPlayer */ \"./dist/types/adaptors/convertYTPlayer.js\"));\nconst HonorVideoPlayerState_1 = __webpack_require__(/*! ../Shared/HonorVideoPlayerState */ \"./dist/types/Shared/HonorVideoPlayerState.js\");\nconst HonorVideoError_1 = __webpack_require__(/*! ../Shared/HonorVideoError */ \"./dist/types/Shared/HonorVideoError.js\");\nconst parseYTPlayerState = (state) => {\n    switch (state) {\n        case YTEvents_1.YTPlayerState.unstarted:\n            return HonorVideoPlayerState_1.HonorVideoPlayerState.unstarted;\n        case YTEvents_1.YTPlayerState.playing:\n            return HonorVideoPlayerState_1.HonorVideoPlayerState.playing;\n        case YTEvents_1.YTPlayerState.paused:\n            return HonorVideoPlayerState_1.HonorVideoPlayerState.paused;\n        case YTEvents_1.YTPlayerState.buffering:\n            return HonorVideoPlayerState_1.HonorVideoPlayerState.buffering;\n        case YTEvents_1.YTPlayerState.ended:\n            return HonorVideoPlayerState_1.HonorVideoPlayerState.ended;\n        case YTEvents_1.YTPlayerState.videoCued:\n            return undefined; // unneeded for our purposes\n    }\n};\nconst parseYTPlayerError = (error) => {\n    switch (error) {\n        case YTEvents_1.YTError.apiLoadError:\n            return HonorVideoError_1.HonorVideoErrorType.apiLoadError;\n        case YTEvents_1.YTError.invalidPermissions, YTEvents_1.YTError.invalidPermissionsAlt:\n            return HonorVideoError_1.HonorVideoErrorType.invalidPermissions;\n        case YTEvents_1.YTError.invalidParameter:\n            return HonorVideoError_1.HonorVideoErrorType.playerError;\n        case YTEvents_1.YTError.playerError:\n            return HonorVideoError_1.HonorVideoErrorType.playerError;\n        case YTEvents_1.YTError.notFound:\n            return HonorVideoError_1.HonorVideoErrorType.notFound;\n        default:\n            return HonorVideoError_1.HonorVideoErrorType.unknown;\n    }\n};\nconst bindPlayerToYoutubeAPI = (elementId, honorConfig, player) => {\n    let config = {\n        height: honorConfig.height,\n        width: honorConfig.width,\n        videoId: honorConfig.videoId,\n        playerVars: {\n            autoplay: honorConfig.autoplay ? 1 : 0,\n            controls: honorConfig.controls ? 1 : 0,\n            fs: honorConfig.fullscreenEnabled ? 1 : 0,\n            playsInline: honorConfig.playsInline ? 1 : 0\n        }\n    };\n    return new Promise((resolve) => {\n        (0, loadYoutubeAPI_1.default)(player.emitter.triggerEvent)\n            .then(() => {\n            let timePoll;\n            const setupTimePoll = () => {\n                timePoll = setInterval(() => {\n                    if (window.HonorPlayer) {\n                        window.HonorPlayer.getCurrentTime()\n                            .then((time) => {\n                            player.emitter.triggerEvent(HonorVideoEvent_1.HonorVideoEvent.currentTimeChanged, { data: time });\n                        });\n                    }\n                }, 500);\n            };\n            config.events = {\n                'onReady': () => { player.emitter.triggerEvent(HonorVideoEvent_1.HonorVideoEvent.playerReady); },\n                'onStateChange': (event) => {\n                    const { data } = event;\n                    const castData = data;\n                    if (castData === undefined) {\n                        player.emitter.triggerEvent(HonorVideoEvent_1.HonorVideoEvent.error, {\n                            data: {\n                                type: HonorVideoError_1.HonorVideoErrorType.adaptorLayerError,\n                                message: `Unknown player state received: ${data}`\n                            }\n                        });\n                        return;\n                    }\n                    const honorPlayerState = parseYTPlayerState(castData);\n                    if (!honorPlayerState) {\n                        player.emitter.triggerEvent(HonorVideoEvent_1.HonorVideoEvent.error, {\n                            data: {\n                                type: HonorVideoError_1.HonorVideoErrorType.adaptorLayerError,\n                                message: `Could not convert Youtube player event: ${castData} into Honor Event`\n                            }\n                        });\n                        return;\n                    }\n                    player.emitter.triggerEvent(HonorVideoEvent_1.HonorVideoEvent.stateChanged, { data: honorPlayerState });\n                    if (timePoll !== undefined && (YTEvents_1.YTPlayerState.ended === data || YTEvents_1.YTPlayerState.unstarted === data)) {\n                        clearInterval(timePoll);\n                    }\n                    else if (timePoll === undefined) {\n                        setupTimePoll();\n                    }\n                },\n                'onError': (event) => {\n                    const { data } = event;\n                    var castData = data;\n                    var error = HonorVideoError_1.HonorVideoErrorType.unknown;\n                    if (castData) {\n                        error = parseYTPlayerError(castData);\n                    }\n                    player.emitter.triggerEvent(HonorVideoEvent_1.HonorVideoEvent.error, { data: { type: error } });\n                }\n            };\n            const YTPlayer = (0, convertYTPlayer_1.default)(elementId, config);\n            let adaptor = {\n                destroy: () => Promise.resolve(YTPlayer.destroy()),\n                getCurrentTime: function () {\n                    return Promise.resolve(YTPlayer.getCurrentTime());\n                },\n                getDuration: function () {\n                    return Promise.resolve(YTPlayer.getDuration());\n                },\n                getPlaybackRate: function () {\n                    return Promise.resolve(YTPlayer.getPlaybackRate());\n                },\n                getVideoLoadedFraction: function () {\n                    return Promise.resolve(YTPlayer.getVideoLoadedFraction());\n                },\n                getVolume: function () {\n                    return Promise.resolve(YTPlayer.getVolume());\n                },\n                loadVideoById: function (videoId, startTime, endTime) {\n                    return Promise.resolve(YTPlayer.loadVideoById(videoId, startTime, endTime));\n                },\n                seekTo: function (seconds) {\n                    return Promise.resolve(YTPlayer.seekTo(seconds, true));\n                },\n                setPlaybackRate: function (rate) {\n                    return Promise.resolve(YTPlayer.setPlaybackRate(rate));\n                },\n                setSize: function (width, height) {\n                    return Promise.resolve(YTPlayer.setSize(width.toString(), height.toString()));\n                },\n                setVolume: function (volume) {\n                    return Promise.resolve(YTPlayer.setVolume(volume));\n                },\n                playVideo: function () {\n                    return Promise.resolve(YTPlayer.playVideo());\n                },\n                pauseVideo: function () {\n                    return Promise.resolve(YTPlayer.pauseVideo());\n                }\n            };\n            player.setAdaptor(adaptor);\n            resolve();\n        });\n    });\n};\nexports.bindPlayerToYoutubeAPI = bindPlayerToYoutubeAPI;\n//# sourceMappingURL=YTAdaptor.js.map\n\n//# sourceURL=webpack://honor-ed-video-adapters/./dist/types/adaptors/YTAdaptor.js?");

/***/ }),

/***/ "./dist/types/adaptors/convertVimeoPlayer.js":
/*!***************************************************!*\
  !*** ./dist/types/adaptors/convertVimeoPlayer.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports[\"default\"] = (elementId, config) => {\n    console.log(window.Vimeo);\n    let player = new Vimeo.Player(elementId, config);\n    return {\n        loadVideoById: (id, start_time, end_time) => player.loadVideoById({ id, start_time, end_time }),\n        loadVideoByUrl: (url, start_time, end_time) => player.loadVideoByUrl({ url, start_time, end_time }),\n        playVideo: () => player.play(),\n        pauseVideo: () => player.pause(),\n        seekTo: (seconds) => player.setCurrentTime(seconds),\n        getDuration: () => player.getDuration(),\n        getVideoLoadedFraction: () => player.getVideoLoadedFraction(),\n        setVolume: (volume) => player.setVolume(volume),\n        getVolume: () => player.getVolume(),\n        getPlaybackRate: () => player.getPlaybackRate(),\n        setPlaybackRate: (suggestedRate) => player.setPlaybackRate(suggestedRate),\n        getCurrentTime: () => player.getCurrentTime(),\n        getVideoUrl: () => player.getVideoUrl(),\n        destroy: () => player.destroy(),\n        getIframe: () => document.querySelector('iframe'),\n        on: (event, callback) => player.on(event, callback)\n    };\n};\n//# sourceMappingURL=convertVimeoPlayer.js.map\n\n//# sourceURL=webpack://honor-ed-video-adapters/./dist/types/adaptors/convertVimeoPlayer.js?");

/***/ }),

/***/ "./dist/types/adaptors/convertYTPlayer.js":
/*!************************************************!*\
  !*** ./dist/types/adaptors/convertYTPlayer.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports[\"default\"] = (elementId, config) => {\n    let player = new window.YT.Player(elementId, config);\n    return {\n        loadVideoById: (videoId, startSeconds, endSeconds) => player.loadVideoById({ videoId, startSeconds, endSeconds }),\n        loadVideoByUrl: (mediaContentUrl, startSeconds, endSeconds) => player.loadVideoByUrl({ mediaContentUrl, startSeconds, endSeconds }),\n        playVideo: () => player.playVideo(),\n        pauseVideo: () => player.pauseVideo(),\n        stopVideo: () => player.stopVideo(),\n        seekTo: (seconds, allowSeekAhead) => player.seekTo(seconds, allowSeekAhead),\n        getDuration: () => player.getDuration(),\n        getVideoLoadedFraction: () => player.getVideoLoadedFraction(),\n        setVolume: (volume) => player.setVolume(volume),\n        getVolume: () => player.getVolume(),\n        getPlaybackRate: () => player.getPlaybackRate(),\n        setPlaybackRate: (suggestedRate) => player.setPlaybackRate(suggestedRate),\n        getAvailablePlaybackRates: () => player.getAvailablePlaybackRates(),\n        getCurrentTime: () => player.getCurrentTime(),\n        getVideoUrl: () => player.getVideoUrl(),\n        destroy: () => player.destroy(),\n        setSize: (width, height) => player.setSize(width, height),\n        getIframe: () => player.getIframe()\n    };\n};\n//# sourceMappingURL=convertYTPlayer.js.map\n\n//# sourceURL=webpack://honor-ed-video-adapters/./dist/types/adaptors/convertYTPlayer.js?");

/***/ }),

/***/ "./dist/utils/loadVimeoAPI.js":
/*!************************************!*\
  !*** ./dist/utils/loadVimeoAPI.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst load_script_1 = __importDefault(__webpack_require__(/*! load-script */ \"./node_modules/load-script/index.js\"));\nconst HonorVideoEvent_1 = __webpack_require__(/*! ../types/Shared/HonorVideoEvent */ \"./dist/types/Shared/HonorVideoEvent.js\");\nconst HonorVideoError_1 = __webpack_require__(/*! ../types/Shared/HonorVideoError */ \"./dist/types/Shared/HonorVideoError.js\");\nexports[\"default\"] = (handleEvent) => {\n    const iFrameReadyPromise = new Promise((resolve, reject) => {\n        let protocol = 'http:';\n        console.log(protocol);\n        (0, load_script_1.default)(protocol + '//player.vimeo.com/api/player.js', (err, script) => {\n            if (err) {\n                console.log(\"ERROR\");\n                handleEvent(HonorVideoEvent_1.HonorVideoEvent.error, { data: { type: HonorVideoError_1.HonorVideoErrorType.apiLoadError, message: \"Failed to load Vimeo iFrame API\" } });\n                reject(\"Failed to load Vimeo iFrame API\");\n            }\n            console.log(\"resolving\");\n            resolve();\n        });\n    });\n    return iFrameReadyPromise;\n};\n//# sourceMappingURL=loadVimeoAPI.js.map\n\n//# sourceURL=webpack://honor-ed-video-adapters/./dist/utils/loadVimeoAPI.js?");

/***/ }),

/***/ "./dist/utils/loadYoutubeAPI.js":
/*!**************************************!*\
  !*** ./dist/utils/loadYoutubeAPI.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst load_script_1 = __importDefault(__webpack_require__(/*! load-script */ \"./node_modules/load-script/index.js\"));\nconst HonorVideoEvent_1 = __webpack_require__(/*! ../types/Shared/HonorVideoEvent */ \"./dist/types/Shared/HonorVideoEvent.js\");\nconst HonorVideoError_1 = __webpack_require__(/*! ../types/Shared/HonorVideoError */ \"./dist/types/Shared/HonorVideoError.js\");\nexports[\"default\"] = (handleEvent) => {\n    const iFrameReadyPromise = new Promise((resolve) => {\n        if (window.YT && window.YT.Player && window.YT.Player instanceof Function) {\n            // youtube iframe already loaded, resolve\n            resolve(window.YT);\n            return;\n        }\n        let protocol = window.location.protocol === 'http:' ? 'http:' : 'https:';\n        console.log(protocol);\n        (0, load_script_1.default)(protocol + '//www.youtube.com/iframe_api', (err) => {\n            if (err) {\n                console.log(\"ERROR\");\n                handleEvent(HonorVideoEvent_1.HonorVideoEvent.error, { data: { type: HonorVideoError_1.HonorVideoErrorType.apiLoadError, message: \"Failed to load Youtube iFrame API\" } });\n            }\n        });\n        let existingValue = window.onYouTubeIframeAPIReady;\n        window.onYouTubeIframeAPIReady = () => {\n            if (existingValue) {\n                existingValue();\n            }\n            if (window.YT !== undefined && window.YT.Player && window.YT.Player instanceof Function) {\n                resolve(window.YT);\n            }\n        };\n    });\n    return iFrameReadyPromise;\n};\n//# sourceMappingURL=loadYoutubeAPI.js.map\n\n//# sourceURL=webpack://honor-ed-video-adapters/./dist/utils/loadYoutubeAPI.js?");

/***/ }),

/***/ "./node_modules/load-script/index.js":
/*!*******************************************!*\
  !*** ./node_modules/load-script/index.js ***!
  \*******************************************/
/***/ ((module) => {

eval("\nmodule.exports = function load (src, opts, cb) {\n  var head = document.head || document.getElementsByTagName('head')[0]\n  var script = document.createElement('script')\n\n  if (typeof opts === 'function') {\n    cb = opts\n    opts = {}\n  }\n\n  opts = opts || {}\n  cb = cb || function() {}\n\n  script.type = opts.type || 'text/javascript'\n  script.charset = opts.charset || 'utf8';\n  script.async = 'async' in opts ? !!opts.async : true\n  script.src = src\n\n  if (opts.attrs) {\n    setAttributes(script, opts.attrs)\n  }\n\n  if (opts.text) {\n    script.text = '' + opts.text\n  }\n\n  var onend = 'onload' in script ? stdOnEnd : ieOnEnd\n  onend(script, cb)\n\n  // some good legacy browsers (firefox) fail the 'in' detection above\n  // so as a fallback we always set onload\n  // old IE will ignore this and new IE will set onload\n  if (!script.onload) {\n    stdOnEnd(script, cb);\n  }\n\n  head.appendChild(script)\n}\n\nfunction setAttributes(script, attrs) {\n  for (var attr in attrs) {\n    script.setAttribute(attr, attrs[attr]);\n  }\n}\n\nfunction stdOnEnd (script, cb) {\n  script.onload = function () {\n    this.onerror = this.onload = null\n    cb(null, script)\n  }\n  script.onerror = function () {\n    // this.onload = null here is necessary\n    // because even IE9 works not like others\n    this.onerror = this.onload = null\n    cb(new Error('Failed to load ' + this.src), script)\n  }\n}\n\nfunction ieOnEnd (script, cb) {\n  script.onreadystatechange = function () {\n    if (this.readyState != 'complete' && this.readyState != 'loaded') return\n    this.onreadystatechange = null\n    cb(null, script) // there is no way to catch loading errors in IE8\n  }\n}\n\n\n//# sourceURL=webpack://honor-ed-video-adapters/./node_modules/load-script/index.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./dist/index.js");
/******/ 	
/******/ })()
;