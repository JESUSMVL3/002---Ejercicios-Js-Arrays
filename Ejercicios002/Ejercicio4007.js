function contarOcurrencias(arrr, valor) {
    return arrr.reduce((contador, elemento) => {
        return elemento === valor ? contador + 1 : contador;
    }, 0);
}

const numeros = [1, 2, 3, 4, 1, 2, 1, 1, 3];
const valorBuscado = 3;

const ocurrencias = contarOcurrencias(numeros, valorBuscado);

console.log(ocurrencias);