/**
 * Created by manel on 5/10/16.
 */
//Sugar Syntax permet usar classes però no significa que és Orientat a Objectes.
//First class citizens functions. Ús igual que al de una variable. var x=function(){};
//Functional programming. Altres formes de fer for, foreach,etc... molt llegibles.

/*
//Funcions constructores
function Persona(name,sn){
    //El new no està fent un objecte. Mirar video fun fun function.
    console.log("Creant una nova persona");
    //this és molt especial. 2 videos.
    this.name = name;
    this.sn1 = sn;
}

var persona1 = new Persona('Ramon','Zampon');
*/

function Persona()
{
    //El new no està fent un objecte. Mirar video fun fun function. Amb el new podem cridar l'objecte.
    console.log("Creant una nova persona");
    //this és molt especial. 2 videos.
    var this.name = 'Manel';
    var this.sn1 = 'Gavaldà';
}

var persona1 =Persona;
//var persona1 = new Persona();

//Fem un bind per indicar-li que el this de l'objecte persona serà la classe persona.
persona1.bind(Persona);

console.log(persona1.name);


//bind: Especificar a que fem referència al fer this.