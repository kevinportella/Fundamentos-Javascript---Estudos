let double = function (a) {
    return 2 * a
}

double = (a) => {
    return 2 * a
}

double = a => 2 * a // função de uma única linha pode ser escrita assim pois o return ja esta implícito
console.log(double(Math.PI))

let hello = function () {
    return 'Hello'
}

hello = () => 'Hello'
hello = _ => 'Hello' // possui param
console.log(hello())
