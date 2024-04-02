// Minha Resolução
function estaEntre(minimo, numero, maximo, inclusivo = false) {
    if (minimo <= numero && maximo > numero) {
        return true
    } else return false
}

console.log(estaEntre(10, 9, 100));

// Resolução do Curso
function estaEntre2(minimo, maximo, numero, inclusivo = false) {
    if (inclusivo) return numero >= minimo && numero <= maximo

    return numero > minimo && numero < maximo
}

console.log(16, 100, 160);

// Resolução do Curso
function estaEntre3(minimo, maximo, numero, inclusivo = false) {
    return inclusivo ? numero >= minimo && numero <= maximo : numero > minimo && numero < maximo
}

console.log(estaEntre3(10, 100, 50));