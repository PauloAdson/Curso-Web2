// Minha Resolução
function salario(horasTrabalhadasPorMes, recebePorHora ) {
    const salario = horasTrabalhadasPorMes * recebePorHora 
    return `'Salário igual a R$ '${salario}`
}

console.log(salario(150, 40.5));

// Resolução do Curso

function calcularSalarioLiquido(HorasTrabalhadas, ganhoPorHora) {
    const salarioBruto = HorasTrabalhadas * ganhoPorHora
    const salarioLiquido = salarioBruto - salarioBruto * (30/100)
    return`Salário igual a R$ ${salarioLiquido}`
}

console.log(calcularSalarioLiquido(150, 40.5));