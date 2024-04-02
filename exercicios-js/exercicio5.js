// Minha Resolução
function maiorOuIgual(numero1, numero2) {
    const ehIgual = numero1 === numero2
    return ehIgual
}

console.log(maiorOuIgual(1, 1));
console.log(maiorOuIgual(1, 2));

// Resolução do Curso
function maiorOuIgual2(primeiro, segundo) {
    if (typeof primeiro != typeof segundo) {
        return false
    }
    return primeiro >= segundo
}

console.log(maiorOuIgual2(1, '1'));