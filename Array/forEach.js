// Formas de percorrer um array

const approved = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

approved.forEach(function(name, index) {    // Ele vai chamar o elemento passando nome e índice
    console.log(`${index + 1}) ${name}`)
})

approved.forEach(name => console.log(name)) // Não precisa passar parâmetros. Pode simplesmente pedir pra ele percorrer o array

const showApproved = approved => console.log(approved) // Posso salver essa função numa constante
approved.forEach(showApproved)                         // e passar para o forEach

