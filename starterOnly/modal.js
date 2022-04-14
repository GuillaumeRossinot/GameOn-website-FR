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


function valideFirstname() {
  if (firstName.value == '' || firstName.lenght < 2) {
    var error = document.getElementById("errorFName")
    error.textContent = "Veuillez entrer votre prenom."
    error.style.color = "red"
    return false;
  } else {
    var error = document.getElementById("errorFName")
    error.textContent = ""
    return true;
  }
}

function valideLastname() {
  if (lastName.value == '' || lastName.lenght < 2) {
    var error = document.getElementById("errorLName")
    error.textContent = "Veuillez entrer votre nom."
    error.style.color = "red"
    return false;
  }
  else {
    var error = document.getElementById("errorLName")
    error.textContent = ""
    return true;
  }
}

function valideEmail() {
  if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value)) {
    var error = document.getElementById("errorEmail")
    error.textContent = "Veuillez entrer votre email."
    error.style.color = "red"
    return false;
  }
  else {
    var error = document.getElementById("errorEmail")
    error.textContent = ""
    return true;
  }
}

function valideBirthDate() {
  if (!/^\d{4}([./-])\d{2}\1\d{2}$/.test(birthdate.value)) {
    var error = document.getElementById("errorBDate")
    error.textContent = "Veuillez entrer votre date de naissance."
    error.style.color = "red"
    return false;
  }
  else {
    var error = document.getElementById("errorBDate")
    error.textContent = ""
    return true;
  }
}

function valideTourNumber() {
  if (quantity.value == '') {
    var error = document.getElementById("errorTournamentNumber")
    error.textContent = "Veuillez entrer un nombre de tournois."
    error.style.color = "red"
    return false;
  }
  else {
    var error = document.getElementById("errorTournamentNumber")
    error.textContent = ""
    return true;
  }
}

function valideTournament() {
  if (!location1.checked && !location2.checked && !location3.checked && !location4.checked && !location5.checked && !location6.checked) {
    var error = document.getElementById("errorTournament")
    error.textContent = "Veuillez selectionner un tournoi."
    error.style.color = "red"
    return false;
  }
  else {
    var error = document.getElementById("errorTournament")
    error.textContent = ""
    return true;
  }
}

function valideConditions() {
  if (!checkbox1.checked) {
    var error = document.getElementById("errorAccept")
    error.textContent = "Veuillez cocher la case des conditions d'utilisation."
    error.style.color = "red"
    return false;
  }
  else {
    var error = document.getElementById("errorAccept")
    error.textContent = ""
    return true;
  }
}

// Validity
/* function submit() {
  const formValid = document.getElementById("submit");
  formValid.addEventListener('submit', (e) => {
    e.preventDefault();
  })
}
 */
function validate(event) {
  event.preventDefault();
  let isValid = true;
  console.log("isValide Debut: " + isValid)

  if (!valideFirstname() == true) {
    isValid = false;
  }
  console.log("isValide name fin: " + isValid)

  if (!valideLastname() == true) {
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

  console.log("isValide check validate: " + isValid)

  if (isValid) {
    const formValid = document.getElementById("submit");
    formValid.addEventListener('submit', (event) => {
      event.preventDefault();
    })
  }
}