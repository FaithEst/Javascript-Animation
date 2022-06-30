const initFunc = function(){
    const userForm = document.querySelector("form");
    userForm.addEventListener('submit', handleSubmitEvent);

    function handleSubmitEvent(e){
        e.preventDefault();
        const userInput = document.querySelector("input#searchByID").value;
        fetch(`http://localhost:3000/movies/${userInput}`)
        .then(response => response.json())
        .then(dataObj => {
            const h4 = document.querySelector("section#movieDetails h4");
            const p = document.querySelector("section#movieDetails p");

            h4.innerText = dataObj.title;
            p.innerText = dataObj.summary
        });
    }
}
document.addEventListener("DOMContentLoaded", initFunc);

// ------NICE WORK ------