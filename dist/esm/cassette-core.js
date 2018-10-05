(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("prop-types"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["prop-types", "react"], factory);
	else if(typeof exports === 'object')
		exports["cassetteCore"] = factory(require("prop-types"), require("react"));
	else
		root["cassetteCore"] = factory(root["PropTypes"], root["React"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function (arr, predicate, ctx) {
	if (typeof Array.prototype.findIndex === 'function') {
		return arr.findIndex(predicate, ctx);
	}

	if (typeof predicate !== 'function') {
		throw new TypeError('predicate must be a function');
	}

	var list = Object(arr);
	var len = list.length;

	if (len === 0) {
		return -1;
	}

	for (var i = 0; i < len; i++) {
		if (predicate.call(ctx, list[i], i, list)) {
			return i;
		}
	}

	return -1;
};


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var PlayerPropTypes_namespaceObject = {};
__webpack_require__.r(PlayerPropTypes_namespaceObject);
__webpack_require__.d(PlayerPropTypes_namespaceObject, "controlKeyword", function() { return controlKeyword; });
__webpack_require__.d(PlayerPropTypes_namespaceObject, "control", function() { return control; });
__webpack_require__.d(PlayerPropTypes_namespaceObject, "crossOriginAttribute", function() { return crossOriginAttribute; });
__webpack_require__.d(PlayerPropTypes_namespaceObject, "repeatStrategy", function() { return PlayerPropTypes_repeatStrategy; });
__webpack_require__.d(PlayerPropTypes_namespaceObject, "mediaSource", function() { return mediaSource; });
__webpack_require__.d(PlayerPropTypes_namespaceObject, "mediaSessionAction", function() { return mediaSessionAction; });
__webpack_require__.d(PlayerPropTypes_namespaceObject, "mediaSessionArtwork", function() { return mediaSessionArtwork; });
__webpack_require__.d(PlayerPropTypes_namespaceObject, "track", function() { return PlayerPropTypes_track; });
__webpack_require__.d(PlayerPropTypes_namespaceObject, "progressDirection", function() { return progressDirection; });
__webpack_require__.d(PlayerPropTypes_namespaceObject, "seekMode", function() { return seekMode; });
__webpack_require__.d(PlayerPropTypes_namespaceObject, "aspectRatio", function() { return aspectRatio; });

// EXTERNAL MODULE: external {"root":"React","commonjs":"react","commonjs2":"react","amd":"react"}
var external_root_React_commonjs_react_commonjs2_react_amd_react_ = __webpack_require__(1);
var external_root_React_commonjs_react_commonjs2_react_amd_react_default = /*#__PURE__*/__webpack_require__.n(external_root_React_commonjs_react_commonjs2_react_amd_react_);

// EXTERNAL MODULE: external {"root":"PropTypes","commonjs":"prop-types","commonjs2":"prop-types","amd":"prop-types"}
var external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_ = __webpack_require__(0);
var external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_);

// EXTERNAL MODULE: ./packages/core/node_modules/array-find-index/index.js
var array_find_index = __webpack_require__(2);
var array_find_index_default = /*#__PURE__*/__webpack_require__.n(array_find_index);

// CONCATENATED MODULE: ./packages/core/src/PlayerContext.js

const PlayerContext = Object(external_root_React_commonjs_react_commonjs2_react_amd_react_["createContext"])(null);
PlayerContext.displayName = 'PlayerContext';
/* harmony default export */ var src_PlayerContext = (PlayerContext);
// CONCATENATED MODULE: ./packages/core/src/GroupContext.js

const GroupContext = Object(external_root_React_commonjs_react_commonjs2_react_amd_react_["createContext"])(null);
GroupContext.displayName = 'GroupContext';
/* harmony default export */ var src_GroupContext = (GroupContext);
// CONCATENATED MODULE: ./packages/core/src/constants.js
const repeatStrategyOptions = ['none', 'playlist', 'track'];
// CONCATENATED MODULE: ./packages/core/src/utils/console.js
/* eslint-disable no-console */
const log = console.log.bind(console);
const logError = console.error ? console.error.bind(console) : log;
const logWarning = console.warn ? console.warn.bind(console) : log;
// CONCATENATED MODULE: ./packages/core/src/PlayerPropTypes.js




function requiredOnlyUnlessHasProp(propType, altPropName) {
  let warnedAboutDefiningBoth = false;

  function validate(props, propName, componentName, ...rest) {
    if (propName in props) {
      if (!warnedAboutDefiningBoth && altPropName in props) {
        logWarning(`Do not define both the '${propName}' and '${altPropName}' props.`);
        warnedAboutDefiningBoth = true;
      }

      return propType.isRequired(props, propName, componentName, ...rest);
    }

    if (!(altPropName in props)) {
      return new Error(`If the '${altPropName}' prop is not defined, '${propName}' must be.`);
    }
  }

  return validate;
}

const controlKeyword = external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.oneOf(['playpause', 'backskip', 'forwardskip', 'volume', 'mute', 'repeat', 'shuffle', 'progress', 'progressdisplay', 'fullscreen', 'spacer']);
const control = external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.oneOfType([external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.func, controlKeyword]);
const crossOriginAttribute = external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.oneOf(['anonymous', 'use-credentials']);
const PlayerPropTypes_repeatStrategy = external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.oneOf(repeatStrategyOptions);
const mediaSource = external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.shape({
  src: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.string.isRequired,
  type: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.string.isRequired
});
const mediaSessionAction = external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.oneOf(['play', 'pause', 'previoustrack', 'nexttrack', 'seekbackward', 'seekforward']);
const mediaSessionArtwork = external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.shape({
  src: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.string.isRequired,
  sizes: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.string,
  type: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.string
});
const PlayerPropTypes_track = external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.shape({
  url: requiredOnlyUnlessHasProp(external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.string, 'sources'),
  sources: requiredOnlyUnlessHasProp(external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.arrayOf(mediaSource.isRequired), 'url'),
  title: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.string.isRequired,
  artist: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.string,
  album: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.string,
  artwork: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.arrayOf(mediaSessionArtwork.isRequired),
  meta: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.object
});
const progressDirection = external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.oneOf(['left', 'right', 'up', 'down']);
const seekMode = external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.oneOf(['paused', 'immediate', 'onrelease']);
function aspectRatio(props, propName) {
  const prop = props[propName];

  if (prop === undefined) {
    return;
  }

  if (typeof prop !== 'string' || prop.split(':').length !== 2 || prop.split(':').some(isNaN)) {
    return new Error(`The ${propName} prop should be a string of the form 'x:y'. Example: 16:9`);
  }
}
// CONCATENATED MODULE: ./packages/core/src/factories/createCustomMediaElement.js
const loopchange = 'loopchange';
const srcrequest = 'srcrequest';

function createCustomMediaElement(media = document.createElement('media')) {
  new MutationObserver(() => {
    media.dispatchEvent(new Event(loopchange));
  }).observe(media, {
    attributeFilter: ['loop']
  }); // Don't let the media src property get modified directly.
  // Instead, when it does get set, dispatch an event to be
  // handled in a way that doesn't conflict with the loaded
  // playlist.

  Object.defineProperty(media, 'src', {
    get: () => media.currentSrc,
    set: src => {
      const e = new Event(srcrequest);
      e.srcRequested = src;
      media.dispatchEvent(e);
    }
  });
  return media;
}

/* harmony default export */ var factories_createCustomMediaElement = (createCustomMediaElement);
// CONCATENATED MODULE: ./packages/core/src/utils/ShuffleManager.js
/* ShuffleManager
 *
 * Manages navigation throughout a list which is:
 * - Sourced from another provided list
 * - In random order (except to avoid consecutive duplicates)
 * - Extended endlessly on-the-fly, as needed
 * - Able to have future history overwritten by non-random choices
 * - Able to swap source lists and maintain shuffle order for common members
 */
class ShuffleManager {
  constructor(list, options = {}) {
    this._list = list;
    this._forwardStack = [];
    this._backStack = [];
    this._currentItem = undefined;
    this._allowBackShuffle = Boolean(options.allowBackShuffle);
  }

  findNextItem(currentIndex) {
    if (currentIndex !== undefined) {
      this.setCurrentIndex(currentIndex);
    }

    this._currentItem = _findNextItem(this._list, this._forwardStack, this._backStack, this._currentItem, true);
    return this._currentItem;
  }

  findPreviousItem(currentIndex) {
    if (currentIndex !== undefined) {
      this.setCurrentIndex(currentIndex);
    }

    this._currentItem = _findNextItem(this._list, this._backStack, this._forwardStack, this._currentItem, this._allowBackShuffle);
    return this._currentItem;
  }

  pickNextItem(index, currentIndex) {
    if (currentIndex !== undefined) {
      this.setCurrentIndex(currentIndex);
    }

    if (this._list[index] === undefined) {
      return undefined;
    }

    if (this._currentItem !== undefined) {
      this._backStack.push(this._currentItem);
    }

    this._forwardStack.length = 0;
    this._currentItem = this._list[index];
    return this._currentItem;
  }

  setList(list) {
    this._list = list;
  }

  setOptions(options) {
    for (const o of Object.keys(options)) {
      switch (o) {
        case 'allowBackShuffle':
          this[`_${o}`] = Boolean(options[o]);
          break;

        default:
          break;
      }
    }
  }

  setCurrentIndex(currentIndex) {
    const item = this._list[currentIndex];

    if (this._currentItem !== item) {
      this.clear();
      this._currentItem = item;
    }
  }

  clear() {
    this._forwardStack.length = 0;
    this._backStack.length = 0;
    this._currentItem = undefined;
  }

}

function _goForward(n, forwardStack, backStack, currentItem) {
  let item = currentItem;

  for (let i = 0; i < n; i++) {
    if (!forwardStack.length) {
      // rollback before erroring (note stack reversal)
      _goForward(i, backStack, forwardStack, item);

      throw `Moving ${n} places was not possible!`;
    }

    backStack.push(item);
    item = forwardStack.pop();
  }

  return item;
}

function _allItemsMatch(list, item) {
  if (!list.length) {
    return false;
  }

  for (let i = 0; i < list.length; i++) {
    if (item !== list[i]) {
      return false;
    }
  }

  return true;
}

function _findNextItem(list, forwardStack, backStack, currentItem, allowMore) {
  let item = currentItem;

  if (!list.length) {
    return undefined;
  }

  for (let i = 1; i <= forwardStack.length; i++) {
    if (list.indexOf(forwardStack[forwardStack.length - i]) !== -1) {
      return _goForward(i, forwardStack, backStack, item);
    }
  }

  if (!allowMore) {
    return undefined;
  }

  if (_allItemsMatch(list, item)) {
    // we can serve this as our "next" item but we
    // won't modify our history since it's the same.
    return item;
  }

  let nextItem;

  do {
    nextItem = list[Math.floor(Math.random() * list.length)];
  } while (item === nextItem || nextItem === undefined); // if we're skipping items that aren't in our current list we may
  // have some items in our forwardStack - make sure we move to the front.


  item = _goForward(forwardStack.length, forwardStack, backStack, item);

  if (item !== undefined) {
    backStack.push(item);
  }

  return nextItem;
}

/* harmony default export */ var utils_ShuffleManager = (ShuffleManager);
// CONCATENATED MODULE: ./packages/core/src/utils/isPlaylistValid.js
function isPlaylistValid(playlist) {
  return Boolean(playlist && playlist.length);
}

/* harmony default export */ var utils_isPlaylistValid = (isPlaylistValid);
// CONCATENATED MODULE: ./packages/core/src/utils/getTrackSources.js

const blankSources = [{
  src: ''
}];

function getTrackSources(playlist, index) {
  if (!utils_isPlaylistValid(playlist)) {
    return blankSources;
  }

  const _playlist$index = playlist[index],
        sources = _playlist$index.sources,
        url = _playlist$index.url;

  if (sources) {
    return sources.length ? sources : blankSources;
  }

  return [{
    src: url
  }];
}

/* harmony default export */ var utils_getTrackSources = (getTrackSources);
// CONCATENATED MODULE: ./packages/core/src/utils/findTrackIndexByUrl.js


function findTrackIndexByUrl(playlist, url) {
  return array_find_index_default()(playlist, track => {
    if (track.sources) {
      return array_find_index_default()(track.sources, source => source.src === url) !== -1;
    }

    return track.url && url === track.url;
  });
}

/* harmony default export */ var utils_findTrackIndexByUrl = (findTrackIndexByUrl);
// CONCATENATED MODULE: ./packages/core/src/utils/snapshot.js



function getStateSnapshot(state) {
  const paused = state.paused,
        currentTime = state.currentTime,
        activeTrackIndex = state.activeTrackIndex,
        volume = state.volume,
        muted = state.muted,
        loop = state.loop,
        cycle = state.cycle,
        shuffle = state.shuffle,
        playbackRate = state.playbackRate,
        __playlist__ = state.__playlist__;
  return {
    __unstable__: {
      paused,
      currentTime,
      activeTrackIndex,
      volume,
      muted,
      loop,
      cycle,
      shuffle,
      playbackRate,
      activeTrackSrc: utils_isPlaylistValid(__playlist__) ? utils_getTrackSources(__playlist__, activeTrackIndex)[0].src : null
    }
  };
}
function restoreStateFromSnapshot(snapshot, props) {
  const _snapshot$__unstable_ = snapshot.__unstable__,
        paused = _snapshot$__unstable_.paused,
        currentTime = _snapshot$__unstable_.currentTime,
        activeTrackIndex = _snapshot$__unstable_.activeTrackIndex,
        volume = _snapshot$__unstable_.volume,
        muted = _snapshot$__unstable_.muted,
        loop = _snapshot$__unstable_.loop,
        cycle = _snapshot$__unstable_.cycle,
        shuffle = _snapshot$__unstable_.shuffle,
        playbackRate = _snapshot$__unstable_.playbackRate,
        activeTrackSrc = _snapshot$__unstable_.activeTrackSrc;
  const restoredStateValues = {};

  if (utils_isPlaylistValid(props.playlist) && typeof paused === 'boolean') {
    // using awaitingPlay instead of paused triggers an animation
    restoredStateValues.awaitingPlay = !paused;
  }

  if (typeof volume === 'number' && volume >= 0 && volume <= 1) {
    restoredStateValues.volume = volume;
  }

  if (typeof muted === 'boolean') {
    restoredStateValues.muted = muted;
  }

  if (typeof loop === 'boolean') {
    restoredStateValues.loop = loop;
  }

  if (typeof cycle === 'boolean') {
    restoredStateValues.cycle = cycle;
  }

  if (typeof shuffle === 'boolean') {
    restoredStateValues.shuffle = shuffle;
  }

  if (typeof playbackRate === 'number') {
    restoredStateValues.playbackRate = playbackRate;
  }

  let useCurrentTime = false;

  if (typeof activeTrackSrc === 'string' && typeof activeTrackIndex === 'number' && activeTrackIndex >= 0) {
    // let's try staying on the same track index
    const currentSrc = utils_getTrackSources(props.playlist, activeTrackIndex)[0].src;

    if (activeTrackSrc === currentSrc) {
      restoredStateValues.activeTrackIndex = activeTrackIndex;
      useCurrentTime = true;
    } else {
      /* if the track we were playing before is in the new playlist,
       * update the activeTrackIndex.
       */
      const newTrackIndex = utils_findTrackIndexByUrl(props.playlist, activeTrackSrc);

      if (newTrackIndex !== -1) {
        restoredStateValues.activeTrackIndex = newTrackIndex;
        useCurrentTime = true;
      }
    }
  }

  if (useCurrentTime && typeof currentTime === 'number' && currentTime >= 0) {
    restoredStateValues.currentTime = currentTime;
  }

  return restoredStateValues;
}
// CONCATENATED MODULE: ./packages/core/src/utils/getSourceList.js
 // collapses playlist into flat list containing
// the first source url for each track

function getSourceList(playlist) {
  return (playlist || []).map((_, i) => utils_getTrackSources(playlist, i)[0].src);
}

/* harmony default export */ var utils_getSourceList = (getSourceList);
// CONCATENATED MODULE: ./packages/core/src/utils/getTimeRangesArray.js
function getTimeRangesArray(timeRangesObj) {
  const timeRangesArray = Array(timeRangesObj.length);

  for (let i = 0; i < timeRangesObj.length; i++) {
    timeRangesArray[i] = {
      start: timeRangesObj.start(i),
      end: timeRangesObj.end(i)
    };
  }

  return timeRangesArray;
}

/* harmony default export */ var utils_getTimeRangesArray = (getTimeRangesArray);
// CONCATENATED MODULE: ./packages/core/src/utils/getRepeatStrategy.js
function getRepeatStrategy(loop, cycle) {
  if (loop) {
    return 'track';
  }

  if (cycle) {
    return 'playlist';
  }

  return 'none';
}

/* harmony default export */ var utils_getRepeatStrategy = (getRepeatStrategy);
// CONCATENATED MODULE: ./packages/core/src/utils/convertToNumberWithinIntervalBounds.js
function convertToNumberWithinIntervalBounds(number, min, max) {
  min = typeof min === 'number' ? min : -Infinity;
  max = typeof max === 'number' ? max : Infinity;
  return Math.max(min, Math.min(number, max));
}

/* harmony default export */ var utils_convertToNumberWithinIntervalBounds = (convertToNumberWithinIntervalBounds);
// CONCATENATED MODULE: ./packages/core/src/utils/streamVideoElementToCanvas.js
function streamVideoElementToCanvas(videoElement, canvas, callback) {
  const ctx = canvas.getContext('2d');
  let requestId = null;
  let widthSet = null;
  let heightSet = null;
  let placeholderImage = null;
  requestId = requestAnimationFrame(streamToCanvas);
  return {
    endStream() {
      cancelAnimationFrame(requestId);
    },

    setCanvasSize(width, height) {
      widthSet = width || null;
      heightSet = height || null;
    },

    setPlaceholderImage(img) {
      placeholderImage = img || null;
    }

  };

  function streamToCanvas() {
    const videoWidth = videoElement.videoWidth,
          videoHeight = videoElement.videoHeight; // we want to draw the current frame image from the video element

    let imageElement = videoElement;
    let imageWidth = videoWidth;
    let imageHeight = videoHeight;
    let targetWidth = videoWidth;
    let targetHeight = videoHeight;
    let isVideo = true; // however if there's no video to display (usually means we're playing
    // media) then we want to display a placeholder image, if available

    if (!(targetWidth && targetHeight) && placeholderImage) {
      imageElement = placeholderImage;
      imageWidth = placeholderImage.naturalWidth;
      imageHeight = placeholderImage.naturalHeight;
      targetWidth = placeholderImage.naturalWidth;
      targetHeight = placeholderImage.naturalHeight;
      isVideo = false;
    } // figure out what resolution the drawn image should be


    if (widthSet && heightSet) {
      targetWidth = widthSet;
      targetHeight = heightSet;
    } else if (widthSet) {
      targetWidth = widthSet;
      targetHeight = widthSet / imageWidth * imageHeight;
    } else if (heightSet) {
      targetHeight = heightSet;
      targetWidth = heightSet / imageHeight * imageWidth;
    } // resize the canvas to the draw resolution if it doesn't already match


    if (canvas.width !== targetWidth || canvas.height !== targetHeight) {
      canvas.width = targetWidth;
      canvas.height = targetHeight;
    } // draw


    ctx.drawImage(imageElement, 0, 0, targetWidth, targetHeight); // let the callback handle any post-processing

    if (callback) {
      callback(ctx, isVideo);
    }

    requestId = requestAnimationFrame(streamToCanvas);
  }
}

/* harmony default export */ var utils_streamVideoElementToCanvas = (streamVideoElementToCanvas);
// CONCATENATED MODULE: ./packages/core/src/PlayerContextProvider.js
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





















function playErrorHandler(err) {
  logError(err);

  if (err.name === 'NotAllowedError') {
    const warningMessage = 'Media playback failed at ' + new Date().toLocaleTimeString() + '! (Perhaps autoplay is disabled in this browser.)';
    logWarning(warningMessage);
  }
} // Existing Media Session API implementations have default handlers
// for play/pause, and may yield unexpected behavior if custom
// play/pause handlers are defined - so let's leave them be.


const supportableMediaSessionActions = ['previoustrack', 'nexttrack', 'seekbackward', 'seekforward']; // media element readyState

const HAVE_NOTHING = 0;
const defaultState = {
  // indicates whether media player should be paused
  paused: true,
  // elapsed time for active track, in seconds
  currentTime: 0,
  // The most recent targeted time, in seconds, for seek preview
  seekPreviewTime: 0,

  /* true if the user is currently dragging the mouse
   * to seek a new track position
   */
  seekInProgress: false,

  /* true if media was playing when seek previewing began,
   * it was paused, and it should be resumed on seek
   * complete
   */
  awaitingResumeOnSeekComplete: false,
  // the duration in seconds of the loaded track
  duration: 0,
  // array describing the buffered ranges in the loaded track
  bufferedRanges: [],
  // array describing the already-played ranges in the loaded track
  playedRanges: [],
  // array describing the seekable ranges in the loaded track
  seekableRanges: [],
  // true if the media is currently stalled pending data buffering
  stalled: false,
  // true if the active track should play on the next componentDidUpdate
  awaitingPlay: false
}; // assumes playlist is valid

function getGoToTrackState(prevState, index, shouldPlay = true) {
  const isNewTrack = prevState.activeTrackIndex !== index;
  return {
    activeTrackIndex: index,
    trackLoading: isNewTrack,
    currentTime: 0,
    loop: isNewTrack ? false : prevState.loop,
    awaitingPlay: Boolean(shouldPlay),
    paused: !shouldPlay
  };
}

class PlayerContextProvider_PlayerContextProvider extends external_root_React_commonjs_react_commonjs2_react_amd_react_["Component"] {
  constructor(props) {
    super(props);
    this.state = _objectSpread({}, defaultState, {
      // index matching requested track (whether track has loaded or not)
      activeTrackIndex: utils_convertToNumberWithinIntervalBounds(props.startingTrackIndex, 0),
      // whether we're waiting on loading metadata for the active track
      trackLoading: utils_isPlaylistValid(props.playlist),
      // the current timestamp on the active track in seconds
      currentTime: utils_convertToNumberWithinIntervalBounds(props.startingTime, 0),
      // the latest volume of the media, between 0 and 1.
      volume: utils_convertToNumberWithinIntervalBounds(props.defaultVolume, 0, 1),
      // true if the media has been muted
      muted: props.defaultMuted,
      // whether to loop the active track
      loop: props.defaultRepeatStrategy === 'track',
      // true if playlist should continue at start after completion
      cycle: props.defaultRepeatStrategy === 'playlist',
      // whether to randomly pick next track from playlist after one finishes
      shuffle: props.defaultShuffle,
      // Rate at which media should be played. 1.0 is normal speed.
      playbackRate: props.defaultPlaybackRate,
      // true if user is currently dragging mouse to change the volume
      setVolumeInProgress: false,
      // initialize awaitingPlay from autoplay prop
      awaitingPlay: props.autoplay && utils_isPlaylistValid(props.playlist),
      // playlist prop copied to state (for getDerivedStateFromProps)
      __playlist__: props.playlist
    }, props.initialStateSnapshot ? restoreStateFromSnapshot(props.initialStateSnapshot, props) : {}); // volume at last time we were unmuted and not actively setting volume

    this.lastStableVolume = this.state.volume; // used to keep track of play history when we are shuffling

    this.shuffler = new utils_ShuffleManager(utils_getSourceList(props.playlist), {
      allowBackShuffle: props.allowBackShuffle
    }); // html media element used for playback

    this.media = null;
    this.setMediaElementRef = this.setMediaElementRef.bind(this); // bind callback methods to pass to descendant elements

    this.togglePause = this.togglePause.bind(this);
    this.selectTrackIndex = this.selectTrackIndex.bind(this);
    this.forwardSkip = this.forwardSkip.bind(this);
    this.backSkip = this.backSkip.bind(this);
    this.seekPreview = this.seekPreview.bind(this);
    this.seekComplete = this.seekComplete.bind(this);
    this.setVolume = this.setVolume.bind(this);
    this.setVolumeComplete = this.setVolumeComplete.bind(this);
    this.toggleMuted = this.toggleMuted.bind(this);
    this.toggleShuffle = this.toggleShuffle.bind(this);
    this.setRepeatStrategy = this.setRepeatStrategy.bind(this);
    this.setPlaybackRate = this.setPlaybackRate.bind(this);
    this.pipeVideoStreamToCanvas = this.pipeVideoStreamToCanvas.bind(this); // bind media event handlers

    this.handleMediaPlay = this.handleMediaPlay.bind(this);
    this.handleMediaPause = this.handleMediaPause.bind(this);
    this.handleMediaSrcrequest = this.handleMediaSrcrequest.bind(this);
    this.handleMediaEnded = this.handleMediaEnded.bind(this);
    this.handleMediaStalled = this.handleMediaStalled.bind(this);
    this.handleMediaCanplaythrough = this.handleMediaCanplaythrough.bind(this);
    this.handleMediaTimeupdate = this.handleMediaTimeupdate.bind(this);
    this.handleMediaLoadedmetadata = this.handleMediaLoadedmetadata.bind(this);
    this.handleMediaVolumechange = this.handleMediaVolumechange.bind(this);
    this.handleMediaDurationchange = this.handleMediaDurationchange.bind(this);
    this.handleMediaProgress = this.handleMediaProgress.bind(this);
    this.handleMediaLoopchange = this.handleMediaLoopchange.bind(this);
    this.handleMediaRatechange = this.handleMediaRatechange.bind(this);
  }

  componentDidMount() {
    const media = this.media = factories_createCustomMediaElement(this.media); // initialize media properties

    if (media.readyState !== HAVE_NOTHING) {
      // we only set the currentTime now if we're beyond the
      // HAVE_NOTHING readyState. Otherwise we'll let this get
      // set when the loadedmetadata event fires. This avoids
      // an issue where some browsers ignore or delay currentTime
      // updates when in the HAVE_NOTHING state.
      media.currentTime = this.state.currentTime;
    }

    media.volume = this.state.volume;
    media.muted = this.state.muted;
    media.defaultPlaybackRate = this.props.defaultPlaybackRate;
    media.playbackRate = this.state.playbackRate; // add special event listeners on the media element

    media.addEventListener('srcrequest', this.handleMediaSrcrequest);
    media.addEventListener('loopchange', this.handleMediaLoopchange);

    if (this.state.awaitingPlay) {
      this.setState({
        awaitingPlay: false
      });
      this.delayTimeout = setTimeout(() => {
        this.togglePause(false);
      }, this.props.autoplayDelayInSeconds * 1000);
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const newPlaylist = nextProps.playlist;

    if (newPlaylist === prevState.__playlist__) {
      // reference comparison is equal so we'll
      // assume the playlist is unchanged.
      return null;
    }

    const baseNewState = {
      __playlist__: newPlaylist
    }; // check if the new playlist is invalid

    if (!utils_isPlaylistValid(newPlaylist)) {
      return _objectSpread({}, defaultState, baseNewState, {
        activeTrackIndex: 0,
        trackLoading: false
      });
    } // check if the activeTrackIndex doesn't need to be updated


    const prevSources = utils_getTrackSources(prevState.__playlist__, prevState.activeTrackIndex); // the sources if we stay on the same track index

    const currentSources = utils_getTrackSources(newPlaylist, prevState.activeTrackIndex); // non-comprehensive but probably accurate check

    if (prevSources[0].src === currentSources[0].src) {
      // our active track index already matches
      return baseNewState;
    }
    /* if the track we're already playing is in the new playlist, update the
     * activeTrackIndex.
     */


    const newTrackIndex = utils_findTrackIndexByUrl(newPlaylist, prevSources[0].src);

    if (newTrackIndex !== -1) {
      return _objectSpread({}, baseNewState, {
        activeTrackIndex: newTrackIndex
      });
    } // if not, then load the first track in the new playlist, and pause.


    return _objectSpread({}, baseNewState, getGoToTrackState(prevState, 0, false));
  }

  componentDidUpdate(prevProps, prevState) {
    this.media.defaultPlaybackRate = this.props.defaultPlaybackRate;
    this.shuffler.setList(utils_getSourceList(this.props.playlist));
    this.shuffler.setOptions({
      allowBackShuffle: this.props.allowBackShuffle
    });
    const prevSources = utils_getTrackSources(prevProps.playlist, prevState.activeTrackIndex);
    const newSources = utils_getTrackSources(this.props.playlist, this.state.activeTrackIndex);

    if (prevSources[0].src !== newSources[0].src) {
      // cancel playback and re-scan current sources
      this.media.load();

      if (!this.state.shuffle) {
        // after toggling off shuffle, we defer clearing the shuffle
        // history until we actually change tracks - if the user quickly
        // toggles  shuffle off then back on again, we don't want to have
        // lost our history.
        this.shuffler.clear();
      }
    }

    if (prevProps !== this.props && !this.media.paused) {
      // update running media session based on new props
      this.stealMediaSession();
    }

    if (this.state.awaitingPlay) {
      this.setState({
        awaitingPlay: false
      }); // media.currentSrc is updated asynchronously so we should
      // play async to avoid weird intermediate state issues

      setTimeout(() => {
        this.togglePause(false);
      });
    }

    clearTimeout(this.snapshotUpdateTimeout);
    this.snapshotUpdateTimeout = setTimeout(() => {
      if (this.props.onStateSnapshot) {
        this.props.onStateSnapshot(getStateSnapshot(this.state));
      }
    }, 100);
  }

  componentWillUnmount() {
    const media = this.media; // remove special event listeners on the media element

    media.removeEventListener('srcrequest', this.handleMediaSrcrequest);
    media.removeEventListener('loopchange', this.handleMediaLoopchange);
    clearTimeout(this.gapLengthTimeout);
    clearTimeout(this.delayTimeout);
  }

  setMediaElementRef(ref) {
    this.media = ref;

    if (typeof this.props.mediaElementRef === 'function') {
      this.props.mediaElementRef(ref);
    }
  }

  stealMediaSession() {
    if ( // eslint-disable-next-line no-undef
    !(window.MediaSession && navigator.mediaSession instanceof MediaSession)) {
      return;
    } // eslint-disable-next-line no-undef


    navigator.mediaSession.metadata = new MediaMetadata(this.props.playlist[this.state.activeTrackIndex]);
    supportableMediaSessionActions.map(action => {
      if (this.props.supportedMediaSessionActions.indexOf(action) === -1) {
        return null;
      }

      const seekLength = this.props.mediaSessionSeekLengthInSeconds;

      switch (action) {
        case 'play':
          return this.togglePause.bind(this, false);

        case 'pause':
          return this.togglePause.bind(this, true);

        case 'previoustrack':
          return this.backSkip;

        case 'nexttrack':
          return this.forwardSkip;

        case 'seekbackward':
          return () => this.media.currentTime -= seekLength;

        case 'seekforward':
          return () => this.media.currentTime += seekLength;

        default:
          return undefined;
      }
    }).forEach((handler, i) => {
      navigator.mediaSession.setActionHandler(supportableMediaSessionActions[i], handler);
    });
  }

  pipeVideoStreamToCanvas(canvas, callback) {
    return utils_streamVideoElementToCanvas(this.media, canvas, callback);
  }

  handleMediaPlay() {
    this.setState(state => state.paused === false ? null : {
      paused: false
    });
    this.stealMediaSession();
  }

  handleMediaPause() {
    this.setState(state => state.paused === true ? null : {
      paused: true
    });
  }

  handleMediaSrcrequest(e) {
    const playlist = this.props.playlist;
    const sources = utils_getTrackSources(playlist, this.state.activeTrackIndex);

    if (array_find_index_default()(sources, s => s.src === e.srcRequested) !== -1) {
      // we're good! nothing to update.
      return;
    } // looks like 'src' was set from outside our component.
    // let's see if we can use it.


    const newTrackIndex = utils_findTrackIndexByUrl(playlist, e.srcRequested);

    if (newTrackIndex === -1) {
      logError(`Source '${e.srcRequested}' does not exist in the loaded playlist. ` + `Make sure you've updated the 'playlist' prop to ` + `PlayerContextProvider before you select this track!`);
      return;
    }

    this.selectTrackIndex(newTrackIndex);
  }

  handleMediaEnded() {
    if (this.state.seekInProgress) {
      // nothing to do if we're in the middle of a seek
      // (this can happen if we're in seekMode: immediate)
      return;
    }

    clearTimeout(this.gapLengthTimeout);
    const _props = this.props,
          playlist = _props.playlist,
          loadFirstTrackOnPlaylistComplete = _props.loadFirstTrackOnPlaylistComplete;

    if (!utils_isPlaylistValid(playlist)) {
      return;
    }

    const _state = this.state,
          cycle = _state.cycle,
          activeTrackIndex = _state.activeTrackIndex;

    if (!cycle && activeTrackIndex + 1 >= playlist.length) {
      if (loadFirstTrackOnPlaylistComplete) {
        this.goToTrack(0, false);
      }

      return;
    }

    this.gapLengthTimeout = setTimeout(this.forwardSkip, this.props.gapLengthInSeconds * 1000);
  }

  handleMediaStalled() {
    this.setState(state => state.stalled === true ? null : {
      stalled: true
    });
  }

  handleMediaCanplaythrough() {
    this.setState(state => state.stalled === false ? null : {
      stalled: false
    });
  }

  handleMediaTimeupdate() {
    const _media = this.media,
          currentTime = _media.currentTime,
          played = _media.played;
    this.setState({
      currentTime,
      playedRanges: utils_getTimeRangesArray(played)
    });
  }

  handleMediaLoadedmetadata() {
    if (this.media.currentTime !== this.state.currentTime) {
      this.media.currentTime = this.state.currentTime;
    }

    this.setState(state => state.trackLoading === false ? null : {
      trackLoading: false
    });
  }

  handleMediaVolumechange() {
    const _media2 = this.media,
          volume = _media2.volume,
          muted = _media2.muted;
    this.setState({
      volume,
      muted
    });
  }

  handleMediaDurationchange() {
    const duration = this.media.duration;
    this.setState({
      duration
    });
  }

  handleMediaProgress() {
    this.setState({
      bufferedRanges: utils_getTimeRangesArray(this.media.buffered),
      seekableRanges: utils_getTimeRangesArray(this.media.seekable)
    });
  }

  handleMediaLoopchange() {
    const loop = this.media.loop;
    this.setState(state => state.loop === loop ? null : {
      loop
    });
  }

  handleMediaRatechange() {
    const playbackRate = this.media.playbackRate;
    this.setState(state => state.playbackRate === playbackRate ? null : {
      playbackRate
    });
  }

  togglePause(value) {
    clearTimeout(this.delayTimeout);
    const pause = typeof value === 'boolean' ? value : !this.state.paused;

    if (pause) {
      this.media.pause();
      return;
    }

    if (!this.media.currentSrc) {
      return;
    }

    try {
      const playPromise = this.media.play();

      if (playPromise && typeof playPromise.catch === 'function') {
        playPromise.catch(err => {
          // AbortError is pretty much always called because we're skipping
          // tracks quickly or hitting pause before a track has a chance to
          // play. It's pretty safe to just ignore these error messages.
          if (err.name !== 'AbortError') {
            return Promise.reject(err);
          }
        }).catch(playErrorHandler);
      }
    } catch (err) {
      playErrorHandler(err);
    }
  } // assumes playlist is valid - don't call without checking


  goToTrack(index, shouldPlay = true) {
    clearTimeout(this.delayTimeout);
    this.setState(state => getGoToTrackState(state, index, shouldPlay));
  }

  selectTrackIndex(index) {
    const playlist = this.props.playlist;

    if (!utils_isPlaylistValid(playlist)) {
      return;
    }

    if (index < 0 || index > playlist.length) {
      logWarning(`Playlist index ${index} is out of bounds!`);
      return;
    }

    if (this.state.shuffle) {
      this.shuffler.pickNextItem(index, this.state.activeTrackIndex);
    }

    this.goToTrack(index);
  }

  backSkip() {
    const _props2 = this.props,
          playlist = _props2.playlist,
          stayOnBackSkipThreshold = _props2.stayOnBackSkipThreshold;
    const media = this.media;
    const _state2 = this.state,
          cycle = _state2.cycle,
          activeTrackIndex = _state2.activeTrackIndex,
          shuffle = _state2.shuffle;

    if (!utils_isPlaylistValid(playlist) || media.currentTime >= stayOnBackSkipThreshold || !cycle && activeTrackIndex < 1) {
      media.currentTime = 0;
      return;
    }

    let index;

    if (shuffle) {
      const previousItem = this.shuffler.findPreviousItem(activeTrackIndex);

      if (previousItem === undefined) {
        // if we aren't allowing backShuffle then we'll hit a stopping point.
        media.currentTime = 0;
        return;
      }

      index = utils_findTrackIndexByUrl(playlist, previousItem);
    } else {
      index = activeTrackIndex - 1;

      if (index < 0) {
        index = playlist.length - 1;
      }
    }

    this.goToTrack(index);
  }

  forwardSkip() {
    const playlist = this.props.playlist;
    const _state3 = this.state,
          cycle = _state3.cycle,
          activeTrackIndex = _state3.activeTrackIndex,
          shuffle = _state3.shuffle;

    if (!utils_isPlaylistValid(playlist) || !cycle && activeTrackIndex + 1 >= playlist.length) {
      return;
    }

    let index;

    if (shuffle) {
      index = utils_findTrackIndexByUrl(playlist, this.shuffler.findNextItem(activeTrackIndex));
    } else {
      index = activeTrackIndex + 1;

      if (index >= playlist.length) {
        index = 0;
      }
    }

    this.goToTrack(index);
  }

  seekPreview(targetTime) {
    if (!utils_isPlaylistValid(this.props.playlist)) {
      return;
    }

    const baseStateUpdate = {
      seekPreviewTime: targetTime,
      seekInProgress: true
    };

    switch (this.props.seekMode) {
      case 'paused':
        this.setState(({
          paused,
          awaitingResumeOnSeekComplete
        }) => _objectSpread({}, baseStateUpdate, {
          awaitingResumeOnSeekComplete: paused ? awaitingResumeOnSeekComplete : true
        }));
        this.media.currentTime = targetTime;

        if (!this.state.paused) {
          this.togglePause(true);
        }

        break;

      case 'immediate':
        this.setState(({
          paused,
          awaitingResumeOnSeekComplete
        }) => _objectSpread({}, baseStateUpdate, {
          awaitingResumeOnSeekComplete: paused ? awaitingResumeOnSeekComplete : true
        }));
        this.media.currentTime = targetTime;

        if (this.state.awaitingResumeOnSeekComplete && !this.media.ended) {
          // if we earlier encountered an 'ended' state,
          // un-pausing becomes necessary to resume playback
          this.togglePause(false);
        }

        break;

      case 'onrelease':
        this.setState(baseStateUpdate);
        break;
    }
  }

  seekComplete() {
    const _state4 = this.state,
          seekPreviewTime = _state4.seekPreviewTime,
          awaitingResumeOnSeekComplete = _state4.awaitingResumeOnSeekComplete;
    const baseStateUpdate = {
      seekInProgress: false,
      awaitingResumeOnSeekComplete: false
    };

    if (isNaN(seekPreviewTime)) {
      this.setState(baseStateUpdate);
      return;
    }

    this.setState(_objectSpread({}, baseStateUpdate, {
      /* we'll update currentTime on the media listener hook anyway,
       * but that might not happen for a bit... so the optimistic update
       * helps us avoid the progress bar jumping around and confusing the user.
       * https://github.com/benwiley4000/cassette/issues/209
       */
      currentTime: seekPreviewTime
    }));
    this.media.currentTime = seekPreviewTime;

    if (awaitingResumeOnSeekComplete) {
      if (this.media.ended) {
        this.forwardSkip();
      } else {
        this.togglePause(false);
      }
    }
  }

  setVolume(volume) {
    if (!this.state.setVolumeInProgress) {
      this.setState({
        setVolumeInProgress: true
      });
    }

    const volumeInBounds = utils_convertToNumberWithinIntervalBounds(volume, 0, 1);
    this.media.muted = volumeInBounds === 0 ? true : false;
    this.media.volume = volumeInBounds;
  }

  setVolumeComplete() {
    this.setState({
      setVolumeInProgress: false
    });

    if (!this.media.muted) {
      this.lastStableVolume = this.media.volume;
    }
  }

  toggleMuted(value) {
    const muted = typeof value === 'boolean' ? value : !this.state.muted;
    this.media.muted = muted;

    if (!muted) {
      this.media.volume = this.lastStableVolume;
    }
  }

  toggleShuffle(value) {
    const shuffle = typeof value === 'boolean' ? value : !this.state.shuffle;
    this.setState({
      shuffle
    });
  }

  setRepeatStrategy(repeatStrategy) {
    if (repeatStrategyOptions.indexOf(repeatStrategy) === -1) {
      logWarning('repeatStrategy "' + repeatStrategy + '" is not one of: ' + repeatStrategyOptions.split(', ') + '.');
      return;
    }

    this.setState(() => {
      switch (repeatStrategy) {
        case 'track':
          return {
            loop: true
          };

        case 'playlist':
          return {
            loop: false,
            cycle: true
          };

        case 'none':
          return {
            loop: false,
            cycle: false
          };

        default:
          return null;
      }
    });
  }

  setPlaybackRate(rate) {
    this.media.playbackRate = rate;
  }

  getControlProps() {
    const props = this.props,
          state = this.state;
    const playerContext = {
      playlist: props.playlist,
      activeTrackIndex: state.activeTrackIndex,
      trackLoading: state.trackLoading,
      paused: state.paused,
      currentTime: state.currentTime,
      seekPreviewTime: state.seekPreviewTime,
      seekInProgress: state.seekInProgress,
      awaitingResumeOnSeekComplete: state.awaitingResumeOnSeekComplete,
      duration: state.duration,
      bufferedRanges: state.bufferedRanges,
      playedRanges: state.playedRanges,
      seekableRanges: state.seekableRanges,
      volume: state.volume,
      muted: state.muted,
      shuffle: state.shuffle,
      stalled: state.stalled,
      playbackRate: state.playbackRate,
      setVolumeInProgress: state.setVolumeInProgress,
      repeatStrategy: utils_getRepeatStrategy(state.loop, state.cycle),
      pipeVideoStreamToCanvas: this.pipeVideoStreamToCanvas,
      onTogglePause: this.togglePause,
      onSelectTrackIndex: this.selectTrackIndex,
      onBackSkip: this.backSkip,
      onForwardSkip: this.forwardSkip,
      onSeekPreview: this.seekPreview,
      onSeekComplete: this.seekComplete,
      onSetVolume: this.setVolume,
      onSetVolumeComplete: this.setVolumeComplete,
      onToggleMuted: this.toggleMuted,
      onToggleShuffle: this.toggleShuffle,
      onSetRepeatStrategy: this.setRepeatStrategy,
      onSetPlaybackRate: this.setPlaybackRate
    };

    if (this.playerContext) {
      // only update this.playerContext if something has changed
      for (const key of Object.keys(this.playerContext)) {
        if (playerContext[key] !== this.playerContext[key]) {
          this.playerContext = playerContext;
          break;
        }
      }
    } else {
      // first time - nothing to compare
      this.playerContext = playerContext;
    }

    return this.playerContext;
  }

  render() {
    const sources = utils_getTrackSources(this.props.playlist, this.state.activeTrackIndex);
    const playerContext = this.getControlProps();
    return external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(external_root_React_commonjs_react_commonjs2_react_amd_react_["Fragment"], null, external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("video", {
      hidden: true,
      ref: this.setMediaElementRef,
      crossOrigin: this.props.crossOrigin,
      preload: "metadata",
      loop: this.state.loop,
      onPlay: this.handleMediaPlay,
      onPause: this.handleMediaPause,
      onEnded: this.handleMediaEnded,
      onStalled: this.handleMediaStalled,
      onCanPlayThrough: this.handleMediaCanplaythrough,
      onTimeUpdate: this.handleMediaTimeupdate,
      onLoadedMetadata: this.handleMediaLoadedmetadata,
      onVolumeChange: this.handleMediaVolumechange,
      onDurationChange: this.handleMediaDurationchange,
      onProgress: this.handleMediaProgress,
      onRateChange: this.handleMediaRatechange
    }, sources.map(source => external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("source", {
      key: source.src,
      src: source.src,
      type: source.type
    }))), external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(src_PlayerContext.Provider, {
      value: playerContext
    }, typeof this.props.children === 'function' ? this.props.children(playerContext) : this.props.children));
  }

}
PlayerContextProvider_PlayerContextProvider.propTypes = {
  playlist: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.arrayOf(PlayerPropTypes_track.isRequired).isRequired,
  autoplay: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.bool.isRequired,
  autoplayDelayInSeconds: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.number.isRequired,
  gapLengthInSeconds: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.number.isRequired,
  crossOrigin: crossOriginAttribute,
  defaultVolume: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.number.isRequired,
  defaultMuted: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.bool,
  defaultRepeatStrategy: PlayerPropTypes_repeatStrategy.isRequired,
  defaultShuffle: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.bool,
  defaultPlaybackRate: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.number.isRequired,
  startingTime: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.number.isRequired,
  startingTrackIndex: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.number.isRequired,
  loadFirstTrackOnPlaylistComplete: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.bool,
  seekMode: seekMode.isRequired,
  maintainPlaybackRate: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.bool.isRequired,
  allowBackShuffle: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.bool,
  stayOnBackSkipThreshold: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.number.isRequired,
  supportedMediaSessionActions: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.arrayOf(mediaSessionAction.isRequired).isRequired,
  mediaSessionSeekLengthInSeconds: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.number.isRequired,
  mediaElementRef: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.func,
  initialStateSnapshot: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.shape({
    __unstable__: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.object.isRequired
  }),
  onStateSnapshot: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.func,
  children: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.oneOfType([external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.node, external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.func]).isRequired
};
PlayerContextProvider_PlayerContextProvider.defaultProps = {
  autoplay: false,
  autoplayDelayInSeconds: 0,
  gapLengthInSeconds: 0,
  defaultVolume: 1,
  defaultMuted: false,
  defaultRepeatStrategy: 'playlist',
  defaultShuffle: false,
  defaultPlaybackRate: 1,
  startingTime: 0,
  startingTrackIndex: 0,
  loadFirstTrackOnPlaylistComplete: true,
  seekMode: 'immediate',
  maintainPlaybackRate: false,
  allowBackShuffle: false,
  stayOnBackSkipThreshold: 5,
  supportedMediaSessionActions: ['play', 'pause', 'previoustrack', 'nexttrack'],
  mediaSessionSeekLengthInSeconds: 10
};
class PlayerContextProvider_PlayerContextGroupMember extends external_root_React_commonjs_react_commonjs2_react_amd_react_["Component"] {
  componentDidMount() {
    this.props.groupContext.registerMediaElement(this.mediaElement);
  }

  componentWillUnmount() {
    this.props.groupContext.unregisterMediaElement(this.mediaElement);
  }

  render() {
    const _props3 = this.props,
          groupContext = _props3.groupContext,
          props = _props3.props;

    const _mediaElementRef = props.mediaElementRef,
          rest = _objectWithoutProperties(props, ["mediaElementRef"]);

    return external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(PlayerContextProvider_PlayerContextProvider, _extends({}, groupContext.groupProps, rest, {
      mediaElementRef: ref => {
        if (_mediaElementRef) {
          _mediaElementRef(ref);
        }

        this.mediaElement = ref;
      }
    }));
  }

}
PlayerContextProvider_PlayerContextGroupMember.propTypes = {
  groupContext: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.shape({
    groupProps: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.object.isRequired,
    registerMediaElement: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.func.isRequired,
    unregisterMediaElement: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.func.isRequired
  }).isRequired
};

function PlayerContextGroupConsumer(props) {
  return external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(src_GroupContext.Consumer, null, groupContext => {
    if (!groupContext) {
      return Object(external_root_React_commonjs_react_commonjs2_react_amd_react_["createElement"])(PlayerContextProvider_PlayerContextProvider, props);
    }

    return Object(external_root_React_commonjs_react_commonjs2_react_amd_react_["createElement"])(PlayerContextProvider_PlayerContextGroupMember, {
      groupContext,
      props
    });
  });
}

/* harmony default export */ var src_PlayerContextProvider = (PlayerContextGroupConsumer);
// CONCATENATED MODULE: ./packages/core/src/PlayerContextGroup.js
function PlayerContextGroup_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { PlayerContextGroup_defineProperty(target, key, source[key]); }); } return target; }

