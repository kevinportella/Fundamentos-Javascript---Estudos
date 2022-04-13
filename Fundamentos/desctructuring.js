// operador de desestruturação;

const person = {
  name: 'Ana',
  age: 5,
  address: {
    log: 'Rua tal',
    number: 1000
  }
};

const { name, age } = person; // tire de dentro do objeto o atributo name e age
console.log(name, age)

const { name: n, age: i } = person // tire do objeto e crie a variável n e i para seus respectivos valores
console.log(n, i);

const { sobrenome, bemHumorada = true} = person; // não existem essas atribuições dentro desse objeto
console.log(sobrenome, bemHumorada);

const {address: { log, number, cep} } = person;
console.log(log, number, cep);
