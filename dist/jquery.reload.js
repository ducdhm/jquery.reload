(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("jquery"));
	else if(typeof define === 'function' && define.amd)
		define("Reload", ["jquery"], factory);
	else if(typeof exports === 'object')
		exports["Reload"] = factory(require("jquery"));
	else
		root["Reload"] = factory(root["$"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_jquery__) {
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
 // Default config

var DEFAULTS = {
  url: null,
  beforeReload: null,
  onReloaded: null,
  onError: null
}; // Log message

var log = function log() {
  if (window.console && typeof console.log === 'function' && window.__JQUERY_RELOAD_DEBUG) {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    console.log.apply(console, args);
  }
};

jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn.reload = function (config) {
  var elements = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
  var options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, DEFAULTS, config);
  var reloadUrl = options.url || location.pathname + location.search;
  log("[jquery.reload] INFO :: Reload url: \"".concat(reloadUrl, "\""));
  typeof options.beforeReload === 'function' && options.beforeReload.call(elements, options);
  jquery__WEBPACK_IMPORTED_MODULE_0___default.a.ajax({
    type: 'GET',
    url: reloadUrl,
    success: function success(resp) {
      var fragment = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div />').html(resp);
      elements.each(function () {
        var element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
        var elementId = element.attr('id');

        if (elementId) {
          this.innerHTML = fragment.find("#".concat(elementId)).html();
        } else {
          log("[jquery.reload] WARN :: element has not ID attribute");
        }
      });
      typeof options.onReloaded === 'function' && options.onReloaded(elements, fragment, options);
    },
    error: function error(jqXHR) {
      typeof options.onError === 'function' && options.onError(elements, jqXHR, options);
    }
  });
  return elements;
}; // Version


jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn.reload.version = '1.0.0';

/***/ }),

/***/ "jquery":
/*!*************************************************************************************!*\
  !*** external {"amd":"jquery","root":"$","commonjs":"jquery","commonjs2":"jquery"} ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_jquery__;

/***/ })

