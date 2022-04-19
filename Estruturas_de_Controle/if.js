function godNews(nota) {

    if (nota >= 7) {  // se essa condição for cumprida, esse bloco vai ser executado

        console.log('Approved: ' + nota)

    }
}

godNews(8.1)
godNews(6.1)

function ifTrue(valor) {
    if (valor) {
        console.log(`It's true...` + valor)
    }
}

ifTrue()       // false
ifTrue(null)   // false
ifTrue(undefined) // false
ifTrue(NaN)    // false
ifTrue('')     // false
ifTrue(0)      // false
ifTrue(-1)     // true
ifTrue(' ')    // true
ifTrue('?')    // true
ifTrue([])     // true
ifTrue([1, 2]) // true
ifTrue({})     // true
