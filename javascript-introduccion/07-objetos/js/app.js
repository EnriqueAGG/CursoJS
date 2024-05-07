// objetos, datos son datos no primitivos, es una manera o agrupar informacion que se relaciona
// los objetos nos ayudan a relacionar informacion sobre alguna cosa en la vida, nos ayuda a contener informacion realcionada de algo en especifico.
// objetos literales, una manera sencilla de declarar objetos

let edad = "edadMeses";
// declarar un objetos a una variable o un const 
// los objetos se asignan por referencia y no por valor
// los arreglos se considerar objetos
const loki = {
    // clave variable|valor
    // propiedad
    nombre: "Loki",
    edadMeses: 27,
    // [edad]: 27,
    // hermanos: true,
    // especificar un objeto dentro de otro objeto
    // hermano: {
    //     nombre : "Max",
    //     edadMeses: 18,
    //     loQuiere: true
    // }
    hermanos: true
    // hijos: false, 
    // apodo: ["Lucas", "Gordito"],
     // propiedad con clabe no validos
    // 'fecha de nacimiento': '5 de julio'
};
// ver la proipiedad del objeto adentro de otro
// console.log(loki.hermano.nombre);
// con corchetes
// console.log(loki['hermano']['nombre']);
// cambiar nombre, asi se trabaja con objetos 
// loki['hermano']['nombre'] = 'Maximiliano'
// podemos eliminar o utilizar otras objetos
// delete loki.hermano.loQuiere;



// console.log(loki);


// modificar
// loki.nombre = 'Loki Andres';
// agregar
// loki.hermanos = true;
// loki['hermanos'] = true;
// agregar
// loki['fecha de nacimiento'] = '5 de julio'

// existe la propiedad o no
//console.log(loki.raza); //imprime undefined porque no tiene valor accinado
// in 
// console.log("nombre" in loki);

// borrar propiedad
// delete loki.nombre;

// console.log(loki);

// quiero acceder a un valor
// console.log(loki.nombre);
// console.log(loki.apodo.at(0));
// console.log(loki["fecha de nacimiento"]);

// agregar o modificar valores, es igual para acceder a sus valores . o [] y usamos = 



// practica
// let nombreUsuario = prompt("cuales es tu nombre?");
// let edadUsuario = Number(prompt("cuales es tu edad?"));
/*
const usuario = {
    // nombreUsuario: nombreUsuario,
    // edadUsuario: edadUsuario
    // una forma mas sencilla de hacerla, solo el nombre de las variables
    nombreUsuario,
   
}
console.log(usuario);*/



// ejemplo de funcion
// una funcion permite reutilizar ciertas funcionalidades y se declara con la palabra function
// las funciones dentro de un objeto se les llama metodos
/*
const usuario ={
// forma 1
    saludar(){
        console.log('HOla')
    },
// forma 2
    saludar2: function(){
        console.log('HOLA2');
    }
}
// ejecutar el metodo
usuario.saludar();
usuario.saludar2();
*/

// objetos anidados
// tambien podemos recorrer objetos, tambien arreglos
// me va a traer las claves del objeto loki, si tiene tres propiedades me va a traer cada una
// for in
// for(let proipiedad in objeto){

// }

// for(let propiedadesLoki in loki){
//     console.log(propiedadesLoki);
//     // accede a los valores del objeto loki
//     console.log( loki[propiedadesLoki] );
// }
