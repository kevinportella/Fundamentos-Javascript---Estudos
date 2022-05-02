const fs = require('fs')    // Modulo padrão do Node.js

const way = __dirname + '/file.json'    // __dirname representa o diretório atual

// Síncrono...     // não é recomendado
const content = fs.readFileSync(way, 'utf-8')

console.log(content)

// Assíncrono...
fs.readFile(way, 'utf-8', (err, content) => {
    const config = JSON.parse(content)
    console.log(`${config.db.host}: ${config.db.port}`)
})

// Ou...
const config =  require('./file.json')

console.log(config.db)
