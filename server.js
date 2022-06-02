const http = require('http')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(bodyParser.urlencoded({extended: true}))

app.use(express.static('public')) // intitializing Express -- which allows us to update the HTML elements with JS
app.use(bodyParser.json())


app.listen(3000, _ => {
    console.log('Listening on 3000...')
} )

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api', (req, res) => {
//what goes in here? the results to the coin flip 
const coinFlip = Math.ceil(Math.random() * 2)
if(coinFlip === 1){
    res.json({'solution': 'HEADS'})
}  else if(coinFlip === 2){
    res.json({'solution': 'TAILS'})
}

console.log(coinFlip)
})