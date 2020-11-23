// // requette xmlrequest pour recuperer description camera
// var cameraprice = new XMLHttpRequest();
// cameraprice.onreadystatechange = function() {
//     if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
//         var response = JSON.parse(this.responseText);

//         let listOfProducts = '';

//         response.forEach(produit =>
//             listOfProducts += `</br>
//             <tr id="listedesproduit" class="text-center">
//               <td><img src=${produit.imageUrl} class="img-fluid img-thumbnail w-80"></td>
//               <td class="w-25 align-middle">${produit.name}</td>
//               <td class="w-25 align-middle">${produit.price} FCFA</td>
//               <td class="w-25 align-middle"><a button href="camera.html?cameraId=${produit._id}"class="btn btn-info btn-lg">Afficher</button></td></a>
//            </br> </tr>`)

//         let CameraID = '';
//         response.forEach(produit =>
//             CameraID += `
//            <td class="nameproduct">${response.name} <img class="img-fluid img-thumbnail" src=${response.imageUrl}></td>
//            <td class="info">${response.description} </br>  

//            <select id="lentille" class="form-control">


//            </select>
//             </br><h2> ${response.price} CFA</h2> </br>
//            <a button id="addcartjs" href="panier.html" class="add btn btn-info btn-lg">Ajoutez ${response.name}  aux panier</button></a>
//            </p><img class="img-fluid img-thumbnail" src="../IMG/paiement-securise-garantie_1060x.png">
//            </br><p class="text-muted">* Frais de livraison compris </p> 
//            </td>
//             `
//         )

//         document.getElementById('productList').innerHTML = listOfProducts;

//     }
// };
// cameraprice.open("GET", "http://localhost:3000/api/cameras");
// cameraprice.send();



fetch(`http://localhost:3000/api/cameras`)
    .then(response => response.json())
    .then(response => {
        let listOfProducts = '';

        response.forEach(produit =>
            listOfProducts += `</br>
            <tr id="listedesproduit" class="text-center">
              <td><img src=${produit.imageUrl} class="img-fluid img-thumbnail w-80"></td>
              <td class="w-25 align-middle">${produit.name}</td>
              <td class="w-25 align-middle">${produit.price} FCFA</td>
              <td class="w-25 align-middle"><a button href="camera.html?cameraId=${produit._id}"class="btn btn-info btn-lg">Afficher</button></td></a>
           </br> </tr>`)

        let CameraID = '';
        response.forEach(produit =>
            CameraID += `
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
        )

        document.getElementById('productList').innerHTML = listOfProducts;

    });