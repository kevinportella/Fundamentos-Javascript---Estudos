// par nome/valor

const welcome = 'Olá'; // contexto léxico 1

function exec() {
    const welcome = 'Saalvee'; // contexto léxico 2
    return welcome; // é o mesmo nome de variável, porem por estar em escopo (contexto) diferente, ela não causa conflito
}

// Objetos são grupos aninhados de pares nome/valor

const client = {
    name: 'Pedro',
    age: 32,
    weight: 90,
    address: {
        log: 'Rua tal',
        number: 123
    }
}

console.log(welcome)
console.log(exec())
console.log(client)
