const through = function(name, index) {
    console.log(`${index + 1}) ${name}`)
}

const approved = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

approved.forEach(through)

// Ou implementando nosso forEach

Array.prototype.forEach2 = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

approved.forEach2(function(name, index) {    // Ele vai chamar o elemento passando nome e índice
    console.log(`${index + 1}) ${name}`)
})
