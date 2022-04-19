function Car(maxVelocity = 200, delta = 5) {

    // atributo privado
    let currentSpeed = 0

    // método público
    this.speedUp = function () {                  // O uso do "this" torna a função em método público
        if (currentSpeed + delta <= maxVelocity) {
            currentSpeed += delta
        } else {
            currentSpeed = maxVelocity
        }
    }

    // método público
    this.getCurrentSpeed = function () {
        return currentSpeed
    }
}

const uno = new Car
uno.speedUp()
console.log(uno.getCurrentSpeed())

const Ferrari = new Car(350, 20)
Ferrari.speedUp() // 20
Ferrari.speedUp() // 20
Ferrari.speedUp() // 20 = 60
console.log(Ferrari.getCurrentSpeed())
