const fabricantes = ["Mercede", "Audi", "BMW"];

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`); // já que o índice de um array começa do 0, é necessário colocar um +1, para ficar melhor de olhar
}

fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => {
    console.log(fabricante); // o fabricante seria o nome que está lá em imprimir
})
