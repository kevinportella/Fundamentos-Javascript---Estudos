// A variável "var" ela é visível fora de um escopo somente se não for uma função

{ { { { var soma = 123 } } } }
console.log(soma);

function teste() {
    var local = 1234;
    console.log(local);
};

teste();
// console.log(local); Erro!

// uma variável fora de uma função, ela é global, pode ser acessada de qualquer lugar do projeto, e alterada tbm

// Dentro de uma função, ela é restrita a função

