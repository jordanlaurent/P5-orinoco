let OrderObtenue = localStorage.getItem("order");
console.log(OrderObtenue);

let NomObtenue = localStorage.getItem("nom");
console.log(NomObtenue);

let PrenomObtenue = localStorage.getItem("prenom");
console.log(PrenomObtenue);

OrderConfirmationCommande = `
<p class="card-text text-dark">${NomObtenue} ${PrenomObtenue}  </p>
<p class="card-text text-dark">Numero de commande : ${OrderObtenue}</p>

   `

document.getElementById('orderConfirmation').innerHTML = OrderConfirmationCommande

function deleteStorageReturnHome() {
    localStorage.removeItem("Panier");
    localStorage.removeItem("ProductId");
    localStorage.removeItem("order");
    localStorage.removeItem("nom");
    localStorage.removeItem("prenom");
}