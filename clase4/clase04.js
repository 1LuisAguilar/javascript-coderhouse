
//ejemplo 01
//LOS DATOS SE QUEDAN EN MEMORIA PARA EjECUTAR HAY QUE LLAMRALO A TRAVES DE LA REFERENCIA O NOMBRE

function saludar_usuario(nombre){

    console.log("Bienvenido al sistema: ", nombre);
}

saludar_usuario("Pepe");
saludar_usuario("Martha");


// ejemplo 02

/*

function suma_dos_numeros(){

    let num_uno = parseInt(prompt("Ingrese un numero"));
    let num_dos = parseInt(prompt("Ingrese otro numero"));
    let suma = num_uno + num_dos;
    console.log("La suma es: ", suma);

    
}


suma_dos_numeros();

*/

// ejemplo 03

// USAR PARAMETROS

function suma_dos_numeros2(num_uno2, num_dos2){

    let suma = num_uno2 + num_dos2;
    console.log("La suma es: ", suma);

}

suma_dos_numeros2(1500 , 2500);


// ejemplo 04
// RESTAR 2 NUMEROS

function resta_dos_numeros( num_resta1 , num_resta2){

    let resta = num_resta1 - num_resta2;
    console.log("La resta es: ", resta);
}

resta_dos_numeros(230, 70);


// ejemplo 5
// PARA SOLO ACEPTAR NUMEROS 



function suma_numeros(num1, num2){

    if (typeof num1 == "number" && typeof num2 == "number"){
        let suma_numeros = num1 + num2;
        console.log("La suma es: ", suma_numeros);

    }

    else{
        console.log("Solo se aceptan numeros");
    }


}

suma_numeros ("Luis", "Juan");












