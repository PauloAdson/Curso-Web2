// console.log(global);

// posso colocar algo que eu quero globalmente assim, global.nomeDoQueEuQuero
global.MinhaApp = {
    saudacao() {
        return 'Estou em todos os lugares!'
    },
    nome: 'Sistema Legal'
}

global.UtilizandoFreeze = Object.freeze({
    saudacao() {
        return 'Estou usando o freeze'
    },
    nome: 'Você não pode me mudar'
})