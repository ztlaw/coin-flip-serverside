alert('working')

const button = document.querySelector('#button')
const h1 = document.querySelector('h1')

async function makeRequest(){
    const res = await fetch('/api')
    const data = await res.json()
    console.log(data)

    if (data.result === 'Tails'){
        h1.innerHTML = data.result
      
    }  else if (data.result === 'Heads'){
        h1.innerHTML = data.result
    }
}



button.addEventListener('click', makeRequest )
  
