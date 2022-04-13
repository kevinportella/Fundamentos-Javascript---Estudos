const escola = "Cod3r";

console.log(escola.charAt(4)); // .charAt ele imprime somente a letra q eu quero dentro da variável, nesse caso a Quarta! primeira letra começa com 0
console.log(escola.charCodeAt(3)); // .charCodeAt imprime o código no numero 3 na tabela unicode
console.log(escola.indexOf('d')); // .indexOf imprime em qual índice está associado a letra d

console.log(escola.substring(1)); //.substring imprime a palavra começando pelo índice desejado
console.log(escola.substring(0, 3)); //.substring imprime a palavra começando pelo índice 0 e parando no índice 3 sem imprimir ele

console.log(escola.replace(3, 'e')); // .replace vai substituir o numero 3 pela letra e

console.log('Ana,Maria,Pedro'.split(',')); //.split transforma em um array
