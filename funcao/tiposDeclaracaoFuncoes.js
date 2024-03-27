// function declaration
console.log(soma(3, 4));// com o function declaration, eu posso chamar a função antes de criala, pois ela é carregada antes das outras


function soma(x, y) {
    return x + y;
}

// function expression
const sub = function (x, y) {
    return x - y
}

// named function expression
// essa função não vai ser anônima
const mult = function mult(x, y) {
    return x * y;
}