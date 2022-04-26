const students = [
    { name: 'João', note: 7.3, scholarship: false},
    { name: 'Maria', note: 9.2, scholarship: true},
    { name: 'Pedro', note: 9.8, scholarship: false},
    { name: 'Ana', note: 8.7, scholarship: true}
]

// Todos os alunos são bolsistas?

const allScholarship = (results, scholarship) => results && scholarship     // Todos tem q dar todos true
console.log(students.map(s => s.scholarship).reduce(allScholarship))

// Algum aluno é bolsista?

const anyScholarship = (results, scholarship) => results || scholarship     // Se pelo menos 1 for
console.log(students.map(s => s.scholarship).reduce(anyScholarship))
