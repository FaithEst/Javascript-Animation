function myInit(){
    const inputForm = document.querySelector('form'); //gets the 1st form
    inputForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = document.querySelector('input#searchByID').value;

        fetch(`http://localhost:3000/movies/${input}`)
        .then((response) => response.json())
        .then((data) => {
            const title = document.querySelector('section#movieDetails h4');
            const summary = document.querySelector('section#movieDetails p');

            title.innerText = data.title;
            summary.innerText = data.summary;
        });
    });
}

document.addEventListener('DOMContentLoaded', myInit);
