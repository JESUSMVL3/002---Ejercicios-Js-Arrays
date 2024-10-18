function Existente (arreglo, valor){
    return arreglo.includes(valor);
}
const array = ["Cinco", "copito", "hamborgueso", "Perro"];
const buscando = "Perro";
console.log(Existente(array, buscando));