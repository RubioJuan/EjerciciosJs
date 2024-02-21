//------------ 2do Ejercicio-------

// Crea una expresión regular que valide un código postal con el formato de cinco dígitos.

let codigo = /^(\d{5})\.$/;

function validarCodigo(cd) {
    return codigo.test(cd); 
}

let cd1 = "12345";

console.log(validarCodigo(cd1))