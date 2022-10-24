const express = require('express')
const app = express()
const port = process.env.PORT || 5000;

const courses = require('./data/courses.json')

const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
    res.send('Code Academy Running')
})

app.get('/courses', (req, res) => {
    res.send(courses)
})

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const course = courses.find(cr => cr.id == id)
    res.send(course)
})

app.listen(port, () => {
    console.log(`Code Acdemy listening on port ${port}`)
})