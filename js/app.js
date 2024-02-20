// 1er Ejercicio

// Construya una expresión regular que permita validar el Nit de una empresa en Colombia.

// const NIT = 123

// let zNit = Number(prompt("Ingrese el Nit de la empresa: "))


// function validarNit (){
//     if (zNit === NIT){
//         alert("Aprobado")
//     }
//     else{
//         alert("Los siento, no ha sido admitido, vuelve a intentarlo")
//     }
// }

// validarNit();

const regexNIT = /\d.0-9/g;

const nit = "123.456.789-0";

if (regexNIT.test(nit)) {
    console.log("El NIT es válido.");
} else {
    console.log("El NIT no es válido.");
}
