//VARIABLES
//Datos primitivos son datos que no son un objeto y no tienen métodos. Hay 6 tipos de datos primitivos: string, number, bigint, boolean, undefined y symbol.

// Strings

/*
let numero1 = prompt("Ingresa el número1");
let numero2 = prompt("Ingresa el número2");

numero1 = parseFloat(numero1);
numero2 = parseFloat(numero2);

let suma = numero1+numero2;

alert(`La suma de ${numero1} + ${numero2} es igual a ${suma}`);
*/

// Symbol


/*
let estoyFeliz = Symbol();

console.log(typeof estoyFeliz);*/


//___________________________________
//video practica
// variable guardo datos
// tipado - se puede cambiar el tipo de datos
//tipo de datos - numero tipo number - cadena de texto tipo string

/*
let variableNueva = "Jordan"; // string 

 console.log(variableNueva);

 variableNueva = 100; // number

 console.log(variableNueva);
*/

// datos primitivos -  no estan compuestos por otros

// valores primitivos son determinados por valores que unca cambian o inmutables 

 //number = 100, //negativo = -100 //flotante = 10.5 //

 // string "hola" cadena de texto
 /*
  // \n salto de linea
 let carta = "Hola,\n ¿como estas?"
 console.log(carta);
 console.log(typeof carta)


let nombre = prompt("¿cual es tu nombre?");
let bienvenida = "Bienvendio";
let bienvenidaUsuario = bienvenida + " "+ nombre; //concatenacion unir dos variables
console.log(bienvenidaUsuario);
//console.log(nombre.length);//length sirve para ver los caracteres que tiene un string 

//Templates literals
// plantillas literrias - comillas poderosas ``
// podemos usar marcadores placeholders
// se va a concatenar en la cadena actual donde esta el placeholders - va a cambiar el placeholders por el valor que retorna la expresión a esto se le llama interpolacion
// una expresion es cualquier instruccion que retorna un valor
let nombre = "Jordan";
let cadenaConPoderes = `Hoola ${nombre}`;
console.log(cadenaConPoderes);
 */

//---calculadora ejercicio
// prompt siempre que ingresamos datos va a retornar string
/*
let numero1 = prompt("ingresa el numero1");
let numero2 = prompt("ingresa el numero2");

numero1 = parseFloat(numero1);//parseInt convierte 
numero2 = parseFloat(numero2);//parseInt convierte 

//console.log(typeof numero1); saber que tipo  de datos es
//console.log( numero1);
//console.log( numero2); saber si esta imprimiendo los numeros

//se crea una nueva variable
let suma = numero1+numero2;

// se crea alerta para ver resultado
alert(`La suma de ${numero1} + ${numero2} es igual a ${suma}`);
*/

// funcion para convertir string a numeros parseInt
// tiene dos argumentos primero la cadena a convertir y depues el sistema a que se convertira 2 binario, 8 octagonal y 10 sistema decimal pero no es necesario ponerlo en sistema decimal.
//parseInt("100", 10)
//parseflota("10.5") para enteros

//let gastoMes = 1000;
//gastoMes = 50000; 

// se resmplazo numero pero no modifico a 1000 - valores que no pueden ser modificados 

//NAN Not a Number
//console.log("hola"*2); no se puede multiplicar y nos da como resultado nan

//console.log(100 *  1000); infinity & -Infinity

// operador que nos retorna el tipo de elemento typeof console.log(typeof 10 );

//---Boolean true, false
//isNaN not a number
/*
let estoyfeliz = true;

console.log(estoyfeliz);
*/

// undefined dato primitivo valor indefinido o no asignado
/*
let estoyFeliz;
console.log(estoyFeliz);
*/

//--Null dato primitivo
//ausencia de un valor, que no exciste el valor
/*
let estoyFeliz = null;
console.log(estoyFeliz);
*/

//--Symbol dato primitivo
//identificados para objetos.
/*
let estoyFeliz = Symbol();
console.log(estoyFeliz);
*/


