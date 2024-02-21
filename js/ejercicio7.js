//------------ 7mo Ejercicio-------

// Crea una expresión regular que valide una dirección IP en formato IPv4.

let ipRegex = /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

// Función para validar la dirección IP
function validarIP(ip) {
    return ipRegex.test(ip);
}


let ip1 = "192.168.0.1";
let ip2 = "256.0.0.1";
let ip3 = "192.168.1";

console.log(validarIP(ip1)); // true
console.log(validarIP(ip2)); // false
console.log(validarIP(ip3)); // false

// ^: Indica el inicio de la cadena.
// (25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?): Este grupo captura un octeto de la dirección IP. Puede ser un número entre 0 y 255.
// 25[0-5]: Captura números entre 250 y 255.
// 2[0-4][0-9]: Captura números entre 200 y 249.
// [01]?[0-9][0-9]?: Captura números entre 0 y 199, permitiendo uno o dos dígitos. El ? indica que los primeros dígitos pueden ser opcionales.
// \.: Coincide con un punto literal (que separa cada octeto).
// {3}: Indica que el grupo anterior debe aparecer exactamente 3 veces (para los primeros tres octetos).
// (25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?): Similar al primer grupo, para el último octeto.
// $: Indica el final de la cadena.