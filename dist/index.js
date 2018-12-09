(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define("dyna-highlight-text", ["react"], factory);
	else if(typeof exports === 'object')
		exports["dyna-highlight-text"] = factory(require("react"));
	else
		root["dyna-highlight-text"] = factory(root["react"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_react__) {
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/react-hot-loader/dist/react-hot-loader.production.min.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/react-hot-loader/dist/react-hot-loader.production.min.js ***!
  \*******************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _interopDefault(t) {
  return t && "object" == typeof t && "default" in t ? t.default : t;
}

Object.defineProperty(exports, "__esModule", {
  value: !0
});

var React = _interopDefault(__webpack_require__(/*! react */ "react")),
    classCallCheck = function (t, e) {
  if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
},
    inherits = function (t, e) {
  if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
},
    possibleConstructorReturn = function (t, e) {
  if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return !e || "object" != typeof e && "function" != typeof e ? t : e;
},
    AppContainer = function (t) {
  function e() {
    return classCallCheck(this, e), possibleConstructorReturn(this, t.apply(this, arguments));
  }

  return inherits(e, t), e.prototype.render = function () {
    return React.Children.only(this.props.children);
  }, e;
}(React.Component),
    hot_prod = function () {
  return function (t) {
    return t;
  };
},
    areComponentsEqual = function (t, e) {
  return t === e;
},
    setConfig = function () {},
    cold = function (t) {
  return t;
};

exports.AppContainer = AppContainer, exports.hot = hot_prod, exports.areComponentsEqual = areComponentsEqual, exports.setConfig = setConfig, exports.cold = cold;

/***/ }),

/***/ "./node_modules/react-hot-loader/index.js":
/*!************************************************!*\
  !*** ./node_modules/react-hot-loader/index.js ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var evalAllowed = false;

try {
  eval('evalAllowed = true');
} catch (e) {} // eval not allowed due to CSP
// RHL needs setPrototypeOf to operate Component inheritance, and eval to patch methods


var platformSupported = !!Object.setPrototypeOf && evalAllowed;

if (true) {
  if (false) {}

  module.exports = __webpack_require__(/*! ./dist/react-hot-loader.production.min.js */ "./node_modules/react-hot-loader/dist/react-hot-loader.production.min.js");
} else {}

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function () {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function () {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),

/***/ "./src/DynaHighlightText.tsx":
/*!***********************************!*\
  !*** ./src/DynaHighlightText.tsx ***!
  \***********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __webpack_require__(/*! react */ "react");

var DynaHighlightText =
/** @class */
function (_super) {
  __extends(DynaHighlightText, _super);

  function DynaHighlightText() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.wrapperStyle = {
      whiteSpace: "pre-wrap"
    };
    return _this;
  }

  DynaHighlightText.prototype.highlightText = function () {
    var _a = this.props,
        sourceText = _a.sourceText,
        highlightWords = _a.highlightWords,
        caseSensitive = _a.caseSensitive,
        onHighlightRender = _a.onHighlightRender;
    var textOriginal = sourceText;
    var textProcess = sourceText;
    var wordsOriginal = highlightWords.split(' ').filter(function (w) {
      return !!w;
    });
    var wordsProcess = [].concat.apply([], wordsOriginal);
    var output = [];
    var partialOutput = '';

    if (!caseSensitive) {
      textProcess = textProcess.toLowerCase();
      wordsProcess = wordsProcess.map(function (word) {
        return word.toLowerCase();
      });
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

          var hWord = onHighlightRender(textOriginal.substr(iChar, word.length));
          if (typeof hWord !== 'string') hWord = React.cloneElement(hWord, {
            key: iChar + '-' + iWord
          });
          output.push(hWord);
          iChar += wordsOriginal[iWord].length - 1;
          break;
        }
      }

      if (!wordFound) partialOutput += textOriginal[iChar];
    }

    if (partialOutput) output.push(partialOutput);
    return output;
  };

  DynaHighlightText.prototype.render = function () {
    return React.createElement("span", {
      style: this.wrapperStyle
    }, this.highlightText());
  };

  DynaHighlightText.defaultProps = {
    sourceText: '',
    highlightWords: '',
    caseSensitive: false,
    onHighlightRender: function onHighlightRender(word) {
      return React.createElement("u", null, word);
    }
  };
  return DynaHighlightText;
}(React.Component);

exports.DynaHighlightText = DynaHighlightText;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(__extends, "__extends", "/Users/dennis/dev/dyna/dyna-highlight-text/src/DynaHighlightText.tsx");
  reactHotLoader.register(DynaHighlightText, "DynaHighlightText", "/Users/dennis/dev/dyna/dyna-highlight-text/src/DynaHighlightText.tsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var DynaHighlightText_1 = __webpack_require__(/*! ./DynaHighlightText */ "./src/DynaHighlightText.tsx");

exports.DynaHighlightText = DynaHighlightText_1.DynaHighlightText;

/***/ }),

/***/ 0:
/*!*****************************!*\
  !*** multi ./src/index.tsx ***!
  \*****************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/dennis/dev/dyna/dyna-highlight-text/src/index.tsx */"./src/index.tsx");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map