/******/ })["default"];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9SZWxvYWQvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL1JlbG9hZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9SZWxvYWQvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vUmVsb2FkL2V4dGVybmFsIHtcImFtZFwiOlwianF1ZXJ5XCIsXCJyb290XCI6XCIkXCIsXCJjb21tb25qc1wiOlwianF1ZXJ5XCIsXCJjb21tb25qczJcIjpcImpxdWVyeVwifSJdLCJuYW1lcyI6WyJERUZBVUxUUyIsInVybCIsImJlZm9yZVJlbG9hZCIsIm9uUmVsb2FkZWQiLCJvbkVycm9yIiwibG9nIiwid2luZG93IiwiY29uc29sZSIsIl9fSlFVRVJZX1JFTE9BRF9ERUJVRyIsImFyZ3MiLCJhcHBseSIsIiQiLCJmbiIsInJlbG9hZCIsImNvbmZpZyIsImVsZW1lbnRzIiwib3B0aW9ucyIsImV4dGVuZCIsInJlbG9hZFVybCIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJzZWFyY2giLCJjYWxsIiwiYWpheCIsInR5cGUiLCJzdWNjZXNzIiwicmVzcCIsImZyYWdtZW50IiwiaHRtbCIsImVhY2giLCJlbGVtZW50IiwiZWxlbWVudElkIiwiYXR0ciIsImlubmVySFRNTCIsImZpbmQiLCJlcnJvciIsImpxWEhSIiwidmVyc2lvbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFD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LENBQXpDO0FBQ0M7QUFsQk0sR0FBUDtBQW9CQSxTQUFPRCxRQUFQO0FBQ0MsQ0EzQkQsQyxDQTRCQTs7O0FBQ0FKLDZDQUFDLENBQUNDLEVBQUYsQ0FBS0MsTUFBTCxDQUFZd0IsT0FBWixHQUFzQixPQUF0QixDOzs7Ozs7Ozs7OztBQzNDQSxvRCIsImZpbGUiOiJqcXVlcnkucmVsb2FkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwianF1ZXJ5XCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiUmVsb2FkXCIsIFtcImpxdWVyeVwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJSZWxvYWRcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJqcXVlcnlcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlJlbG9hZFwiXSA9IGZhY3Rvcnkocm9vdFtcIiRcIl0pO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfanF1ZXJ5X18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHIvLyBEZWZhdWx0IGNvbmZpZ1xyXG5jb25zdCBERUZBVUxUUyA9IHtccnVybDogbnVsbCxccmJlZm9yZVJlbG9hZDogbnVsbCxccm9uUmVsb2FkZWQ6IG51bGwsXHJvbkVycm9yOiBudWxsLFxyXG59O1xyLy8gTG9nIG1lc3NhZ2VcclxuY29uc3QgbG9nID0gKC4uLmFyZ3MpID0+IHtccmlmICh3aW5kb3cuY29uc29sZSAmJiB0eXBlb2YgY29uc29sZS5sb2cgPT09ICdmdW5jdGlvbicgJiYgd2luZG93Ll9fSlFVRVJZX1JFTE9BRF9ERUJVRykge1xyY29uc29sZS5sb2cuYXBwbHkoY29uc29sZSwgYXJncyk7XHJ9XHJcbn07XHIkLmZuLnJlbG9hZCA9IGZ1bmN0aW9uIChjb25maWcpIHtccmxldCBlbGVtZW50cyA9ICQodGhpcyk7XHJsZXQgb3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBERUZBVUxUUywgY29uZmlnKTtccmxldCByZWxvYWRVcmwgPSBvcHRpb25zLnVybCB8fCAobG9jYXRpb24ucGF0aG5hbWUgKyBsb2NhdGlvbi5zZWFyY2gpO1xybG9nKGBbanF1ZXJ5LnJlbG9hZF0gSU5GTyA6OiBSZWxvYWQgdXJsOiBcIiR7cmVsb2FkVXJsfVwiYCk7XHJ0eXBlb2Ygb3B0aW9ucy5iZWZvcmVSZWxvYWQgPT09ICdmdW5jdGlvbicgJiYgb3B0aW9ucy5iZWZvcmVSZWxvYWQuY2FsbChlbGVtZW50cywgb3B0aW9ucyk7XHIkLmFqYXgoe1xydHlwZTogJ0dFVCcsXHJ1cmw6IHJlbG9hZFVybCxccnN1Y2Nlc3M6IChyZXNwKSA9PiB7XHJsZXQgZnJhZ21lbnQgPSAkKCc8ZGl2IC8+JykuaHRtbChyZXNwKTtccmVsZW1lbnRzLmVhY2goZnVuY3Rpb24gKCkge1xybGV0IGVsZW1lbnQgPSAkKHRoaXMpO1xybGV0IGVsZW1lbnRJZCA9IGVsZW1lbnQuYXR0cignaWQnKTtccmlmIChlbGVtZW50SWQpIHtccnRoaXMuaW5uZXJIVE1MID0gZnJhZ21lbnQuZmluZChgIyR7ZWxlbWVudElkfWApLmh0bWwoKTtccn0gZWxzZSB7XHJsb2coYFtqcXVlcnkucmVsb2FkXSBXQVJOIDo6IGVsZW1lbnQgaGFzIG5vdCBJRCBhdHRyaWJ1dGVgKTtccn1ccn0pO1xydHlwZW9mIG9wdGlvbnMub25SZWxvYWRlZCA9PT0gJ2Z1bmN0aW9uJyAmJiBvcHRpb25zLm9uUmVsb2FkZWQoZWxlbWVudHMsIGZyYWdtZW50LCBvcHRpb25zKTtccn0sXHJlcnJvcjogKGpxWEhSKSA9PiB7XHJ0eXBlb2Ygb3B0aW9ucy5vbkVycm9yID09PSAnZnVuY3Rpb24nICYmIG9wdGlvbnMub25FcnJvcihlbGVtZW50cywganFYSFIsIG9wdGlvbnMpO1xyfSxccn0pO1xycmV0dXJuIGVsZW1lbnRzO1xyXG59O1xyLy8gVmVyc2lvblxyXG4kLmZuLnJlbG9hZC52ZXJzaW9uID0gJzEuMC4wJztcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2pxdWVyeV9fOyJdLCJzb3VyY2VSb290IjoiIn0=