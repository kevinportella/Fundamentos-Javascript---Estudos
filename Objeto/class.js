class Launch {
    constructor(name = 'Generic', value = 0) {
        this.name = name
        this.value = value
    }
}

class FinancialCycle {
    constructor(month, year) {
        this.month = month
        this.year = year
        this.launch = []
    }

    addLaunch(...launch) {
        launch.forEach(l => this.launch.push(l))
    }

    summary() {
        let consolidatedValue = 0
        this.launch.forEach(l => {
            consolidatedValue += l.value
        })
        return consolidatedValue
    }
}

const wage = new Launch('Wage', 45000)
const contaDeLuz = new Launch('Luz', -220)

const contas = new FinancialCycle(6, 2018)
contas.addLaunch(wage, contaDeLuz)

console.log(contas.summary())
