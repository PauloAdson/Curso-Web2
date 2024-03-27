// array é um objeto "especial"
console.log(typeof Array, typeof new Array, typeof []);

let aprovados = new Array('Bia', 'Carlos', 'Ana') // forma não recomendada, mas funciona
console.log(aprovados);

aprovados = ['Bia', 'Carlos', 'Ana'] // Forma literal de se criar um Array, é mais recomendado
console.log(aprovados[0]); // o 0 seria o primeiro valor do array
console.log(aprovados[1]);
console.log(aprovados[2]);
console.log(aprovados[3]); // como não tem nada no índice 3, ele vai retornar undefined

aprovados[3] = 'Paulo' // adicionar algo no array aprovados[indice] = 'valor'
aprovados.push('Abia') // também da para adicionar coisas ao array usando o push
console.log(aprovados.length); // length pega o tamanho do array

aprovados[9] = 'Rafael'
aprovados[5] = 'Daniel'
console.log(aprovados.length);
console.log(aprovados[8] === undefined);

console.log(aprovados);
aprovados.sort(); // Deixa em ordem alfabetica(reorganiza o array)
console.log(aprovados);

// Formas deletar algo no array
delete aprovados[1] // esse índice vai estar undefined, ou seja, ele não vai reordenar o array
console.log(aprovados[1]);
console.log(aprovados[2]);


// Splice dá para deletar algo e também adicionar
aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1, 'Elemento1', 'Elemento2') // apartir do indice colocado, vai ser excluído tanto que você colocar depois, e se quiser adicionar algum elemento, só é colocar (indice, excluídos, 'adicionarAlgo')
console.log(aprovados);