function PlayerContextGroup_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class PlayerContextGroup_PlayerContextGroup extends external_root_React_commonjs_react_commonjs2_react_amd_react_["Component"] {
  constructor(props) {
    super(props);
    this.registerMediaElement = this.registerMediaElement.bind(this);
    this.unregisterMediaElement = this.unregisterMediaElement.bind(this);
    this.enforceOneMediaSourceOnly = this.enforceOneMediaSourceOnly.bind(this);
    this.mediaElements = [];
  }

  registerMediaElement(elem) {
    this.mediaElements = this.mediaElements.concat(elem);
    elem.addEventListener('play', this.enforceOneMediaSourceOnly, true);
    elem.addEventListener('volumechange', this.enforceOneMediaSourceOnly, true);
  }

  unregisterMediaElement(elem) {
    this.mediaElements = this.mediaElements.filter(element => elem !== element);
    elem.removeEventListener('play', this.enforceOneMediaSourceOnly, true);
    elem.removeEventListener('volumechange', this.enforceOneMediaSourceOnly, true);
  }

  enforceOneMediaSourceOnly(e) {
    const mediaElement = e.target;
    const paused = mediaElement.paused,
          muted = mediaElement.muted;

    if (paused || muted) {
      return;
    }

    for (const element of this.mediaElements) {
      if (element !== mediaElement && !element.muted) {
        element.pause();
      }
    }
  }

  render() {
    return external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(src_GroupContext.Consumer, null, groupContext => {
      const value = groupContext ? PlayerContextGroup_objectSpread({}, groupContext, {
        groupProps: PlayerContextGroup_objectSpread({}, groupContext.groupProps, this.props)
      }) : {
        groupProps: this.props,
        registerMediaElement: this.registerMediaElement,
        unregisterMediaElement: this.unregisterMediaElement
      };
      return external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(src_GroupContext.Provider, {
        value: value
      }, this.props.children);
    });
  }

}
PlayerContextGroup_PlayerContextGroup.propTypes = {
  children: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.node.isRequired
};
/* harmony default export */ var src_PlayerContextGroup = (PlayerContextGroup_PlayerContextGroup);
// CONCATENATED MODULE: ./packages/core/src/FullscreenContext.js


