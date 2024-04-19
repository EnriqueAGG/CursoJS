//variables almacen valores para utilizarlos posteriormente 
/*
let mensajeMostrar = "Estoy aprendiendo JS";
console.log(mensajeMostrar);
*/


/*
let nombre;
let apellido;
let sueldo;
*/
//asignar un valor a una varible
/*
nombre="Jordan";
apellido="Cruz";
sueldo=999;
*/

// declarar variable y asignarle un valor
/*
let nombre = "Jordan";
let apellido = "Cruz";
let sueldo = 999;
*/

//truco para declarar mas de una variable de manera continua
/* es mejor usar let
let nombre = "Jordan",
 apellido = "Cruz",
 sueldo = 999;
*/
//existe una variable pero no un valor y retorna undefind 
//existe pero no trae valores 
/*
console.log(nombre);
console.log(apellido);
console.log(sueldo);
*/

//auqnue ya declara un valor a una variable puedo cambiar su valor

/*nombre = "Alexander";
console.log(nombre);
*/

//declarar con var es una mala practica, no se puede usar variables repeteidas y nombres resevados en JS
//las variables son sensitive, sensibles a las mayusculas
 let nombre ="Jordan;"
 let sueldo =999;
// las varibales pueden reselvar vaiables de otras
 let sueldoRespaldo = sueldo;

 console.log("sueldo Respaldo", sueldoRespaldo)
 console.log("sueldo Normal", sueldo)
// como se asigna por valor solo cambia sueldo Normal
 sueldo = 2000;

 console.log("sueldo Respaldo", sueldoRespaldo)
 console.log("sueldo Normal", sueldo)


//una variable no puede llever como primer caracter un numero
//una variable solo puede contener letras, numeros y simbolos
//ejemplo de caracteres _,$  _nombre y $nombre
// let edad_adulto; let edadAdulto; let promedioGeneralAdultos;

//palabra reservada let, despues variable 
let edadAdulto;
let promedioGeneralAutos;
let limiteMaximoEdad;
 //constante nos permite almacenar valores que nunca van a cambiar
 // no pueden alterar su valor
 //datos semanticos que sean datos que sepas que almacena
const diasDeLaSemana = 7, 
PI = 3.1416;
