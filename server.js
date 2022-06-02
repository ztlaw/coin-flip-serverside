const http = require('http')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const {readFileSync} = require('fs')

const coinFront = readFileSync('images/coin-front.png')
const coinBack = readFileSync('images/coin-back.png')

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
    let result;
    let image;
//what goes in here? the results to the coin flip 
function coinFlip(){
    const flip = Math.ceil(Math.random() * 2)
    if (flip == 1){
        result = 'Heads';
        image = coinBack
        console.log(result)
    }
    else if (flip == 2){
        result = 'Tails';
        image = coinFront
        console.log(result)
    }
}
coinFlip()
const objToJson = {result}
res.send(objToJson)






})

// app.put('/api', (req, res) => {
//     console.log(req.body)
// })