const FullscreenContext = Object(external_root_React_commonjs_react_commonjs2_react_amd_react_["createContext"])({
  fullscreen: false,

  requestFullscreen() {
    logWarning('Fullscreen request ignored since there is no ' + 'FullscreenContextProvider ancestor.');
  },

  requestExitFullscreen() {
    logWarning('Exit fullscreen request ignored since there is no ' + 'FullscreenContextProvider ancestor.');
  }

});
FullscreenContext.displayName = 'FullscreenContext';
/* harmony default export */ var src_FullscreenContext = (FullscreenContext);
// CONCATENATED MODULE: ./packages/core/src/FullscreenContextProvider.js



const fullscreenStyle = {
  width: '100%',
  height: '100%'
};
class FullscreenContextProvider_FullscreenContextProvider extends external_root_React_commonjs_react_commonjs2_react_amd_react_["PureComponent"] {
  constructor(props) {
    super(props);
    this.state = {
      fullscreen: false
    };
    this.requestFullscreen = this.requestFullscreen.bind(this);
    this.requestExitFullscreen = this.requestExitFullscreen.bind(this);
    this.handleFullscreenChange = this.handleFullscreenChange.bind(this);
    this.fullscreenElement = null;
  }

  componentDidMount() {
    document.addEventListener('fullscreenchange', this.handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', this.handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', this.handleFullscreenChange);
    document.addEventListener('msfullscreenchange', this.handleFullscreenChange);
  }

