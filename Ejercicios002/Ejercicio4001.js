function convertirArreglo(cadena) {
    return cadena.split(" ");
}

let text= "Hola, ¿Qué haces?";
let arrayPalabras= convertirArreglo(text);

console.log (arrayPalabras);