const express = require('express')
const mongoose = require('mongoose')

const app = express()

mongoose.connect("mongodb://frumento:fruma2003@ds123635.mlab.com:23635/goweekrodrigo", {
    useNewUrlParser: true
})

app.use(express.json())
app.use(require('./routes'))

app.listen(3000, () =>{
    console.log('Server started on port 3000')
    })