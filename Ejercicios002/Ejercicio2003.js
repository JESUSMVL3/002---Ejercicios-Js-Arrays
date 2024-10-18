function Promediar(){
    const Numero=[8, 8, 9, 10, 10, 10, 10, 10];
    const sum=Numero.reduce((acumulador, nume)=>acumulador+nume, 0);
    prom = sum/Numero.length;
    console.log("El promedio es: "+ prom );
}
Promediar();