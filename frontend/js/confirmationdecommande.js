// recuperation n°commande , nom prenom prix du local storage
let OrderObtenue = localStorage.getItem("order");

let NomObtenue = localStorage.getItem("nom");

let PrenomObtenue = localStorage.getItem("prenom");

//mise en forme message confirmation de commande
OrderConfirmationCommande = `
<p class="card-text text-dark">${NomObtenue} ${PrenomObtenue}  </p>
<p class="card-text text-dark">Numero de commande : ${OrderObtenue}</p>

   `

document.getElementById('orderConfirmation').innerHTML = OrderConfirmationCommande;

//vider le local storage aux clic sur le bouton retour acceuil
const deleteStorageReturnHome = () =>
    localStorage.removeItem("Panier")
localStorage.removeItem("ProductId")
localStorage.removeItem("order")
localStorage.removeItem("nom")
localStorage.removeItem("prenom");