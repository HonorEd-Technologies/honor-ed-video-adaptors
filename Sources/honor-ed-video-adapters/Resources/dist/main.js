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

/***/ "./dist/index.js":
/*!***********************!*\
  !*** ./dist/index.js ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst YTEvents_1 = __webpack_require__(/*! ./types/YTEvents */ \"./dist/types/YTEvents.js\");\nconst YTAdaptor_1 = __webpack_require__(/*! ./types/adaptors/YTAdaptor */ \"./dist/types/adaptors/YTAdaptor.js\");\nwindow.setupPlayer = (elementId, config) => {\n    let emitter = new YTEvents_1.YTEventEmitters();\n    (0, YTAdaptor_1.bindAdaptorToAPI)(elementId, config, emitter)\n        .then((player) => {\n        window.HonorPlayer = player;\n    });\n    window.eventListeners = {\n        onReady: emitter.onReady,\n        onStateChanged: emitter.onStateChange,\n        onError: emitter.onError,\n        onCurrentTimeChanged: emitter.onCurrentTimeChange\n    };\n};\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack://honor-ed-video-adapters/./dist/index.js?");

/***/ }),

/***/ "./dist/loadYoutubeAPI.js":
/*!********************************!*\
  !*** ./dist/loadYoutubeAPI.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst load_script_1 = __importDefault(__webpack_require__(/*! load-script */ \"./node_modules/load-script/index.js\"));\nconst YTEvents_1 = __webpack_require__(/*! ./types/YTEvents */ \"./dist/types/YTEvents.js\");\nexports[\"default\"] = (handleEvent) => {\n    const iFrameReadyPromise = new Promise((resolve) => {\n        if (window.YT && window.YT.Player && window.YT.Player instanceof Function) {\n            // youtube iframe already loaded, resolve\n            resolve(window.YT);\n            return;\n        }\n        let protocol = window.location.protocol === 'http:' ? 'http:' : 'https:';\n        console.log(protocol);\n        (0, load_script_1.default)(protocol + '//www.youtube.com/iframe_api', (err) => {\n            if (err) {\n                console.log(\"ERROR\");\n                handleEvent(YTEvents_1.YTEventType.error, { data: YTEvents_1.YTError.apiLoadError });\n            }\n        });\n        let existingValue = window.onYouTubeIframeAPIReady;\n        window.onYouTubeIframeAPIReady = () => {\n            if (existingValue) {\n                existingValue();\n            }\n            if (window.YT !== undefined && window.YT.Player && window.YT.Player instanceof Function) {\n                resolve(window.YT);\n            }\n        };\n    });\n    return iFrameReadyPromise;\n};\n//# sourceMappingURL=loadYoutubeAPI.js.map\n\n//# sourceURL=webpack://honor-ed-video-adapters/./dist/loadYoutubeAPI.js?");

/***/ }),

