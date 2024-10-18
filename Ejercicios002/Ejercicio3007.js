function Mayores( arreglo, n1){
    return arreglo.every(numeroo => numeroo > n1);
}
const numeroos = [10, 20, 30, 40];
const n1 = 100;
const resu= Mayores(numeroos, n1);
console.log(resu); 