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
})(globalThis, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./dist/HonorPlayer.js":
/*!*****************************!*\
  !*** ./dist/HonorPlayer.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HonorPlayer: () => (/* binding */ HonorPlayer)\n/* harmony export */ });\n/* harmony import */ var _utils_Shared_HonorEventEmitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/Shared/HonorEventEmitter */ \"./dist/utils/Shared/HonorEventEmitter.js\");\n/* harmony import */ var _types_Shared_HonorVideoEvent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types/Shared/HonorVideoEvent */ \"./dist/types/Shared/HonorVideoEvent.js\");\n/* harmony import */ var _types_Shared_HonorVideoPlayerState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types/Shared/HonorVideoPlayerState */ \"./dist/types/Shared/HonorVideoPlayerState.js\");\nvar __esDecorate = (undefined && undefined.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {\n    function accept(f) { if (f !== void 0 && typeof f !== \"function\") throw new TypeError(\"Function expected\"); return f; }\n    var kind = contextIn.kind, key = kind === \"getter\" ? \"get\" : kind === \"setter\" ? \"set\" : \"value\";\n    var target = !descriptorIn && ctor ? contextIn[\"static\"] ? ctor : ctor.prototype : null;\n    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});\n    var _, done = false;\n    for (var i = decorators.length - 1; i >= 0; i--) {\n        var context = {};\n        for (var p in contextIn) context[p] = p === \"access\" ? {} : contextIn[p];\n        for (var p in contextIn.access) context.access[p] = contextIn.access[p];\n        context.addInitializer = function (f) { if (done) throw new TypeError(\"Cannot add initializers after decoration has completed\"); extraInitializers.push(accept(f || null)); };\n        var result = (0, decorators[i])(kind === \"accessor\" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);\n        if (kind === \"accessor\") {\n            if (result === void 0) continue;\n            if (result === null || typeof result !== \"object\") throw new TypeError(\"Object expected\");\n            if (_ = accept(result.get)) descriptor.get = _;\n            if (_ = accept(result.set)) descriptor.set = _;\n            if (_ = accept(result.init)) initializers.unshift(_);\n        }\n        else if (_ = accept(result)) {\n            if (kind === \"field\") initializers.unshift(_);\n            else descriptor[key] = _;\n        }\n    }\n    if (target) Object.defineProperty(target, contextIn.name, descriptor);\n    done = true;\n};\nvar __runInitializers = (undefined && undefined.__runInitializers) || function (thisArg, initializers, value) {\n    var useValue = arguments.length > 2;\n    for (var i = 0; i < initializers.length; i++) {\n        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);\n    }\n    return useValue ? value : void 0;\n};\n\n\n\nfunction RequiresInitializationForAllMethods(excludeMethods = []) {\n    return function (Base) {\n        return class extends Base {\n            constructor(...args) {\n                super(...args);\n                // Get all method names of the class prototype\n                const methodNames = Object.getOwnPropertyNames(Base.prototype).filter((method) => method !== 'constructor' && // Exclude constructor\n                    !excludeMethods.includes(method) // Exclude specified methods\n                );\n                for (const methodName of methodNames) {\n                    // eslint-disable-next-line \n                    const originalMethod = this[methodName];\n                    if (typeof originalMethod === 'function') {\n                        // Wrap the method with initialization check\n                        ;\n                        this[methodName] = function (...args) {\n                            if (!(this).initialized) {\n                                this.emitter.triggerEvent(_types_Shared_HonorVideoEvent__WEBPACK_IMPORTED_MODULE_1__.HonorVideoEvent.error, { data: 5 });\n                                throw new Error(`Method ${methodName} called before adaptor was initialized`);\n                            }\n                            return originalMethod.apply(this, args);\n                        };\n                    }\n                }\n            }\n        };\n    };\n}\n/* eslint-enable\n  @typescript-eslint/no-empty-object-type,\n  @typescript-eslint/no-explicit-any,\n  @typescript-eslint/no-unsafe-argument,\n  @typescript-eslint/explicit-function-return-type,\n  @typescript-eslint/no-unsafe-member-access,\n  @typescript-eslint/no-unsafe-call,\n  @typescript-eslint/no-unsafe-return\n*/\nlet HonorPlayer = (() => {\n    let _classDecorators = [RequiresInitializationForAllMethods([\n            'setAdaptor',\n            'onReady',\n            'onError',\n            'onCurrentTimeChanged',\n            'onStateChanged',\n            'onPlaybackRateChanged',\n            'onVolumeChanged',\n            'initializeAdaptor',\n        ])];\n    let _classDescriptor;\n    let _classExtraInitializers = [];\n    let _classThis;\n    var HonorPlayer = class {\n        static { _classThis = this; }\n        static {\n            const _metadata = typeof Symbol === \"function\" && Symbol.metadata ? Object.create(null) : void 0;\n            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: \"class\", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);\n            HonorPlayer = _classThis = _classDescriptor.value;\n            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });\n            __runInitializers(_classThis, _classExtraInitializers);\n        }\n        initialized = false;\n        adaptor;\n        emitter;\n        constructor(elementId, configuration, adaptor) {\n            this.adaptor = adaptor;\n            this.emitter = new _utils_Shared_HonorEventEmitter__WEBPACK_IMPORTED_MODULE_0__.HonorVideoEventEmitters();\n            void this.initializeAdaptor(elementId, configuration);\n        }\n        destroy = () => { this.adaptor.destroy(); };\n        getCurrentTime = () => this.adaptor.getCurrentTime();\n        getDuration = () => this.adaptor.getDuration();\n        getPlaybackRate = () => this.adaptor.getPlaybackRate();\n        getVideoLoadedFraction = () => this.adaptor.getVideoLoadedFraction();\n        getVolume = () => this.adaptor.getVolume();\n        loadVideoById = (videoId, startTime, endTime) => { this.adaptor.loadVideoById(videoId, startTime, endTime); };\n        seekTo = (seconds) => { this.adaptor.seekTo(seconds); };\n        setPlaybackRate = (rate) => { this.adaptor.setPlaybackRate(rate); };\n        setSize = (width, height) => { this.adaptor.setSize(width, height); };\n        setVolume = (volume) => { this.adaptor.setVolume(volume); };\n        stopVideo = () => { this.adaptor.stopVideo(); };\n        playVideo = () => { this.adaptor.playVideo(); };\n        pauseVideo = () => { this.adaptor.pauseVideo(); };\n        onReady = (callback) => {\n            try {\n                const state = this.adaptor.getPlayerState();\n                if (state !== _types_Shared_HonorVideoPlayerState__WEBPACK_IMPORTED_MODULE_2__.HonorVideoPlayerState.unstarted) {\n                    callback();\n                    return () => { };\n                }\n                else {\n                    return this.emitter.onReady(callback);\n                }\n            }\n            catch {\n                return this.emitter.onReady(callback);\n            }\n        };\n        onError = (callback) => {\n            return this.emitter.onError(callback);\n        };\n        onCurrentTimeChanged = (callback) => {\n            return this.emitter.onCurrentTimeChange(callback);\n        };\n        onStateChanged = (callback) => {\n            return this.emitter.onStateChange(callback);\n        };\n        onPlaybackRateChanged = (callback) => {\n            return this.emitter.onPlaybackRateChange(callback);\n        };\n        onVolumeChanged = (callback) => {\n            return this.emitter.onVolumeChange(callback);\n        };\n        initializeAdaptor = async (elementId, config) => {\n            await this.adaptor.initialize(elementId, config, this);\n            this.initialized = true;\n        };\n    };\n    return HonorPlayer = _classThis;\n})();\n\n//# sourceMappingURL=HonorPlayer.js.map\n\n//# sourceURL=webpack://HE/./dist/HonorPlayer.js?");

