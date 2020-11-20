let OrderObtenue = localStorage.getItem("order");
console.log(OrderObtenue);

OrderConfirmationCommande = `
<p class="card-text text-dark">Numero de commande : ${OrderObtenue}</p>

   `

document.getElementById('orderConfirmation').innerHTML = OrderConfirmationCommande

function deleteStorageReturnHome() {
    localStorage.removeItem("Panier");
    localStorage.removeItem("ProductId");
    localStorage.removeItem("order");
}