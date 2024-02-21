// ----------- 3er Ejercicio---------

// Crea una expresión regular que valide un formato básico de dirección de correo electrónico.

let regexCorreo = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

function validarCorreo(correo) {
    return regexCorreo.test(correo);
}


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