/***/ }),

/***/ "./dist/adaptors/HonorVideoAdaptor.js":
/*!********************************************!*\
  !*** ./dist/adaptors/HonorVideoAdaptor.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\n//# sourceMappingURL=HonorVideoAdaptor.js.map\n\n//# sourceURL=webpack://HE/./dist/adaptors/HonorVideoAdaptor.js?");

/***/ }),

/***/ "./dist/adaptors/HonorVideoAdaptorFactory.js":
/*!***************************************************!*\
  !*** ./dist/adaptors/HonorVideoAdaptorFactory.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HonorVideoAdaptorFactory: () => (/* binding */ HonorVideoAdaptorFactory)\n/* harmony export */ });\n/* harmony import */ var _YouTube_YoutubeAdaptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./YouTube/YoutubeAdaptor */ \"./dist/adaptors/YouTube/YoutubeAdaptor.js\");\n\nconst HonorVideoAdaptorFactory = {\n    createAdaptor: (service) => {\n        switch (service) {\n            // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition\n            case 'youtube':\n                return new _YouTube_YoutubeAdaptor__WEBPACK_IMPORTED_MODULE_0__.YoutubeAdaptor();\n        }\n    },\n};\n//# sourceMappingURL=HonorVideoAdaptorFactory.js.map\n\n//# sourceURL=webpack://HE/./dist/adaptors/HonorVideoAdaptorFactory.js?");

/***/ }),

