function getRandomInteger(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opt = 0

while (opt != -1) {   // ele vai sortear aleatoriamente os números até sair o "-1", e então parar.
    opt = getRandomInteger(-1, 10)
    console.log(`Option chosen was ${opt}.`)
}

console.log('See you soon!!!')
