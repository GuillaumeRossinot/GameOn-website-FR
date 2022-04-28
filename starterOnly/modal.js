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

firstName.addEventListener('keyup', valideFirstname);
function valideFirstname(e) {
  console.log("firstname" + firstName.value.length)
  if (firstName.value.length < 2) {
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

lastName.addEventListener('keyup', valideLastname);
function valideLastname(e) {
  if (lastName.value.length < 2) {
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

email.addEventListener('keyup', valideEmail);
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

birthdate.addEventListener('keyup', valideBirthDate);
function valideBirthDate(e) {
  var GivenDate = birthdate.value;
  var CurrentDate = new Date();
  GivenDate = new Date(GivenDate);
  if (!/^\d{4}([./-])\d{2}\1\d{2}$/.test(birthdate.value)) {
    var e = document.getElementById("errorBDate")
    e.textContent = "Veuillez entrer votre date de naissance."
    e.style.color = "red"
    return false;
  } else if (GivenDate > CurrentDate) {
    var e = document.getElementById("errorBDate")
    e.textContent = "votre date de naissance est incorrect."
    e.style.color = "red"
    return false;
  }
  else {
    var e = document.getElementById("errorBDate")
    e.textContent = ""
    return true;
  }
}

function todayDate() {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //January is 0!
  var yyyy = today.getFullYear();
  if (dd < 10) {
    dd = '0' + dd
  }
  if (mm < 10) {
    mm = '0' + mm
  }

  today = yyyy + '-' + mm + '-' + dd;
  birthdate.setAttribute("max", today);
  
}

quantity.addEventListener('keyup', valideTourNumber);
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
  const checkTournament = Array.of(
    location1.checked,
    location2.checked,
    location3.checked,
    location4.checked,
    location5.checked,
    location6.checked
  );
  const isCheck = (inputStatus) => inputStatus === true;

  if (!checkTournament.some(isCheck)) {
    var e = document.getElementById("errorTournament")
    e.textContent = "Veuillez selectionner un tournoi."
    e.style.color = "red"
    return false;
  } else {
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
  const requiredFields = Array.of(
    valideFirstname(),
    valideLastname(),
    valideEmail(),
    valideBirthDate(),
    valideTourNumber(),
    valideTournament(),
    valideConditions()
  );

  const isValid = (inputStatus) => inputStatus === true;
  if (requiredFields.every(isValid)) {
    console.log("isValide name fin: " + isValid)

  document.getElementById("BtnSubmit")
    .addEventListener("click", confirmMessage(isValid))
  }

  const getFormJSON = (form) => {
    const data = new FormData(form);
    return Array.from(data.keys()).reduce((result, key) => {
      result[key] = data.get(key);
      return result;
    }, {});
  };
  
      const handler = (event) => {
        event.preventDefault();
        const valid = form.reportValidity();
        if (valid) {
          const result = getFormJSON(form);
          console.log(result)
        }
  }
  form.addEventListener("submit", handler)

}

function confirmMessage(isValid) {
  if (isValid) {
    document.getElementById("Form").hidden = true;
    document.getElementById("succesForm").hidden = false;
    // console.log(form.submit())
  }
}


function closeSuccess() {
  modalbg.style.display = "none";
}
