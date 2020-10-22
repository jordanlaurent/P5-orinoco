      var productunique = new XMLHttpRequest();
      productunique.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        var response = JSON.parse(this.responseText);
       
        console.log(response);
      
      listOfProducts = `
             <tr class="text-center">
               <td><img src=${response.imageUrl} class="img-fluid img-thumbnail w-80"></td>
               <td class="w-25 align-middle">${response.name} <br> ${response.description} <br> ${response.lenses} <br> ${response.price} FCFA</td>
               <td class="w-25 align-middle"><a button href="panier.html?=${response._id}" class="btn btn-info btn-lg">Acheter</button></td></a>
             </tr>
             `   

             document.getElementById('productList').innerHTML = listOfProducts

            }
          };
          productunique.open("GET", "http://localhost:3000/api/cameras/:_id/");
          productunique.send();