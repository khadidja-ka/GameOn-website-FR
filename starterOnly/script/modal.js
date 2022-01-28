
// initialisation
const navBtn = document.getElementById("myTopnav");
navBtn.addEventListener("click", editNav);
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// récupere le modal
const modalbg = document.querySelector("#mainModal");

// récupere le boutton qui lance l'inscription
const modalBtn = document.querySelectorAll(".modal-btn");

// A l'événement click on lance le modal
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Quand on clique sur la croix pour fermer le modal
const close = document.querySelector("#closeMainModal"); 
const closeModal = () => modalbg.style.display = "none";
close.addEventListener("click", closeModal);



// Fonction pour afficher le modal
function launchModal() {
    modalbg.style.display = "block";
}
