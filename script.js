
// selectionner les differents champs du formulaire
const titre=document.querySelector('#titre');
const image=document.getElementById('image')
const btn=document.getElementById("btn");
// recuperer les valeurs des differents champs 
const titreValue=titre.value;
const imageUrl=image.value;

// ecouter l'evenement sur le bouton
btn.addEventListener('click',(event)=>
{

 console.log(titreValue);
 console.log(imageUrl);
    //bloquer le chargement du navigateur
    event.preventDefault();
    // recuperer les elements de la zone d'affichage
    const titreAfficher=document.getElementById("titrefinal");
    const imageAfficher=document.getElementById("imagefinal");
    //modifier les valeurs d'affichage
    titreAfficher.textContent=titreValue;
    imageAfficher.src=imageUrl;
})
