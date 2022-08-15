

let a = confirm("¿Deseas saber si un número es PAR o IMPAR?");

if(a){

    alert ("Gracias por aceptar, tuve que pasar por un bucle infinito antes de llegar a terminarlo. Tienes 10 intentos. Comencemos");


        for (let i=0; i<10 ; i++){

        
            numero = parseInt(prompt("Introduzca un número"));

                if(numero % 2 == 0){
        
                    console.log("El numero: ", numero, "es par");
                
                }
                

                else if (numero = 0){

                    console.log("El resultado de un número dividido entre 0. siempre será 0");
                }


                else{
                
                    console.log("El numero: ", numero, "es impar");
                }     

                


        }

}

else{

        alert("Gracias por tu visita");

}







