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

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// import {\n//   registerClass,\n//   classCollection,\n//   protect,\n//   protectedMethods,\n//   override\n// } from \"./decorator\";\n// @registerClass\n// class Business {\n//   print() {\n//     console.log(this.constructor.name);\n//   }\n//   @protect\n//   loginTest() {\n//     console.log(\"login successful Business\");\n//   }\n// }\n// @registerClass\n// class Supermaket extends Business {\n//   constructor() {\n//     super();\n//   }\n//   @protect\n//   loginTest() {\n//     console.log(\"login successful Supermarket\");\n//   }\n//   @override\n//   anyMethod() {\n//     // console.log(this.constructor.name);\n//   }\n// }\n// // console.log(classCollection);\n// // console.log(protectedMethods);\n// // classCollection[\"class-Business\"].print();\n// // classCollection[\"class-Supermaket\"].anyMethod();\n// classCollection[\"class-Business\"].loginTest({ token: \"random\" });\n// classCollection[\"class-Supermaket\"].loginTest({ token: \"123\" });\nthis.table = \"window table\";\nthis.garage = {\n    table: \"garage table\",\n    cleanTable: function () {\n        console.log(\"cleaning \" + this.table);\n    }\n};\n// true in browser, false here\nconsole.log(this.table === window[\"table\"]);\nconsole.log(this.garage === window[\"garage\"]);\nconsole.log(this); //{table: ..., garage: ...}\nvar johnsRoom = {\n    table: \"john's table\",\n    cleanTable: function () {\n        console.log(\"cleaning \" + this.table);\n    }\n};\nconsole.log(johnsRoom.table);\n// console.log(this.johnsRoom.table); //error Cannot read property 'table' of undefined\nthis.garage.cleanTable();\njohnsRoom.cleanTable();\nvar cleanTable = function (soap) {\n    console.log(\"Function: cleaning \" + this.table + \", using \" + soap);\n};\n// cleanTable(); // Function: cleaning undefined\n// cleanTable.call(this, \"dish soap\");\n// cleanTable.call(this.garage, \"dish soap\");\n// cleanTable.call(johnsRoom, \"dish soap\");\n// inner fucntion\nvar cleanInnerTable = function (soap) {\n    var _this = this;\n    // method 1\n    // let useThis = this;\n    // const innerFunction = function(_soap) {\n    //   console.log(`Function: cleaning ${useThis.table}, using ${_soap}`);\n    // };\n    // innerFunction(soap);\n    // const innerFunction = function(_soap) {\n    //   console.log(`Function: cleaning ${this.table}, using ${_soap}`);\n    // };\n    // method 2\n    // innerFunction.call(this, soap);\n    // method 3\n    // bind creates a new function with the old call signiture\n    // innerFunction.bind(this)(soap);\n    // method 4  user arrow function, it will get 'this' from its immediate outer scope\n    var innerFunction = function (_soap) {\n        console.log(\"Function: cleaning \" + _this.table + \", using \" + _soap);\n    };\n    innerFunction(soap);\n    // test nested arrow function\n    // const innerFunction = _soap => {\n    //   this.table = \"inner inner table\";\n    //   const innerInnerFunction = __soap => {\n    //     console.log(`Function: cleaning ${this.table}, using ${_soap}`);\n    //   };\n    //   innerInnerFunction(_soap);\n    // };\n    // innerFunction(soap);\n};\n// cleanInnerTable.call(this, \"dish soap\");\ncleanInnerTable.bind(this)(\"bind soap\");\ncleanInnerTable.bind(this, \"bind another soap\")();\n// cunstructor function\n// let createRoom = function(name) {\n//   this.table = `${name}'s table`;\n// };\n// createRoom.prototype.cleanInnerTable = function(soap) {\n//   console.log(`Function: cleaning ${this.table}, using ${soap}`);\n// };\nvar createRoom = /** @class */ (function () {\n    function createRoom(name) {\n        this.table = name + \"'s table\";\n    }\n    createRoom.prototype.cleanInnerTable = function (soap) {\n        console.log(\"Function: cleaning \" + this.table + \", using \" + soap);\n    };\n    return createRoom;\n}());\n// let joesRoom = createRoom(\"Joe\");\n// cleanInnerTable.call(joesRoom, \"special soap\");\nvar joesRoom = new createRoom(\"Joe\");\n// joesRoom.cleanInnerTable(\"some soap.\");\n\n\n//# sourceURL=webpack:///./index.ts?");

/***/ })

/******/ });