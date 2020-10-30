const getId = new URLSearchParams(window.location.search).get("cameraId");
      var productunique = new XMLHttpRequest();
      productunique.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        var response = JSON.parse(this.responseText);
       
        console.log(response);
      
      listOfProducts = `
               <td class="nameproduct">${response.name} <img class="img-fluid img-thumbnail" src=${response.imageUrl}></td>
               <td class="info">${response.description} </br>                
               <select class="form-control" name="Lentille"><option class="null" value="">${response.lenses} </option></select>
                </br><h2> ${response.price} CFA</h2> </br>
               <a button href="panier.html?cameraId=${response._id}" class="btn btn-info btn-lg">Ajoutez ${response.name}  aux panier</button></a>
               </br><p class="text-muted">* Frais de livraison compris </p> 
               </td>
             `   
             document.getElementById('camera').innerHTML = listOfProducts

            }
          };
         productunique.open("GET", `http://localhost:3000/api/cameras/${getId}`);
          productunique.send();
          

    