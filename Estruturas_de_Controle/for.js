let counter = 1                       // declaração
while (counter <= 10) {               // expressão
    console.log(`Counter = ${counter}`)
    counter++                           // incremento
}

for (let i = 1; i <= 10; i++) {       // declaração, expressão, incremento
    console.log(`i = ${i}`)
}

const notes = [6.7, 7.4, 9.8, 8.1, 7.7]
for (let i = 0; i < notes.length; i++) {
    console.log(`note = ${notes[i]}`)
}
