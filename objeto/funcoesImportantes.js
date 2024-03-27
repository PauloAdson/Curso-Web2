const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)); // posso pegar as chaves do objeto
console.log(Object.values(pessoa)); // posso pegar os valores do objeto
console.log(Object.entries(pessoa));

// percorrer um array do objeto
Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`);
})

// percorrer um array do objeto
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}}: ${valor}`);
})

// primeiro (target, 'nomeDaPropriedadeQueQueroIncluir',{objeto})
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '08/01/2005'
})
pessoa.dataNascimento = '04/03/1999' // não vai alterar por conta do writable: false
console.log(pessoa.dataNascimento);

// Object.assign (ECMAScript 2015)
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2)

Object.freeze(obj)
obj.c = 1234
console.log(obj);