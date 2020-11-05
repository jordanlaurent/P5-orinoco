function deleteItem() {
    alert('Votre panier est vide');
    localStorage.removeItem("Panier");
}

    
    function recuperationinfo() {
    return localStorage.getItem("Panier");
    
}
document.getElementById("ProduitPanier").innerHTML = recuperationinfo()
