function NumeroMayor(){
    const Numero=[1, 18, 15, 100, 30, 2];
    const nummay=Math.max.apply(null, Numero);
    console.log("El numero mayor es: "+ nummay );
}
NumeroMayor();