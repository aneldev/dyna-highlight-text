(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define("dyna-highlight-text", ["react"], factory);
	else if(typeof exports === 'object')
		exports["dyna-highlight-text"] = factory(require("react"));
	else
		root["dyna-highlight-text"] = factory(root["react"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_3__) {
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DynaHighlightText_1 = __webpack_require__(2);
exports.DynaHighlightText = DynaHighlightText_1.DynaHighlightText;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(3);
var DynaHighlightText = /** @class */ (function (_super) {
    __extends(DynaHighlightText, _super);
    function DynaHighlightText() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._test_highlightText = _this.highlightText;
        return _this;
    }
    DynaHighlightText.prototype.highlightText = function (text, words, caseSensitive, cbRenderHighlighedWord) {
        var textOriginal = text;
        var textProcess = text;
        var wordsOriginal = words.split(' ').filter(function (w) { return !!w; });
        var wordsProcess = [].concat.apply([], wordsOriginal);
        var output = [];
        var partialOutput = '';
        if (!caseSensitive) {
            textProcess = textProcess.toLowerCase();
            wordsProcess = wordsProcess.map(function (word) { return word.toLowerCase(); });
        }
        for (var iChar = 0; iChar < textProcess.length; iChar++) {
            var wordFound = false;
            for (var iWord = 0; iWord < wordsProcess.length; iWord++) {
                var word = wordsProcess[iWord];
                if (textProcess.substr(iChar, word.length) === word) {
                    wordFound = true;
                    if (partialOutput) {
                        output.push(partialOutput);
                        partialOutput = '';
                    }
                    var hWord = cbRenderHighlighedWord(textOriginal.substr(iChar, word.length));
                    if (typeof hWord !== 'string')
                        hWord = React.cloneElement(hWord, { key: iChar + '-' + iWord });
                    output.push(hWord);
                    iChar += wordsOriginal[iWord].length - 1;
                    break;
                }
            }
            if (!wordFound)
                partialOutput += textOriginal[iChar];
        }
        if (partialOutput)
            output.push(partialOutput);
        return output;
    };
    DynaHighlightText.prototype.render = function () {
        var _a = this.props, sourceText = _a.sourceText, highlightWords = _a.highlightWords, caseSensitive = _a.caseSensitive, onHighlightRender = _a.onHighlightRender;
        return this.highlightText(sourceText, highlightWords, caseSensitive, onHighlightRender);
    };
    DynaHighlightText.defaultProps = {
        sourceText: '',
        highlightWords: '',
        caseSensitive: false,
        onHighlightRender: function (word) { return React.createElement("u", null, word); },
    };
    return DynaHighlightText;
}(React.Component));
exports.DynaHighlightText = DynaHighlightText;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ })
/******/ ]);
});