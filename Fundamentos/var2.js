var number = 1;

{
    var number = 2;
    console.log('dentro =', number);
};

console.log('fora =', number)

// como a variável number não esta dentro de uma função, ele mudou a variável global
