/* Reduce vai buscar os dois primeiro índices do Array e fazer alguma operação,
 ou aplicar alguma função, reduzindo ele a apenas 1 índice */

const students = [
    { name: 'João', note: 7.3, scholarship: false},
    { name: 'Maria', note: 9.2, scholarship: true},
    { name: 'Pedro', note: 9.8, scholarship: false},
    { name: 'Ana', note: 8.7, scholarship: true}
]

const plus = function(accumulator, current) {
    console.log(accumulator, current)
    return accumulator + current
}   // Ele vai somar os dois primeiros índices, acumular, e somar com o terceiro...
    // Vai acumular de novo, e somar com o quarto...

const results = students.map(a => a.note).reduce(plus)
// const results = students.map(a => a.note).reduce(plus, 10)    // Ele inicia com 10

console.log(results)    // Resultado da soma total do array
