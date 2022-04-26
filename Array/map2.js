const cart = [
    '{"name": "Erase", "price": 3.45}',
    '{"name": "notebook", "price": 13.90}',
    '{"name": "Kit pencils", "price": 41.22}',
    '{"name": "Pen", "price": 7.50}'
]

// Retornar um array apenas com os preços

const forObject = json => JSON.parse(json)  // transforma
const onlyPrice = product => product.price  // busca somente o preço

const results = cart.map(forObject).map(onlyPrice)
console.log(results)
