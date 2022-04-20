// Usando a notação literal

const obj1 = {}
console.log(obj1)

// Object em JS

console.log(typeof Object, typeof new Object)

const obj2 = new Object
console.log(obj2)

// Funções construtoras

function Product(name, price, desc) {
    this.name = name
    this.getPriceWithDesc = () => {
        return price * (1 - desc)
    }
}

const p1 = new Product('Pencil', 7.99, 0.15)
const p2 = new Product('Notebook', 2998.99, 0.25)

console.log(p1, p2)
console.log(p1.getPriceWithDesc(), p2.getPriceWithDesc())

// Função Factory

function createEmployee(name, baseSalary, faults) {
    return {
        name,
        baseSalary,
        faults,
        getSalary() {
            return(baseSalary / 30) * (30 - faults)
        }
    }
}

const f1 = createEmployee('João', 7980, 4)
const f2 = createEmployee('Maria', 11400, 1)

console.log(f1.getSalary(), f2.getSalary())

// Object.create

const daughter = Object.create(null)
daughter.name = 'Ana'
console.log(daughter)

// Uma função famosa que retorna um Objeto...

const fromJSON = JSON.parse('{"info": "I am a JSON"}')
console.log(fromJSON.info)
