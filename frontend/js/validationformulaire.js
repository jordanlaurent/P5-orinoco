let form = document.querySelector('#myForm')

//ecouter la modification de l'email
form.email.addEventListener('change', function() {
    validemail(this);
});

//ecouter la modification du prenom
form.firstName.addEventListener('change', function() {
    validfirstName(this);
});

//ecouter la modification du nom
form.lastName.addEventListener('change', function() {
    validlastName(this);
});

//ecouter la modification de l'adresse
form.address.addEventListener('change', function() {
    validaddress(this);
});

//ecouter la modification de la ville
form.city.addEventListener('change', function() {
    validcity(this);
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



        let objData = {
            contact: contact,
            products: [],
        };

        products.forEach((produit) => {
            objData.products.push(produit.id);
        })

        let objetRequest = JSON.stringify(objData);

        fetch('http://localhost:3000/api/cameras/order', {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: objetRequest
            })
            .then((data) => {
                return data.json()
            }).then((json) => {
                localStorage.setItem("order", json.orderId);
                localStorage.setItem("nom", json.contact.lastName);
                localStorage.setItem("prenom", json.contact.firstName);
                window.location.href = "confirmationdecommande.html";
            })

    } else {
        console.log("Message  : ERREUR");
    }

});

//validation email
const validemail = (inputEmail) => {
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
const validfirstName = (inputfirstName) => {
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
const validlastName = inputlastName => {
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
const validaddress = inputaddress => {
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
const validcity = inputcity => {
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