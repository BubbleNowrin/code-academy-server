const express = require('express')
const app = express()
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Code Academy Running')
})

app.listen(port, () => {
    console.log(`Code Acdemy listening on port ${port}`)
})