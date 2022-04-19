const grades = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// Sem usar callback // adicionar todas as notas abaixo de 7 em um array

const lowGrades = []
for (let i in grades) {
    if (grades[i] < 7) {
        lowGrades.push(grades[i])
    }
}

console.log(lowGrades)

// Com callback

const lowGrades2 = grades.filter(function (grade) {
    return grade <= 7
})

console.log(lowGrades2)

// Com callback e arrow function

const lowGrades3 = grades.filter(grade => grade <= 7)

console.log(lowGrades3)

// Eu que fiz:

function Low(grade) {
    return grade <= 7
}

const lowGrades4 = grades.filter(Low)

console.log(lowGrades4)

// Ou:

const Notes = grade => grade <= 7

const lowGrades5 = grades.filter(Notes)

console.log(lowGrades5)
