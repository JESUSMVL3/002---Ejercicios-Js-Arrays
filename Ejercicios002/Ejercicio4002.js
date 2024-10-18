function EliminarValores (delate) {
    return delate.filter(Boolean);
}
const valores= ['65', 'Jesus', false, 'a', 'sol', NaN, true, '8'];
let SinFalsy = EliminarValores(valores);

console.log(SinFalsy);
