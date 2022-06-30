// Render animals on the DOM
function renderAnimals(animal){
    let animalsDisplay = document.createElement("li");
    animalsDisplay.className = "listItem"
    animalsDisplay.innerHTML = `
        <img src="${animal.imageUrl}">
        <div class="content">
            <p class="animal-name>${animal.animalName}</p>
            <p class="animal-desc">${animal.description}</p>
            <p class="animal-donation">$${animal.donations} donated</p>
        </div>
    `
    console.log(animal.animalName);
    document.getElementById("animal-list").appendChild(animalsDisplay);
}

// fetch data function for all animals
function fetchDataFromServer(){
    fetch('http://localhost:3000/animalData')
    .then(response => response.json())
    .then(resultData => resultData.forEach(animal => renderAnimals(animal)))
}


// event listener for a form 
document.querySelector("form#animal-form").addEventListener('submit', handleSubmit);

//event handlers
function handleSubmit(e){
    e.preventDefault();
    let animalObj = {
        name:e.target.name.value,
        imageUrl:e.target.imageUrl.value,
        description:e.target.description.value,
        donations: 0
    }
    renderAnimals(animalObj);
    adoptAnimal(animalObj);
}


// using POST request to update our json file
function adoptAnimal(animalObj){
    fetch('http://localhost:3000/animalData', {     // takes in 2 arguments
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(animalObj)
    })
    .then(response => response.json())
    .then(animalData => console.log(animalData))
}