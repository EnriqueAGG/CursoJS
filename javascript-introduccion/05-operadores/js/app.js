/* 

---operadores  retorna un valor
console.log(typeof 10) los operadores necesitan operandos 
operador y operando
operadores unarios typeof
operadores binarios console.log(+)
operadores aritmeticos (permite hacer operadores aritmeticas) 
operadores ternarios


Operadores aritméticos
+ ← suma
- ← resta
* ← multiplicación
/ ← división
% ← resto o residuo
** ← exponente

*/

/* 
Operadores Unarios
++ ← incrementador
-- ← decrementador
! ← negación

let numero = 10;
numero = numero -1; es igual a ++numero , --numero
console.log(++numero);
console.log(numero);

! operdar booleano, verdadero y falso
!true -> false, !false-> true

console.log( Boolean(5)); truthy - verdadero
console.log( Boolean(!0)); es valor falsy pero negamos y es  truthy
console.log( Boolean(!!0)); falsy
truthy no es falsy, valores que no son undefined, null, string vacio, cero


console.log( Boolean("")); falsy - falso
valores que no son undefined, null, string vacio, cero




*/


/* 

Operadores asignación
= ← asignación
let numero = 10;
numero = numero + 5;

numero++; ,mas resumido
numero = numero + 1;

console.log(numero);

+= ← asignación con suma
el operador es mas sencillo y suma mejor
numero += 8;

-= ← asignación con resta
numero = numero -5;
numero -= 5; es una forma abreviada 

*= ← asignación con multiplicación
/= ← asignación con división


*/

/*

Operadores de comparación
   valor > valor 
   el valor de la izq es mayor que el de la drch

> ← mayor qué
console.log(5 > 5);
console.log("5" > 4);
console.log("a" > "b");

>= ← mayor qué o igual
console.log(5 >= 4); true
console.log(5 >= 6); false

< ← menor qué
console.log(5 < 6); true , seis debe ser mayor que cinco
valor izq es menor el valor de derecho
 console.log(8 < 6); false

<= ← menor qué o igual
 console.log(8 <= 6); false
  console.log(8 <= 8); true


== ← igualdad
  console.log(8 == 8); true
    console.log(8 == 6); false

=== ← igualdad estricta
es para que no haga la coercion de valor
    console.log(0 === 0); true
        console.log(5 === "5"); false

!= ← diferente qué
compara dos operandos o valores, si son iguales se va a retornar false y si son distintos van a ser true
compara que si son operadores no son iguales.
    
    console.log(5 != 5); false
    console.log(5 != 4); true
    console.log("alex" != "alxander"); true
 hacer coersion 
        console.log("5" != 5); false
        console.log(0 != false); false

!== ← diferente qué estricto
para usaremos diferente estricto
        console.log("5" !== 4); true
        console.log(0 !== false); true



*/

/*

Operadores lógicos
se usan con valores booleanos

&& ← AND
console.log(true && true) true
console.log(true && true && false)false 
compare dos valores booleanos, todos los valores tienen que ser true para que retorne true, si uno de los valores no es true retorna false.

let edad  = 19;
let nombre = "Jordan";
let expresion1 = edad > 18;
let expresion2 = nombre === "Jordan";
console.log(expresion1 && expresion2 ); true

console.log(12 && "hola" && 120 && "Jordan");
el operador de JS va a retornar true o truthy que encuentre, pero si encuentra en falsy deja de evaluar

sacarle probecho
let edad = 18;
function saludar(){
    let nombre = prompr('¿cual es tu nombre?');
    console.log(`Hola ${nombre}`); Backticks

    edad >= 18 && saludar();
}

|| <- OR
compara dos o mas valores booleanos donde si al menos hay un valor booleano en verdadero, entonces toda la sentencia va a retornar true.

console.log(false||false||false)

console.log(false||false||true||false)
tome los valores de izq a derecha y va a retornar el primer valor truthy o true 


?? <- Nullish coalescing
El operador de coalescencia nula o null operator es un operador que retorna el segundo operador o segundo valor en caso de que el primer operador sea null o undefined

ejemplo => console.log(0 ?? "Hola, como estas?")
si el operador es diferente a null o undefined, va a retornar el primer operador.

console.log(undefined ?? "Hola, como estas?")
imprime "Hola, como estas?"


console.log(false || true && false);
prioridad de operador es &&>||

*/


/*
let edad = Number(prompt("Dame tu edad."));

let mensaje = (edad >= 18) ? "Eres mayor de edad" : "Lo siento, edad no valida";

alert(mensaje);

*/




//este operador analiza una condicion donde si esa condicion o esa expresion retorna verdadero entonces se ejecuta una expresion en caso de que sea verdadero, pero si retorna falso se ejecuta otra.
//si la condicion es verdadera se ejecuta una expresion, pero si es falsa se ejecuta la otra
//(condicion) ? expresion : expresion
/*
let edad = Number(prompt("Dame tu edad: "));

let mensaje = (edad >= 18) ? "Eres mayor de edad" : "lo siento, edad no valido";

alert(mensaje);
/*



//(condición) ? casoVerdadero : casoFalso
/*
let nombre1 = "Jordan";
let nombre2 = "Alexander";

let nombreIngresar = prompt("Ingresa un nombre");

let mensaje =
    (nombre1 === nombreIngresar || nombre2 === nombreIngresar)

    ? `Bienvenido ${nombreIngresar}, Usuario Valido`

    : (nombre2 === nombreIngresar);

alert(mensaje);*/

