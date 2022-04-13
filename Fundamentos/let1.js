var number = 1 ;

{
  let number = 2; // let tem escopo global, de função e de bloco
  console.log('dentro =', number); 
}

console.log('fora =', number);