const person = {
    name: 'Rebeca',
    age: 2,
    weight: 13
}

console.log(Object.keys(person))    // imprime as chaves
console.log(Object.values(person))  // imprime os valores
console.log(Object.entries(person)) // imprime um array de chaves/valores

Object.entries(person).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})

Object.entries(person).forEach(([key, value]) => {
    console.log(`${key}: ${value}`) // resposta => chave: valor
})

Object.defineProperty(person, 'birthDate', {
    enumerable: true,
    writable: false,
    value: '01/01/2019'
})

person.birthDate = '01/01/2017'

console.log(person.birthDate)
console.log(Object.keys(person))

// Object.assign (ECMAScript 2015)

const dest = {a: 1};
const o1 = {b: 2};
const o2 = {c: 3, a: 4};
const obj = Object.assign(dest, o1, o2);

Object.freeze(obj)
obj.c = 1234

console.log(obj)
