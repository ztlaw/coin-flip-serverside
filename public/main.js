alert('working')

const button = document.querySelector('#button')

async function makeRequest(){
    const res = await fetch('/api')
    const data = await res.json()
}

button.addEventListener('click', makeRequest )