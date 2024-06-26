const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'];
pilotos.pop() // o pop remove o último elemento do array
console.log(pilotos);

pilotos.push('Verstappen')
console.log(pilotos);

pilotos.shift() // remove o primeiro elemento
console.log(pilotos);

pilotos.unshift('Hamilton')
console.log(pilotos);

// splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos);

// remover

pilotos.splice(3, 1) // a partir do indice 3 vai ser removido 1 
console.log(pilotos);

const algunsPilotos1 = pilotos.slice(2) // novo array
console.log(algunsPilotos1);

const algunsPilotos2 = pilotos.slice(1, 4) // novo array
console.log(algunsPilotos2);