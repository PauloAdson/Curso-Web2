const porta = 3003;

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const bancoDeDados = require('./bancoDeDados');

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos())
});

// Busca um produto pelo id
app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

// Adiciona um produto
app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // JSON
});

// Alterar um produto específico ou adicionar um novo, se já tiver um com o mesmo ID ele vai ser substituído
app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // JSON
});

// Serve para deletar um produto
app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto) // JSON
});

// listen = Ouvir tal porta no nosso caso é a 3003
app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`);
});