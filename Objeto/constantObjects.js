// pessoa -> 123 -> {...}

const person = {name: 'João'}
person.name = 'Pedro'

console.log(person)

// pessoa -> 456 -> {...}

//person = {name: 'Ana'}

Object.freeze(person) // Congelei o Objeto, ele não pode ser mudado

person.name = 'Maria'
person.log = 'Rua ABC'
delete person.name

console.log(person.name)
console.log(person)

const personConstant = Object.freeze({name: 'João'}) // ja criei congelada
personConstant.name = 'Maria'

console.log(personConstant)
