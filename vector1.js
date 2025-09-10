//creación y declaracion de un arreglo de 10 elementos

let vertorEnteros = new Array(10);

//inicialización con valores enteros aleatorios

for (let i = 0; i < vertorEnteros.length; i++) {
    //generar numeros aleatorios de 0 - 99 y convertirlo en entero
    vertorEnteros[i] = Math.floor(Math.random() * 100);
}

console.log(vertorEnteros);
// refrescar la pestaña sin cerrar la consolo para que aparezca el vector.

