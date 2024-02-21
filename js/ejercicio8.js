//------------ 8vo Ejercicio-------

// Crea una expresión regular que valide una fecha en formato "dd/mm/yyyy".

let fechaRegex = /^([0-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$/;


function validarFecha(fecha) {
    return fechaRegex.test(fecha);
}


let fecha1 = "25/12/2023";
let fecha2 = "31/02/2024";
let fecha3 = "12/05/21"; // No cumple con el formato completo de 4 dígitos para el año

console.log(validarFecha(fecha1)); // true
console.log(validarFecha(fecha2)); // true
console.log(validarFecha(fecha3)); // false

// ^: Indica el inicio de la cadena.
// ([0-2][0-9]|3[0-1]): Captura el día. Puede ser cualquier número entre 01 y 31.
// [0-2][0-9]: Captura números entre 00 y 29.
// 3[0-1]: Captura números entre 30 y 31.
// \/: Coincide con una barra diagonal (/), que separa el día del mes.
// (0[1-9]|1[0-2]): Captura el mes. Puede ser cualquier número entre 01 y 12.
// 0[1-9]: Captura números entre 01 y 09.
// 1[0-2]: Captura números entre 10 y 12.
// \/: Coincide con otra barra diagonal (/), que separa el mes del año.
// \d{4}: Captura el año. Coincide con exactamente cuatro dígitos del 0 al 9.
// $: Indica el final de la cadena.