  componentWillUnmount() {
    document.removeEventListener('fullscreenchange', this.handleFullscreenChange);
    document.removeEventListener('webkitfullscreenchange', this.handleFullscreenChange);
    document.removeEventListener('mozfullscreenchange', this.handleFullscreenChange);
    document.removeEventListener('msfullscreenchange', this.handleFullscreenChange);
  }

  requestFullscreen() {
    if (!this.props.fullscreenEnabled) {
      return;
    }

    if (this.fullscreenElement.requestFullscreen) {
      this.fullscreenElement.requestFullscreen();
    } else if (this.fullscreenElement.webkitRequestFullscreen) {
      this.fullscreenElement.webkitRequestFullscreen();
    } else if (this.fullscreenElement.mozRequestFullscreen) {
      this.fullscreenElement.mozRequestFullScreen();
    } else if (this.fullscreenElement.msRequestFullscreen) {
      this.fullscreenElement.msRequestFullscreen();
    }
  }

  requestExitFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.msExitFullscreen) {
      document.mozExitFullscreen();
    }
  }

  handleFullscreenChange() {
    const documentFullscreenElement = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
    this.setState({
      fullscreen: documentFullscreenElement === this.fullscreenElement
    });
  }

  getFullscreenContext() {
    const fullscreenContext = {
      fullscreen: this.state.fullscreen,
      requestFullscreen: this.requestFullscreen,
      requestExitFullscreen: this.requestExitFullscreen
    };

    if (this.fullscreenContext && fullscreenContext.fullscreen === this.fullscreenContext.fullscreen) {
      // no change
      return this.fullscreenContext;
    }

    return this.fullscreenContext = fullscreenContext;
  }

  render() {
    const fullscreenContext = this.getFullscreenContext();
    return external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
      ref: elem => this.fullscreenElement = elem,
      style: this.state.fullscreen ? fullscreenStyle : undefined
    }, external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(src_FullscreenContext.Provider, {
      value: fullscreenContext
    }, typeof this.props.children === 'function' ? this.props.children(fullscreenContext) : this.props.children));
  }

}
FullscreenContextProvider_FullscreenContextProvider.propTypes = {
  fullscreenEnabled: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.bool.isRequired,
  children: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.oneOfType([external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.node, external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.func]).isRequired
};
FullscreenContextProvider_FullscreenContextProvider.defaultProps = {
  fullscreenEnabled: true
};
/* harmony default export */ var src_FullscreenContextProvider = (FullscreenContextProvider_FullscreenContextProvider);
// CONCATENATED MODULE: ./packages/core/src/playerContextFilter.js
function playerContextFilter_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { playerContextFilter_defineProperty(target, key, source[key]); }); } return target; }

