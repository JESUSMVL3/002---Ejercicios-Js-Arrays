function inverso(arreglo) {
    let arregloInverso = [];
    for (let i = arreglo.length - 1; i >= 0; i--) {
        arregloInverso.push(arreglo[i]);
    }
    return arregloInverso;
}

let Arreglo = ["hola", "como", "estas", "?"];
let resultado = inverso(Arreglo);
console.log(resultado);