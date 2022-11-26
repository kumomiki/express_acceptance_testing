// set up every variables that server may need
const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000

// set template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// set up css file
app.use(express.static('public'))

// set server
app.get('/', (req, res) => {
  res.render('index')
})

// set about page
app.get('/about', (req, res) => {
  res.render('about')
})

// set portfolio page
app.get('/portfolio', (req, res) => {
  res.render('portfolio')
})

// set contact page
app.get('/contact', (req, res) => {
  res.render('contact')
})

// listen to server
app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})
