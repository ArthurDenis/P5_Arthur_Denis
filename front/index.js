indexProduct();

function indexProduct() {
  bringProducts();
}

function bringProducts() {
  fetch("http://localhost:3000/api/furniture")
    .then(function (res) {
      return res.json();
    })
    .catch(()=>{
        let contenantProduit=document.querySelector(".produit");
        contenantProduit.innerHTML="Problème de connexion au serveur.<br>Nous nous excusons pour les inconvenients engendrés et tentons de régler le problème au plus vite";
        contenantProduit.style.color="red";
        contenantProduit.style.testAlign="Center";
    })
    .then(function(informationsProduit){
    for (let propriete in informationsProduit){
      let carteProduit=document.createElement("div")
      document.querySelector(".produit").appendChild(carteProduit)
      carteProduit.classList.add("carteProduit");
      let lienProduit=document.createElement("a")
      carteProduit.appendChild(lienProduit)
      lienProduit.href=`produit.html?id=${informationsProduit[propriete]._id}`
      lienProduit.classList.add("stretched-link")
      let contenantImageProduit=document.createElement("div")
      lienProduit.appendChild(contenantImageProduit)
      contenantImageProduit.classList.add("contenant-image")
      let contenantInfo=document.createElement("div")
      lienProduit.appendChild(contenantInfo)
      contenantInfo.classList.add("contenant-info")
      let imageProduit=document.createElement("img")
      contenantImageProduit.appendChild(imageProduit)
      imageProduit.src=informationsProduit[propriete].imageURL
      let nomProduit=document.createElement("p")
      contenantInfo.appendChild(nomProduit)
      nomProduit.classList.add("titre-produit")
      nomProduit.innerHTML=informationsProduit[propriete].name
      let prix=document.createElement("p")
      contenantInfo.appendChild(prix)
      let prixaffiche=informationsProduit[propriete].price / 100
      prix.innerHTML=new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(prixaffiche)
      prix.classList.add("prix")
    }
    })
  }