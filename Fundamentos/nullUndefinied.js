let valor
console.log(valor);

valor = null; // null é ausência de valor
console.log(valor);
// console.log(valor.toString()); // Erro! não posso acessar oq é nullo ou não definido

const product = {}
console.log(product.preco);
console.log(product);

product.preco = 3.5
console.log(product);

product.preco = undefined // evite atribuir undefined
console.log(!!product.preco);
console.log(product);

product.preco = null // sem preço
console.log(!!product.preco);
console.log(product);