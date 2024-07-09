function calcularIMC(peso, altura){
    return peso/(altura*altura);
}

let peso = (parseInt(prompt("Digite Su Peso en Kg")));
let altura = (parseInt(prompt("Digite Su Altura en cms")));
let resultado1 = calcularIMC(peso, altura);
console.log(`Su IMC es ${resultado1}`);

function calculaFactorial(numero1){
    if(numero1 === 0 || numero1 === 1){
        return 1;
    }else{
        return numero1 * calculaFactorial(numero1-1);
    }
}
let numero1= parseInt(prompt("Digite un Numero para calcular el Factorial"));
let resultado = calculaFactorial(numero1);
console.log(`El factorial de ${numero1} es ${resultado}`);


function convertirDolarReales(dolares){
    var cotizacionDolar = 4.80;
    var reales = dolares*cotizacionDolar;
    return reales;
}

let valorEnDolar = parseFloat(prompt(`Cuantos Dolares desea Cambiar:`));
let valorEnReales = convertirDolarReales(valorEnDolar);
console.log(`${valorEnDolar} dólares en Reales es ${valorEnReales}`);


function calcularAreaPerimetroRectangulo(alto, ancho){
    var arear = alto*ancho;
    var perimetror = alto*ancho*2;
    console.log(`El area del rectangulo es ${arear} `);
    console.log(`El perimetro del rectangulo es ${perimetror} `);
}

let alto = parseInt(prompt(`Ingrese el Alto del Rectangulo`));
let ancho = parseInt(prompt(`Ingrese el Ancho del Rectangulo`));
calcularAreaPerimetroRectangulo(alto, ancho);

function calcularAreaPerimetroCircular(radio){
    var pi = 3.14;
    var area = pi*radio*radio;
    var perimetro = 2 *pi * radio;
    console.log(`El area del Circulo es ${area}`);
    console.log(`El perimetro es ${perimetro}`);
}

let radio = parseFloat(prompt(`Digite el Radio de la Circunferencia a Calcuar`));
calcularAreaPerimetroCircular(radio);


function mostraTablaMultiplicar (numerotm){
    for (var i =1; i<=10; i++){
        var resultadot = numerotm*i;
        console.log(numerotm + " x " + i + " = " + resultadot);
    }
}

let numerotm = parseInt(prompt(`Digite el Numero Para Generar la Tabala de Multiplicar`));
mostraTablaMultiplicar(numerotm);

