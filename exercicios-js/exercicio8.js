// Minha Resolução
function multiplicar(numero1, numero2) {
    const multiplicacao = numero1 * numero2
    return multiplicacao
}

console.log(multiplicar(0, 5));

// Resolução do Curso
function multiplicar2(numeroA, numeroB) {
    let resultado = 0

    // A otimização feita para diminuir a quantidade de chamadas recursivas pode ser realizada aqui para diminuir a quantidade de loops
    for (let i = 0; i < numeroB; i++)
        resultado += numeroA

    return resultado
}

console.log(multiplicar2(5, 5));