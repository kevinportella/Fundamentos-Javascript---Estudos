Number.prototype.entre = function (start, finish) {
    return this >= start && this <= finish
};

const printResults = function (nota) {

    if (nota.entre(9, 10)) {

        console.log('Honor board')

    } else if (nota.entre(7, 8.99)) {

        console.log('Approved')

    } else if (nota.entre(4, 6.99)) {

        console.log('Recovery')

    } else if (nota.entre(0, 3.99)) {

        console.log('Reproved')

    } else {

        console.log('Invalid grade')

    }
}

printResults(10)
printResults(8.9)
printResults(6.55)
printResults(2.3)
printResults(-1)
printResults(11)
