const getId = new URLSearchParams(window.location.search).get("cameraId");
      var productunique = new XMLHttpRequest();
      productunique.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        var response = JSON.parse(this.responseText);
       
        console.log(response);

        //Je boucle sur lentille pour faire ,les lien d'option <option class="null" value="">${response.lenses} </option>
        //dans listofproduct ajouter les nouvelle variables faite
      
      listOfProducts = `
               <td class="nameproduct">${response.name} <img class="img-fluid img-thumbnail" src=${response.imageUrl}></td>
               <td class="info">${response.description} </br>  
                             
               <select id="lentille" class="form-control">
               <option class="null" value="${lenses}" ></option>
               
               </select>
                </br><h2> ${response.price} CFA</h2> </br>
               <a button id="addcartjs" href="panier.html" class="add btn btn-info btn-lg">Ajoutez ${response.name}  aux panier</button></a>
               </p><img class="img-fluid img-thumbnail" src="../IMG/paiement-securise-garantie_1060x.png">
               </br><p class="text-muted">* Frais de livraison compris </p> 
               </td>
             `   
             document.getElementById('camera').innerHTML = listOfProducts


          document.getElementById("addcartjs").addEventListener("click", myFunction);

          var lenses = [response.lenses[0],response.lenses[1]]
          for (i=0; i<lenses.length; i++){
            console.log('Lentilles de ' + lenses[i])
            document.getElementById("lentille").innerHTML = lenses
          } // fontionne pas 

          function myFunction() {
            let Camera = [{
              Nomproduit : response.name ,
              Image : response.imageUrl,
              description : response.description,
              Prix : response.price,  
            }]
            let panier = JSON.stringify(Camera);
            var existing = localStorage.getItem("Panier",panier);
            existing = existing ? existing.split(',') : [];
            existing.push(panier);
            localStorage.setItem('Panier', existing.toString());
          }

            }
          };
          
         productunique.open("GET", `http://localhost:3000/api/cameras/${getId}`);
          productunique.send();





          
          

    