/* camera */
function ProductVcam(pic,name,price,links){
    this.pic = pic;
    this.name = name;
    this.price = price;
    this.links = links;
  }
const product1 = new ProductVcam('./backend/images/vcam_1.jpg','Zurss 50S','49900','frontend/pages/Zurss_50S.html');
const product2 = new ProductVcam('./backend/images/vcam_2.jpg','Hirsch 400DTS','309900','frontend/pages/Hirsch_400DTS.html');
const product3 = new ProductVcam('./backend/images/vcam_3.jpg','Franck JS 105','209900','frontend/pages/Franck_JS_105.html');
const product4 = new ProductVcam('./backend/images/vcam_4.jpg','Kuros TTS','159900','frontend/pages/Kuros_tts.html');
const product5 = new ProductVcam('./backend/images/vcam_5.jpg','Katatone','59900','frontend/pages/Katatone.html');

/* ours en peluche */

function ProductTeddy(pic,name,price){
    this.pic = pic;
    this.name = name;
    this.price =price;
  }
  const productteddy1 = new ProductTeddy('./backend/images/teddy_1.jpg','Norbert','2900');
const productteddy2 = new ProductTeddy('./backend/images/teddy_2.jpg','Arnold','3900');
const productteddy3 = new ProductTeddy('./backend/images/teddy_3.jpg','Lenny and Carl','5900');
const productteddy4 = new ProductTeddy('./backend/images/teddy_4.jpg','Gustav','4900');
const productteddy5 = new ProductTeddy('./backend/images/teddy_5.jpg','Garfunkel','5500');

/* meuble en bois */

function ProductOak(pic,name,price){
    this.pic = pic;
    this.name = name;
    this.price =price;
  }
const productoak1 = new ProductOak('./backend/images/oak_1.jpg','Cross Table','59900');
const productoak2 = new ProductOak('./backend/images/oak_2.jpg','Coffee Table','89900');
const productoak3 = new ProductOak('./backend/images/oak_3.jpg','Dining Table (extendable)','109900');
const productoak4 = new ProductOak('./backend/images/oak_4.jpg','Bench','39900');
const productoak5 = new ProductOak('./backend/images/oak_5.jpg','Vintage Chair','79900');

let productsVcam = [];
let productsTeddy = [];
let productsOak = [];

productsVcam.push(product1,product2,product3,product4,product5);
productsTeddy.push(productteddy1,productteddy2,productteddy3,productteddy4,productteddy5);
productsOak.push(productoak1,productoak2,productoak3,productoak4,productoak5);

function populateTablelist(){
    let listOfProducts = '';
    
    productsVcam.forEach(prod=>
        listOfProducts += `
          <tr class="text-center">
            <td><img src=${prod.pic} class="img-fluid img-thumbnail w-80"></td>
            <td class="w-25 align-middle">${prod.name}</td>
            <td class="w-25 align-middle">${prod.price} FCFA</td>
            <td class="w-25 align-middle"><a button href=${prod.links} class="btn btn-info btn-lg">Afficher</button></td></a>
          </tr>
          `   
      )
    document.getElementById('productList').innerHTML = listOfProducts
}

function populateTablelist2(){
    let listOfProducts = '';
    
    productsTeddy.forEach(prod=>
        listOfProducts += `
          <tr class="text-center">
            <td><img src=${prod.pic} class="img-fluid img-thumbnail w-80"></td>
            <td class="w-25 align-middle">${prod.name}</td>
            <td class="w-25 align-middle">${prod.price} FCFA</td>
            <td class="w-25 align-middle"><button class="btn btn-info btn-lg">Afficher</button></td>
          </tr>
          `   
      )
    document.getElementById('productList').innerHTML = listOfProducts
}

function populateTablelist3(){
    let listOfProducts = '';
    
    productsOak.forEach(prod=>
        listOfProducts += `
          <tr class="text-center">
            <td><img src=${prod.pic} class="img-fluid img-thumbnail w-80"></td>
            <td class="w-25 align-middle">${prod.name}</td>
            <td class="w-25 align-middle">${prod.price} FCFA</td>
            <td class="w-25 align-middle"><button class="btn btn-info btn-lg">Afficher</button></td>
          </tr>
          `   
      )
    document.getElementById('productList').innerHTML = listOfProducts
}
