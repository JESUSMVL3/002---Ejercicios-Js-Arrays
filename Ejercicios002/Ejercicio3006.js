const camionetas = [
    { marca: "nissan", modelo: "Urvan"},
    { marca: "Ford", modelo: "Lobo"},
    { marca: "Ford", modelo: "pickup"}
];

const enc = camionetas.find(troca => troca.modelo == "Urvan");
console.log(enc);