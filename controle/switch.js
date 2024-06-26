const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {
        case 10:
        case 9:
            console.log('Quadro de Honra com a nota ', nota);
            break
        case 8: case 7:
            console.log('Aprovado com a nota ', nota);
            break
        case 6: case 5: case 4:
            console.log('Recuperação com a nota ', nota);
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado com a nota ', nota);
        default:
            console.log('Nota inválida');
    }
}

imprimirResultado(4.5);