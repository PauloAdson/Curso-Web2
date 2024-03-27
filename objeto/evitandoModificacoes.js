// Object.prevetExtensions
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})

console.log('Extensível:', Object.isExtensible(produto)); // Object.isExtensible verifica se algo foi estendido

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto);

// Object.seal
const pessoa = {nome: 'Juliana', idade: 35}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa));
console.log(pessoa);

pessoa.sobrenome = 'Silva' // não é possílbe adicionar
delete pessoa.nome // não é possílbe deletar
pessoa.idade = 29
console.log(pessoa);

// Object.freeze = selado + valores constantes