/***/ "./dist/adaptors/YouTube/YoutubeAdaptor.js":
/*!*************************************************!*\
  !*** ./dist/adaptors/YouTube/YoutubeAdaptor.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   YoutubeAdaptor: () => (/* binding */ YoutubeAdaptor)\n/* harmony export */ });\n/* harmony import */ var _convertYTPlayer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./convertYTPlayer */ \"./dist/adaptors/YouTube/convertYTPlayer.js\");\n/* harmony import */ var _utils_loadYoutubeAPI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/loadYoutubeAPI */ \"./dist/utils/loadYoutubeAPI.js\");\n/* harmony import */ var _utils_YouTube_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/YouTube/events */ \"./dist/utils/YouTube/events.js\");\n\n\n\n/**\n * This class will load Youtube's IFrame API upon the call of `initialize`, and upon completion will set the YT.Player object on `this` and expose methods that interact with it.\n */\nclass YoutubeAdaptor {\n    YTPlayer;\n    initialize = async (elementId, configuration, player) => {\n        await (0,_utils_loadYoutubeAPI__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(player.emitter);\n        const config = {\n            height: configuration.height,\n            width: configuration.width,\n            videoId: configuration.videoId,\n            events: (0,_utils_YouTube_events__WEBPACK_IMPORTED_MODULE_2__.youtubeEventHandler)(player),\n            playerVars: {\n                autoPlay: configuration.autoplay ? 1 : 0,\n                controls: configuration.controls ? 1 : 0,\n                fs: configuration.fullscreenEnabled ? 1 : 0,\n                playsInline: configuration.playsInline ? 1 : 0,\n            },\n        };\n        const ytPlayer = (0,_convertYTPlayer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(elementId, config);\n        this.YTPlayer = ytPlayer;\n    };\n    destroy = () => { this.YTPlayer.destroy(); };\n    getCurrentTime = () => this.YTPlayer.getCurrentTime();\n    getDuration = () => this.YTPlayer.getDuration();\n    getPlaybackRate = () => this.YTPlayer.getPlaybackRate();\n    getVideoLoadedFraction = () => this.YTPlayer.getVideoLoadedFraction();\n    getPlayerState = () => {\n        const state = this.YTPlayer.getPlayerState();\n        return (0,_utils_YouTube_events__WEBPACK_IMPORTED_MODULE_2__.parseYTPlayerState)(state);\n    };\n    getVolume = () => this.YTPlayer.getVolume();\n    loadVideoById = (videoId, startTime, endTime) => { this.loadVideoById(videoId, startTime, endTime); };\n    seekTo = (seconds) => { this.YTPlayer.seekTo(seconds, true); };\n    setPlaybackRate = (rate) => { this.YTPlayer.setPlaybackRate(rate); };\n    setSize = (width, height) => { this.YTPlayer.setSize(width, height); };\n    setVolume = (volume) => { this.YTPlayer.setVolume(volume); };\n    stopVideo = () => { this.YTPlayer.stopVideo(); };\n    playVideo = () => { this.YTPlayer.playVideo(); };\n    pauseVideo = () => { this.YTPlayer.pauseVideo(); };\n}\n//# sourceMappingURL=YoutubeAdaptor.js.map\n\n//# sourceURL=webpack://HE/./dist/adaptors/YouTube/YoutubeAdaptor.js?");

/***/ }),

/***/ "./dist/adaptors/YouTube/convertYTPlayer.js":
/*!**************************************************!*\
  !*** ./dist/adaptors/YouTube/convertYTPlayer.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((elementId, config) => {\n    if (!window.YT) {\n        throw Error('Player instantiated before API loaded');\n    }\n    const player = new window.YT.Player(elementId, config);\n    return player;\n});\n//# sourceMappingURL=convertYTPlayer.js.map\n\n//# sourceURL=webpack://HE/./dist/adaptors/YouTube/convertYTPlayer.js?");

/***/ }),

/***/ "./dist/adaptors/YouTube/index.js":
/*!****************************************!*\
  !*** ./dist/adaptors/YouTube/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   YoutubeAdaptor: () => (/* reexport safe */ _YoutubeAdaptor__WEBPACK_IMPORTED_MODULE_0__.YoutubeAdaptor)\n/* harmony export */ });\n/* harmony import */ var _YoutubeAdaptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./YoutubeAdaptor */ \"./dist/adaptors/YouTube/YoutubeAdaptor.js\");\n\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack://HE/./dist/adaptors/YouTube/index.js?");

/***/ }),

/***/ "./dist/adaptors/index.js":
/*!********************************!*\
  !*** ./dist/adaptors/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HonorVideoAdaptorFactory: () => (/* reexport safe */ _HonorVideoAdaptorFactory__WEBPACK_IMPORTED_MODULE_1__.HonorVideoAdaptorFactory),\n/* harmony export */   YoutubeAdaptor: () => (/* reexport safe */ _YouTube__WEBPACK_IMPORTED_MODULE_0__.YoutubeAdaptor)\n/* harmony export */ });\n/* harmony import */ var _YouTube__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./YouTube */ \"./dist/adaptors/YouTube/index.js\");\n/* harmony import */ var _HonorVideoAdaptorFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HonorVideoAdaptorFactory */ \"./dist/adaptors/HonorVideoAdaptorFactory.js\");\n/* harmony import */ var _HonorVideoAdaptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HonorVideoAdaptor */ \"./dist/adaptors/HonorVideoAdaptor.js\");\n\n\n\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack://HE/./dist/adaptors/index.js?");

/***/ }),

