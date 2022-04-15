function getRandomInteger(min, max) {
  const valor = Math.random() * (max - min) + min
  return Math.floor(valor)
}

let opt = 0

do {   
  opt = getRandomInteger(-1, 10)
  console.log(`Option chosen was ${opt}.`)
} while (opt != -1)

console.log('See you soon!!!')