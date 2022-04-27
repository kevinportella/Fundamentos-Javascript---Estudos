const counterA = require('./singleInstance')    // Retorna objeto
const counterB = require('./singleInstance')    // Retorna objeto

const counterC = require('./newInstance')()    // Retorna função
const counterD = require('./newInstance')()    // Retorna função

counterA.inc()
counterA.inc()
console.log(counterA.value, counterB.value)

counterC.inc()
counterC.inc()
console.log(counterC.value, counterD.value)
