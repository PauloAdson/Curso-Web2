console.log(this === global);
console.log(this === module);
console.log(this === module.exports); //true
console.log(this === exports); //true

function logThis() {
    console.log('Dentro de uma função...');
    console.log(this === exports);
    console.log(this === module.exports);
    console.log('o this dentro de uma função, aponta para o global?',this === global);

}

logThis()
