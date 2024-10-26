// selectionner les differents champs du formulaire
const titre = document.querySelector(".titre");
const image = document.querySelector(".images");
const btn = document.getElementById("btn");

// ecouter l'evenement sur le bouton
btn.addEventListener("click", (event) => {
    // recuperer les valeurs des differents champs
    const titreValue = titre.value;
    //recuperer l'image soumis depuis le formulaire
    const imageFile = image.files[0];
    console.log(image.files[0]);
    // Créer un objet URL pour l'image sélectionnée
    const imageURL = URL.createObjectURL(imageFile); // Crée une URL complète pour l'image
    // Afficher l'image dans la balise img
    const imageAfficher = document.getElementById("imagefinal");
    imageAfficher.src = imageURL;
   alert(`titre : ${titreValue} et nom de l'image : ${imageURL}`);
  // recuperer les elements de la zone d'affichage
  const titreAfficher = document.getElementById("titrefinal");
  //modifier les valeurs d'affichage
  titreAfficher.textContent = titreValue;

});
