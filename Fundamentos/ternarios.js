// um operador ternário é composto por 3 partes
// 1 parte: expressão, ela sempre vai retornar true  ou false
// 2 parte: condição
// 3 parte: retorno

const result = nota => nota >= 7 ? 'Approved' : 'Reproved'

console.log(result(7.1))
console.log(result(6.1))