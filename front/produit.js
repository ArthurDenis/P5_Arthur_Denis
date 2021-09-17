let params = new URL(document.location).searchParams
let id=params.get("id")

const nomMeuble=document.querySelector(".nom_produit")
const imageMeuble=document.querySelector(".image_produit")
const descriptionMeuble=document.querySelector(".description_produit")
const prixMeuble=document.querySelector(".prix_produit")

main()

function main(){
    afficherProduit()
}


function afficherProduit() {
    fetch(`http://localhost:3000/api/furniture/${id}`)
      .then(function (res) {
        return res.json();
      })
      .catch(()=>{
        let contenantProduit=document.querySelector(".produit");
        contenantProduit.innerHTML="Problème de connexion au serveur.<br>Nous nous excusons pour les inconvenients engendrés et tentons de régler le problème au plus vite";
        contenantProduit.style.color="red";
        contenantProduit.style.testAlign="Center";
    })
    .then(function (dataApi){ 
        descriptionMeuble.innerText=dataApi.description
        imageMeuble.src=dataApi.imageURL
        nomMeuble.innerHTML = dataApi.name
        dataApi.price=dataApi.price/100
        prixMeuble.innerText=new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(dataApi.price)
        
    })
}