/***/ "./dist/index.js":
/*!***********************!*\
  !*** ./dist/index.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HonorPlayer: () => (/* reexport safe */ _HonorPlayer__WEBPACK_IMPORTED_MODULE_0__.HonorPlayer),\n/* harmony export */   HonorVideoAdaptorFactory: () => (/* reexport safe */ _adaptors__WEBPACK_IMPORTED_MODULE_1__.HonorVideoAdaptorFactory),\n/* harmony export */   HonorVideoErrorType: () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_2__.HonorVideoErrorType),\n/* harmony export */   HonorVideoEvent: () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_2__.HonorVideoEvent),\n/* harmony export */   HonorVideoPlayerState: () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_2__.HonorVideoPlayerState),\n/* harmony export */   YoutubeAdaptor: () => (/* reexport safe */ _adaptors__WEBPACK_IMPORTED_MODULE_1__.YoutubeAdaptor)\n/* harmony export */ });\n/* harmony import */ var _HonorPlayer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HonorPlayer */ \"./dist/HonorPlayer.js\");\n/* harmony import */ var _adaptors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adaptors */ \"./dist/adaptors/index.js\");\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ \"./dist/types/index.js\");\n\n\n\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack://HE/./dist/index.js?");

/***/ }),

/***/ "./dist/types/Shared/HonorVideoConfiguration.js":
/*!******************************************************!*\
  !*** ./dist/types/Shared/HonorVideoConfiguration.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\n//# sourceMappingURL=HonorVideoConfiguration.js.map\n\n//# sourceURL=webpack://HE/./dist/types/Shared/HonorVideoConfiguration.js?");

/***/ }),

/***/ "./dist/types/Shared/HonorVideoError.js":
/*!**********************************************!*\
  !*** ./dist/types/Shared/HonorVideoError.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HonorVideoErrorType: () => (/* binding */ HonorVideoErrorType)\n/* harmony export */ });\nvar HonorVideoErrorType;\n(function (HonorVideoErrorType) {\n    HonorVideoErrorType[HonorVideoErrorType[\"playerError\"] = 1] = \"playerError\";\n    HonorVideoErrorType[HonorVideoErrorType[\"notFound\"] = 2] = \"notFound\";\n    HonorVideoErrorType[HonorVideoErrorType[\"notInitialized\"] = 3] = \"notInitialized\";\n    HonorVideoErrorType[HonorVideoErrorType[\"apiLoadError\"] = 4] = \"apiLoadError\";\n    HonorVideoErrorType[HonorVideoErrorType[\"adaptorLayerError\"] = 5] = \"adaptorLayerError\";\n    HonorVideoErrorType[HonorVideoErrorType[\"invalidPermissions\"] = 6] = \"invalidPermissions\";\n    HonorVideoErrorType[HonorVideoErrorType[\"unknown\"] = -1] = \"unknown\";\n})(HonorVideoErrorType || (HonorVideoErrorType = {}));\n//# sourceMappingURL=HonorVideoError.js.map\n\n//# sourceURL=webpack://HE/./dist/types/Shared/HonorVideoError.js?");

/***/ }),

/***/ "./dist/types/Shared/HonorVideoEvent.js":
/*!**********************************************!*\
  !*** ./dist/types/Shared/HonorVideoEvent.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HonorVideoEvent: () => (/* binding */ HonorVideoEvent)\n/* harmony export */ });\nvar HonorVideoEvent;\n(function (HonorVideoEvent) {\n    HonorVideoEvent[HonorVideoEvent[\"playerReady\"] = 0] = \"playerReady\";\n    HonorVideoEvent[HonorVideoEvent[\"stateChanged\"] = 1] = \"stateChanged\";\n    HonorVideoEvent[HonorVideoEvent[\"error\"] = 2] = \"error\";\n    HonorVideoEvent[HonorVideoEvent[\"currentTimeChanged\"] = 3] = \"currentTimeChanged\";\n    HonorVideoEvent[HonorVideoEvent[\"playbackRateChanged\"] = 4] = \"playbackRateChanged\";\n    HonorVideoEvent[HonorVideoEvent[\"volumeChanged\"] = 5] = \"volumeChanged\";\n})(HonorVideoEvent || (HonorVideoEvent = {}));\n//# sourceMappingURL=HonorVideoEvent.js.map\n\n//# sourceURL=webpack://HE/./dist/types/Shared/HonorVideoEvent.js?");

/***/ }),

/***/ "./dist/types/Shared/HonorVideoPlayerState.js":
/*!****************************************************!*\
  !*** ./dist/types/Shared/HonorVideoPlayerState.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HonorVideoPlayerState: () => (/* binding */ HonorVideoPlayerState)\n/* harmony export */ });\nvar HonorVideoPlayerState;\n(function (HonorVideoPlayerState) {\n    HonorVideoPlayerState[HonorVideoPlayerState[\"unstarted\"] = 0] = \"unstarted\";\n    HonorVideoPlayerState[HonorVideoPlayerState[\"ended\"] = 1] = \"ended\";\n    HonorVideoPlayerState[HonorVideoPlayerState[\"playing\"] = 2] = \"playing\";\n    HonorVideoPlayerState[HonorVideoPlayerState[\"paused\"] = 3] = \"paused\";\n    HonorVideoPlayerState[HonorVideoPlayerState[\"buffering\"] = 4] = \"buffering\";\n    HonorVideoPlayerState[HonorVideoPlayerState[\"ready\"] = 5] = \"ready\";\n})(HonorVideoPlayerState || (HonorVideoPlayerState = {}));\n//# sourceMappingURL=HonorVideoPlayerState.js.map\n\n//# sourceURL=webpack://HE/./dist/types/Shared/HonorVideoPlayerState.js?");

/***/ }),

/***/ "./dist/types/Shared/HonorVideoServiceProvider.js":
/*!********************************************************!*\
  !*** ./dist/types/Shared/HonorVideoServiceProvider.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\n//# sourceMappingURL=HonorVideoServiceProvider.js.map\n\n//# sourceURL=webpack://HE/./dist/types/Shared/HonorVideoServiceProvider.js?");

/***/ }),

