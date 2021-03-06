const getId = new URLSearchParams(window.location.search).get("cameraId");
fetch(`http://localhost:3000/api/cameras/${getId}`)
    .then(response => response.json())
    .then(response => {
        listOfProducts = `
    <td class="nameproduct">${response.name} <img class="img-fluid img-thumbnail" src=${response.imageUrl}></td>
    <td class="info">${response.description} </br>  
                  
    <select id="lentille" class="form-control">
    
    
    </select>
     </br><h2> ${response.price} CFA</h2> </br>
    <a button id="addcartjs" href="panier.html" class="add btn btn-info btn-lg">Ajoutez ${response.name}  aux panier</button></a>
    </p><img class="img-fluid img-thumbnail" src="../IMG/paiement-securise-garantie_1060x.png">
    </br><p class="text-muted">* Frais de livraison compris </p> 
    </td>
  `
        document.getElementById('camera').innerHTML = listOfProducts;
        // gestion des données


        //Ajouter les produits
        document.getElementById('camera').innerHTML = listOfProducts;

        //Ajouter les différents lentielle 
        let lenses = response.lenses;
        let options = ""
        for (i = 0; i < lenses.length; i++) {
            options += `<option class="null" value="${lenses[i]}" >${lenses[i]}</option>`
        }
        document.getElementById("lentille").innerHTML = options;

        //ajout aux panier
        document.getElementById("addcartjs").addEventListener("click", addToCart);

        function addToCart() {
            let Camera = {
                Nomproduit: response.name,
                Image: response.imageUrl,
                description: response.description,
                Prix: response.price,
                lenses: document.getElementById('lentille').value,
            };
            let productId = {
                id: response._id,
            };
            var existingid = localStorage.getItem("ProductId");
            existingid = existingid ? JSON.parse(existingid) : [];
            existingid.push(productId);
            localStorage.setItem('ProductId', JSON.stringify(existingid));

            var existing = localStorage.getItem("Panier");
            existing = existing ? JSON.parse(existing) : [];
            existing.push(Camera);
            localStorage.setItem('Panier', JSON.stringify(existing));
        };
    });



//Ajouter les produits