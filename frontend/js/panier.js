// Vider le panier
function deleteItem() {
    alert('Votre panier est vide');
    localStorage.removeItem("Panier");
}

    // récuperer les informations stocker dans le Local storage
    function recuperationinfo() {
        return localStorage.getItem("Panier");  
    }

// calculer le prix total du panier
let totalPrice = 0;
JSON.parse(localStorage.getItem("Panier")).forEach((produit)=>
    totalPrice += produit.Prix
)
console.log(totalPrice);
document.getElementById('PrixTotal').innerHTML += totalPrice + " CFA";

// re transformer le contenue du local storage en object dans la console 
$getLocalStorage = recuperationinfo();

$getLocalStorage = JSON.parse($getLocalStorage);

// afficher les objet dans la console dans le code html
let Panierview = '';
      
$getLocalStorage.forEach(produit=>
   Panierview += `
    <table id="Listproductpanier" class="table table-sm ">
  <tbody>
    <tr>
      <td>
      <img class="img-thumbnail img-fluid " src=${produit.Image}></td>
      <td class="font-weight-light align-middle ">${produit.Nomproduit}</td>
      <td class="font-weight-light align-middle">${produit.lenses}</td>
      <td class="font-weight-light text-nowrap align-middle">${produit.Prix} CFA</td>
    </tr>
  </tbody>
</table>
 `   
    ) 

document.getElementById('ProduitPanier').innerHTML =  Panierview


