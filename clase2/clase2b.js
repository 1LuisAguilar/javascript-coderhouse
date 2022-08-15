



let num_uno = prompt("Ingreso un numero");
let num_dos = prompt("Ingrese otro numero");
let operacion = prompt("suma: +    resta: -");



let resta = parseFloat(num_uno) + parseInt(num_dos);

if(operacion=="+") {

    let suma = parseInt(num_uno) + parseInt(num_dos);
    console.log("La suma de los dos numeros es: ", suma );

}

else if(operacion == "-"){

    let resta = parseFloat(num_uno) - parseFloat(num_dos);
    console.log("La resta de los numeros es: ", resta);
}

else{

    console.log("Operacion no encontrada");

}



