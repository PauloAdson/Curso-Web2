const escola = "Cod3r"

console.log(escola.charAt(4)); // charAt() pega a letra que está no índice indicado
console.log(escola.charAt(5)); // nesse caso vai retornar algo vazio, por não tem nada depois
console.log(escola.charCodeAt(3)); // pegamos o código desse caractere
console.log(escola.indexOf('3')); // ele verifica se há algo com esse caractere

console.log(escola.substring(1)); // retorna a parte da string entre os índices inicial e final, ou até o final da string
console.log(escola.substring(0, 3));

console.log('Escola '.concat(escola).concat("!")); // com ele podemos adicionar coisas com a concatenação
console.log('Escola ' + escola +"!"); // com ele podemos adicionar coisas com a concatenação
console.log(escola.replace(3, 'e')); // posso recolocar as coisas, tudo que for um 3 será substituído por um e
// Estudar regex depois

console.log('Ana,Maria,Pedro'.split(',')); // isso é um array


console.log('3' + 2); // O JS vai concatenar os número pois a string terá preferência
