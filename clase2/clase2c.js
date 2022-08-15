/* SE INGRESA UNA EDAD , SI ES MAYOR A 18 MOSTRAMOS MENSAJE DE BIENVENIDA */

let age_user=prompt("Into your age")
let tutor = prompt("You came with a tutor?");

age_user=parseInt(age_user);

if(age_user>=18){

    console.log("Welcome to cinema");

}

else if(age_user >=16 && tutor == "yes"){

    console.log("Welcome to cinema");
    
}


else {

    console.log("Not welcome this side");

}






