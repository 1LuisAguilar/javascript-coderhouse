
/* ESTO ES UN COMENTARIO*/


let edad_usuario = 30;  
let nombre_usuario = "Jose";  
let tel_usuario;

console.log(nombre_usuario);
console.log(tel_usuario);

edad_usuario = 50;

edad_usuario = 80;

edad_usuario = edad_usuario*3;

console.log(edad_usuario);

/* REDCLARAR ES DIFERENTE A REASINGNAR */

let resultado="Jose"+"Lopez";
console.log(resultado);

resultado="40"+"50";
console.log(resultado);



// INGRESO DE DATOS

let edad_usuario_nuevo= prompt("Ingrese su edad");
console.log(edad_usuario_nuevo);

// NUEVO CASO

let nombre = prompt("Ingrese su nombre");
let edad = prompt("Ingrese su edad");

console.log("Bienvenid@ al sistema:", nombre);
console.log("Su edad es:", edad);

// CASO 2

let num_uno=prompt("Ingrese un numero");
let num_dos=prompt("Ingrese otro numero");

let resultado_final = parseInt(num_uno) * parseInt(num_dos);
console.log("El resultado es: ", resultado_final);


//CASO 3

let frase1=prompt("Ingrese un numero decimal");
let frase2=prompt("Ingrese otro número decimal");

let resultado_decimal = parseFloat(frase1)/parseFloat(frase2);
console.log("El resultado decimal es:",resultado_decimal);



