var cameraprice = new XMLHttpRequest();
cameraprice.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        var response = JSON.parse(this.responseText);
       
        console.log(response);

        let listOfProducts = '';
      
        response.forEach(produit=>
          listOfProducts += `</br>
            <tr id="listedesproduit" class="text-center">
              <td><img src=${produit.imageUrl} class="img-fluid img-thumbnail w-80"></td>
              <td class="w-25 align-middle">${produit.name}</td>
              <td class="w-25 align-middle">${produit.price} FCFA</td>
              <td class="w-25 align-middle"><a button href="camera.html?cameraId=${produit._id}"class="btn btn-info btn-lg">Afficher</button></td></a>
           </br> </tr>
            `   
        ) 

        document.getElementById('productList').innerHTML = listOfProducts

      }
    };
    cameraprice.open("GET", "http://localhost:3000/api/cameras");
    cameraprice.send();
    
  
