// Arreglos , Arrays
// son tipo de datos son considerados objetos y permiten almacenar valores , los valores que pueden almacenar puede ser arreglos, objetos o incluso valores primitivos.
// los valores que asignemos a los arreglos se ordenaran de acuerdo a la posiciones, son como casilleros
// puede almacenar cualqueri tipos de datos en una arreglo
// el arreglo si puede Mutar lo que no hacer un dato primitivo
// lista de valores
// [valor, valor, valor]

let frutasFavoritas = ["Fresa", "Manzana", "Piña", "Uva", "Sandia"];

console.log(frutasFavoritas);
// se comienza desde la pocision 0 a contar en un arreglo
// si quieres llamar al valor de un arreglo es llamando el valor de la variable y poniendo entre corchetes a la pocision que queremos acceder
console.log(frutasFavoritas[2]);
//acceder a un valor
console.log(frutasFavoritas.length);
//longitud del arreglo, se pude accerder a la ultima posicion de un arreglo.
console.log(frutasFavoritas[frutasFavoritas.length -1]);
// referenciamos a frutasFavoritas.length -1,  acceder a la posicion 3, si se arreglo mas datos al arreglo este accede al ultimo dato
/*
frutasFavoritas.length = 0;
console.log(frutasFavoritas);
*/
// limpiar arrelo.

//metodo .at
console.log(frutasFavoritas.at(1));
// la ventaja de usar .at es que podemos poner -1 enves de volver a llamar la variable, ademas podemos ir a comodando la piscion
console.log(frutasFavoritas.at(-1));
//penultimo dato
console.log(frutasFavoritas.at(-2));






/*

.push() <- Agrega un elemento al final
.pop() <- Elimina el último elemento
.unshift() <- Agrega un elemento al principio
.shift() <- Elimina al primero elemento

*/

/*
const tablaMultiplicar = [1,2,3,4,5,6,7,8,9,10];
let numeroMultiplicar = Number(prompt("¿Qué tabla de multiplicar quieres?"));

tablaMultiplicar.forEach( function(numero){
    
    let resultado = numero * numeroMultiplicar;

    let mensaje = `Multiplicar ${numeroMultiplicar}x${numero2} es igual a ${resultado}`;

    console.log(mensaje);

} );

*/

/*
const equiposGanadoresChampions = 
[
    ["Barcelona", "Madrid"],
    ["Juventus", "Inter", "Milan"],
    ["City", "United", "Liverpool", "Chelsea"],
];

equiposGanadoresChampions.forEach( function(equiposGanadores){

    equiposGanadores.forEach(function(equipo){
        console.log(equipo);
    })
    
});*/