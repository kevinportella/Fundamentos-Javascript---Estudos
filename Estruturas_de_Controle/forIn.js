const notes = [6.7, 7.4, 9.8, 8.1, 7.7]

for (let i in notes) {
  console.log(i, notes[i]);
}

const person = {
  name: 'Ana',
  surname: 'Silva',
  age: 29,
  weight: 60
}

for (let attribution in person) {
  console.log(`${attribution} = ${person[attribution]}`)
}