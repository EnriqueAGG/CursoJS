class Mascota{

    #direccionPropietario;

    constructor(nombre, edad, sexo){

        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;

    }

    get nombrePropietario(){

        if(!this.#direccionPropietario){
            return "No hay un dueño registrado";
        }

        return "La dirección del dueño es "+this.#direccionPropietario;

    }

    set nombrePropietario(nombre){

        if(typeof nombre !== "string" || nombre.trim().length < 6){
            
            throw new Error("Nombre no valido, debe ser un string y mayor a 6 carácteres");

        }

        this.#direccionPropietario = nombre;

    }



    saludar(){
        console.log(`Mi nombre es ${this.nombre} y tengo ${this.edad}  meses de edad y soy ${this.sexo}`);
    }

}

const loki = new Mascota("Loki", 24, "Macho");
console.log( loki.nombrePropietario );
console.log( loki.nombrePropietario = "Jordan Alexander" );
console.log( loki.nombrePropietario );