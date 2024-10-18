function calcularProducto(arr) {
    return arr.reduce((producto, numero) => producto * numero, 1);
}

const numeros = [1, 2, 3, 4, 5, 8];
const producto = calcularProducto(numeros);
console.log(producto);