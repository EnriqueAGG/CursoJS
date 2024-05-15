// Funciones en JS nos ayuda a reutilizar el codigo o funcionalides
//  puede ser personalizado
// podemos imaginar como una maquina de jugos, si yo ingreso una fresa me retorna un jugo de fresa 
// vamo a reutilizar codigo
// son un tipo de objeto function

// declaracion de funcion 
// function tablaMultiplicar(){
// }


/*function tablaMultiplicar(tablaMultiplicar=5){

    const numeros = [1,2,3,4,5,6,7,8,9,10];
    console.log(numeros);
// numeroActual recorre el array
    numeros.forEach( function(numeroActual){
        

        console.log(` ${tablaMultiplicar} * ${numeroActual} = ${tablaMultiplicar*numeroActual} `);

    } );
   
}
*/


// llamar a la funcion
// tablaMultiplicar();

// parametros y argumentos
// parametros son variables que queremos que se pasen a la funcion
// argumentos son los valores reales que se pasan a la funcion 
// nos sirve para personalizar el resultado 
// eje funcion para sumar dos numeros

// parametros | function suma(parametro1, parametro2)


/*
function suma(num1, num2){

    // console.log(num1);
    // console.log(num2);
                // parametro1+parametro2
    let suma = num1 + num2;
    console.log("La suma es: ", suma)

}
// tomara los valores que estan dentro de la funcion
// argumentos| suma(argumentos);
suma(10,20);
// es personalizada el resultado
suma(20,80);
*/


// ejemplo
/*
function tablaMultiplicar(tablaMultiplicar){

    const numeros = [1,2,3,4,5,6,7,8,9,10];
    console.log(numeros);
    numeros.forEach( function(numeroActual){
        

        console.log(` ${tablaMultiplicar} * ${numeroActual} = ${tablaMultiplicar*numeroActual} `);

    } );

//    todas las funciones que no retornan un valor, retornan undefined
// un metodo es una funcion dentro de un objeto y esta funcion no tiene un retorno explicita entonces retorna undefined

}
// llamar a la funcion
tablaMultiplicar(10);
// podemos traer cualquier tabla de multiplicar
tablaMultiplicar(8);
*/


// return funciones
/*
function sumaDosNumeros(numero1, numero2){
    let suma = numero1+numero2;
    // return nos permite finalizar una funcion y ademas de finalizar funcion, retoma un valor de dicha funcion
   
    // return valor primitivo o objeto
    // objeto: funcion, array o un objeto literal
    return suma;
}
// sumaDosNumeros(30, 50) = 80 imprime en consola
*/


// retorna arreglos
/*
function crarArreglo(){
    return ['valor1', 'valor2'];
        // todo lo que esta abajo de un retorn no se ejecuta, porque un retorn finaliza una funcion

}

const arregloNuevo = crarArreglo();
console.log(arregloNuevo);
*/


// retorna objeto
/*
function crearObjeto(){
    return {
        nombre: 'Jordan',
        edad: 24
    }
    // todo lo que esta abajo de un retorn no se ejecuta
}

const objetoNuevo = crearObjeto();
console.log(objetoNuevo);
*/



//  tener mas de un retorn
/*
function esMayor(edad){
    if(edad >= 18){
        return "ES mayor de edad";
        // verdad
    }else{ //falso

        return "No es mayor de edad";

    }
}
// verad
console.log(esMayor(20));
// menor
console.log(esMayor(10));
*/


// si no paso un valor al parametro toma el valor undefined y si se llama la funcion se asignarle valor dara NAN undefined + undefined = NAN
// en JS puedo darce un valor si para que tomen valores por defecto
// siempre toma por defecto los argumentos
/*
//                      parametros
function sumaDosNumeros(numero1=110, numero2=111){
    console.log(numero1);
    console.log(numero2);

    return numero1+numero2;
}
//          argumentos
console.log(sumaDosNumeros(10, 20));
*/


// Scope en JavaScript
/*
let numeroQuePienso = 10;

function cambiarNumero(numero){
    numero = 1000;

    return numero;
}
// numeroQuePeinso es un valore y se recibe como parametro
// al yo pasarla como argumento pasa por el valor 
console.log(cambiarNumero(numeroQuePienso));
// numero que pienso es 10
console.log(numeroQuePienso);
*/

/*
let frutasFavoritas = ['Melon', 'Sandia'];

function cambiarArray(arrayFrutas){
    arrayFrutas.push('Fresa');

    return arrayFrutas;
}

// ambos arreglos agregaron Frutas
// poner un arreglo como valor estoy pasando la referencia al arreglo
// no estoy pasando el valor del arreglo
console.log(cambiarArray(frutasFavoritas));
// array original
// los objetos se pasan por referencia
console.log(frutasFavoritas);
*/

