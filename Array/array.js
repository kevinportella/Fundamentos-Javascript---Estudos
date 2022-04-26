// Array é um Objeto
// É uma estrutura indexada, começando do ZER0

console.log(typeof Array, typeof new Array, typeof [])

// Trabalhar com dados homogêneos, sempre!

let approved = new Array('Bia', 'Carlos', 'Ana')
console.log(approved)

approved = ['Bia', 'Carlos', 'Ana']
console.log(approved[0]) // acessar o índice 0 do array approved
console.log(approved[1])
console.log(approved[2])
console.log(approved[3]) // undefined

approved[3] = 'Paulo'    // adiciona elementos no índice 3
approved.push('Abia')    // adiciona elementos no final do array até aquele instante

console.log(approved.length)
console.log(approved)

approved[9] = 'Rafael'   // adiciona no índice 9, ele vai preencher com itens undefined
console.log(approved.length)
console.log(approved)

console.log(approved[8] === undefined)
console.log(approved[8] === null)

approved.sort()          // embaralha os itens dentro do array
console.log(approved)

delete approved[1]       // ao deletar, o array não será reordenado
console.log(approved)
console.log(approved[1])
console.log(approved[2])

approved = ['Bia', 'Carlos', 'Ana']
approved.splice(1, 2, 'Element1', 'Element2')    // ele começa no Carlos e deleta o Carlos, e adiciona os elementos a partir do Carlos
console.log(approved)
