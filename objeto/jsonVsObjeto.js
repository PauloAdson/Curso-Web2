const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c } }
console.log(JSON.stringify(obj)); // O objeto vai se tornar em um JSON

// console.log(JSON.parse("{a:1,b:2,c:3}"));
// console.log(JSON.parse("{'a':1,'b':2,'c':3}"));
console.log(JSON.parse('{"a":1,"b":2,"c":3}')); // O JSON vai se tornar um objeto // O formato correto é esse

console.log(JSON.parse('{ "a": 1.7, "b": "string", "c": true, "d": {}, "e": [ ]}'));