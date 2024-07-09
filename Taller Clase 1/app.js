
console.log("Desafio Funciones");

function saludo() {
    console.log("Hola Mundo!"); 
    return;   
}

saludo();

let nombre;
function saludoNombre (nombre){
    console.log(`Hola, ${nombre}`);
    return;
}
saludoNombre(prompt("Digita tu nombre"));


function doble (numeroDoble){
    return numeroDoble*2;
}


let resultadoDoble= (doble(parseInt(prompt("Digita Numero a Calcular el Doble de este"))));
console.log(resultadoDoble);

function promedio(num1, num2, num3){
    return (num1+num2+num3)/3;
}
let num1 = parseInt(prompt("Digite Un Numero para Calcular el promedio"));
let num2 = parseInt(prompt("Digite Un Numero para Calcular el promedio"));
let num3 = parseInt(prompt("Digite Un Numero para Calcular el promedio"));
let promedioN= promedio(num1, num2, num3);
console.log(promedioN);

function mayor(numero1, numero2){
    if (numero1< numero2){
        alert (`El numero ${numero2} es mayor que ${numero1}`);
        return;
    }else{
        if(numero1 > numero2){
            alert(`El numero ${numero1} es mayor que ${numero2}`);
            return;
        }else {
            alert(`Los numeros digitados son iguales`);
            return;
        }
    }
}

let numero1 = parseInt(prompt("Digite Un Numero para Calcular el Mayor"));
let numero2 = parseInt(prompt("Digite Un Numero para Calcular el Mayor"));
let nummayor = mayor(numero1, numero2)



function multiplicarNumero(numero){
    return numero*numero;
}

let num111 = parseInt(prompt("Digite Un Numero para Calcular el multiplo"));
let resulmulti = multiplicarNumero(num111);
console.log(resulmulti);