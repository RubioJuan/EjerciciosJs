// ------------ 1er Ejercicio--------------

// Construya una expresión regular que permita validar el Nit de una empresa en Colombia.


// let regexNIT = /^(\d{3})\.(\d{3})\.(\d{3})-(\d{1})$/;

// Función para verificar si un NIT es válido

// function validarNIT(nit) {
//     return regexNIT.test(nit);
// }

// let nit1 = "123.456.789-0";

// console.log(validarNIT(nit1)); 

// ^: Representa el inicio de la cadena.
// \d: Coincide con cualquier dígito.
// {n}: Coincide exactamente con n repeticiones del elemento anterior.
// \.: Coincide con el punto literal (.).
// \-: Coincide con el guión literal (-).
// $: Representa el final de la cadena.


//------------ 2do Ejercicio-------

// Crea una expresión regular que valide un código postal con el formato de cinco dígitos.

// let codigo = /^(\d{5})\.$/;

// function validarCodigo(cd) {
//     return codigo.test(cd); 
// }

// let cd1 = "12345.";

// console.log(validarCodigo(cd1))


// ----------- 3er Ejercicio---------

// Crea una expresión regular que valide un formato básico de dirección de correo electrónico.

let regexCorreo = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

function validarCorreo(correo) {
    return regexCorreo.test(correo);
}

// Ejemplo de uso:
let correo1 = "usuario@example.com";
let correo2 = "correo_invalido@ejemplo.";

console.log(validarCorreo(correo1)); 
console.log(validarCorreo(correo2));

// Debe comenzar con uno o más caracteres alfanuméricos o guiones bajos (\w).
// Puede contener puntos (.) seguidos de uno o más caracteres alfanuméricos o guiones bajos.
// Después del símbolo @, debe haber uno o más caracteres alfanuméricos o guiones bajos seguidos de un punto (.).
// Finalmente, debe haber entre 2 y 7 letras (mayúsculas o minúsculas) que representen el dominio, como .com, .org, .net, etc.

// ^: Representa el inicio de la cadena.
// [\w-]+: Coincide con uno o más caracteres alfanuméricos o guiones bajos.
// (\.[\w-]+)*: Coincide con cero o más grupos de un punto seguido de uno o más caracteres alfanuméricos o guiones bajos.
// @: Coincide con el símbolo @.
// ([\w-]+\.)+: Coincide con uno o más grupos de uno o más caracteres alfanuméricos o guiones bajos seguidos de un punto.
// [a-zA-Z]{2,7}: Coincide con entre 2 y 7 letras (mayúsculas o minúsculas) que representen el dominio.
// $: Representa el final de la cadena.