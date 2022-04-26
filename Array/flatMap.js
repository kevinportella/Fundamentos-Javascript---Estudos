const school = [{
    class: 'Turma M1',
    students: [{
        name: 'Gustavo',
        note: 8.1
    }, {
        name: 'Ana',
        note: 9.3
    }]
}, {
    class: 'Turma M2',
    students: [{
        name: 'Rebeca',
        note: 8.9
    }, {
        name: 'Roberto',
        note: 7.3
    }]
}]

const getStudentGrade = s => s.note                            // s => student
const getClassGrade = c => c.students.map(getStudentGrade)     // c => class

const notes1 = school.map(getClassGrade)
console.log(notes1)

// console.log([].concat([ 8.1, 9.3 ], [ 8.9, 7.3 ]))

Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const notes2 = school.flatMap(getClassGrade)
console.log(notes2)
