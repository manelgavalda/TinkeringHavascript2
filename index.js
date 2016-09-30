/*
console.log('Hello World On external file');

//no podem executar-lo directament ja que no disposa de interpret.

$name='Manel";
//WINDOWS: només executable en navegadors.
window.alert('Hola mon '+ $name);

//Amb console log podem veure tota la onformacio per exemple de l'objecte window.
console.log(window);
//Object window és l'objecte per defecte (namespace global). Console= windows.console en el navegador.
//Scope (àmbit) d'una variable. Ara veurem les funcions. Zona del codi on una variable te vida o sentit.
//Hoyster cridar la funció abans de crear-la. Primer llegeix tot el codi, carerga en memòria funcions i variables i les podem usar on volem.
//Javascript Strict mode per obligar a seguir normes més estrictes. No activar ja que si hi ha un altre fitxer sense l'estric mode no funcionarà.
 //Variable Global: La Peste

 function fire(bool) {
 //$name= 'manel';
 //console.log('Hola ' + $name);
 //var foo
 //Declarem variables dalt per no liar-la.
 if (bool) {
 var foo='bar'; //Ens declara la variable dalt.
 console.log(foo);
 } else {
 console.log(foo);
 }
 }
 fire(true);
 //hola();
// NAMESPACES
// De moment no tneim class { }

//Frontend: Javascript
//Backend: java,php,javascript,ruby,python,etc...

// Javascript Object Notation aka JSON. Objectes
// var Person =[]; Objecte buit. Ararys en javascript començen per corxete.
/*
 //Namespaces en javascript
 //Jquery $
 //D'aquesta forma la podem usar amb un namespace
 var Person = {} //Definim variable com un objecte buit

 Person.name='Manel'; //Començem a penjar-li coses.

 //Millor que definir funcions globals.
 //Mètode.

 Person.hello= function (){ //Funció anònima.
 console.log('Hola mon!');
 };

 Person.hello();


 //Caca
 function hello =function (){
 console.log('Hola mon');
 }
 class Person {
 'name' : 'Manel',
 'sn1' : 'Gavaldà',
 'age' : 20
 };
// var Persona= {
//     'name' : 'Manel',
//     'sn1' : 'Gavaldà',
//     'age' : 20
// }

//Formes de treballar en programació orientada a objectes.

//OOP: Object Oriented Programming

//JSON: Javascript Object Notation

//Framework json vue.js

//Object Literal Notation
// Json
var Person ={

}

Person.name= "Manel"

Person.hello= function(){

}
//Object Literal Notation: vue.js
var person ={
    //Propietats davant i desprès mètodes per ordenar.
    name : 'Manel',
    sn1 : 'Gavaldà',
    sn2 : 'Andreu',

    constructor: function(){

    },

    hello : function(){
        console.log('Hello' + this.name);
    },

    bye : function(){
        return('bye bye' + this.name);
    }

})();

console.log(person.name);
person.hello();
console.log(person.bye());
 //The module pattern. Les cariables son locals per tant no fa falta this com a una classe.
 // var person = (function() {
 //     //Propietats davant i desprès mètodes per ordenar.
 //     var name = 'Manel';
 //     var sn1 = 'Gavaldà';
 //     var sn2 = 'Andreu';
 //     return {
 //         hello : function(){
 //             console.log('Hello ' + name);
 //         },
 //
 //         bye : function() {
 //             return ('bye bye ' + name);
 //         }
 //     }
 // })();
 //
 // console.log(person.bye());
 // // :(){:|:&};: Bomba fork. És va expandint(forquilla)
 //
 //
 // var myApp = function(context) {
 //     var = id =0;
 //
 //     context.next = function() {
 //         return id++;
 //     };
 //     context.reset =function() {
 //         return id=0;
 //     }
 //     //(this)
 // }
*/
//Javascript és un llenguatge Asíncron orientat a interfície gràfica.

var hello= document.getElementsById('hello').innerHTML("hello");

//hello.style.display = "none"; //Per fer desapareixer el div.

//hello.innerHTML('Hola');
console.log(hello);

