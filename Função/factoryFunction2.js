function createProduct(name, price) {
 return {
     name,
     price,
     discount: 0.1
 }
}

console.log(createProduct('Cell', 2199.49))
