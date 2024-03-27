// Endereço de memória
// pessoa -> 123 {...}
const pessoa = { nome: 'João' }
pessoa.nome = 'Pedro'
console.log(pessoa);

// pessoa -> 456 -> {...} eu não posso atribuir novamente a uma constante, pois dará um erro
// pessoa = { nome: 'Ana' }

Object.freeze(pessoa) // o freeze faz com que não dê para mexer mais no objeto
// Vai ser um objeto constante, além da váriavel pessoa ser const, o objeto também vai ser
// freeze não vai permir adicionar ou excluir mais nada no objeto

pessoa.nome = 'Maria'
pessoa.end = 'Maria'
delete pessoa.nome
console.log(pessoa.nome);


const pessoaConstante = Object.freeze ({ nome: 'Lucas' })
console.log(pessoaConstante);
