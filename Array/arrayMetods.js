const pilots = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilots.pop()  // remove o ultimo elemento do Array

pilots.push('Verstappen')  // add no ultimo índice do Array
console.log(pilots)

pilots.shift()  // remove o primeiro elemento do Array
console.log(pilots)

pilots.unshift('Hamilton')  // add no primeiro elemento do Array
console.log(pilots)

// splice pode adicionar e remover elementos dentro do array

// adicionar
pilots.splice(2, 0, 'Bottas', 'Massa')
console.log(pilots)

// remover
pilots.splice(3, 1)
console.log(pilots)

const anyPilots1 = pilots.slice(2)  // gera um novo array a partir do índice determinado (2)
console.log(anyPilots1)

const anyPilots2 = pilots.slice(1, 4) // ele vai imprimir o índice 1 mas não o índice 4
console.log(anyPilots2)
