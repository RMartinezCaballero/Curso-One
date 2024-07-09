alert('Bienvenido al juego de Roberto Martinez');

alert ("Primer Juego Dia de la Semana");

let diaSemana = prompt("Que dia de la semana es hoy!");


if (diaSemana == "Sabado" || diaSemana == "Domingo"){
    alert("¡Buen fin de semana!");
}else{
    alert("¡Buena semana!");
}

alert ("Fin del Primer Juego");

alert("Segundo Juego El Numero es + o - o 0");

let numero = prompt("Digita Un Numero");
if (numero < 0 ){
    alert("Es Negativo");
}else{
    if (numero >  0 ){
        alert ("Es Positivo");
    }else{
        alert ("Es Cero");
    }   
}

alert ("Fin del Segundo Juego");

alert("Segundo Juego El Numero es + o - o 0");
const Puntajemax= 100;
let puntos = prompt("Que puntaje de 0 a 100 obtuviste");

if(puntos == Puntajemax){
        alert("¡Felicidades, has ganado!");
}else{
    alert("Intentalo nuevamente para ganar.");
}

alert("Fin del Juego");

alert("Juego Mi Banco");

let nombre = prompt("Digite Su Nombre");
let saldoCuenta = prompt("Saldo Actual de su cuenta");

alert (`Sr ${nombre} y su saldo en su cuenta es ${saldoCuenta}, Gracias por Visitarnos`);

alert("Juego Nombre");
let nombre5 = prompt("Nombre");
alert(`Hola, Bienvenido a Nuestro Sistema Sr(a), ${nombre5}`);
