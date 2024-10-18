function palabras( arreglo2, n){
    return arreglo2.filter(arreglo2 => arreglo2.length > n);
}
const arreglo2=["sol", "solecito", "arbol", "calabaza"];
const n = 5;
const res= palabras(arreglo2, n);
console.log(res); 