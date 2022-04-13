let preco = 19.90;
let desconto = 0.4;

// operação igual na matemática

console.log(preco * (1 - desconto));

let precoComDesconto = preco * (1 - desconto)

console.log(precoComDesconto);

let nome = "Caderno";
let categoria = "Papelaria"

// utilizando a concatenação, posso unir string com dados //

console.log("Produto: " + nome 
  + ", Categoria: " + categoria 
  + ", Preço: " + preco 
  + ", Desconto: " + desconto 
  + ", Preço a Vista: " + precoComDesconto);