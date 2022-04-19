const soma = function (x, y) { // função anonima
    return x + y
}

const sub = function (x, y) {
    return x - y
}

const printResults = function (a, b, operation = soma) {
    console.log(operation(a, b))
}

printResults(3, 4)
printResults(3, 4, soma)
printResults(3, 4, sub)
printResults(3, 4, function (x, y) {
    return x * y
})
printResults(3, 5, (x, y) => x / y)

const person = {
    say: function () {
        console.log('Hello')
    }
}

person.say()
