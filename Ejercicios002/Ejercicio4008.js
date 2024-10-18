const personas=[
    {nombre: 'Juan', edad: 25},
    {nombre: 'Vanessa', edad: 19},
    {nombre: 'Jesus', edad: 18}
];

const names= personas.map(personas => personas.nombre);
console.log(names);