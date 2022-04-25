// Object.preventExtensions

const product = Object.preventExtensions({
    name: 'What ever', price: 1.99, tag: 'promotion'
})

console.log('Extensível:', Object.isExtensible(product)) // product pode ser adicionado dados??? falso

product.name = 'Eraser'               // posso
product.description = 'Eraser school' // não posso
delete product.tag                    // posso

console.log(product)

// Object.seal

const person = { name: 'Juliana', age: 35}

Object.seal(person)
console.log('Sealed:', Object.isSealed(person)) // person esta selado??? verdadeiro

person.surname = 'Silva' // não posso
delete person.name       // não posso
product.age = 29         // posso

console.log(person)

// Object.freeze =  selado + valores constantes
