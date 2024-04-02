// Minha resolução

const cumprimentar = function (ola = "Olá", name) {
    name = 'Fabio'
    return `${ola}, ${name}!`
} 

console.log(cumprimentar());

// Resolução do curso 1
function cumprimentar1(nome) {
    const saudacao = "Olá"
    return [saudacao, nome].join(', ').concat("!")
}
console.log(cumprimentar1('Maria'));

// Resolução do curso 2

function cumprimentar2(nome) {
    const saudacao = 'Olá, '
    return saudacao + nome + '!'
}
console.log(cumprimentar2('Julio'));

// Resolução do curso 3
function cumprimentar3(nome) {
    return `Olá, ${nome}!`
}

console.log(cumprimentar3("Paulo"));