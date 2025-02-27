// Arrow Function de uma única linha
const soma = (a, b) => a + b
console.log(soma(2, 3));

// Arrow Function de múltiplhas linhas deve ter o return
const soma2 = (a, b) => {
    return a + b
}
console.log(soma2(3, 3));

// Arrow Function (this)
const lexico1 = () => console.log(this === exports);
lexico1()

// parametro default
function log(texto = 'Node') {
    console.log(texto);
}

log(); // defino o valor padrão
log(undefined); // defino o valor padrão
log(null); // defino o valor null
log('sou mais forte que o valor padrão');

// operador rest 3 pontinhos
function total(...numeros) {
    let total = 0;
    numeros.forEach(n => total += n);
    return total;
}
console.log(total(2, 3, 4, 5));
