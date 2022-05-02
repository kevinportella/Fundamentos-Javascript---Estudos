const fs = require('fs')

const product = {
    name: 'Iphone',
    price: 3999.99,
    discount: 0.15
}

fs.writeFile(__dirname + '/newFile.json', JSON.stringify(product), err => {
    console.log(err || 'Saved file!')
})
