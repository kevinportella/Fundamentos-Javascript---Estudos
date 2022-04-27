// Buscar dentro dos dados mulheres chinesas com menor salário

const axios = require('axios')

const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'

const chineses = f => f.pais === 'China'
const women = f => f.genero === 'F'
const lowerSalary = (employee, currentEmployee) => {
    return employee.salario < currentEmployee.salario ? employee : currentEmployee
}

axios.get(url).then(response => {
    const employees = response.data
    // console.log(employees)

    // mulheres chinesas com menor salário?

    const employ = employees
        .filter(chineses)
        .filter(women)
        .reduce(lowerSalary)

    console.log(employ)
})