/***/ "./dist/types/Shared/index.js":
/*!************************************!*\
  !*** ./dist/types/Shared/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HonorVideoErrorType: () => (/* reexport safe */ _HonorVideoError__WEBPACK_IMPORTED_MODULE_1__.HonorVideoErrorType),\n/* harmony export */   HonorVideoEvent: () => (/* reexport safe */ _HonorVideoEvent__WEBPACK_IMPORTED_MODULE_2__.HonorVideoEvent),\n/* harmony export */   HonorVideoPlayerState: () => (/* reexport safe */ _HonorVideoPlayerState__WEBPACK_IMPORTED_MODULE_3__.HonorVideoPlayerState)\n/* harmony export */ });\n/* harmony import */ var _HonorVideoConfiguration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HonorVideoConfiguration */ \"./dist/types/Shared/HonorVideoConfiguration.js\");\n/* harmony import */ var _HonorVideoError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HonorVideoError */ \"./dist/types/Shared/HonorVideoError.js\");\n/* harmony import */ var _HonorVideoEvent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HonorVideoEvent */ \"./dist/types/Shared/HonorVideoEvent.js\");\n/* harmony import */ var _HonorVideoPlayerState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HonorVideoPlayerState */ \"./dist/types/Shared/HonorVideoPlayerState.js\");\n/* harmony import */ var _HonorVideoServiceProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HonorVideoServiceProvider */ \"./dist/types/Shared/HonorVideoServiceProvider.js\");\n\n\n\n\n\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack://HE/./dist/types/Shared/index.js?");

/***/ }),

/***/ "./dist/types/YouTube/YouTubeEvents.js":
/*!*********************************************!*\
  !*** ./dist/types/YouTube/YouTubeEvents.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   YoutubeError: () => (/* binding */ YoutubeError),\n/* harmony export */   YoutubePlayerState: () => (/* binding */ YoutubePlayerState)\n/* harmony export */ });\n/**\n * Youtube's iFrame API passes changes to the state of its video player in the form of a number. See [here](https://developers.google.com/youtube/iframe_api_reference#onStateChange) for more info.\n */\nconst YoutubePlayerState = {\n    unstarted: -1,\n    ended: 0,\n    playing: 1,\n    paused: 2,\n    buffering: 3,\n    videoCued: 5,\n};\n/**\n * Youtube's iFrame API passes error data in the form of a number. See [here](https://developers.google.com/youtube/iframe_api_reference#onError) for more info.\n */\nconst YoutubeError = {\n    invalidParameter: 2,\n    playerError: 5,\n    notFound: 100,\n    invalidPermissions: 101,\n    invalidPermissionsAlt: 150,\n    apiLoadError: 400,\n};\n//# sourceMappingURL=YouTubeEvents.js.map\n\n//# sourceURL=webpack://HE/./dist/types/YouTube/YouTubeEvents.js?");

/***/ }),

/***/ "./dist/types/index.js":
/*!*****************************!*\
  !*** ./dist/types/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HonorVideoErrorType: () => (/* reexport safe */ _Shared__WEBPACK_IMPORTED_MODULE_0__.HonorVideoErrorType),\n/* harmony export */   HonorVideoEvent: () => (/* reexport safe */ _Shared__WEBPACK_IMPORTED_MODULE_0__.HonorVideoEvent),\n/* harmony export */   HonorVideoPlayerState: () => (/* reexport safe */ _Shared__WEBPACK_IMPORTED_MODULE_0__.HonorVideoPlayerState)\n/* harmony export */ });\n/* harmony import */ var _Shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Shared */ \"./dist/types/Shared/index.js\");\n\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack://HE/./dist/types/index.js?");

/***/ }),

