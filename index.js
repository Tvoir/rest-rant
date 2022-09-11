const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send("We out here!")
})

app.listen(3000)