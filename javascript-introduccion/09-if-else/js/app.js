// escruturas de control 
// operador condicional (ternario)  Este operador se usa con frecuencia como atajo para la instrucción if. condición ? expr1 : expr2
// condiciones en if(condicion){ true }else{ falso }
/*if(5>4){
    console.log('se ejecuta en verdadero')
}else{
    console.log('se ejecuta en falso')
}*/

// ejemplo
/*
let edad = Number(prompt('cual es tu edad?'));

if(edad >= 18){
    alert('Eres mayor de 18')
    let nombre = prompt('cual es tu nombre');
    alert(`Bienvenido ${nombre}`);
}else{
    alert('No puedes ingresar')
}
*/

// calculadora
/*
const suma = (num1, num2) =>{
    return num1+num2;
} ;

const resta = (num1, num2) =>{
    return num1-num2;
} ;

const multipliacion  = (num1, num2) =>{
    return num1*num2;
} ;

const pedirNumero = () =>{
    let numero = Number(prompt('Ingresa tu número: '));
    return numero;
}

// voy a guardar el metodo flechae en dos variables
let numero1 = pedirNumero();
let numero2 = pedirNumero();
// lo imprimo en consola pruebas
// console.log(numero1);
// console.log(numero2);
// pedir operacion - comparar mejor la operacion de un usuario se pueden usar dos metodos, tollowercase devuelve el valor del string en el que se usa el metodo en minusculas. Touppercase retorna un string en mayusculas
let operacion = prompt('Que operacion quieres realizar?').toLowerCase();
// prueba de retorno en minisculas
// console.log(operacion);
// operacion a relizar if
// se utiliza el else if porque sigue del if o otro else if
/*
if(operacion == "suma"){
    console.log(`El resultado de la ${operacion} es ${suma(numero1, numero2)}`);
}else if(operacion == "resta"){
    console.log(`El resultado de la ${operacion} es ${resta(numero1, numero2)}`);
}else if(operacion == "multipliacion"){
    console.log(`El resultado de la ${operacion} es ${multipliacion(numero1, numero2)}`);
}else{
    console.log('Operacion a realizar no encontrada');
}
*/ 
// codigo mas chico
/*
let resultado;

if(operacion == "suma"){
    resultado = suma(numero1, numero2);
}else if(operacion == "resta"){
    resultado = resta(numero1, numero2);

}else if(operacion == "multipliacion"){
    resultado = multipliacion(numero1, numero2);

}else{
    resultado = false;
}
// si no es igula a suma, resta, multipliacion el resultado no se encuentra
if(resultado){
    console.log(`El resultado de la ${operacion} es igual a ${resultado}`);
}else{
    console.log('Operacion no encontrada');
}

*/

// si numero es positivo o negativo - quiero que me diga si es par o impar
// es mayor o menor a cero positivo - negativo
/*
let numerDado = 3;

if(numerDado >= 0){
    console.log('Es positivo');
    // par o impar - par divido entre 2 el residuo es 0
    if(numerDado%2 == 0){
        console.log('Es numero par');
    }else{
        console.log('Es numero impar');
    }
}else{
    console.log('Es negativo');
}
*/

//dependiendo de las horas ganas mas o menos

// trabajo > 5hrs = 10
// trabajo > 10hrs = 15
// trabajo > 15hrs = 20
/*
let horasTrabajadas = 20;

if(horasTrabajadas >= 20){
    console.log("El pago por hora es $20.00");
}

else if(horasTrabajadas >= 10){
    console.log("El pago por hora es $15.00");
}

else if(horasTrabajadas >= 5){
    console.log("El pago por hora es $10.00");
}
*/

//operadores logicos
/*
let sexo = "hombre";
let edad = 17;

if(sexo === "hombre" || edad >= 18){
    console.log("Acceso permitido");
}else{
    console.log("Acceso denegado");

}
*/