/***/ "./dist/utils/Shared/HonorEventEmitter.js":
/*!************************************************!*\
  !*** ./dist/utils/Shared/HonorEventEmitter.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HonorVideoEventEmitters: () => (/* binding */ HonorVideoEventEmitters)\n/* harmony export */ });\n/* harmony import */ var _types_Shared_HonorVideoEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../types/Shared/HonorVideoEvent */ \"./dist/types/Shared/HonorVideoEvent.js\");\n\nclass HonorVideoEventEmitter {\n    callbacks = [];\n    on = (callback) => {\n        this.callbacks.push(callback);\n        return () => {\n            const idx = this.callbacks.indexOf(callback);\n            if (idx !== -1) {\n                this.callbacks.splice(idx, 1);\n            }\n        };\n    };\n    emit = (data) => {\n        for (const callback of this.callbacks) {\n            callback(data);\n        }\n    };\n}\nclass HonorVideoEventEmitters {\n    stateChangeEmitter = new HonorVideoEventEmitter();\n    readyEmitter = new HonorVideoEventEmitter();\n    errorEmitter = new HonorVideoEventEmitter();\n    currentTimeEmitter = new HonorVideoEventEmitter();\n    playbackRateEmitter = new HonorVideoEventEmitter();\n    volumeEmitter = new HonorVideoEventEmitter();\n    onReady = (callback) => this.readyEmitter.on(callback);\n    onStateChange = (callback) => this.stateChangeEmitter.on(callback);\n    onError = (callback) => this.errorEmitter.on(callback);\n    onCurrentTimeChange = (callback) => this.currentTimeEmitter.on(callback);\n    onPlaybackRateChange = (callback) => this.playbackRateEmitter.on(callback);\n    onVolumeChange = (callback) => this.volumeEmitter.on(callback);\n    triggerEvent = ({ eventType, data }) => {\n        switch (eventType) {\n            case _types_Shared_HonorVideoEvent__WEBPACK_IMPORTED_MODULE_0__.HonorVideoEvent.playerReady:\n                this.readyEmitter.emit();\n                break;\n            case _types_Shared_HonorVideoEvent__WEBPACK_IMPORTED_MODULE_0__.HonorVideoEvent.stateChanged:\n                this.stateChangeEmitter.emit(data);\n                break;\n            case _types_Shared_HonorVideoEvent__WEBPACK_IMPORTED_MODULE_0__.HonorVideoEvent.error:\n                this.errorEmitter.emit(data);\n                break;\n            case _types_Shared_HonorVideoEvent__WEBPACK_IMPORTED_MODULE_0__.HonorVideoEvent.currentTimeChanged:\n                this.currentTimeEmitter.emit(data);\n                break;\n            case _types_Shared_HonorVideoEvent__WEBPACK_IMPORTED_MODULE_0__.HonorVideoEvent.playbackRateChanged:\n                this.playbackRateEmitter.emit(data);\n                break;\n            case _types_Shared_HonorVideoEvent__WEBPACK_IMPORTED_MODULE_0__.HonorVideoEvent.volumeChanged:\n                this.volumeEmitter.emit(data);\n                break;\n        }\n    };\n}\n//# sourceMappingURL=HonorEventEmitter.js.map\n\n//# sourceURL=webpack://HE/./dist/utils/Shared/HonorEventEmitter.js?");

/***/ }),

