function Pessoa() {
    this.idade = 0

    const self = this
    setInterval(function () {
        self.idade++
        console.log(self.idade);
    }/*.bind(this)*//*com o bind funciona também*/, 1000) // é representado em milisegundos 1000 = 1 segundo
}

new Pessoa