/***/ "./dist/types/YTEvents.js":
/*!********************************!*\
  !*** ./dist/types/YTEvents.js ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.YTEventEmitters = exports.YTError = exports.YTPlayerState = exports.YTEventType = void 0;\nvar YTEventType;\n(function (YTEventType) {\n    YTEventType[YTEventType[\"playerReady\"] = 0] = \"playerReady\";\n    YTEventType[YTEventType[\"stateChanged\"] = 1] = \"stateChanged\";\n    YTEventType[YTEventType[\"error\"] = 2] = \"error\";\n    YTEventType[YTEventType[\"currentTimeChanged\"] = 3] = \"currentTimeChanged\";\n})(YTEventType || (exports.YTEventType = YTEventType = {}));\nvar YTPlayerState;\n(function (YTPlayerState) {\n    YTPlayerState[YTPlayerState[\"unstarted\"] = -1] = \"unstarted\";\n    YTPlayerState[YTPlayerState[\"ended\"] = 0] = \"ended\";\n    YTPlayerState[YTPlayerState[\"playing\"] = 1] = \"playing\";\n    YTPlayerState[YTPlayerState[\"paused\"] = 2] = \"paused\";\n    YTPlayerState[YTPlayerState[\"buffering\"] = 3] = \"buffering\";\n    YTPlayerState[YTPlayerState[\"videoCued\"] = 5] = \"videoCued\";\n})(YTPlayerState || (exports.YTPlayerState = YTPlayerState = {}));\nvar YTError;\n(function (YTError) {\n    YTError[YTError[\"invalidParameter\"] = 2] = \"invalidParameter\";\n    YTError[YTError[\"playerError\"] = 5] = \"playerError\";\n    YTError[YTError[\"notFound\"] = 100] = \"notFound\";\n    YTError[YTError[\"invalidPermissions\"] = 101] = \"invalidPermissions\";\n    YTError[YTError[\"invalidPermissionsAlt\"] = 150] = \"invalidPermissionsAlt\";\n    YTError[YTError[\"apiLoadError\"] = 400] = \"apiLoadError\";\n})(YTError || (exports.YTError = YTError = {}));\nclass YTEventEmitter {\n    constructor() {\n        this.callbacks = [];\n    }\n    on(callback) {\n        this.callbacks.push(callback);\n    }\n    off(callback) {\n        let index = this.callbacks.indexOf(callback);\n        if (index > -1) {\n            this.callbacks.splice(index, 1);\n        }\n    }\n    emit(data) {\n        for (const callback of this.callbacks) {\n            callback(data);\n        }\n    }\n}\nclass YTEventEmitters {\n    constructor() {\n        this.stateChangeEmitter = new YTEventEmitter();\n        this.readyEmitter = new YTEventEmitter();\n        this.errorEmitter = new YTEventEmitter();\n        this.currentTimeEmitter = new YTEventEmitter();\n        this.onReady = (callback) => {\n            this.readyEmitter.on(callback);\n        };\n        this.onStateChange = (callback) => {\n            this.stateChangeEmitter.on(callback);\n        };\n        this.onError = (callback) => {\n            this.errorEmitter.on(callback);\n        };\n        this.onCurrentTimeChange = (callback) => {\n            this.currentTimeEmitter.on(callback);\n        };\n        this.triggerEvent = (event, { data } = {}) => {\n            switch (event) {\n                case YTEventType.playerReady:\n                    this.readyEmitter.emit();\n                    break;\n                case YTEventType.stateChanged:\n                    if (data) {\n                        this.stateChangeEmitter.emit(data);\n                    }\n                    break;\n                case YTEventType.error:\n                    if (data) {\n                        this.errorEmitter.emit(data);\n                    }\n                    break;\n                case YTEventType.currentTimeChanged:\n                    if (data) {\n                        this.currentTimeEmitter.emit(data);\n                    }\n            }\n        };\n    }\n}\nexports.YTEventEmitters = YTEventEmitters;\n//# sourceMappingURL=YTEvents.js.map\n\n//# sourceURL=webpack://honor-ed-video-adapters/./dist/types/YTEvents.js?");

/***/ }),

/***/ "./dist/types/adaptors/YTAdaptor.js":
/*!******************************************!*\
  !*** ./dist/types/adaptors/YTAdaptor.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.bindAdaptorToAPI = void 0;\nconst YTEvents_1 = __webpack_require__(/*! ../YTEvents */ \"./dist/types/YTEvents.js\");\nconst loadYoutubeAPI_1 = __importDefault(__webpack_require__(/*! ../../loadYoutubeAPI */ \"./dist/loadYoutubeAPI.js\"));\nconst convertYTPlayer_1 = __importDefault(__webpack_require__(/*! ./convertYTPlayer */ \"./dist/types/adaptors/convertYTPlayer.js\"));\nconst bindAdaptorToAPI = (elementId, config, emitter) => {\n    return new Promise((resolve) => {\n        (0, loadYoutubeAPI_1.default)(emitter.triggerEvent)\n            .then((YT) => {\n            let timePoll;\n            const setupTimePoll = () => {\n                timePoll = setInterval(() => {\n                    if (window.HonorPlayer) {\n                        const time = window.HonorPlayer.getCurrentTime();\n                        emitter.triggerEvent(YTEvents_1.YTEventType.currentTimeChanged, { data: time });\n                    }\n                }, 500);\n            };\n            config.events = {\n                'onReady': () => { emitter.triggerEvent(YTEvents_1.YTEventType.playerReady); },\n                'onStateChange': (event) => {\n                    emitter.triggerEvent(YTEvents_1.YTEventType.stateChanged, event);\n                    const { data } = event;\n                    if (timePoll !== undefined && (YTEvents_1.YTPlayerState.ended === data || YTEvents_1.YTPlayerState.unstarted === data)) {\n                        clearInterval(timePoll);\n                    }\n                    else if (timePoll === undefined) {\n                        setupTimePoll();\n                    }\n                },\n                'onError': (event) => { emitter.triggerEvent(YTEvents_1.YTEventType.error, event); }\n            };\n            const YTPlayer = (0, convertYTPlayer_1.default)(elementId, config);\n            let player = {\n                destroy: () => { },\n                getCurrentTime: function () {\n                    return YTPlayer.getCurrentTime();\n                },\n                getDuration: function () {\n                    return YTPlayer.getDuration();\n                },\n                getPlaybackRate: function () {\n                    return YTPlayer.getPlaybackRate();\n                },\n                getVideoLoadedFraction: function () {\n                    return YTPlayer.getVideoLoadedFraction();\n                },\n                getVolume: function () {\n                    return YTPlayer.getVolume();\n                },\n                loadVideoById: function (videoId, startTime, endTime) {\n                    YTPlayer.loadVideoById(videoId, startTime, endTime);\n                },\n                seekTo: function (seconds) {\n                    YTPlayer.seekTo(seconds, true);\n                },\n                setPlaybackRate: function (rate) {\n                    YTPlayer.setPlaybackRate(rate);\n                },\n                setSize: function (width, height) {\n                    return YTPlayer.setSize(width.toString(), height.toString());\n                },\n                setVolume: function (volume) {\n                    YTPlayer.setVolume(volume);\n                },\n                stopVideo: function () {\n                    YTPlayer.stopVideo();\n                },\n                playVideo: function () {\n                    YTPlayer.playVideo();\n                },\n                pauseVideo: function () {\n                    YTPlayer.pauseVideo();\n                }\n            };\n            resolve(player);\n        });\n    });\n};\nexports.bindAdaptorToAPI = bindAdaptorToAPI;\n//# sourceMappingURL=YTAdaptor.js.map\n\n//# sourceURL=webpack://honor-ed-video-adapters/./dist/types/adaptors/YTAdaptor.js?");

