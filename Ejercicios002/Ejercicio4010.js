const person=[
    {nombre:"Jesus", edad:19},
    {nombre:"Vanessa", edad:19},
    {nombre:"Katerine", edad:15},
    {nombre:"Jorge", edad:21},
    {nombre:"Angeluz", edad:47}
]
const vivienda=[
    {calle:"San Juan", numero:465},
    {calle:"15 de Octubre", numero:28},
    {calle:"30 de Agosto", numero:30},
    {calle:"Rinconada de los Angeles", numero:487},
    {calle:"13 de Agosto", numero:22}
]

let combinacion= person.map((cons1, index)=>{
    return{...cons1, ...vivienda[index]};
});

console.log(combinacion);