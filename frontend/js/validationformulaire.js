let form = document.querySelector('#myForm')

//ecouter la modification de l'email
form.email.addEventListener('change', function() {
    validemail(this)
});

//ecouter la modification du prenom
form.firstName.addEventListener('change', function() {
    validfirstName(this)
});

//ecouter la modification du nom
form.lastName.addEventListener('change', function() {
    validlastName(this)
});

//ecouter la modification de l'adresse
form.address.addEventListener('change', function() {
    validaddress(this)
});

//ecouter la modification de la ville
form.city.addEventListener('change', function() {
    validcity(this)
});

//ecouter la validation du formulaire
form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (validfirstName(form.firstName) && validlastName(form.lastName) && validemail(form.email) && validaddress(form.address) && validcity(form.city)) {

        // creation de la constante avec le form + le tableaux des id produit

        let contact = {
            firstName: form.firstName.value,
            lastName: form.lastName.value,
            address: form.address.value,
            city: form.city.value,
            email: form.email.value,
        };
        let products = JSON.parse(localStorage.getItem("ProductId"));
        console.log(products);
        let objData = {
            contact,
            products,
        };

        let objetRequest = JSON.stringify(objData);
        console.log(objetRequest);
        var request = new XMLHttpRequest();
        request.open("POST", "http://localhost:3000/api/cameras/order");
        request.setRequestHeader("Content-Type", "application/json");
        request.onreadystatechange = function() {
            if (this.readyState == XMLHttpRequest.DONE) {
                console.log(this.responseText);
                // Récupération de la réponse du serveur
                localStorage.setItem("order", this.responseText);
                // Redirection vers la page de confirmation
                // window.location.href = "confirmationdecommande.html";
            }
        };
        request.send(objetRequest);
    } else {
        console.log("Message  : ERREUR");
    }

});

//validation email
const validemail = function(inputEmail) {
    //creation de la regex (expression réguliere) pour le champs email 
    let emailRegExp = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g');

    //recuperation de la balise small
    let small = inputEmail.nextElementSibling;

    //test de l'expression réguliere
    if (emailRegExp.test(inputEmail.value)) {
        small.innerHTML = "Email valide";
        //couleur text dans small vert
        small.classList.remove('text-danger');
        small.classList.add('text-success');
        return true;
    } else {
        small.innerHTML = "Email non valide";
        //couleur text dans small rouge
        small.classList.remove('text-success');
        small.classList.add('text-danger');
        return false;
    }
};

//validation prenom 
const validfirstName = function(inputfirstName) {
    let FirstNameRegExp = new RegExp('^[a-zA-Z]{3,10}$', 'g');
    let small = inputfirstName.nextElementSibling;
    if (FirstNameRegExp.test(inputfirstName.value)) {
        small.innerHTML = "Prenom valide";
        //couleur text dans small vert
        small.classList.remove('text-danger');
        small.classList.add('text-success');
        return true;
    } else {
        small.innerHTML = "Prenom non valide";
        //couleur text dans small rouge
        small.classList.remove('text-success');
        small.classList.add('text-danger');
        return false;
    }
};

//validation nom  
const validlastName = function(inputlastName) {
    let lastNameRegExp = new RegExp('^[a-zA-Z]{3,10}$', 'g');
    let small = inputlastName.nextElementSibling;
    if (lastNameRegExp.test(inputlastName.value)) {
        small.innerHTML = "Nom de famille valide";
        //couleur text dans small vert
        small.classList.remove('text-danger');
        small.classList.add('text-success');
        return true;
    } else {
        small.innerHTML = "Nom de famille non valide";
        // couleur text dans small rouge
        small.classList.remove('text-success');
        small.classList.add('text-danger');
        return false;
    }
};

//validation ADRESSE
const validaddress = function(inputaddress) {
    let addressRegExp = new RegExp('^[a-zA-Z0-9.]', 'g');
    let small = inputaddress.nextElementSibling;
    if (addressRegExp.test(inputaddress.value)) {
        small.innerHTML = "Adresse valide";
        //couleur text dans small vert
        small.classList.remove('text-danger');
        small.classList.add('text-success');
        return true;
    } else {
        small.innerHTML = "Adresse invalide";
        //couleur text dans small rouge
        small.classList.remove('text-success');
        small.classList.add('text-danger');
        return false;
    }
};

//validation city
const validcity = function(inputcity) {
    let cityRegExp = new RegExp('^[a-zA-Z]{3,10}$', 'g');
    let small = inputcity.nextElementSibling;
    if (cityRegExp.test(inputcity.value)) {
        small.innerHTML = "Ville valide";
        //couleur text dans small vert
        small.classList.remove('text-danger');
        small.classList.add('text-success');
        return true;
    } else {
        small.innerHTML = "Ville invalide";
        //couleur text dans small rouge
        small.classList.remove('text-success');
        small.classList.add('text-danger');
        return false;
    }
};