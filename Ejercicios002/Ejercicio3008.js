function alMenosUnoEsPar(arreglo) {
    return arreglo.some(numero => numero % 2 === 0);
}

const numer=[1, 3, 5, 7, 7];
const resultado = alMenosUnoEsPar(numer);
console.log(resultado);
 