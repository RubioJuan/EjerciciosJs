//------------ 5to Ejercicio-------

// Crea una expresión regular que valide una dirección URL básica.

let ValidarURL = /^https?:\/\/(?:www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(?:\/[a-zA-Z0-9-._~:/?#\[\]@!$&'()*+,;=%]*)?$/;

function validarURL(url) {
    return ValidarURL.test(url);
}

let url1 = "https://www.example.com";
let url2 = "http://example.com/path/to/page";
let url3 = "ftp://example.com";
let url4 = "invalid-url";

console.log(validarURL(url1)); 
console.log(validarURL(url2)); 
console.log(validarURL(url3)); 
console.log(validarURL(url4)); 

// ^: Indica el inicio de la cadena.
// https?:\/\/: Coincide con "http://" o "https://://" literal.
// (?:www\.)?: Coincide opcionalmente con "www." (el (?: ... ) es un grupo de no captura).
// [a-zA-Z0-9-]+: Coincide con uno o más caracteres alfanuméricos o guiones para el nombre de dominio.
// \.: Coincide con un punto literal.
// [a-zA-Z]{2,}: Coincide con al menos dos caracteres alfabéticos para el dominio de nivel superior (TLD).
// (?:\/[a-zA-Z0-9-._~:/?#\[\]@!$&'()*+,;=%]*)?: Coincide opcionalmente con una ruta después del dominio, que puede contener varios caracteres válidos en una URL.
// ?$: Indica el final de la cadena.