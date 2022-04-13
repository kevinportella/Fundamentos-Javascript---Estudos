const printResults = function(nota) {
  if(nota >= 7) {
    console.log('Approved! ' + nota)
  } else {
    console.log('Reproved! ' + nota)
  }
}

printResults(10)
printResults(6)
printResults('Ops!') // cuidado!!!