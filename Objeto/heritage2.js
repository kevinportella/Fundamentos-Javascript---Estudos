// Cadeia de protótipos (prototype chain)

Object.prototype.attr0 = '0' // don't do this at home!!!
const grandfather = {attr1: 'A'}
const father = {__proto__:grandfather,attr2: 'B'}
const son = {__proto__:father,attr3: 'C'}

console.log(son.attr0, son.attr1, son.attr2)  // ele percorre o filho, pai, avô, até o Object.prototype


const car = {
    currentSpeed: 0,
    maxSpeed: 200,
    speedUp(delta) {

            if (this.currentSpeed + delta <= this.maxSpeed) {
                this.currentSpeed += delta

        } else {

            this.currentSpeed = this.maxSpeed
        }
    },
    status() {
        return `${this.currentSpeed}km/h de ${this.maxSpeed}km/h`
    }
}

const ferrari = {
    model: 'F40',
    maxSpeed: 324 // shadowing
}

const volvo = {
    model: 'V40',
    status() {
        return `${this.model}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, car) // estabeleci relação Ferrari e Car
Object.setPrototypeOf(volvo, car)

console.log(ferrari)
console.log(volvo)

volvo.speedUp(100)
console.log(volvo.status())

ferrari.speedUp(300)
console.log(ferrari.status())
