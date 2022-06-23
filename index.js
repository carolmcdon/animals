document.addEventListener('DOMContentLoaded', () => {
    console.log('The DOM has loaded')

function getAnimals() {
    fetch('https://zoo-animal-api.herokuapp.com/animals/rand/8')
    .then(res=>res.json())
    .then(animals=>animals.forEach(animal => renderAnimal(animal)))
}

getAnimals()

function renderAnimal(animal) {
    const animalDetailsDiv = document.querySelector('#animalDetails')
    const animalCardDiv = document.createElement('div')
    animalCardDiv.id = "animalCard"

    const animalName = document.createElement('h2')
    animalName.textContent = animal.name

    const animalImage = document.createElement('img')
    animalImage.src = animal.image_link

    const animalType = document.createElement('li')
    animalType.textContent = `Animal Type: ${animal.animal_type}`

    const activeType = document.createElement('li')
    activeType.textContent = `Active Time: ${animal.active_time}`

    const lifespan = document.createElement('li')
    lifespan.textContent = `Lifespan: ${animal.lifespan}`

    const habitat = document.createElement('li')
    habitat.textContent = `Habitat: ${animal.habitat}`
    
    const diet = document.createElement('li')
    diet.textContent = `Diet: ${animal.diet}`
    
    const geoRange = document.createElement('li')
    geoRange.textContent = `Located: ${animal.geo_range}`

    const nameForm = document.createElement('form')
    if (nameForm) {
    let HTML = '<form method="GET" action="?submit" onsubmit="return !formSubmitted()">';
    HTML += '<label for="animalName">Name this animal: </label>';
    HTML += '<input type="text" name="nameOfAnimal" />';
    HTML += '<input type="submit" value="Submit" />';
    HTML += '</form>';
    nameForm.innerHTML = HTML;

    animalDetailsDiv.append(animalCardDiv)
    animalCardDiv.append(animalName, animalImage, animalType, activeType, lifespan, habitat, diet, geoRange, nameForm)

    nameForm.addEventListener('submit', (e) => {
        e.preventDefault()
        
        const newName = document.createElement('h3')
        newName.textContent = e.target.nameOfAnimal.value

        animalName.append(newName)
        nameForm.reset()
    })
}
}
})

function getMoreAnimals () {
    const btn = document.querySelector('button')
    
    btn.addEventListener('click', () => {
        location.reload()
    })
}

getMoreAnimals()



