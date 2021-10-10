const fact = document.querySelector('#fact')
const button = document.querySelector('#buttonNewFact')

const getChuckNorrisFact = function(){
    fetch('https://api.chucknorris.io/jokes/random')
    .then(res => res.json())
    .then(function(res){
        fact.textContent = res.value
    }).catch(function(){
        fact.textContent = 'problems about API'
    })
}

getChuckNorrisFact()

button.addEventListener('click', getChuckNorrisFact)

