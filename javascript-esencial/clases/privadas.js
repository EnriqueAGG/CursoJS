class Mascota{

    #direccionPropietario;

    constructor(nombre, edad, sexo){

        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;

    }

    getNombrePropietario(){

        if(!this.#direccionPropietario){
            return "No hay un dueño registrado";
        }

        return "La dirección del dueño es "+this.#direccionPropietario;

    }

    setNombrePropietario(nombre){


        if(typeof nombre !== "string" || nombre.trim().length < 6){
            
            return "Nombre no valido, debe ser un string y mayor a 6 carácteres"
        }

        this.#direccionPropietario = nombre;

    }


    saludar(){
        console.log(`Mi nombre es ${this.nombre} y tengo ${this.edad}  meses de edad y soy ${this.sexo}`);
    }

}

const loki = new Mascota("Loki", 24, "Macho");
console.log(loki.getNombrePropietario());
console.log(loki.setNombrePropietario("Alex"));
console.log(loki.getNombrePropietario());
console.log(loki.setNombrePropietario("Jordan Alexander"));
console.log(loki.getNombrePropietario());