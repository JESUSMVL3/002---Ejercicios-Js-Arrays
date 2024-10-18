function SumaTotal(){
    const numeros=[1, 18, 15, 10, 30, 2];
    const sumar=numeros.reduce((acumulador, num)=>acumulador+num, 0);
    console.log("La suma de los numeros es: "+sumar);
}
SumaTotal();