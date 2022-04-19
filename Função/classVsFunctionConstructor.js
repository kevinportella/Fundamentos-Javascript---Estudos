class Person {
    constructor(name) {
        this.name = name
    }

    say() {
        console.log(`My name is ${this.name}`)
    }
}

const p1 = new Person('João')
p1.say()

// Função construtora

function createPerson(name) {
    this.name = name

    this.say = function() {
        console.log(`My name is ${this.name}`)
    }
}

const p2 = new createPerson('João')
p2.say()
