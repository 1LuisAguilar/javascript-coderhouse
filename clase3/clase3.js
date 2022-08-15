
/*
for (let i=0; i <= 10; i = i + 1)

let numero = parseInt(prompt("Ingrese un numero del 1 al 10"))*/


/*

// ejmplo 01

for (let i = 0; i < 3; i = i + 1){
    
    let numero = parseInt(prompt("Ingrese un numero, te voy a enseñar el siguiente"));
    console.log("Ingresaste: ", numero);
    console.log("Y el siguiente es: ", numero + 1);
}


*/


// ejemplo 02

/*
// PEDIR UN NUMERO DEL 1 AL 10 POR TECLADO Y MOSTRAR LA TABLA

let numero = parseInt(prompt("Ingrese un numero del 1 al 10 y te muestro la tabla"));

    
    if(numero <= 10){

        for (let i = 0; i <= 10; i = i + 1){

            console.log(numero, "x", i , "=", numero * i);

        }   
  
    }

    else{

        console.log(alert("El numero ingresado es superior al permitido"));
    }

 */

    //break va dentro de una condicion, sino corta todo

/*
    for (let i=0; i<3 ; i++){

        
        let numero_uno = parseInt(prompt("Ingrese un numero"));
        let numero_dos = parseInt(prompt("Ingrese otro numero"));

        if(numero_uno==0 || numero_dos==0){
            console.log("No se puede dividir por 0");
            break

        }

        console.log("El resultado de la division es: " , numero_uno / numero_dos);


    }

*/
    // continue SE EJECUTA EL CONDICIONAL pero el bloque sigue ejecutanbdose

    for (let i=0; i<3 ; i++){

        
        let numero_uno = parseInt(prompt("Ingrese un numero"));
        let numero_dos = parseInt(prompt("Ingrese otro numero"));

        if(numero_uno==0 || numero_dos==0){
            console.log("No se puede dividir por 0");
            continue

        }

        console.log("El resultado de la division es: " , numero_uno / numero_dos);


    }









