// Entendendo como funciona o filter

Array.prototype.filter2 = function(callback) {
    const newArray = []

    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)){
            newArray.push(this[i])
        }
    }
    return newArray
}

const product = [
    {name: 'Notebook', price: 2499, fragile: true},
    {name: 'iPad Pro', price: 4199, fragile: true},
    {name: 'Glass', price: 12.49, fragile: true},
    {name: 'Plastic cup', price: 18.99, fragile: false},
]

// Retornar apenas os produtos frágeis e com preço maior que R$500

const fragile = product => product.fragile

const price = product => product.price >= 500

console.log(product.filter2(fragile).filter2(price))
