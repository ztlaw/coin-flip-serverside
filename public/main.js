alert('working')

const button = document.querySelector('#button')
const h1 = document.querySelector('h1')
const img = document.querySelector('#coin-front-img')

async function makeRequest(){
    const res = await fetch('/api')
    const data = await res.json()
    console.log(data)

    if (data.result === 'Tails'){
        h1.innerHTML = data.results
      
    }  else if (data.result === 'Heads'){
        h1.innerHTML = data.results
      
    }
   
}



button.addEventListener('click', makeRequest )
  
