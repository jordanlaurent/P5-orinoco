const getId = new URLSearchParams(window.location.search).get("cameraId");
      var productunique = new XMLHttpRequest();
      productunique.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        var response = JSON.parse(this.responseText);
       
        console.log(response);

Panier = ` <p class="text-dark">${response.price}  </p> ` 
document.getElementById('panier').innerHTML = Panier

imgproduct = ` <img class="img-fluid img-thumbnail" src=${response.imageUrl}> ` 
document.getElementById('imgproduct').innerHTML = imgproduct

nameproduct = `<p class="text-dark">${response.name}  </p>` 
document.getElementById('nameproduct').innerHTML = nameproduct

infoproduct = `<p class="text-dark">${response.description}  </p>` 
document.getElementById('infoproduct').innerHTML = infoproduct
}

};
productunique.open("GET", `http://localhost:3000/api/cameras/${getId}`);
productunique.send();

