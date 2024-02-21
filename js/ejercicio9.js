//------------ 9no Ejercicio-------

// // Crea una expresión regular que valide una contraseña que cumpla con los siguientes criterios:

// Al menos 8 caracteres de longitud.

// Al menos una letra mayúscula.

// Al menos una letra minúscula.

// Al menos un número.

// Puede contener caracteres especiales como !@#$%^&*()_+.

let password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+.]).{8,}$/;


function validarContraseña(contraseña) {
    return password.test(contraseña);
}


let contraseña1 = "P@ssw0rd";
let contraseña2 = "Password1";
let contraseña3 = "password123";
let contraseña4 = "P@ss"; // No cumple con la longitud mínima

console.log(validarContraseña(contraseña1)); // true
console.log(validarContraseña(contraseña2)); // false
console.log(validarContraseña(contraseña3)); // false
console.log(validarContraseña(contraseña4)); // false


// ^: Indica el inicio de la cadena.
// (?=.*[a-z]): Utiliza un "lookahead" positivo para asegurarse de que al menos haya una letra minúscula en cualquier parte de la cadena.
// (?=.*[A-Z]): Utiliza un "lookahead" positivo para asegurarse de que al menos haya una letra mayúscula en cualquier parte de la cadena.
// (?=.*\d): Utiliza un "lookahead" positivo para asegurarse de que al menos haya un dígito en cualquier parte de la cadena.
// (?=.*[!@#$%^&*()_+.]): Utiliza un "lookahead" positivo para asegurarse de que al menos haya un carácter especial en cualquier parte de la cadena.
// .{8,}: Acepta cualquier carácter (excepto nueva línea) al menos 8 veces.
// $: Indica el final de la cadena.