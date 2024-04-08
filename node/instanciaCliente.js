const contadorA = require("./instanciaUnica");
const contadorB = require("./instanciaUnica");

const contadorC = require("./instanciaNova")/*esse require retorna uma função factory*/()/*isso retorna um objeto*/
const contadorD = require("./instanciaNova")()

contadorA.incrementar()
contadorA.incrementar()
console.log(contadorB.valor); // vai retorna 3, pois o contador A e B estão com cache do arquivo

contadorC.incrementar()
contadorC.incrementar()
console.log(contadorC.valor, contadorD.valor);