function playerContextFilter_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function playerContextFilter(component, contextPropNames) {
  const warned = {};
  const childName = component.displayName || component.name;

  function PlayerContextFilter(props) {
    return external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(src_FullscreenContext.Consumer, null, fullscreenContext => external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(src_PlayerContext.Consumer, null, playerContext => {
      const childProps = playerContextFilter_objectSpread({}, props);

      for (const propName of contextPropNames) {
        if (playerContext.hasOwnProperty(propName)) {
          childProps[propName] = playerContext[propName];
        } else if (fullscreenContext.hasOwnProperty(propName)) {
          childProps[propName] = fullscreenContext[propName];
        } else if (!warned[propName]) {
          logWarning("Prop '" + propName + "' for component " + childName + ' not found in playerContext or fullscreenContext.');
          warned[propName] = true;
        }
      }

      return Object(external_root_React_commonjs_react_commonjs2_react_amd_react_["createElement"])(component, childProps);
    }));
  }

  if (childName) {
    PlayerContextFilter.displayName = `PlayerContextFilter(${childName})`;
  }

  return PlayerContextFilter;
}

/* harmony default export */ var src_playerContextFilter = (playerContextFilter);
// CONCATENATED MODULE: ./packages/core/src/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerContextConsumer", function() { return PlayerContextConsumer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullscreenContextConsumer", function() { return FullscreenContextConsumer; });
/* concated harmony reexport PlayerContextProvider */__webpack_require__.d(__webpack_exports__, "PlayerContextProvider", function() { return src_PlayerContextProvider; });
/* concated harmony reexport PlayerContextGroup */__webpack_require__.d(__webpack_exports__, "PlayerContextGroup", function() { return src_PlayerContextGroup; });
/* concated harmony reexport FullscreenContextProvider */__webpack_require__.d(__webpack_exports__, "FullscreenContextProvider", function() { return src_FullscreenContextProvider; });
/* concated harmony reexport playerContextFilter */__webpack_require__.d(__webpack_exports__, "playerContextFilter", function() { return src_playerContextFilter; });
/* concated harmony reexport PlayerPropTypes */__webpack_require__.d(__webpack_exports__, "PlayerPropTypes", function() { return PlayerPropTypes_namespaceObject; });
/* concated harmony reexport logError */__webpack_require__.d(__webpack_exports__, "logError", function() { return logError; });
/* concated harmony reexport logWarning */__webpack_require__.d(__webpack_exports__, "logWarning", function() { return logWarning; });
/* concated harmony reexport convertToNumberWithinIntervalBounds */__webpack_require__.d(__webpack_exports__, "convertToNumberWithinIntervalBounds", function() { return utils_convertToNumberWithinIntervalBounds; });
/* concated harmony reexport isPlaylistValid */__webpack_require__.d(__webpack_exports__, "isPlaylistValid", function() { return utils_isPlaylistValid; });
/* concated harmony reexport repeatStrategyOptions */__webpack_require__.d(__webpack_exports__, "repeatStrategyOptions", function() { return repeatStrategyOptions; });








const PlayerContextConsumer = src_PlayerContext.Consumer;


const FullscreenContextConsumer = src_FullscreenContext.Consumer;

 // undocumented exports






/***/ })
/******/ ]);
});
//# sourceMappingURL=cassette-core.js.map