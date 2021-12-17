// Adding a focus state to the name input by obtaining the element ID.
let nameInput = document.getElementById("name");
nameInput.focus();

//job role programming
let jobRole = document.getElementById("title"); //variable for job role by getting element ID of title.
let otherRole = document.getElementById("other-job-role"); //variable for other job role by getting element id of other-job-role

otherRole.style.display = "none"; //hiding other job role upon loading

// adding event listener to the jobRole select menu that when 'other' is selected the other job role input text box appears otherwise it stays hidden.
jobRole.addEventListener("change", (event) => {
  if (event.target.value === "other") {
    otherRole.style.display = "block";
  } else {
    otherRole.style.display = "none";
  }
});

//TShirt Section
let designTshirt = document.getElementById("design"); //variable selecting design ID
let colorShirt = document.getElementById("color"); //variable selecting color ID
let colorOptions = colorShirt.children; //variable selecting the children of colorShirt variable
colorShirt.disabled = true; //setting colorShirt attribute to hidden
//adding an event listener to designTshirt to show available colors only in specific design shirt options.
designTshirt.addEventListener("change", (event) => {
  colorShirt.disabled = false;
  for (i = 0; i < colorShirt.length; i++) {
    const colorValue = event.target.value;
    const dataTheme = colorOptions[i].getAttribute("data-theme");
    if (colorValue === dataTheme) {
      colorOptions[i].hidden = false;
      colorOptions[i].setAttribute("selected", true);
    } else if (colorValue !== dataTheme) {
      colorOptions[i].hidden = true;
      colorOptions[i].removeAttribute("selected");
    }
  }
});
// Register for Activities Section
//creates an event listener for the activity options that produces a total based on the cost of each option.
const activityOptions = document.getElementById("activities");
let activityTotal = document.getElementById("activities-cost");
let activeCheckbox = document.querySelectorAll(".activities-box input");
let totalCost = 0;
activityOptions.addEventListener("change", (e) => {
  let dataCost = e.target.getAttribute("data-cost");
  dataCost = parseInt(dataCost);
  if (e.target.checked) {
    totalCost += dataCost;
  } else {
    totalCost -= dataCost;
  }
  activityTotal.innerHTML = `Total: $${totalCost}`;
});

// Payment Info
let paymentMethod = document.getElementById("payment");
let cardInfo = document.getElementById("credit-card");
let payPal = document.getElementById("paypal");
let bitCoin = document.getElementById("bitcoin");

payPal.style.display = "none";
bitCoin.style.display = "none";

paymentMethod[1].setAttribute("selected", true);

paymentMethod.addEventListener("change", (event) => {
  if (event.target.value === "credit-card") {
    cardInfo.style.display = "block";
    payPal.style.display = "none";
    bitCoin.style.display = "none";
  } else if (event.target.value === "paypal") {
    payPal.style.display = "block";
    cardInfo.style.display = "none";
    bitCoin.style.display = "none";
  } else if (event.target.value === "bitcoin") {
    bitCoin.style.display = "block";
    cardInfo.style.display = "none";
    payPal.style.display = "none";
  }
});

//Form Validation

//variables selecting DOM element
let email = document.getElementById("email");
let cardNumber = document.getElementById("cc-num");
let zipCode = document.getElementById("zip");
let cvv = document.getElementById("cvv");
let form = document.querySelector("form");

//function that validates name input with appropriate regex sequence and adds class of valid or not-valid depending on whether the user input passes the regex format.
function nameValidation() {
  let nameValue = nameInput.value;
  let nameTest = /^[a-z]/i.test(nameValue);
  if (!nameTest) {
    nameInput.parentNode.classList.add("not-valid");
    nameInput.parentElement.lastElementChild.style.display = "block";
  } else {
    nameInput.parentNode.classList.replace("not-valid", "valid");
    return true;
  }
}
//function that validates email input with appropriate regex sequence and adds class of valid or not-valid depending on whether the user input passes the regex format.
function emailValidation() {
  let emailValue = email.value;
  let emailTest = /^[^@]+@[^@.]+\.\w{2,}/i.test(emailValue);
  if (!emailTest) {
    email.parentNode.classList.add("not-valid");
    email.parentElement.lastElementChild.style.display = "block";
  } else {
    email.parentNode.classList.replace("not-valid", "valid");
    return true;
  }
}

//function that validates credit card input with appropriate regex sequence and adds class of valid or not-valid depending on whether the user input passes the regex format.
function cardValidation() {
  let cardValue = cardNumber.value;
  let cardTest = /^\d{13,16}$/.test(cardValue);
  if (!cardTest) {
    cardNumber.parentNode.classList.add("not-valid");
    cardNumber.parentElement.lastElementChild.style.display = "block";
  } else {
    cardNumber.parentNode.classList.replace("not-valid", "valid");
    return true;
  }
}

//function that validates zip code input with appropriate regex sequence and adds class of valid or not-valid depending on whether the user input passes the regex format.
function zipValidation() {
  let zipValue = zipCode.value;
  let zipTest = /^\d{5}$/.test(zipValue);
  if (!zipTest) {
    zipCode.parentNode.classList.add("not-valid");
    zipCode.parentElement.lastElementChild.style.display = "block";
  } else {
    zipCode.parentNode.classList.replace("not-valid", "valid");
    return true;
  }
}

//function that validates CVV code of a credit card input with appropriate regex sequence and adds class of valid or not-valid depending on whether the user input passes the regex format.
function cvvValidation() {
  let cvvValue = cvv.value;
  let cvvTest = /^\d{3,4}$/.test(cvvValue);
  if (!cvvTest) {
    cvv.parentNode.classList.add("not-valid");
    cvv.parentElement.lastElementChild.style.display = "block";
  } else {
    cvv.parentNode.classList.replace("not-valid", "valid");
    return true;
  }
}
//function that validates activites input with appropriate regex sequence and adds class of valid or not-valid depending on whether the user input passes the regex format.
function activityValidator() {
  if (totalCost === 0) {
    activityOptions.classList.add("not-valid");
    activityOptions.lastElementChild.style.display = "block";
  } else {
    activityOptions.classList.replace("not-valid", "valid");
    return true;
  }
}

//event listener being added to the form to prevent default behavior if validators are invalid.
form.addEventListener("submit", (event) => {
  if (!nameValidation()) {
    event.preventDefault();
  }
  if (!emailValidation()) {
    event.preventDefault();
  }
  if (!cardValidation()) {
    event.preventDefault();
  }
  if (!zipValidation()) {
    event.preventDefault();
  }
  if (!cvvValidation()) {
    event.preventDefault();
  }
  if (paymentMethod.value === "credit-card") {
    if (!cardValidation()) {
      event.preventDefault();
    }
    if (!zipValidation()) {
      event.preventDefault();
    }
    if (!cvvValidation()) {
      event.preventDefault();
    }
  }
});

//Accessibility

for (let i = 0; i < activeCheckbox.length; i++) {
  activeCheckbox[i].addEventListener("focus", (event) => {
    activeCheckbox[i].parentNode.classList.add("focus");
  });
  activeCheckbox[i].addEventListener("blur", (event) => {
    activeCheckbox[i].parentNode.classList.remove("focus");
  });
}
