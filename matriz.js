//declarar matriz 3x3 del 1 al 9

console.log("---- matriz 3x3 del 1 al 9 ----")

let vector1 = [1,2,3];
let vector2 = [4,5,6];
let vector3 = [7,8,9];

let matriz = [vector1,vector2,vector3];

for (let i = 0; i < matriz.length; i++){
  console.log(matriz[i]);
  
}

//recorrido por columnas

console.log("---- Recorrido por columnas ----");

for (let j = 0; j < matriz[0].length; j++) {
  let columna = [];
  for (let i = 0; i < matriz.length; i++) {
    columna.push(matriz[i][j]);
  }
  console.log("Elementos de la columna " + (j + 1) + ":", columna.join(', '));
}

//sumar todos los elementos

  console.log("---- suma de todos los elementos ----")

  let sumaTotal = 0

  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      sumaTotal += matriz[i][j];
    }
    
  }

  console.log("la suma total de los elementos es:  ", sumaTotal);

  // intercambiar filas

  console.log("---- intercambiar la promera fila con la última ----")

  const primeraFila = matriz[0];

  matriz[0] = matriz[matriz.length - 1];

  matriz[matriz.length - 1] = primeraFila;

  console.log("---- matriz con filas intercambiadas:");
  for (let i = 0; i < matriz.length; i++){
  console.log(matriz[i]);
  
}
