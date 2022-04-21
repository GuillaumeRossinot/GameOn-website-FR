function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const close = document.querySelector(".close");
const form = document.querySelector("form");
const succes = document.querySelector("succes");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


//close modal form event
close.addEventListener("click", closeModal);

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// html labels links
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const location1 = document.getElementById("location1");
const location2 = document.getElementById("location2");
const location3 = document.getElementById("location3");
const location4 = document.getElementById("location4");
const location5 = document.getElementById("location5");
const location6 = document.getElementById("location6");
const checkbox1 = document.getElementById("checkbox1");
const checkbox2 = document.getElementById("checkbox2");

// Fonctions de validation des champs

document.addEventListener('keyup', valideFirstname);
function valideFirstname(e) {
  if (firstName.value == '' || firstName.lenght < 2) {
    var e = document.getElementById("errorFName")
    e.textContent = "Veuillez entrer votre prenom."
    e.style.color = "red"
    return false;
  } else {
    var error = document.getElementById("errorFName")
    error.textContent = ""
    return true;
  }
}

document.addEventListener('keyup', valideLastname);
function valideLastname(e) {
  if (lastName.value == '' || lastName.lenght < 2) {
    var e = document.getElementById("errorLName")
    e.textContent = "Veuillez entrer votre nom."
    e.style.color = "red"
    return false;
  }
  else {
    var e = document.getElementById("errorLName")
    e.textContent = ""
    return true;
  }
}

document.addEventListener('keyup', valideEmail);
function valideEmail(e) {
  if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value)) {
    var e = document.getElementById("errorEmail")
    e.textContent = "Veuillez entrer votre email."
    e.style.color = "red"
    return false;
  }
  else {
    var e = document.getElementById("errorEmail")
    e.textContent = ""
    return true;
  }
}

document.addEventListener('keyup', valideBirthDate);
function valideBirthDate(e) {
  if (!/^\d{4}([./-])\d{2}\1\d{2}$/.test(birthdate.value)) {
    var e = document.getElementById("errorBDate")
    e.textContent = "Veuillez entrer votre date de naissance."
    e.style.color = "red"
    return false;
  }
  else {
    var e = document.getElementById("errorBDate")
    e.textContent = ""
    return true;
  }
}

document.addEventListener('keyup', valideTourNumber);
function valideTourNumber(e) {
  if (quantity.value == '') {
    var e = document.getElementById("errorTournamentNumber")
    e.textContent = "Veuillez entrer un nombre de tournois."
    e.style.color = "red"
    return false;
  }
  else {
    var e = document.getElementById("errorTournamentNumber")
    e.textContent = ""
    return true;
  }
}

function valideTournament(e) {
  if (!location1.checked && !location2.checked && !location3.checked && !location4.checked && !location5.checked && !location6.checked) {
    var e = document.getElementById("errorTournament")
    e.textContent = "Veuillez selectionner un tournoi."
    e.style.color = "red"
    return false;
  }
  else {
    var e = document.getElementById("errorTournament")
    e.textContent = ""
    return true;
  }
}

function valideConditions() {
  if (!checkbox1.checked) {
    var e = document.getElementById("errorAccept")
    e.textContent = "Veuillez cocher la case des conditions d'utilisation."
    e.style.color = "red"
    return false;
  }
  else {
    var e = document.getElementById("errorAccept")
    e.textContent = ""
    return true;
  }
}

// Validity

function validate(event) {
  event.preventDefault();
  let isValid = true;
  console.log("isValide Debut: " + isValid)

  if (!valideFirstname() == true || !valideLastname() == true || !valideEmail() == true
    || !valideBirthDate() == true || !valideTourNumber() == true || !valideTournament() == true || !valideConditions() == true) {
    isValid = false;
  }
  console.log("isValide name fin: " + isValid)

  /*  if (!valideLastname() == true) {
     isValid = false;
   }
   console.log("isValide last name fin: " + isValid) 

  if (!valideEmail() == true) {
    isValid = false;
  }
  console.log("isValide email fin: " + isValid)

  if (!valideBirthDate() == true) {
    isValid = false;
  }
  console.log("isValide birthDate fin: " + isValid)

  if (!valideTourNumber() == true) {
    isValid = false;
  }
  console.log("isValide nombre tournoi fin: " + isValid)

  if (!valideTournament() == true) {
    isValid = false;
  }
  console.log("isValide tournoi fin: " + isValid)

  if (!valideConditions() == true) {
    isValid = false;
  }
  console.log("isValide condition fin: " + isValid)

  console.log("isValide check validate: " + isValid) */

  if (isValid) {
    document.getElementById("BtnSubmit")
      .addEventListener("click", confirmMessage)
    //form.submit();
  }
}

function confirmMessage() {
  document.getElementById("Form").hidden = true;
  document.getElementById("succesForm").hidden = false;
}

function closeSuccess() {
  modalbg.style.display = "none";
  form.submit();
}


function delay(n) {
  return new Promise(function (resolve) {
    setTimeout(resolve, n * 1000);
  });
}