// Scope el alcance, ambito, determina la visibilidad y el acceso de una variable o constante 
// las variables son globales en mi proyecto pero cuando creo una funcion se realiza en otro ambito o contexto el alcance de las variables (variables, funcion)  
// yo no puedo acceder a las variables fuera de la funcion
// scope global: alcance global como la const array, se puede acceder en diferentes partes del codigo. Tambien  no se escuentra en un bloque de {} o una funcion.
// alcance local o ambito local, es cuando esta dentro de las llaves de una funcion, nuevo ambito 
// alcance de bloque, las palabras reservadas  como let, const estan reservadas dentro de cualquier llaves {} las llaves limitan el alcance. Pueden ser funcion, centencias...
/*
const arrayNumeros = [1,2,3,4,5,6];
// no es necesario pornerlo en los parametros porque arrayNumeros  esta como scope global
function sumaNumerosArray(){
    let suma = 0;
     
    arrayNumeros.forEach(function(numeroIterable){
        // funcion anonima, no tiene nombre
       
        // suma = suma + numeroIterable
        suma += numeroIterable;

    });
        // funcion dentro de otra funcion
        function saludar(){
            
            let saludos  = 'hola mundo'
            // estoy en el ambito o en el alcance de suma
            // console.log(suma)
            console.log(saludos);

        }
        // esta fuera del scope o de la funcion
        // console.log(saludos);

        // return [suma, saludar]; //se retorna para tener alcance 
        return suma;
        // cuando pones una funcion con () esats ejecuatando la funcion 
        // Pasar la funcion a otros elementos es sin ()
}
// esta funcion retorna dos valores, accedo al valor
// console.log(`la suma total es : ${sumaNumerosArray()[0]}`);
// se cambio la forma de como llamo a la funcion
console.log(`la suma total es : ${sumaNumerosArray()}`);


// llamar la funcion , pocision 1 para llamar a saludar, otro parentencis para llamarlo
sumaNumerosArray()[1]();

// alcance de bloque
{
    let varableBloque = 'Hola'

    console.log(varableBloque);
}
// afeuera de las llaves no se pueden acceder 
console.log(varableBloque);
*/

// objeto argumentos
/*
function tablaMultiplicar(tablaMultiplicar=5){

    const numeros = [1,2,3,4,5,6,7,8,9,10];
    console.log(numeros);
    numeros.forEach( function(numeroActual){
        

        console.log(` ${tablaMultiplicar} * ${numeroActual} = ${tablaMultiplicar*numeroActual} `);

    } );
}
*/
// function frutasFavoritas(fruta1, fruta2, fruta3){ 
//      console.log(fruta1);
//     console.log(fruta2);
//     console.log(fruta3);
//     } 

// arguments va a contener todos los objetos que pasemos
// esta es una manera antigua, no puede contener fechas
// objeto | arguments | no es un arreglo
// function frutasFavoritas(){
//    console.log( arguments );
//  }

// parametros REST, creando una array de estos argumentos 
// un arreglo, un parametro de la funcion o el ultimo
// function frutasFavoritas(fruta1, fruta2, ...frutasRestantes){
    // asi puedes almacenar todos los parametros
    /*
    function frutasFavoritas(...frutasRestantes){
   
//    console.log(frutasRestantes);
   frutasRestantes.forEach(function(fruta){
    console.log(fruta);
   });
 }
*/

 // pasando datos, un dato extra no lo muestra y datos menos se ven como undefined
 // como pasar a todos los argumentos de una funcion 
 // frutasFavoritas('Fresa', 'Sandia', 'Durazno', 'kiwi')
 /*
frutasFavoritas('Fresa', 'Sandia', 'Drurazno', 'kiwi')

// ejemplo de suma de todos los valores
function sumaTodo(...numeros){
    let sumaTotal = 0;
    numeros.forEach(function(numero){
        sumaTotal+= numero;
    })
    return sumaTotal;
}
console.log(sumaTodo(30, 50, 80));
*/

// otra manera de hacer una funcion es expresion de funcion
// es asignar una funcion a una variable o constante
// funcion de la misma forma
// cuando yo declaro una funcion con function puedo llamarla antes de que la declare, esto se le conoce como Hoisting
// la expresion no funciona asi porque no pueden ser accedidas antes de declaralas 
/*
let sumaTodo = function(...numeros){
    let sumaTotal = 0;
    numeros.forEach(function(numero){
        sumaTotal+= numero;
    })
    return sumaTotal;
};
console.log(sumaTodo(30, 50, 80));
 */

// una manera de usar funciones sin la palabra function
// arrow function (parametros)=>
// no se puede usar arguments en los parametros
/*
const sumaNumero = (numero1 = 10, numero2= 20)=> {
    console.log('Numero 1', numero1);
    console.log('Numero 2', numero2);

    return numero1+numero2;

}
console.log(sumaNumero(30, 40))
*/

//  se puede usar REST
/*
const sumaNumeros = (...numeros) =>{
    let suma = 0;
    // numeros.forEach(function(numero){ 
        // metodo con flecha
        numeros.forEach ((numero)=>{
            suma+= numero;
        });
        return suma;
    }
    
    console.log(sumaNumeros(30, 50, 80));
*/
   
    // vetnajas de funciones flecha, si solamente recibimos un parametro no es necesario poner parentesis, pero si recibimos mas de un paramatro o si no recibimos nigun paramatro si es necesario.
    // const saludar = nombre =>{ un parametro no es oblitario()

    // const saludar = (nombre, apellido) =>{ mas de un par si es obligatorio
    
    // const saludar = (nombre='kike') =>{ un dato predetermiando tambien es fijo

    /*

    const saludar = (nombre) =>{
        return `Hola ${nombre}, mucho gusto!`
    }

    console.log(saludar('Jordan'))

    */

    // si solo es un valor no es necesario un retorn, ahorrar lineas, acciones simples de una sola linea
    /*
    const saludar = nombre => `Hola ${nombre}, mucho gusto!`

    console.log(saludar ('Jordan'));
    */

    // ejemplo
    // omitir return const sumaDosNumeros = (numero1, numero2) => return numero1+numero2;
    /*
    const sumaDosNumeros = (numero1, numero2) =>numero1+numero2;

    console.log( sumaDosNumeros(10,20) );
    */

    // las funciones flechas no tienn el valor de this en metodos, los metodos son funciones en objetos

// let sumaTodo = function(...numeros){

//     let sumaTotal = 0;

//     numeros.forEach(function(numero){
//         sumaTotal+=numero;
//     })

//     return sumaTotal;

// };


// const saludar = (nombre="Alex")=>{
//     return `Hola ${nombre}, mucho gusto!`
// }



