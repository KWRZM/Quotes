const ktiba = document.querySelector('.box');
const button = document.querySelector('.button-6');
const author = document.querySelector('.author');
let quote = "";   
var language = navigator.language.slice(0,2);
document.getElementById('language').value = language;


button.addEventListener('click',(e) => {
    
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '800ae8a53cmsh3d151e008a08629p1ba1f3jsne282572d282c',
            'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
        }
    };

    fetch(`https://quotes15.p.rapidapi.com/quotes/random/?language_code=${language}`, options)
        .then(response => response.json())
        .then(response => {
            ktiba.style.display = 'flex';
            console.log(response);
            ktiba.textContent = '“' + response.content + '”';
            console.log(author)
            const div = document.createElement("div");
            div.classList.add("author");
            div.textContent = response.originator.name;
            ktiba.appendChild(div);
            
        })
        .catch(err => console.error(err));

});

function changerLangue() {
    var select = document.getElementById("language");
    var langue = select.options[select.selectedIndex].value;
    language = langue;
}