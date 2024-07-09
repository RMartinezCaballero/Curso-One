let listaGenerica = [];

let lenguajesProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

lenguajesProgramacion.push ('Java', 'Ruby' , 'GoLang');
console.log(lenguajesProgramacion);

function mostrarLenguajes(){
    for(let i=0; i< lenguajesProgramacion.length; i++){
        console.log(lenguajesProgramacion[i]);
    }
}

mostrarLenguajes();

function mostrarLenguajesInv(){
    for(let i=lenguajesProgramacion.length-1; i>=0 ; i--){
        console.log(lenguajesProgramacion[i]);
    }
}

mostrarLenguajesInv();

function calcularMedia(lista){
    let suma=0;
    for (let i=0; i< lista.length;i++){
        suma +=lista[i];
    }
    return suma/lista.length;
}

let numeros = [10,20,30,40,50];
let media = calcularMedia(numeros);
console.log('Media', media);


function encontrarMayorMenor(lista) {
    let mayor = lista[0];
    let menor = lista[0];
  
    for (let i = 1; i < lista.length; i++) {
      if (lista[i] > mayor) {
        mayor = lista[i];
      }
      if (lista[i] < menor) {
        menor = lista[i];
      }
    }
  
    console.log('Mayor:', mayor);
    console.log('Menor:', menor);
  }
  
  let numeros2 = [15, 8, 25, 5, 12];
  encontrarMayorMenor(numeros2);


  function calcularSuma(lista) {
    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
      suma += lista[i];
    }
    return suma;
  }
  
  let numeros3 = [15, 8, 25, 5, 12];
  let suma = calcularSuma(numeros3);
  console.log('Suma:', suma);


  function encontrarIndiceElemento(lista, elemento) {
    for (let i = 0; i < lista.length; i++) {
      if (lista[i] === elemento) {
        return i; // Retorna el índice del elemento encontrado
      }
    }
    return -1; // Retorna -1 si el elemento no se encuentra en la lista
  }

  let lista = lenguajesProgramacion;
  console.log(encontrarIndiceElemento(lenguajesProgramacion, "Java"));