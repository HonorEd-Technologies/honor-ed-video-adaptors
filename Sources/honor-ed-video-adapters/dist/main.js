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

/***/ "./Sources/honor-ed-video-adapters/dist/index.js":
/*!*******************************************************!*\
  !*** ./Sources/honor-ed-video-adapters/dist/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _types_adaptors_YTAdaptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types/adaptors/YTAdaptor */ \"./Sources/honor-ed-video-adapters/dist/types/adaptors/YTAdaptor.js\");\n/* harmony import */ var _types_YTEvents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types/YTEvents */ \"./Sources/honor-ed-video-adapters/dist/types/YTEvents.js\");\n\n\nconst eventHandler = (event) => {\n    switch (event) {\n        case _types_YTEvents__WEBPACK_IMPORTED_MODULE_1__.YTEvent.playerReady:\n            console.log(\"Player Ready\");\n            break;\n        case _types_YTEvents__WEBPACK_IMPORTED_MODULE_1__.YTEvent.stateChanged:\n            console.log(\"State Changed\");\n            break;\n        case _types_YTEvents__WEBPACK_IMPORTED_MODULE_1__.YTEvent.error:\n            console.log(\"Error occurred\");\n            break;\n    }\n};\nwindow.setupPlayer = (elementId, config) => {\n    return (0,_types_adaptors_YTAdaptor__WEBPACK_IMPORTED_MODULE_0__.bindAdaptorToAPI)(elementId, eventHandler, config)\n        .then((player) => {\n        window.HonorPlayer = player;\n    });\n};\n\n\n//# sourceURL=webpack://honor-ed-video-adapters/./Sources/honor-ed-video-adapters/dist/index.js?");

/***/ }),

/***/ "./Sources/honor-ed-video-adapters/dist/loadYoutubeAPI.js":
/*!****************************************************************!*\
  !*** ./Sources/honor-ed-video-adapters/dist/loadYoutubeAPI.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var load_script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! load-script */ \"./node_modules/load-script/index.js\");\n/* harmony import */ var load_script__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(load_script__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _types_YTEvents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types/YTEvents */ \"./Sources/honor-ed-video-adapters/dist/types/YTEvents.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((handleEvent) => {\n    const iFrameReadyPromise = new Promise((resolve) => {\n        if (window.YT && window.YT.Player && window.YT.Player instanceof Function) {\n            // youtube iframe already loaded, resolve\n            resolve(window.YT);\n            return;\n        }\n        let protocol = window.location.protocol === 'http:' ? 'http:' : 'https:';\n        console.log(protocol);\n        load_script__WEBPACK_IMPORTED_MODULE_0___default()(protocol + '//www.youtube.com/iframe_api', (err) => {\n            if (err) {\n                console.log(\"ERROR\");\n                handleEvent(_types_YTEvents__WEBPACK_IMPORTED_MODULE_1__.YTEvent.error);\n            }\n        });\n        let existingValue = window.onYouTubeIframeAPIReady;\n        window.onYouTubeIframeAPIReady = () => {\n            if (existingValue) {\n                existingValue();\n            }\n            if (window.YT !== undefined && window.YT.Player && window.YT.Player instanceof Function) {\n                resolve(window.YT);\n            }\n        };\n    });\n    return iFrameReadyPromise;\n});\n\n\n//# sourceURL=webpack://honor-ed-video-adapters/./Sources/honor-ed-video-adapters/dist/loadYoutubeAPI.js?");

/***/ }),

