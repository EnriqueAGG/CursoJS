
class Mascota{

    static nombresPopulares = ["Coco", "Thor", "Max", "Rocky", "Toby"];

    static obtenerNombre(){
        const numeroMaximo = this.nombresPopulares.length - 1;
        const numeroRandom = Math.round(Math.random() * numeroMaximo);

        return this.nombresPopulares[numeroRandom];
    }

    constructor(nombre, edad, sexo, direccion){

        this._direccionPropietario = direccion;
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;

    }

    saludar(){
        console.log(`Mi nombre es ${this.nombre} y tengo ${this.edad}  meses de edad y soy ${this.sexo}`);
    }

}

class Perro extends Mascota{

    constructor(nombre, edad, sexo, raza){
        super(nombre, edad, sexo);

        this.raza = raza;
    }

    ladrar(){
        console.log(`He ladrado`);
    }

    saludar(){
        super.saludar();
        console.log("Hey, ¿Qué haces?");
    }

}

const loki = new Mascota("Loki", 24, "Macho", "Direccion #55");


console.log( loki._direccionPropietario );