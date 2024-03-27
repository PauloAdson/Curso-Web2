// Estratégia 1 para gerar valor padrão

function soma1(a, b, c) {
    a = a || 1;
    b = b || 1;
    c = c || 1;
    return a + b + c;
}

console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0)); // o valor 0 retorna falso, portanto ele vai pegar o segundo elemento que no caso é 1

// Estratégia 2(a), 3(b) e 4(c) para gerar valor padrão
function soma2(a, b, c) {
    a = a !== undefined ? a : 1;
    b = 1 in arguments ? b : 1; // o primeiro "1" se refere ao índice
    c = isNaN(c) ? 1 : c; // De todas as estratégias, a mais segura seria essa
    return a + b + c;
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0));

// valor padrão do es2015
// essa é a versão mais nova, então devemos dar preferência em usar ela
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c;
}

console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0));