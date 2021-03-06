const express = require('express')
const bodyParser = require('body-parser')
const ejs = require('ejs')

const app = express()
const port = process.env.PORT || 3000

if(process.env.NODE_ENV === 'production') {
    app.use((req, res, next) => {
      if (req.header('x-forwarded-proto') !== 'https')
        res.redirect(`https://${req.header('host')}${req.url}`)
      else
        next()
    })
  }

app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.json())


app.get('/', (req, res) => {
    res.render('index')
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/service', (req, res) => {
    res.render('service')
})






app.listen(port, () => {
    console.log('server is up, continue comerade')
})