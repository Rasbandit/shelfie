require('dotenv').config()

const Express = require('express')
const Massive = require('massive')
const BodyParser = require('body-parser')
const ct = require('./controller')

const app = Express()
app.use(BodyParser.json())

let {CONNECTION_STRING} = process.env

Massive(CONNECTION_STRING).then((db)=>{
    app.set('db',db)
    console.log("Funky Towne has das DATA!")
    app.listen(5100,console.log("Welcome to Das Funky Towne! Listenin' on port 5.1k!"))
})

app.get('/api/inventory',ct.getInv)
app.post('/api/product',ct.createProduct)
app.delete('/api/product/:id',ct.deleteProduct)
app.put('/api/product/:id',ct.editProduct)
