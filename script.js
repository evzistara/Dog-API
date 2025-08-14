const dogFact = document.querySelector('.dog-fact')
const btn = document.querySelector('button')


btn.addEventListener('click', fetchDogFact)

function fetchDogFact(){
fetch("https://dogapi.dog/api/v2/facts")
.then(res => res.json())
.then(data => 
    {
        let newFact = data.data[0].attributes.body;
        dogFact.textContent = newFact;

    }
)

}

