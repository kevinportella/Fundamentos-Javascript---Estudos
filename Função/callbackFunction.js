const manufacture = ["Mercedes", "Audi", "BMW"]

function Print(name, index) {
    console.log(`${index + 1}. ${name}`)
}

manufacture.forEach(Print)
