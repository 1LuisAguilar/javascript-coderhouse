

// BUCLE INFINITO


/*
// caso 1

while(10>5){

    console.log.("Hola");
    prompt("asd");
}
*/

/*

//caso 2

let nombre = "";

while ( nombre !="salir"){

    nombre = prompt("Ingrese su nombre o salir para finalizar")
    console.log("Bienvenid@: ", nombre);

}

*/


//  votaciones : van a botar x cantidad de socio, botar por el aprtido a o b, 
// informar que partido gano las botaciones


let voto_usuario = "";
let cont_vot_a = 0;
let cont_vot_b = 0;

while (voto_usuario != "salir"){

    voto_usuario = prompt("Voto A o B");

    if (voto_usuario == "A"){
        console.log("Voto A");
        cont_vot_a = cont_vot_a + 1;
    }

    else if(voto_usuario == "B"){
        console.log("Voto B");
        cont_vot_b++;

    }

    else{

        console.log("Voto Nulo");
    }
      
}

if (cont_vot_a > cont_vot_b){
    console.log("GANO EL PARTIDO A");

}

else if (cont_vot_b > cont_vot_a){
    console.log("GANO EL PARTIDO B");


}

else {
    console.log("EMPATE");

}







