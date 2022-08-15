// mayor de edad, por aprametro 1 edad, mayort de 18 ingresa a boliche sino no ingresa a boliche

function mayor_de_edad (edad){

    if (edad>=18){

        let edad = parseInt(prompt("Ingrese su edad: "));
        console.log("Puede ingresar");
    }

    else {
         
        console.log("No puede ingresar")

    }

}


