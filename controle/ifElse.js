const imprimirResultado = function (nota) {
    if (nota >= 7) {
        console.log('Aprovado! com a nota ' + nota);
    } else {
        console.log('Reprovado! com a nota ' + nota);
    }
}

imprimirResultado(10)
imprimirResultado(4)
imprimirResultado('Epa!') // cuidado!!!