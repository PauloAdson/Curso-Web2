// Uma factory retorna um novo objeto // uma nova instância
module.exports = () => {
    return {
        valor: 1,
        incrementar() {
            this.valor++
        }
    }
}