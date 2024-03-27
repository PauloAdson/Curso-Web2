// o hoisting faz com que as declarações vão para o topo (funciona com o var)

console.log('a =', a);
var a = 2;
console.log('a =', a);

console.log('b =', b);
let b;
console.log('b =', b);