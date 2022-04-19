// Higher-order function

// criar de forma literal
function name1(params) { };

// Armazenar em uma variável
const name2 = function (params) { };

// Armazenar em um Array
const array = [function name3(a, b) { return a + b }, name1, name2]

console.log(array[0](2, 3))

// Armazenas em um atributo de objeto
const obj = {}
obj.say = function () { return 'Opa' }
console.log(obj.say())

// Passar uma função como param
function run(fun) {
    fun()
}

run(function () { console.log('Running...') })

// Uma função pode retornar/conter uma função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(4)
