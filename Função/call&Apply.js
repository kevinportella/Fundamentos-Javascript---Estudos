function getPrice(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.price * (1 - this.desc) * (1 + imposto)}`
}

const product = {
    name: 'Notebook',
    price: 4589,
    desc: 0.15,
    getPrice
}

console.log(getPrice())
console.log(product.getPrice())

// Call & Apply

const car = {
    price: 49990,
    desc: 0.20,
}

console.log(getPrice.call(car))
console.log(getPrice.apply(car))

console.log(getPrice.call(car, 0.17, '$'))
console.log(getPrice.apply(car, [0.17, '$']))
