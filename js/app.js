// 1er Ejercicio

// Construya una expresión regular que permita validar el Nit de una empresa en Colombia.

const NIT = 123

let zNit = Number(prompt("Ingrese el Nit de la empresa: "))

function validarNit (){
    if (zNit === NIT){
        alert("Eres el mejor XD")
    }
    else{
        alert("Acuestese Zorra")
    }
}

validarNit();