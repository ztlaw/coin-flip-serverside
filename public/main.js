alert('working')

const button = document.querySelector('#button')
const h1 = document.querySelector('h1')
const img = document.querySelector('.coin')

async function makeRequest(){
    const res = await fetch('/two')
    const data = await res.json()
    console.log(data)

    if (data.side === 2){
        h1.innerHTML = data.result
        img.src = 'https://upload.wikimedia.org/wikipedia/commons/5/5a/98_quarter_reverse.png'
      
    }  else if (data.side === 1){
        h1.innerHTML = data.result
        img.src = 'https://www.pngkey.com/png/full/146-1464786_400px-circle-quarter-heads-side-of-coin.png'
      
    }
   
}

button.addEventListener('click', makeRequest )
  
