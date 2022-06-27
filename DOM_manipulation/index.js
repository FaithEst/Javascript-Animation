// Render animals on the DOM
function renderAnimals(animal){
    let animalsDisplay = document.createElement("li");
    animalsDisplay.className = "listItem"
    animalsDisplay.innerHTML = `
        <img src="${animal.imageUrl}">
        <p class="animal-name>${animal.animalName}</p>
        <p class="animal-desc">${animal.description}</p>
        <p class="animal-donation">${animal.donations}</p>
    `
    console.log(animal.animalName);
    document.getElementById("animal-list").appendChild(animalsDisplay);
}

// fetch data function
function getAnimalData(){
    animalData.forEach(animal => renderAnimals(animal));
}
getAnimalData();