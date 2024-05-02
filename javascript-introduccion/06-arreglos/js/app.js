// Arreglos , Arrays
// son tipo de datos son considerados objetos y permiten almacenar valores , los valores que pueden almacenar puede ser arreglos, objetos o incluso valores primitivos.
// los valores que asignemos a los arreglos se ordenaran de acuerdo a la posiciones, son como casilleros
// puede almacenar cualqueri tipos de datos en una arreglo
// el arreglo si puede Mutar lo que no hacer un dato primitivo
// lista de valores
// no se puede mutar con valores primitivos pero si con objetos 
// [valor, valor, valor]

// ejemplo de un objetos vs variable4
// los objetos copian la referencia en memoria
// almacenan al mismo arreglo porque apuntan al mismo arreglo en memoria
// let frutasFavoritas = ["Fresa", "Manzana", "Piña", "Uva", "Sandia"];
// let frutasFavoritasExtra = frutasFavoritas;
// frutasFavoritasExtra.push("Calabazas");

// console.log("Frutas Original ", frutasFavoritas);

// console.log("Frutas Copia", frutasFavoritasExtra);

// podemos asignarle a una constante un arreglo
// const frutasFavoritas = ["Fresa", "Manzana", "Piña", "Uva", "Sandia"];
// si podemos mutar arreglos o alterar, no cambiamos pocision en memoria
// frutasFavoritas.push("Calabazas")
// frutasFavoritas.pop("Calabazas")

// console.log(frutasFavoritas);

// esto no esta permitido, reasignar un nombre a una constante
// pero podemos mutar los arreglos
// const frutasFavoritas = [] tambien esto esta mal
// const nombre = "Jordan"
// nombre = "Alex"



// console.log(frutasFavoritas);
// se comienza desde la pocision 0 a contar en un arreglo
// si quieres llamar al valor de un arreglo es llamando el valor de la variable y poniendo entre corchetes a la pocision que queremos acceder
// console.log(frutasFavoritas[2]);
//acceder a un valor
// console.log(frutasFavoritas.length);
//longitud del arreglo, se pude accerder a la ultima posicion de un arreglo.
// console.log(frutasFavoritas[frutasFavoritas.length -1]);
// referenciamos a frutasFavoritas.length -1,  acceder a la posicion 3, si se arreglo mas datos al arreglo este accede al ultimo dato
/*
frutasFavoritas.length = 0;
console.log(frutasFavoritas);
*/
// limpiar arrelo.

//metodo .at
// console.log(frutasFavoritas.at(1));
// la ventaja de usar .at es que podemos poner -1 enves de volver a llamar la variable, ademas podemos ir a comodando la piscion
// console.log(frutasFavoritas.at(-1));
//penultimo dato
// console.log(frutasFavoritas.at(-2));


// console.log(frutasFavoritas);

/*
Agrega un elemento a un arreglo
.push() <- Agrega un elemento a al final
frutasFavoritas.push("Arandanos");
console.log (frutasFavoritas.push("Arandanos", "kiwi"));

frutasFavoritas.push()
agregar un valor y agregarlo al arreglo

.pop() <- Elimina el último elemento
frutasFavoritas.pop();
console.log (frutasFavoritas.pop() );
elimina el ultimo elemento del array y retorna precisamente ese elemento que elimino

.unshift() <- Agrega un elemento al principio
frutasFavoritas.unshift("kiwi", "arrandano");

.shift() <- Elimina al primero elemento
frutasFavoritas.shift();
console.log(frutasFavoritas.shift());

push y pop son metos mas rapidos 
*/
// Diferencia entre los valores primitivos y los arreglos.
// los valores primitivos se guardan o se almacenan por valor y los arreglos se guardan o almacenan por referencia.

// let numeroFavorito = 10;
// let numeroFavoritoExtra = numeroFavorito;

// numeroFavorito = 30;
// console.log(numeroFavorito);
// console.log(numeroFavoritoExtra);


/*

const tablaMultiplicar = [1,2,3,4,5,6,7,8,9,10];
let numeroMultiplicar = Number(prompt("¿Qué tabla de multiplicar quieres?"));

tablaMultiplicar.forEach( function(numero){
    
    let resultado = numero * numeroMultiplicar;

    let mensaje = `Multiplicar ${numeroMultiplicar}x${numero2} es igual a ${resultado}`;

    console.log(mensaje);

} );

*/

// crear un arreglo adentro de otro
// arreglo anidado
// const un valor que no puede cambiar
const equiposGanadoresChampions = 
[
    ["Barcelona", "Madrid"],
    ["Juventus", "Inter", "Milan"],
    ["City", "United", "Liverpool", "Chelsea"],
];

// arreglo bidiomensional o martriz
// se acomodo por columas y filas 
// console.log(equiposGanadoresChampions);
// cambiar valor
// acceder a un arreglo
// equiposGanadoresChampions[2][2]= "chelsea";
// console.log(equiposGanadoresChampions[2][2]);
// se accede a la fila y se cambia a la pocision
// equiposGanadoresChampions[1][0] =  "Napoli;"
// solo devuelve un valor
// equiposGanadoresChampions.at(1).at(0)= 'Napoli'
// equiposGanadoresChampions[1][0] =  "Napoli;"
// acceder a la ultima fila
//  console.log(equiposGanadoresChampions.at(1).at(-1));
// agregar un elemento a la fila extra
// equiposGanadoresChampions.at(-1).push("Arsenal");
// borrar equipo
// equiposGanadoresChampions.at(1).shift();



// iterar recorrer cada valor que se encuentra dentro de un arreglo, proceso de ir a cada valor dentro del mismo de forma secuencial, empezando desde la posicion inicial del arreglo

// .forEach(function(valor){})

// [1,2,3].forEach(function(numeroIterar){
//     console.log(numeroIterar);
// });
// esto imprime
// 1
// 2
// 3

// const tablaMultiplicar = [1,2,3,4,5,6,7,8,9,10];
// let numeroMultiplicar = Number(prompt(' Que numero a multiplicar quieres?'));

// tablaMultiplicar.forEach(function(numero){
//     let operacion = numero * numeroMultiplicar;
// console.log(`${numeroMultiplicar}`, `x ${numero} = `,operacion);
// });

// vamos a interar cada equipo o arreglo

// equiposGanadoresChampions.forEach( function(equiposGanadores){

//     equiposGanadores.forEach(function(equipo){
//         console.log(equipo);
//     })
    
// });

// Imprime
    // Barcelona
    // Madrid
    // Juventus
    // Inter
    // Milan
    // City
    // Liverpool
    // Chelsea
