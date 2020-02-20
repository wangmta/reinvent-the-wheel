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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./decorator.ts":
/*!**********************!*\
  !*** ./decorator.ts ***!
  \**********************/
/*! exports provided: classCollection, protectedMethods, registerClass, protect, override */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"classCollection\", function() { return classCollection; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"protectedMethods\", function() { return protectedMethods; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"registerClass\", function() { return registerClass; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"protect\", function() { return protect; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"override\", function() { return override; });\nvar classCollection = {};\nvar protectedMethods = [];\n// class decorator\nfunction registerClass(constructor) {\n    var className = constructor.name;\n    var fullName = \"class-\" + className;\n    classCollection[fullName] = new constructor();\n}\n// method decorator\nfunction protect(target, property, descriptor) {\n    var className = target.constructor.name;\n    protectedMethods.push(className + \".\" + property + \".\" + JSON.stringify(descriptor));\n}\nfunction override(target, property, descriptor) {\n    descriptor.value = function () {\n        console.log(\"override\");\n    };\n    return descriptor;\n}\n\n\n//# sourceURL=webpack:///./decorator.ts?");

/***/ }),

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./decorator */ \"./decorator.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = Object.setPrototypeOf ||\n        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (undefined && undefined.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\n\nvar Business = /** @class */ (function () {\n    function Business() {\n    }\n    Business.prototype.print = function () {\n        console.log(this.constructor.name);\n    };\n    Business.prototype.testProtectedMethod = function () { };\n    __decorate([\n        _decorator__WEBPACK_IMPORTED_MODULE_0__[\"protect\"],\n        __metadata(\"design:type\", Function),\n        __metadata(\"design:paramtypes\", []),\n        __metadata(\"design:returntype\", void 0)\n    ], Business.prototype, \"testProtectedMethod\", null);\n    Business = __decorate([\n        _decorator__WEBPACK_IMPORTED_MODULE_0__[\"registerClass\"]\n    ], Business);\n    return Business;\n}());\nvar Supermaket = /** @class */ (function (_super) {\n    __extends(Supermaket, _super);\n    function Supermaket() {\n        return _super.call(this) || this;\n    }\n    Supermaket.prototype.superTest = function () { };\n    Supermaket.prototype.anyMethod = function () {\n        // console.log(this.constructor.name);\n    };\n    __decorate([\n        _decorator__WEBPACK_IMPORTED_MODULE_0__[\"protect\"],\n        __metadata(\"design:type\", Function),\n        __metadata(\"design:paramtypes\", []),\n        __metadata(\"design:returntype\", void 0)\n    ], Supermaket.prototype, \"superTest\", null);\n    __decorate([\n        _decorator__WEBPACK_IMPORTED_MODULE_0__[\"override\"],\n        __metadata(\"design:type\", Function),\n        __metadata(\"design:paramtypes\", []),\n        __metadata(\"design:returntype\", void 0)\n    ], Supermaket.prototype, \"anyMethod\", null);\n    Supermaket = __decorate([\n        _decorator__WEBPACK_IMPORTED_MODULE_0__[\"registerClass\"],\n        __metadata(\"design:paramtypes\", [])\n    ], Supermaket);\n    return Supermaket;\n}(Business));\n// console.log(classCollection);\n// console.log(protectedMethods);\n// console.log(classCollection[\"class-Business\"].print());\nconsole.log(_decorator__WEBPACK_IMPORTED_MODULE_0__[\"classCollection\"][\"class-Supermaket\"].anyMethod());\n\n\n//# sourceURL=webpack:///./index.ts?");

/***/ })

/******/ });