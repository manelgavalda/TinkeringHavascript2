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

eval("//var person = {\n//    firstName   :\"Penelope\",\n//    lastName    :\"Barrymore\",\n    // Since the \"this\" keyword is used inside the showFullName method below, and the showFullName method is defined on the person object,​\n    // \"this\" will have the value of the person object because the person object will invoke showFullName ()​\n//    showFullName:function () {\n//        console.log (this.firstName + ' ' + this.lastName + arguments[0]);\n//    }\n//};\n//person.showFullName([\"dddd\"]);// Penelope Barrymore\n//Fa referència  al'objecte window per tant no existeix la funció.\n//var copia = showFullName.bind(person);\n//Ho farem servir per fer herència per binds o prototype.\n//copia();\n//El bind no serveix per funcions amb paràmetres.\n//Explicits: bind,call apply. Per definir a que fa referència el bind. S'anula quant s'usa bind.\n//showFullName.call(persona,'Gavaldà');\n//showFullName.apply(persona,['Gavaldà']); //En aquest cas igual que dalt però pasant un array... args\n//Funció constructora\n//function Persona() {\n//    console.log('Creant objecte');\n//};\n//console.log(Persona)\n// var Persona1 = function(name){\n//     this.name= name;\n//     console.log('Creant objecte1');\n// };\n//\n// //Canviar la funció original(herència,extensió(modificar classes)).\n// Persona1.prototype.sayHello = function(){\n//     console.log('Hello ' + this.name);\n// };\n//\n// var personeta = new Persona1(\"Manel\");\n//\n// console.log(personeta.sayHello());\ncalculateArea = function(){\n    console.log(\"Calculo Àrea\");\n}\n\n//Classe Pare.\nvar Figure = function(){\n\n}\n\nFigure.prototype.area=calculateArea;\n\nvar figura = new Figure();\n\nconsole.log(figura.area());//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC5qcz84YjY3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vdmFyIHBlcnNvbiA9IHtcbi8vICAgIGZpcnN0TmFtZSAgIDpcIlBlbmVsb3BlXCIsXG4vLyAgICBsYXN0TmFtZSAgICA6XCJCYXJyeW1vcmVcIixcbiAgICAvLyBTaW5jZSB0aGUgXCJ0aGlzXCIga2V5d29yZCBpcyB1c2VkIGluc2lkZSB0aGUgc2hvd0Z1bGxOYW1lIG1ldGhvZCBiZWxvdywgYW5kIHRoZSBzaG93RnVsbE5hbWUgbWV0aG9kIGlzIGRlZmluZWQgb24gdGhlIHBlcnNvbiBvYmplY3Qs4oCLXG4gICAgLy8gXCJ0aGlzXCIgd2lsbCBoYXZlIHRoZSB2YWx1ZSBvZiB0aGUgcGVyc29uIG9iamVjdCBiZWNhdXNlIHRoZSBwZXJzb24gb2JqZWN0IHdpbGwgaW52b2tlIHNob3dGdWxsTmFtZSAoKeKAi1xuLy8gICAgc2hvd0Z1bGxOYW1lOmZ1bmN0aW9uICgpIHtcbi8vICAgICAgICBjb25zb2xlLmxvZyAodGhpcy5maXJzdE5hbWUgKyAnICcgKyB0aGlzLmxhc3ROYW1lICsgYXJndW1lbnRzWzBdKTtcbi8vICAgIH1cbi8vfTtcbi8vcGVyc29uLnNob3dGdWxsTmFtZShbXCJkZGRkXCJdKTsvLyBQZW5lbG9wZSBCYXJyeW1vcmVcbi8vRmEgcmVmZXLDqG5jaWEgIGFsJ29iamVjdGUgd2luZG93IHBlciB0YW50IG5vIGV4aXN0ZWl4IGxhIGZ1bmNpw7MuXG4vL3ZhciBjb3BpYSA9IHNob3dGdWxsTmFtZS5iaW5kKHBlcnNvbik7XG4vL0hvIGZhcmVtIHNlcnZpciBwZXIgZmVyIGhlcsOobmNpYSBwZXIgYmluZHMgbyBwcm90b3R5cGUuXG4vL2NvcGlhKCk7XG4vL0VsIGJpbmQgbm8gc2VydmVpeCBwZXIgZnVuY2lvbnMgYW1iIHBhcsOgbWV0cmVzLlxuLy9FeHBsaWNpdHM6IGJpbmQsY2FsbCBhcHBseS4gUGVyIGRlZmluaXIgYSBxdWUgZmEgcmVmZXLDqG5jaWEgZWwgYmluZC4gUydhbnVsYSBxdWFudCBzJ3VzYSBiaW5kLlxuLy9zaG93RnVsbE5hbWUuY2FsbChwZXJzb25hLCdHYXZhbGTDoCcpO1xuLy9zaG93RnVsbE5hbWUuYXBwbHkocGVyc29uYSxbJ0dhdmFsZMOgJ10pOyAvL0VuIGFxdWVzdCBjYXMgaWd1YWwgcXVlIGRhbHQgcGVyw7IgcGFzYW50IHVuIGFycmF5Li4uIGFyZ3Ncbi8vRnVuY2nDsyBjb25zdHJ1Y3RvcmFcbi8vZnVuY3Rpb24gUGVyc29uYSgpIHtcbi8vICAgIGNvbnNvbGUubG9nKCdDcmVhbnQgb2JqZWN0ZScpO1xuLy99O1xuLy9jb25zb2xlLmxvZyhQZXJzb25hKVxuLy8gdmFyIFBlcnNvbmExID0gZnVuY3Rpb24obmFtZSl7XG4vLyAgICAgdGhpcy5uYW1lPSBuYW1lO1xuLy8gICAgIGNvbnNvbGUubG9nKCdDcmVhbnQgb2JqZWN0ZTEnKTtcbi8vIH07XG4vL1xuLy8gLy9DYW52aWFyIGxhIGZ1bmNpw7Mgb3JpZ2luYWwoaGVyw6huY2lhLGV4dGVuc2nDsyhtb2RpZmljYXIgY2xhc3NlcykpLlxuLy8gUGVyc29uYTEucHJvdG90eXBlLnNheUhlbGxvID0gZnVuY3Rpb24oKXtcbi8vICAgICBjb25zb2xlLmxvZygnSGVsbG8gJyArIHRoaXMubmFtZSk7XG4vLyB9O1xuLy9cbi8vIHZhciBwZXJzb25ldGEgPSBuZXcgUGVyc29uYTEoXCJNYW5lbFwiKTtcbi8vXG4vLyBjb25zb2xlLmxvZyhwZXJzb25ldGEuc2F5SGVsbG8oKSk7XG5jYWxjdWxhdGVBcmVhID0gZnVuY3Rpb24oKXtcbiAgICBjb25zb2xlLmxvZyhcIkNhbGN1bG8gw4ByZWFcIik7XG59XG5cbi8vQ2xhc3NlIFBhcmUuXG52YXIgRmlndXJlID0gZnVuY3Rpb24oKXtcblxufVxuXG5GaWd1cmUucHJvdG90eXBlLmFyZWE9Y2FsY3VsYXRlQXJlYTtcblxudmFyIGZpZ3VyYSA9IG5ldyBGaWd1cmUoKTtcblxuY29uc29sZS5sb2coZmlndXJhLmFyZWEoKSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvYXBwLmpzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0NBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ }
/******/ ]);