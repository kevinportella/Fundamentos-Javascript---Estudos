const port = 3003

const db = require('./database')
const express = require('express')

const app = express()

app.get('/products', (req, res, next) => {
    res.send(db.getProducts())
})

app.get('/products/:id', (req, res, next) => {})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
