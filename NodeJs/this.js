console.log(this === global)             // Fora de uma função não
console.log(this === exports)            // Fora de uma função sim

function logThis() {
    console.log('Inside a function...')
    console.log(this === exports)        // Dentro de uma função não
    console.log(this === module.exports) // Dentro de uma função não
    console.log(this === global)         // Dentro de uma função sim
}

logThis()
