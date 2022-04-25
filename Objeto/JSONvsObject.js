const obj = {a: 1, b: 2, c: 3, soma(){return a + b + c}}
console.log(JSON.stringify(obj)) // ele só retorna dados

// console.log(JSON.parse("{a: 1, b: 2, c: 3}")) // não é um formato válido
// console.log(JSON.parse("{'a': 1, 'b': 2, 'c': 3}")) // não é um formato válido
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}')) // válido
console.log(JSON.parse('{"a": 1.7, "b": "string", "c": true, "d": {}, "e": [] }')) // válido
