const [a, b, c, d] = [3, 5, 1, 15];

const soma = a + b + c + d;
const subtracao = d - b;
const multiplicacao = a * b;
const divisao = d / a;
const modulo = a % 2;



// Isso foi eu que quis fazer
if (modulo === 0) {
    console.log('Esse número é par');
} else {
    console.log('Esse número é ímpar');
}

console.log(soma, subtracao, multiplicacao, divisao, modulo);