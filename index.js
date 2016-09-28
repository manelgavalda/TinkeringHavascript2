/*
console.log('Hello World On external file');

//no podem executar-lo directament ja que no disposa de interpret.

$name='Manel";
//WINDOWS: només executable en navegadors.
window.alert('Hola mon '+ $name);

//Amb console log podem veure tota la onformacio per exemple de l'objecte window.
console.log(window);
//Object window és l'objecte per defecte (namespace global)
*/
function hola($name) {
    console.log('Hola ' + $name);
}
//Hoyster cridar la funció abans de crear-la. Primer llegeix tot el codi, carerga en memòria funcions i variables i les podem usar on volem.

hola('manel');
//Scope d'una variable. Ara veurem les funcions.