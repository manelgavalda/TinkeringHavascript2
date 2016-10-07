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

eval("//var person = {\n//    firstName   :\"Penelope\",\n//    lastName    :\"Barrymore\",\n    // Since the \"this\" keyword is used inside the showFullName method below, and the showFullName method is defined on the person object,​\n    // \"this\" will have the value of the person object because the person object will invoke showFullName ()​\n//    showFullName:function () {\n//        console.log (this.firstName + ' ' + this.lastName + arguments[0]);\n//    }\n//};\n//person.showFullName([\"dddd\"]);// Penelope Barrymore\n//Fa referència  al'objecte window per tant no existeix la funció.\n//var copia = showFullName.bind(person);\n//Ho farem servir per fer herència per binds o prototype.\n//copia();\n//El bind no serveix per funcions amb paràmetres.\n//Explicits: bind,call apply. Per definir a que fa referència el bind. S'anula quant s'usa bind.\n//showFullName.call(persona,'Gavaldà');\n//showFullName.apply(persona,['Gavaldà']); //En aquest cas igual que dalt però pasant un array... args\n//Funció constructora\nfunction Persona() {\n    console.log('Creant objecte');\n};\n\n//console.log(Persona)\n\n\nvar Persona1 = function(name){\n    this.name= name;\n    console.log('Creant objecte1');\n};\n\n//Canviar la funció original(herència,extensió(modificar classes)).\nPersona1.prototype.sayHello = function(){\n    console.log('Hello ' + this.name);\n};\n\nvar personeta = new Persona1(\"Manel\");\n\nconsole.log(personeta.sayHello());//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC5qcz84YjY3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vdmFyIHBlcnNvbiA9IHtcbi8vICAgIGZpcnN0TmFtZSAgIDpcIlBlbmVsb3BlXCIsXG4vLyAgICBsYXN0TmFtZSAgICA6XCJCYXJyeW1vcmVcIixcbiAgICAvLyBTaW5jZSB0aGUgXCJ0aGlzXCIga2V5d29yZCBpcyB1c2VkIGluc2lkZSB0aGUgc2hvd0Z1bGxOYW1lIG1ldGhvZCBiZWxvdywgYW5kIHRoZSBzaG93RnVsbE5hbWUgbWV0aG9kIGlzIGRlZmluZWQgb24gdGhlIHBlcnNvbiBvYmplY3Qs4oCLXG4gICAgLy8gXCJ0aGlzXCIgd2lsbCBoYXZlIHRoZSB2YWx1ZSBvZiB0aGUgcGVyc29uIG9iamVjdCBiZWNhdXNlIHRoZSBwZXJzb24gb2JqZWN0IHdpbGwgaW52b2tlIHNob3dGdWxsTmFtZSAoKeKAi1xuLy8gICAgc2hvd0Z1bGxOYW1lOmZ1bmN0aW9uICgpIHtcbi8vICAgICAgICBjb25zb2xlLmxvZyAodGhpcy5maXJzdE5hbWUgKyAnICcgKyB0aGlzLmxhc3ROYW1lICsgYXJndW1lbnRzWzBdKTtcbi8vICAgIH1cbi8vfTtcbi8vcGVyc29uLnNob3dGdWxsTmFtZShbXCJkZGRkXCJdKTsvLyBQZW5lbG9wZSBCYXJyeW1vcmVcbi8vRmEgcmVmZXLDqG5jaWEgIGFsJ29iamVjdGUgd2luZG93IHBlciB0YW50IG5vIGV4aXN0ZWl4IGxhIGZ1bmNpw7MuXG4vL3ZhciBjb3BpYSA9IHNob3dGdWxsTmFtZS5iaW5kKHBlcnNvbik7XG4vL0hvIGZhcmVtIHNlcnZpciBwZXIgZmVyIGhlcsOobmNpYSBwZXIgYmluZHMgbyBwcm90b3R5cGUuXG4vL2NvcGlhKCk7XG4vL0VsIGJpbmQgbm8gc2VydmVpeCBwZXIgZnVuY2lvbnMgYW1iIHBhcsOgbWV0cmVzLlxuLy9FeHBsaWNpdHM6IGJpbmQsY2FsbCBhcHBseS4gUGVyIGRlZmluaXIgYSBxdWUgZmEgcmVmZXLDqG5jaWEgZWwgYmluZC4gUydhbnVsYSBxdWFudCBzJ3VzYSBiaW5kLlxuLy9zaG93RnVsbE5hbWUuY2FsbChwZXJzb25hLCdHYXZhbGTDoCcpO1xuLy9zaG93RnVsbE5hbWUuYXBwbHkocGVyc29uYSxbJ0dhdmFsZMOgJ10pOyAvL0VuIGFxdWVzdCBjYXMgaWd1YWwgcXVlIGRhbHQgcGVyw7IgcGFzYW50IHVuIGFycmF5Li4uIGFyZ3Ncbi8vRnVuY2nDsyBjb25zdHJ1Y3RvcmFcbmZ1bmN0aW9uIFBlcnNvbmEoKSB7XG4gICAgY29uc29sZS5sb2coJ0NyZWFudCBvYmplY3RlJyk7XG59O1xuXG4vL2NvbnNvbGUubG9nKFBlcnNvbmEpXG5cblxudmFyIFBlcnNvbmExID0gZnVuY3Rpb24obmFtZSl7XG4gICAgdGhpcy5uYW1lPSBuYW1lO1xuICAgIGNvbnNvbGUubG9nKCdDcmVhbnQgb2JqZWN0ZTEnKTtcbn07XG5cbi8vQ2FudmlhciBsYSBmdW5jacOzIG9yaWdpbmFsKGhlcsOobmNpYSxleHRlbnNpw7MobW9kaWZpY2FyIGNsYXNzZXMpKS5cblBlcnNvbmExLnByb3RvdHlwZS5zYXlIZWxsbyA9IGZ1bmN0aW9uKCl7XG4gICAgY29uc29sZS5sb2coJ0hlbGxvICcgKyB0aGlzLm5hbWUpO1xufTtcblxudmFyIHBlcnNvbmV0YSA9IG5ldyBQZXJzb25hMShcIk1hbmVsXCIpO1xuXG5jb25zb2xlLmxvZyhwZXJzb25ldGEuc2F5SGVsbG8oKSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvYXBwLmpzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1CQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }
/******/ ]);