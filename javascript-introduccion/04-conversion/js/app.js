// truthy -> true
// 
// falsy -> false
// 0, -0, "", null, undefined, NaN, false

//console.log( Boolean(NaN) );


//--coerción de datos  type coerción conversion de datos a otro tipo de dato
/*
let numero1 = "10";
let numero2 = 5;
console.log(numero1+numero2);
*/
//conviertes el dato en number
/*
let numero1 = +"10"; 
console.log(numero1);
*/
//conversion de datos
//parsInt convierte un string a un sistema numerico deseado
//parsfloat convierte un string a un numero decimale
// NUmber convierte string a decimal sin importar si es decimal o no pero no detecta numeros en cadena de texto, parsInt - parsfloat si
/*
let numero1 = Number("10");
let numero2 = Number("10.5");

console.log(typeof numero1)
console.log(numero1+numero2);
*/

//--String
//comvierte numero a String
/*
let numero1 = String(100);
let numero2 = Number("10.5");

console.log(typeof numero1)
console.log(numero1+numero2);
*/
//ToString se utiliza en datos primitivos
/*
let numero1 = String(true);
let numeroString = (9.25).toString();

console.log(typeof numeroString)
console.log(numeroString);
*/
//convertir datos a booleanos (numeros, string, undefined, null)
//truthy son tipo de datos que al convertirlos a un valor booleano dan true o igual a verdadero (todos los valores que no dan false)
console.log(Boolean("10"));
console.log(Boolean(5));


//falsy son tipo de datos que al convertirlos a un valor booleano dan false o igual a falso(0, -0, "", undefined, NAN, flase)
console.log(Boolean(0));
console.log(Boolean(undefined));




