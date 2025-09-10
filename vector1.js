//creación y declaracion de un arreglo de 10 elementos

let vertorEnteros = new Array(10);

//inicialización con valores enteros aleatorios

for (let i = 0; i < vertorEnteros.length; i++) {
    //generar numeros aleatorios de 0 - 99 y convertirlo en entero
    vertorEnteros[i] = Math.floor(Math.random() * 100);
}

console.log("---- vector de 10 enteros----")
console.log(vertorEnteros);
// refrescar la pestaña sin cerrar la consolo para que aparezca el vector

//recorrer el vector usando el metodo for-each (for...of)

    console.log("---- metodo for - each ----");

for(let valor of vertorEnteros){

    console.log(valor);
}

//cambiar los valores impares por ceros

    console.log("---- convertir impares en ceros ----")

for (let i = 0; i < vertorEnteros.length; i++) {
    if(vertorEnteros[i] % 2 !== 0){
        vertorEnteros[i] = 0;
    }
    
}

    console.log(vertorEnteros);

//multiplicar todos los valores por el valor de su indice.

    console.log("----- multiplicación de todos los valores por su indice ----")

    for (let i = 0; i < vertorEnteros.length; i++) {
         vertorEnteros[i] = vertorEnteros[i] * i;
    
        
    }
    
    console.log(vertorEnteros);

//busqueda lineal de un valor.
