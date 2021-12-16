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
let activeCheckbox = document.querySelectorAll(".activites-box input");
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

let email = document.getElementById("email");
let cardNumber = document.getElementById("cc-num");
let zipCode = document.getElementById("zip");
let cvv = document.getElementById("cvv");
let form = document.querySelector("form");

function regexName() {
  let nameValue = nameInput.value;
  let nameTest = /^[a-z]/i.test(nameValue);
  return nameTest;
}

function regexEmail() {
  let emailValue = email.value;
  let emailTest = /^[^@]+@[^@.]+\.\w{2,}/i.test(emailValue);
  return emailTest;
}

function regexCard() {
  let cardValue = cardNumber.value;
  let cardTest = /^\d{13,19}$/.test(cardValue);
  return cardTest;
}

function regexZip() {
  let zipValue = zipCode.value;
  let zipTest = /^\d{5}$/.test(zipValue);
  return zipTest;
}

function regexCvv() {
  let cvvValue = cvv.value;
  let cvvTest = /^\d{3,4}$/.test(cvvValue);
  return cvvTest;
}
