    const getId = new URLSearchParams(window.location.search).get("cameraId");
      var productunique = new XMLHttpRequest();
      productunique.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        var response = JSON.parse(this.responseText);
       
        console.log(response);
      
      listOfProducts = `
               <td class="nameproduct">${response.name} <img class="img-fluid img-thumbnail" src=${response.imageUrl}></td>
               <td class="info">${response.description} </br> ${response.lenses} </br> ${response.price} FCFA </br>
               <a button href="panier.html?=${response._id}" class="btn btn-info btn-lg">Acheter</button></td></a>
             </tr>
             `   

             document.getElementById('camera').innerHTML = listOfProducts

            }
          };
         productunique.open("GET", `http://localhost:3000/api/cameras/${getId}`);
          productunique.send();