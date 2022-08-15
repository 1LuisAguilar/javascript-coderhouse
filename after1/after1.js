

let llueve = prompt("¿Está lluviendo? - Si o No");

if(llueve == "Si" || llueve == "SI" || llueve == "si"){

    let ventoso = prompt("¿Está ventoso? - Si o No");

    if (ventoso == "Si" || ventoso == "SI" || ventoso == "si"){
        console.log("No esta para paraguas");
    }
       
    else if (ventoso == "No" || ventoso == "NO" || ventoso == "no"){
        console.log("Llévate el paraguas");

    }

    else{
        console.log("Opción no encontrada");

    }
}

else if(llueve ==  "No" || llueve == "NO" || llueve == "no"){

        console.log("Disfruta de tu día");
    }

else{

        console.log("Opcion no encontrada");

}
   