//------------ 6to Ejercicio-------

// Crea una expresión regular que valide un nombre de usuario. El nombre de
// usuario debe contener solo letras minúsculas y números, con longitud entre 3 y 10


let nameUsuario = /^[a-z]+(\d)+([\w-])$/;

function ValidarName(usuario){
    return nameUsuario.test(usuario);
}

let name1 = "juanfelipe123"
let name2 = "Juanfelipe123"

console.log(ValidarName(name1));
console.log(ValidarName(name2));

// [a-z] : Solo letras minusculas
// \d : Coincide con cualquier digito