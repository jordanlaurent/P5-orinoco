var cameraprice = new XMLHttpRequest();
cameraprice.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        var response = JSON.parse(this.responseText);
       
        console.log(response);

        let listOfProducts = '';
      
        response.forEach(produit=>
          listOfProducts += `
            <tr class="text-center">
              <td><img src=${produit.imageUrl} class="img-fluid img-thumbnail w-80"></td>
              <td class="w-25 align-middle">${produit.name}</td>
              <td class="w-25 align-middle">${produit.price} FCFA</td>
              <td class="w-25 align-middle"><a button href="frontend/pages/produit.html${produit._id}"class="btn btn-info btn-lg">Afficher</button></td></a>
            </tr>
            `   
        )

        // listOfProducts = `
        //     <tr class="text-center">
        //       <td><img src=${response.imageUrl} class="img-fluid img-thumbnail w-80"></td>
        //       <td class="w-25 align-middle">${response.name}</td>
        //       <td class="w-25 align-middle">${response.price} FCFA</td>
        //       <td class="w-25 align-middle"><a button href="produit.html${response._id}" class="btn btn-info btn-lg">Afficher</button></td></a>
        //     </tr>
        //     `   
        

        document.getElementById('productList').innerHTML = listOfProducts

      }
    };
    cameraprice.open("GET", "http://localhost:3000/api/cameras");
    cameraprice.send();
    
  
