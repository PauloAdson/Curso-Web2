const valores = [7.7, 8.9, 6.3, 9.2] // a vírgula é um separados dos elementos
console.log(valores[0], valores[3]);
console.log(valores[4]); // como não tem nada no índice 4, ele retorna undefined

// mas eu posso adicionar algo depois no array
valores[4]  = 10; /*ess é o índice [4] */
console.log(valores);
console.log(valores.length); //length vai dizer quantos elementos temos no array

valores.push({id: 3}, false, null, 'teste')
console.log(valores);

console.log(valores.pop()); // o pop vai deletar o último valor do array
delete valores [0] // ele vai deletar o elemento que estiver naquele índice
console.log(valores);

console.log(typeof valores); // um array no JS é um object

// Então podemos misturar tipos de dados em um array, porém não é indicado!!!!!!