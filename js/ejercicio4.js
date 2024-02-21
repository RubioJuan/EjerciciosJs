let Numero = /^(\d{3})\ (\d{3})-(\d{4})$/;

function ValidarNumero(numeros) {
    return Numero.test(numeros);
}

let numero1 = "123 456-7890";
let numero2 = "123456-7890";

console.log(ValidarNumero(numero1));
console.log(ValidarNumero(numero2));