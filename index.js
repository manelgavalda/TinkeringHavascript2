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

*/
// NAMESPACES
// De moment no tneim class { }

//Frontend: Javascript
//Backend: java,php,javascript,ruby,python,etc...

// Javascript Object Notation aka JSON. Objectes
// var myApp =[]; Objecte buit. Ararys en javascript començen per corxete.

var Persona= {
    'name' : 'Manel',
    'sn1' : 'Gavaldà',
    'age' : 20
}

//Namespaces en javascript
//Jquery $
//D'aquesta forma la podem usar amb un namespace
var myApp = {} //Definim variable com un objecte buit

myApp.name='Manel'; //Començem a penjar-li coses.

//Millor que definir funcions globals.
myApp.hello= function (){ //Funció anònima.
    console.log('Hola mon!');
};

myApp.hello();
/*
//Caca
function hello =function (){
    console.log('Hola mon');
}
*/
/*
class Person {
    'name' : 'Manel',
    'sn1' : 'Gavaldà',
    'age' : 20
};
    */