const printResults = function (nota) {
    switch (Math.floor(nota)) {
        case 10: case 9:
            console.log('Honor board')
            break                       // Sem o break, ele vai sair executando todos os consoles
        case 8: case 7:
            console.log('Approved')
            break
        case 6: case 5: case 4:
            console.log('Recovery')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reproved')
            break
        default:
            console.log('Invalid grade')
    }
}

printResults(10)
printResults(8.9)
printResults(6.55)
printResults(2.3)
printResults(-1)
printResults(11)
