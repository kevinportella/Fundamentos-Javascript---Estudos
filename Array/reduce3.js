// Entendendo como funciona o reduce

Array.prototype.reduce2 = function (callback) {
    let accumulator = this[0]
    for (let i = 1; i < this.length; i++) {
        accumulator = callback(accumulator, this[i], i, this)
    }
    return accumulator
}

const plus = (total, value) => total + value
const numbs = [1, 2, 3, 4, 5, 6]

console.log(numbs.reduce2(plus))
