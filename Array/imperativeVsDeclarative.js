const students = [
    { name: 'João', note: 7.9},
    { name: 'Maria', note: 9.2},
    { name: 'Bia', note: 8.9},
]

// Imperativa

let total1 = 0
for (let i = 0; i < students.length; i++) {
    total1 += students[i].note
}
console.log((total1 / students.length).toFixed(2))

// Declarativo => Much Better!!!

const getNote = student => student.note
const plus = (total, current) => total + current

const total2 = students.map(getNote).reduce(plus)

console.log((total2 / students.length).toFixed(2))
