const peso1 = 1.0;
const peso2 = Number('2.0');

console.log(peso1, peso2);
console.log(Number.isInteger(peso1)); // .isInteger pergunta se o valor de media é inteiro = boolean
console.log(Number.isInteger(peso2));

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);

console.log(media.toFixed(2)); // .toFixed ele mostra somente a quantidade de casas decimais q vc decidir.
console.log(media.toString()); // .toString transforma o valor do tipo number em uma string
console.log(typeof media);
