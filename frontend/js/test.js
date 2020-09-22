


document.getElementById("test").innerHTML = "<p>JE suis le nouvel élement</p>"

//Ma Base de donné
const variable = [
    "noir",
    "rouge",
    "bleu",
    "violet"
]

console.log(variable);

//Selectionné l'endroit a ajouter HTML
let select = document.getElementById("var");

variable.forEach(element => {
    console.log(element);
    //Créer mon élémenemt
    let option = document.createElement('option')
    option.innerText = element;
    //Ajouter au HTML
    select.append(option) ;
});


var request = new XMLHttpRequest();
request.open("GET", "http://localhost:3000/api/furniture");
request.send();