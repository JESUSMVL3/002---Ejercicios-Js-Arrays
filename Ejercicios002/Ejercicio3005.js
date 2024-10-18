function buscar(arr, valor) {
    return arr.indexOf(valor);
}

let numeros=[5, 10, 15, 30, 22, 50];
let valorbuscado= 30;

let indice= buscar(numeros, valorbuscado);
console.log(indice);