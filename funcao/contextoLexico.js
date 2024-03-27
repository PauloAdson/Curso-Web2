const valor = 'Global';

function minhaFuncao() {
    console.log('Global');
}

function  exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec()