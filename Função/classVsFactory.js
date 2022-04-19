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

// Função factory

const createPerson = name => {
    return {
        say: () => console.log(`My name is ${name}`)
    }
}

const p2 = createPerson('João')
p2.say()
