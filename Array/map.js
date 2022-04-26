// Gera um array com a mesma quantidade de elementos, porem com valores alterados

// Um array com os valores dobrados:

const numbs = [1, 2, 3, 4, 5]

// For com propósito

const double = function(e) {
    return e * 2
}

let results = numbs.map(double)

console.log(results)

const plus10 = e => e + 10
const triple = e => e * 3
const forMoney = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

results = numbs.map(plus10).map(triple).map(forMoney)   // enquanto for array, pode ser chamado o map consecutivamente

console.log(results)    // 1 único array, porem foram feitas 3 operações
