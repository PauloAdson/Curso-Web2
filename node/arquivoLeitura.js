const { error, log } = require('console');
const fs = require('fs') //fs = file system

const caminho = __dirname + '/arquivo.json'

// sincrono...
const conteudo = fs.readFileSync(caminho, 'utf-8') // não é muito recomendado usar o readFileSync em arquivos muito grandes
console.log(conteudo);

// assincrono...
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}: ${config.db.port}`);
})

// lendo utilizando o require
const config = require('./arquivo.json')
console.log(config.db);

// leitura de uma pasta // __dirname é o diretório atual, pasta atual
fs.readdir(__dirname,(err, arquivos)=> {
    console.log('Conteúdo da pasta...');
    console.log(arquivos);
})