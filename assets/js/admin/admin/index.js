this["[modulename]"] =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/dev/admin/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/dev/admin/Example.jsx":
/*!*****************************************!*\
  !*** ./assets/js/dev/admin/Example.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Settings; });\nfunction Settings() {\n  const [settings, setSettings] = useState({\n    name: 'Name'\n  });\n\n  const updateSettings = (field, value) => {\n    let update = Object.assign({}, settings, {\n      [field]: value\n    });\n    setSettings(update);\n  };\n\n  return /*#__PURE__*/React.createElement(\"div\", {\n    className: \"asnp-mt-4 asnp-max-w-lg asnp-grid asnp-grid-cols-1 asnp-gap-6\"\n  }, /*#__PURE__*/React.createElement(\"label\", {\n    className: \"asnp-block asnp-space-y-1\"\n  }, /*#__PURE__*/React.createElement(\"span\", {\n    className: \"asnp-field-title\"\n  }, __('Name', 'easy-woocommerce-discounts')), /*#__PURE__*/React.createElement(\"input\", {\n    type: \"text\",\n    className: \"asnp-block asnp-text-field\",\n    value: settings.name,\n    onChange: e => updateSettings('name', e.target.value)\n  })), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"asnp-flex\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"asnp-w-1/2 asnp-bg-rose-500\"\n  }, \"w-1/2\"), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"asnp-w-1/2 asnp-bg-indigo-500 asnp-bg-gray-200\"\n  }, \"w-1/2\")), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"asnp-flex\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"asnp-w-1/2 asnp-h-10 asnp-bg-gray-500\"\n  }, \"w-1/2\"), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"asnp-w-1/2 asnp-h-10 asnp-bg-blue-500 asnp-text-white\"\n  }, \"w-1/2\")));\n}\n\n//# sourceURL=webpack://%5Bmodulename%5D/./assets/js/dev/admin/Example.jsx?");

/***/ }),

/***/ "./assets/js/dev/admin/index.css":
/*!***************************************!*\
  !*** ./assets/js/dev/admin/index.css ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://%5Bmodulename%5D/./assets/js/dev/admin/index.css?");

/***/ }),

/***/ "./assets/js/dev/admin/index.js":
/*!**************************************!*\
  !*** ./assets/js/dev/admin/index.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./assets/js/dev/admin/index.css\");\n/* harmony import */ var _Example_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Example.jsx */ \"./assets/js/dev/admin/Example.jsx\");\n\n\n\n//# sourceURL=webpack://%5Bmodulename%5D/./assets/js/dev/admin/index.js?");

/***/ })

/******/ });