/***/ "./dist/utils/YouTube/events.js":
/*!**************************************!*\
  !*** ./dist/utils/YouTube/events.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   parseYTPlayerState: () => (/* binding */ parseYTPlayerState),\n/* harmony export */   youtubeEventHandler: () => (/* binding */ youtubeEventHandler)\n/* harmony export */ });\n/* harmony import */ var _types_Shared_HonorVideoError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../types/Shared/HonorVideoError */ \"./dist/types/Shared/HonorVideoError.js\");\n/* harmony import */ var _types_Shared_HonorVideoEvent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../types/Shared/HonorVideoEvent */ \"./dist/types/Shared/HonorVideoEvent.js\");\n/* harmony import */ var _types_Shared_HonorVideoPlayerState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../types/Shared/HonorVideoPlayerState */ \"./dist/types/Shared/HonorVideoPlayerState.js\");\n/* harmony import */ var _types_YouTube_YouTubeEvents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../types/YouTube/YouTubeEvents */ \"./dist/types/YouTube/YouTubeEvents.js\");\n\n\n\n\nconst parseYTPlayerState = (state) => {\n    switch (state) {\n        case _types_YouTube_YouTubeEvents__WEBPACK_IMPORTED_MODULE_3__.YoutubePlayerState.unstarted:\n            return _types_Shared_HonorVideoPlayerState__WEBPACK_IMPORTED_MODULE_2__.HonorVideoPlayerState.unstarted;\n        case _types_YouTube_YouTubeEvents__WEBPACK_IMPORTED_MODULE_3__.YoutubePlayerState.playing:\n            return _types_Shared_HonorVideoPlayerState__WEBPACK_IMPORTED_MODULE_2__.HonorVideoPlayerState.playing;\n        case _types_YouTube_YouTubeEvents__WEBPACK_IMPORTED_MODULE_3__.YoutubePlayerState.paused:\n            return _types_Shared_HonorVideoPlayerState__WEBPACK_IMPORTED_MODULE_2__.HonorVideoPlayerState.paused;\n        case _types_YouTube_YouTubeEvents__WEBPACK_IMPORTED_MODULE_3__.YoutubePlayerState.buffering:\n            return _types_Shared_HonorVideoPlayerState__WEBPACK_IMPORTED_MODULE_2__.HonorVideoPlayerState.buffering;\n        case _types_YouTube_YouTubeEvents__WEBPACK_IMPORTED_MODULE_3__.YoutubePlayerState.ended:\n            return _types_Shared_HonorVideoPlayerState__WEBPACK_IMPORTED_MODULE_2__.HonorVideoPlayerState.ended;\n        case _types_YouTube_YouTubeEvents__WEBPACK_IMPORTED_MODULE_3__.YoutubePlayerState.videoCued:\n            return _types_Shared_HonorVideoPlayerState__WEBPACK_IMPORTED_MODULE_2__.HonorVideoPlayerState.ready;\n    }\n};\nconst parseYTPlayerError = (error) => {\n    switch (error) {\n        case _types_YouTube_YouTubeEvents__WEBPACK_IMPORTED_MODULE_3__.YoutubeError.apiLoadError:\n            return _types_Shared_HonorVideoError__WEBPACK_IMPORTED_MODULE_0__.HonorVideoErrorType.apiLoadError;\n        case (_types_YouTube_YouTubeEvents__WEBPACK_IMPORTED_MODULE_3__.YoutubeError.invalidPermissions, _types_YouTube_YouTubeEvents__WEBPACK_IMPORTED_MODULE_3__.YoutubeError.invalidPermissionsAlt):\n            return _types_Shared_HonorVideoError__WEBPACK_IMPORTED_MODULE_0__.HonorVideoErrorType.invalidPermissions;\n        case _types_YouTube_YouTubeEvents__WEBPACK_IMPORTED_MODULE_3__.YoutubeError.invalidParameter:\n            return _types_Shared_HonorVideoError__WEBPACK_IMPORTED_MODULE_0__.HonorVideoErrorType.playerError;\n        case _types_YouTube_YouTubeEvents__WEBPACK_IMPORTED_MODULE_3__.YoutubeError.playerError:\n            return _types_Shared_HonorVideoError__WEBPACK_IMPORTED_MODULE_0__.HonorVideoErrorType.playerError;\n        case _types_YouTube_YouTubeEvents__WEBPACK_IMPORTED_MODULE_3__.YoutubeError.notFound:\n            return _types_Shared_HonorVideoError__WEBPACK_IMPORTED_MODULE_0__.HonorVideoErrorType.notFound;\n        default:\n            return _types_Shared_HonorVideoError__WEBPACK_IMPORTED_MODULE_0__.HonorVideoErrorType.unknown;\n    }\n};\nconst youtubeReadyHandler = (player) => {\n    return () => {\n        player.emitter.triggerEvent({ eventType: _types_Shared_HonorVideoEvent__WEBPACK_IMPORTED_MODULE_1__.HonorVideoEvent.playerReady, data: null });\n        // youtube has no event for updating the current volume of the video, so we need to set up an interval to publish the event\n        setInterval(() => {\n            const volume = player.getVolume();\n            player.emitter.triggerEvent({\n                eventType: _types_Shared_HonorVideoEvent__WEBPACK_IMPORTED_MODULE_1__.HonorVideoEvent.volumeChanged,\n                data: volume,\n            });\n        }, 250);\n    };\n};\nconst youtubeStateChangeHandler = (player) => {\n    // youtube has no event for updating the current time of the video, so we need to set up an interval to publish the event\n    let timePoll;\n    const startTimePoll = () => {\n        timePoll = setInterval(() => {\n            const time = player.getCurrentTime();\n            player.emitter.triggerEvent({\n                eventType: _types_Shared_HonorVideoEvent__WEBPACK_IMPORTED_MODULE_1__.HonorVideoEvent.currentTimeChanged,\n                data: time,\n            });\n        }, 500);\n    };\n    const onStateChange = ({ data }) => {\n        const castData = data;\n        // convert the `YoutubePlayerState` into an `HonorVideoPlayerState`\n        const honorPlayerState = parseYTPlayerState(castData);\n        if (!honorPlayerState) {\n            player.emitter.triggerEvent({\n                eventType: _types_Shared_HonorVideoEvent__WEBPACK_IMPORTED_MODULE_1__.HonorVideoEvent.error,\n                data: {\n                    code: _types_Shared_HonorVideoError__WEBPACK_IMPORTED_MODULE_0__.HonorVideoErrorType.adaptorLayerError,\n                    message: `Could not convert Youtube player event: ${castData.toString()} into Honor Event`,\n                },\n            });\n            return;\n        }\n        player.emitter.triggerEvent({\n            eventType: _types_Shared_HonorVideoEvent__WEBPACK_IMPORTED_MODULE_1__.HonorVideoEvent.stateChanged,\n            data: honorPlayerState,\n        });\n        if (timePoll !== undefined &&\n            (_types_YouTube_YouTubeEvents__WEBPACK_IMPORTED_MODULE_3__.YoutubePlayerState.ended === data ||\n                _types_YouTube_YouTubeEvents__WEBPACK_IMPORTED_MODULE_3__.YoutubePlayerState.unstarted === data)) {\n            // if we are polling for the current time and the video has ended or is unplayed, we should cancel the interval polling for the elapsed time\n            clearInterval(timePoll);\n        }\n        else if (timePoll === undefined) {\n            // if there is no interval and the video is playing or paused, start the interval polling\n            startTimePoll();\n        }\n    };\n    return onStateChange;\n};\nconst youtubeErrorHandler = (player) => {\n    return ({ data }) => {\n        const castData = data;\n        const error = parseYTPlayerError(castData);\n        player.emitter.triggerEvent({\n            eventType: _types_Shared_HonorVideoEvent__WEBPACK_IMPORTED_MODULE_1__.HonorVideoEvent.error,\n            data: {\n                code: error,\n            }\n        });\n    };\n};\nconst youtubePlaybackHandler = (player) => {\n    return ({ data }) => {\n        const rate = data;\n        if (rate) {\n            player.emitter.triggerEvent({\n                eventType: _types_Shared_HonorVideoEvent__WEBPACK_IMPORTED_MODULE_1__.HonorVideoEvent.playbackRateChanged,\n                data: rate,\n            });\n        }\n    };\n};\n/**\n * Youtube's video player does event handling based on an object attached to the initial configuration object of the following format:\n * {\n *  onReady: () => void,\n *  onStateChange: ({ data: any }) => void,\n *  onError: ({ data: any }) => void\n * }\n * This function takes in an `HonorPlayer` and returns an object conforming to the above, with each property a function that:\n * 1. Processes raw object events coming from the Youtube API ({ data: any })\n * 2. Converts them into TS types specific to Youtube e.g. ({ data: any }) => YoutubePlayerState\n * 3. Converts those into the appropriate Honor type e.g. (YoutubePlayerState) => HonorVideoPlayerState\n * 4. Sends those into the player's event emitter.\n * @param player The HonorPlayer\n * @returns an object containing the functions passed into the YT.Player\n */\nconst youtubeEventHandler = (player) => {\n    const onReady = youtubeReadyHandler(player);\n    const onStateChange = youtubeStateChangeHandler(player);\n    const onError = youtubeErrorHandler(player);\n    const onPlaybackRateChange = youtubePlaybackHandler(player);\n    return {\n        onReady,\n        onStateChange,\n        onError,\n        onPlaybackRateChange,\n    };\n};\n//# sourceMappingURL=events.js.map\n\n//# sourceURL=webpack://HE/./dist/utils/YouTube/events.js?");

