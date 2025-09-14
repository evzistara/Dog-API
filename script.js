const dogFact = document.querySelector('.dog-fact')
const btn = document.querySelector('button')

btn.addEventListener('click', fetchDogFact)

async function fetchDogFact(){
const response = await fetch("https://dogapi.dog/api/v2/facts");
const data = await response.json();
let newFact = data.data[0].attributes.body;
dogFact.textContent = newFact;
    }

