
const cors = require('cors')
const http = require('http')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const {readFileSync} = require('fs')
const PORT = 8000

const headsImage = readFileSync('images/coin-front.png');
const tailsImage = readFileSync('images/coin-back.png');
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))

app.use(express.static('public')) // intitializing Express -- which allows us to update the HTML elements with JS
app.use(bodyParser.json())



app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/two', (req, res) => {
function coinFlip(){
    const flip = Math.ceil(Math.random() * 2)
    if (flip == 1){
        results = {
            result: 'Heads',
            side: flip, 
          //  img: how can i add an image that gets served with to the client? 

        }
        console.log(results)
    }
    else if (flip == 2){
        results = {
            result: 'Tails',
            side: flip, 
          //  img: how can i add an image that gets served with to the client? 

        }
        console.log(results)
    }
}
coinFlip()
res.json(results)


})
app.listen(process.env.PORT || PORT, _ => {
    console.log('Network connection: successful')
} )