/***/ }),

/***/ "./dist/utils/loadYoutubeAPI.js":
/*!**************************************!*\
  !*** ./dist/utils/loadYoutubeAPI.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _types_Shared_HonorVideoError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/Shared/HonorVideoError */ \"./dist/types/Shared/HonorVideoError.js\");\n/* harmony import */ var _types_Shared_HonorVideoEvent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/Shared/HonorVideoEvent */ \"./dist/types/Shared/HonorVideoEvent.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((emitter) => {\n    const triggerEvent = emitter.triggerEvent.bind(emitter);\n    const iFrameReadyPromise = new Promise((resolve, reject) => {\n        if (window.YT && window.YT.Player instanceof Function) {\n            // youtube iframe already loaded, resolve\n            resolve();\n            return;\n        }\n        const tag = document.createElement('script');\n        tag.src = 'https://www.youtube.com/iframe_api';\n        const firstScriptTag = document.getElementsByTagName('script')[0];\n        if (firstScriptTag.parentNode) {\n            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);\n        }\n        window.onYouTubeIframeAPIReady = () => {\n            if (window.YT !== undefined &&\n                window.YT.Player instanceof Function) {\n                resolve();\n            }\n            else {\n                const errorMessage = 'There was a problem loading the YouTube Iframe API';\n                triggerEvent({\n                    eventType: _types_Shared_HonorVideoEvent__WEBPACK_IMPORTED_MODULE_1__.HonorVideoEvent.error,\n                    data: {\n                        code: _types_Shared_HonorVideoError__WEBPACK_IMPORTED_MODULE_0__.HonorVideoErrorType.apiLoadError,\n                        message: errorMessage,\n                    },\n                });\n                reject(new Error(errorMessage));\n            }\n        };\n    });\n    return iFrameReadyPromise;\n});\n//# sourceMappingURL=loadYoutubeAPI.js.map\n\n//# sourceURL=webpack://HE/./dist/utils/loadYoutubeAPI.js?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./dist/index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});