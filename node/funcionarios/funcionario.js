const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
    const funcionarios = response.data
    // console.log(funcionarios);
    const paisChina = china => china.pais = "China"
    const  mulher = ehMulher => ehMulher.genero = "F"
    const getMenorSalario = menorSalario => menorSalario.salario <= 3000
  
    console.log(funcionarios.filter(paisChina).filter(mulher).filter(getMenorSalario));
    console.log(funcionarios.filter(paisChina).filter(mulher).filter(getMenorSalario).length);
})