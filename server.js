const http = require('http')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const {readFileSync} = require('fs')

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

// app.put('/api', (req, res) => {
//     console.log(req.body)
// })