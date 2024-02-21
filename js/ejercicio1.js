// ------------ 1er Ejercicio--------------

// Construya una expresión regular que permita validar el Nit de una empresa en Colombia.


let regexNIT = /^(\d{3})\.(\d{3})\.(\d{3})-(\d{1})$/;

// Función para verificar si un NIT es válido

function validarNIT(nit) {
    return regexNIT.test(nit);
}

let nit1 = "123.456.789-0";

console.log(validarNIT(nit1)); 

// ^: Representa el inicio de la cadena.
// \d: Coincide con cualquier dígito.
// {n}: Coincide exactamente con n repeticiones del elemento anterior.
// \.: Coincide con el punto literal (.).
// \-: Coincide con el guión literal (-).
// $: Representa el final de la cadena.





