function getNumeroInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = -1; // não é necessário ter um valor inicial no do while

do {
    opcao = getNumeroInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`);
} while (opcao != -1)

console.log('Até a próxima');