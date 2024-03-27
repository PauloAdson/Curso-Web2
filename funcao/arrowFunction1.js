let dobro = function (a) {
    return 2 * a;
}

// agora com a função arrow
dobro = (a) => {
    return 2 * a;
}

// caso eu tenha apena 1 parâmetro, posso tirar os parênteses
dobro = a => 2 * a  // return implícito
console.log(dobro(Math.PI));



let ola = function () {
    return 'Olá'
}

// agora com a função arrow
ola = () => 'Olá'
ola = _ => 'Olá' // _ possui um parâmetro
console.log(ola());