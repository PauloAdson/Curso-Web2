function rand({ min = 0, max = 1000 }) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = { max: 50, min: 40}
console.log(rand({min: 0}));
console.log(rand({})); // essa é mais simples
// console.log(rand());