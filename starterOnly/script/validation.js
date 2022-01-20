//récupere les messages d'erreur dans le HTML
const errorFirstName = document.getElementById("errorFirstName");
const errorLastName = document.getElementById("errorLastName");
const errorEmail = document.getElementById("error-email");
const errorBirthdate = document.getElementById("error-birthdate");
const errorRadio = document.getElementById("error-radio");
const success = document.getElementById("success");
const acceptedCG= document.getElementById("checkbox1"); 
const errorQuantity= document.getElementById("error-quantity"); 
const errorAcceptedCG = document.getElementById("error-accepted");
const btnSubmit = document.querySelector("#btn-validation"); 

// fonction pour valider email
const validateEmail = email => {
    /**
     * fonction qui prend en parametre une chaine de carectere (string)
     * return si la chaine est un email valide (true) sinon (false)
     * la fonction utilise les expression regulieres https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
     */
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

// Ca récupere le bouton envoyer
btnSubmit.addEventListener("click", submit);

// fonction qui gere la validation du formulaire
function submit(e) {
    let error = false;

    // pour pas envoyer le formulaire pour faire des test
    e.preventDefault();

    // La je fait une condition , si la valeur de ce que je veux pour mon formulaire est mauvaise, j'affiche le message d'erreur puis j'entoure en rouge, 
    // sinon pas de message et entourer en vert
    clearErrors();
    const firstName = document.getElementById("firstName");
    if (firstName.value.length < 2) {
        error = true;
        errorFirstName.style.display = "block";
        firstName.classList.add("border-red")
    }else{
        firstName.classList.add("border-green")
    }
    const lastName = document.getElementById("lastName");
    if (lastName.value.length < 2) {
        error = true;
        errorLastName.style.display = "block";
        lastName.classList.add("border-red")
        
    }else{
        lastName.classList.add("border-green")
    }
    const email = document.getElementById("email"); 
    if (!validateEmail(email.value)) {
        error = true;
        errorEmail.style.display = "block";
        errorEmail.errorQuantity
        email.classList.add("border-red")
    }else{
        email.classList.add("border-green")
    }
    const birthdate = document.getElementById("birthdate");
    if (!birthdate.value) {
        error = true;
        errorBirthdate.style.display = "block";
        birthdate.classList.add("border-red")
    }else{
        birthdate.classList.add("border-green")
    }
    const quantity = document.getElementById("quantity");
    if (!quantity.value) {
        error = true;
        errorQuantity.style.display = "block";
        console.log("la quantity n'est pas valide");
        quantity.classList.add("border-red")
    }else{
        quantity.classList.add("border-green")
    }

    let checked = false;
    const radio = document.querySelectorAll("input[type='radio']");
    for (let index = 0; index < radio.length; index++) {
        const element = radio[index];
        if (element.checked) {
            checked = true;
        }
    }

    if (!checked) {
        error = true;
        errorRadio.style.display = "block";
    }
    
    if (!acceptedCG.checked) {
        error = true;
        errorAcceptedCG.style.display = "block";
    }

    if (!error) successDisplay();
    
}


function successDisplay() {
    
    const finbg = document.querySelector("#finModal");
    const mainbg = document.querySelector("#mainModal");
    finbg.style.display = "block";
    mainbg.style.display = "none";

}
// fonction qui permet de vider les erreur pour une nouvelle insertion
const clearErrors = () => {
    errorFirstName.style.display = "none";
    errorLastName.style.display = "none";
    errorEmail.style.display = "none";
    errorBirthdate.style.display = "none";
    errorAcceptedCG.style.display = "none";
    errorRadio.style.display = "none";
    success.style.display = "none";
    errorQuantity.style.display = "none";


}
