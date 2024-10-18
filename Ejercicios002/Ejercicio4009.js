const persons= [
    {nombre:"Jesus", edad:20},
    {nombre:"Vanessa", edad:20},
    {nombre:"Katerine", edad:30},
    {nombre:"Jorge", edad:40},
    {nombre:"Ignacio", edad:40},
    {nombre:"Rodolfo", edad:51},
    {nombre:"Angeluz", edad:47}
];

const AgruparEdad= persons.reduce((acc, persons)=>{
    const decada= Math.floor(persons.edad / 10)*10;
    if(!acc[decada]){
        acc[decada]=[];
    }
    acc[decada].push(persons);
    return acc;
}, {});

console.log(AgruparEdad);