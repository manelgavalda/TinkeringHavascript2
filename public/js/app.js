/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

eval("\nvar person = {\n    firstName   :\"Penelope\",\n    lastName    :\"Barrymore\",\n    // Since the \"this\" keyword is used inside the showFullName method below, and the showFullName method is defined on the person object,​\n    // \"this\" will have the value of the person object because the person object will invoke showFullName ()​\n    showFullName:function () {\n        console.log (this.firstName + ' ' + this.lastName + arguments[0]);\n    }\n};\nperson.showFullName([\"dddd\"]);// Penelope Barrymore\n\n//Fa referència  al'objecte window per tant no existeix la funció.\n//var copia = showFullName.bind(person);\n//Ho farem servir per fer herència per binds o prototype.\n//copia();\n//El bind no serveix per funcions amb paràmetres.\n//Explicits: bind,call apply. Per definir a que fa referència el bind. S'anula quant s'usa bind.\n//showFullName.call(persona,'Gavaldà');\n//showFullName.apply(persona,['Gavaldà']); //En aquest cas igual que dalt però pasant un array... args//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC5qcz84YjY3Il0sInNvdXJjZXNDb250ZW50IjpbIlxudmFyIHBlcnNvbiA9IHtcbiAgICBmaXJzdE5hbWUgICA6XCJQZW5lbG9wZVwiLFxuICAgIGxhc3ROYW1lICAgIDpcIkJhcnJ5bW9yZVwiLFxuICAgIC8vIFNpbmNlIHRoZSBcInRoaXNcIiBrZXl3b3JkIGlzIHVzZWQgaW5zaWRlIHRoZSBzaG93RnVsbE5hbWUgbWV0aG9kIGJlbG93LCBhbmQgdGhlIHNob3dGdWxsTmFtZSBtZXRob2QgaXMgZGVmaW5lZCBvbiB0aGUgcGVyc29uIG9iamVjdCzigItcbiAgICAvLyBcInRoaXNcIiB3aWxsIGhhdmUgdGhlIHZhbHVlIG9mIHRoZSBwZXJzb24gb2JqZWN0IGJlY2F1c2UgdGhlIHBlcnNvbiBvYmplY3Qgd2lsbCBpbnZva2Ugc2hvd0Z1bGxOYW1lICgp4oCLXG4gICAgc2hvd0Z1bGxOYW1lOmZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2cgKHRoaXMuZmlyc3ROYW1lICsgJyAnICsgdGhpcy5sYXN0TmFtZSArIGFyZ3VtZW50c1swXSk7XG4gICAgfVxufTtcbnBlcnNvbi5zaG93RnVsbE5hbWUoW1wiZGRkZFwiXSk7Ly8gUGVuZWxvcGUgQmFycnltb3JlXG5cbi8vRmEgcmVmZXLDqG5jaWEgIGFsJ29iamVjdGUgd2luZG93IHBlciB0YW50IG5vIGV4aXN0ZWl4IGxhIGZ1bmNpw7MuXG4vL3ZhciBjb3BpYSA9IHNob3dGdWxsTmFtZS5iaW5kKHBlcnNvbik7XG4vL0hvIGZhcmVtIHNlcnZpciBwZXIgZmVyIGhlcsOobmNpYSBwZXIgYmluZHMgbyBwcm90b3R5cGUuXG4vL2NvcGlhKCk7XG4vL0VsIGJpbmQgbm8gc2VydmVpeCBwZXIgZnVuY2lvbnMgYW1iIHBhcsOgbWV0cmVzLlxuLy9FeHBsaWNpdHM6IGJpbmQsY2FsbCBhcHBseS4gUGVyIGRlZmluaXIgYSBxdWUgZmEgcmVmZXLDqG5jaWEgZWwgYmluZC4gUydhbnVsYSBxdWFudCBzJ3VzYSBiaW5kLlxuLy9zaG93RnVsbE5hbWUuY2FsbChwZXJzb25hLCdHYXZhbGTDoCcpO1xuLy9zaG93RnVsbE5hbWUuYXBwbHkocGVyc29uYSxbJ0dhdmFsZMOgJ10pOyAvL0VuIGFxdWVzdCBjYXMgaWd1YWwgcXVlIGRhbHQgcGVyw7IgcGFzYW50IHVuIGFycmF5Li4uIGFyZ3NcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAuanMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }
/******/ ]);