/***/ "./Sources/honor-ed-video-adapters/dist/types/YTEvents.js":
/*!****************************************************************!*\
  !*** ./Sources/honor-ed-video-adapters/dist/types/YTEvents.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   YTEvent: () => (/* binding */ YTEvent)\n/* harmony export */ });\nvar YTEvent;\n(function (YTEvent) {\n    YTEvent[YTEvent[\"playerReady\"] = 0] = \"playerReady\";\n    YTEvent[YTEvent[\"stateChanged\"] = 1] = \"stateChanged\";\n    YTEvent[YTEvent[\"error\"] = 2] = \"error\";\n})(YTEvent || (YTEvent = {}));\n\n\n//# sourceURL=webpack://honor-ed-video-adapters/./Sources/honor-ed-video-adapters/dist/types/YTEvents.js?");

/***/ }),

/***/ "./Sources/honor-ed-video-adapters/dist/types/adaptors/YTAdaptor.js":
/*!**************************************************************************!*\
  !*** ./Sources/honor-ed-video-adapters/dist/types/adaptors/YTAdaptor.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   bindAdaptorToAPI: () => (/* binding */ bindAdaptorToAPI)\n/* harmony export */ });\n/* harmony import */ var _YTEvents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../YTEvents */ \"./Sources/honor-ed-video-adapters/dist/types/YTEvents.js\");\n/* harmony import */ var _loadYoutubeAPI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../loadYoutubeAPI */ \"./Sources/honor-ed-video-adapters/dist/loadYoutubeAPI.js\");\n/* harmony import */ var _convertYTPlayer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./convertYTPlayer */ \"./Sources/honor-ed-video-adapters/dist/types/adaptors/convertYTPlayer.js\");\n\n\n\nconst bindAdaptorToAPI = (elementId, handler, config) => {\n    return new Promise((resolve) => {\n        (0,_loadYoutubeAPI__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(handler)\n            .then((YT) => {\n            if (config.events) {\n                console.log(\"ERROR!!\");\n                handler(_YTEvents__WEBPACK_IMPORTED_MODULE_0__.YTEvent.error);\n                return;\n            }\n            // TODO: add 'associated value' to event values to pass data\n            config.events = {\n                'onReady': () => { handler(_YTEvents__WEBPACK_IMPORTED_MODULE_0__.YTEvent.playerReady); },\n                'onStateChange': ({ data }) => { handler(_YTEvents__WEBPACK_IMPORTED_MODULE_0__.YTEvent.stateChanged); },\n                'onError': ({ data }) => {\n                    console.log(data);\n                    handler(_YTEvents__WEBPACK_IMPORTED_MODULE_0__.YTEvent.error);\n                }\n            };\n            const YTPlayer = (0,_convertYTPlayer__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(elementId, config);\n            let player = {\n                destroy: () => { },\n                getCurrentTime: function () {\n                    throw new Error(\"Function not implemented.\");\n                },\n                getDuration: function () {\n                    return YTPlayer.getDuration();\n                },\n                getPlaybackRate: function () {\n                    return YTPlayer.getPlaybackRate();\n                },\n                getVideoLoadedFraction: function () {\n                    return YTPlayer.getVideoLoadedFraction();\n                },\n                getVolume: function () {\n                    return YTPlayer.getVolume();\n                },\n                loadVideoById: function (videoId, startTime, endTime) {\n                    YTPlayer.loadVideoById(videoId, startTime, endTime);\n                },\n                seekTo: function (seconds) {\n                    YTPlayer.seekTo(seconds, true);\n                },\n                setPlaybackRate: function (rate) {\n                    YTPlayer.setPlaybackRate(rate);\n                },\n                setSize: function (width, height) {\n                    return YTPlayer.setSize(width, height);\n                },\n                setVolume: function (volume) {\n                    YTPlayer.setVolume(volume);\n                },\n                stopVideo: function () {\n                    YTPlayer.stopVideo();\n                },\n                playVideo: function () {\n                    YTPlayer.playVideo();\n                },\n                pauseVideo: function () {\n                    YTPlayer.pauseVideo();\n                }\n            };\n            resolve(player);\n        });\n    });\n};\n\n\n//# sourceURL=webpack://honor-ed-video-adapters/./Sources/honor-ed-video-adapters/dist/types/adaptors/YTAdaptor.js?");

/***/ }),

/***/ "./Sources/honor-ed-video-adapters/dist/types/adaptors/convertYTPlayer.js":
/*!********************************************************************************!*\
  !*** ./Sources/honor-ed-video-adapters/dist/types/adaptors/convertYTPlayer.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((elementId, config) => {\n    let player = new window.YT.Player(elementId, config);\n    return {\n        loadVideoById: (videoId, startSeconds, endSeconds) => player.loadVideoById({ videoId, startSeconds, endSeconds }),\n        loadVideoByUrl: (mediaContentUrl, startSeconds, endSeconds) => player.loadVideoByUrl({ mediaContentUrl, startSeconds, endSeconds }),\n        playVideo: () => player.playVideo(),\n        pauseVideo: () => player.pauseVideo(),\n        stopVideo: () => player.stopVideo(),\n        seekTo: (seconds, allowSeekAhead) => player.seekTo(seconds, allowSeekAhead),\n        getDuration: () => player.getDuration(),\n        getVideoLoadedFraction: () => player.getVideoLoadedFraction(),\n        setVolume: (volume) => player.setVolume(volume),\n        getVolume: () => player.getVolume(),\n        getPlaybackRate: () => player.getPlaybackRate(),\n        setPlaybackRate: (suggestedRate) => player.setPlaybackRate(suggestedRate),\n        getAvailablePlaybackRates: () => player.getAvailablePlaybackRates(),\n        getCurrentTime: () => player.getCurrentTime(),\n        getVideoUrl: () => player.getVideoUrl(),\n        destroy: () => player.destroy(),\n        setSize: (width, height) => player.setSize(width, height),\n        getIframe: () => player.getIframe()\n    };\n});\n// stopVideo = 'stopVideo',\n//   getVideoLoadedFraction = 'getVideoLoadedFraction',\n//   playVideoAt = 'playVideoAt',\n//   setOption = 'setOption',\n//   mute = 'mute',\n//   unMute = 'unMute',\n//   isMuted = 'isMuted',\n//   setVolume = 'setVolume',\n//   getVolume = 'getVolume',\n//   seekTo = 'seekTo',\n//   getPlayerState = 'getPlayerState',\n//   getPlaybackRate = 'getPlaybackRate',\n//   setPlaybackRate = 'setPlaybackRate',\n//   getAvailablePlaybackRates = 'getAvailablePlaybackRates',\n//   getPlaybackQuality = 'getPlaybackQuality',\n//   setPlaybackQuality = 'setPlaybackQuality',\n//   getAvailableQualityLevels = 'getAvailableQualityLevels',\n//   getCurrentTime = 'getCurrentTime',\n//   getDuration = 'getDuration',\n//   removeEventListener = 'removeEventListener',\n//   getVideoUrl = 'getVideoUrl',\n//   getOptions = 'getOptions',\n//   getOption = 'getOption',\n//   addEventListener = 'addEventListener',\n//   destroy = 'destroy',\n//   setSize = 'setSize',\n//   getIframe = 'getIframe'\n\n\n//# sourceURL=webpack://honor-ed-video-adapters/./Sources/honor-ed-video-adapters/dist/types/adaptors/convertYTPlayer.js?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./Sources/honor-ed-video-adapters/dist/index.js");
/******/ 	
/******/ })()
;