/***/ }),

/***/ "./dist/types/adaptors/convertYTPlayer.js":
/*!************************************************!*\
  !*** ./dist/types/adaptors/convertYTPlayer.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports[\"default\"] = (elementId, config) => {\n    let player = new window.YT.Player(elementId, config);\n    return {\n        loadVideoById: (videoId, startSeconds, endSeconds) => player.loadVideoById({ videoId, startSeconds, endSeconds }),\n        loadVideoByUrl: (mediaContentUrl, startSeconds, endSeconds) => player.loadVideoByUrl({ mediaContentUrl, startSeconds, endSeconds }),\n        playVideo: () => player.playVideo(),\n        pauseVideo: () => player.pauseVideo(),\n        stopVideo: () => player.stopVideo(),\n        seekTo: (seconds, allowSeekAhead) => player.seekTo(seconds, allowSeekAhead),\n        getDuration: () => player.getDuration(),\n        getVideoLoadedFraction: () => player.getVideoLoadedFraction(),\n        setVolume: (volume) => player.setVolume(volume),\n        getVolume: () => player.getVolume(),\n        getPlaybackRate: () => player.getPlaybackRate(),\n        setPlaybackRate: (suggestedRate) => player.setPlaybackRate(suggestedRate),\n        getAvailablePlaybackRates: () => player.getAvailablePlaybackRates(),\n        getCurrentTime: () => player.getCurrentTime(),\n        getVideoUrl: () => player.getVideoUrl(),\n        destroy: () => player.destroy(),\n        setSize: (width, height) => player.setSize(width, height),\n        getIframe: () => player.getIframe()\n    };\n};\n// stopVideo = 'stopVideo',\n//   getVideoLoadedFraction = 'getVideoLoadedFraction',\n//   playVideoAt = 'playVideoAt',\n//   setOption = 'setOption',\n//   mute = 'mute',\n//   unMute = 'unMute',\n//   isMuted = 'isMuted',\n//   setVolume = 'setVolume',\n//   getVolume = 'getVolume',\n//   seekTo = 'seekTo',\n//   getPlayerState = 'getPlayerState',\n//   getPlaybackRate = 'getPlaybackRate',\n//   setPlaybackRate = 'setPlaybackRate',\n//   getAvailablePlaybackRates = 'getAvailablePlaybackRates',\n//   getPlaybackQuality = 'getPlaybackQuality',\n//   setPlaybackQuality = 'setPlaybackQuality',\n//   getAvailableQualityLevels = 'getAvailableQualityLevels',\n//   getCurrentTime = 'getCurrentTime',\n//   getDuration = 'getDuration',\n//   removeEventListener = 'removeEventListener',\n//   getVideoUrl = 'getVideoUrl',\n//   getOptions = 'getOptions',\n//   getOption = 'getOption',\n//   addEventListener = 'addEventListener',\n//   destroy = 'destroy',\n//   setSize = 'setSize',\n//   getIframe = 'getIframe'\n//# sourceMappingURL=convertYTPlayer.js.map\n\n//# sourceURL=webpack://honor-ed-video-adapters/./dist/types/adaptors/convertYTPlayer.js?");

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