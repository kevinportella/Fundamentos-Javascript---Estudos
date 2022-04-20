// coleção dinâmica de pares chave/valor

const product = new Object
product.name = 'Chair'
product['product brand'] = 'Generic'
product.price = 220


console.log(product)

delete product.price
delete product['product brand']
console.log(product)

const car = {
    model: 'A4',
    value: 89000,
    owner: {
        name: 'Raul',
        age: 56,
        address: {
            log: 'Rua ABC',
            number: 123
        }
    },
    conductors: [{
        name: 'Junior',
        age: 19
    }, {
        name: 'Ana',
        age: 42
    }],
    calcSafeValue: function() {
        //...
    }
}

car.owner.address.number = 1000
car ['owner'] ['address'] ['log'] = 'Av Giant'

console.log(car)

delete car.conductors
delete car.owner.address
delete car.calcSafeValue

console.log(car)
console.log(car.conductors)
// console.log(car.conductors.length)  // erro
