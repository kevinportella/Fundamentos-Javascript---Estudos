let isActive = false;

console.log(isActive);

isActive = true;

console.log(isActive);

isActive = 1;

console.log(!!isActive); // ! significa negação, se eu por dois, é negativo com negativo da positivo!

console.log('os verdadeiros...');
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!!'text');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isActive = true));

console.log('os falsos...');
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isActive = false));

let name = '';

console.log(name || 'Desconhecido') // Se foi preenchido o nome, ele imprime o nome OU (||) ele imprime desconhecido
