// function for rendering the images
function renderAnimals(theObj){
    const animalList = document.querySelector("ul#animal-list");
    const listItem = document.createElement("li");
    listItem.className = "listItem";
    listItem.innerHTML = `
        <img src="${theObj.imageUrl}">
        <p class="listName">${theObj.animalName}</p>
        <p class="description">${theObj.description}</p>
        <p class="donations">$${theObj.donations} donated</p>
    `
    animalList.appendChild(listItem);
}

// fetch object function
function fetchObject(){
    fetch(`http://localhost:3000/animalData`)
    .then(response => response.json())
    .then((animalObj) =>  animalObj.forEach(animal => renderAnimals(animal)))
}

fetchObject();

// ---------- NICE WORK ------------