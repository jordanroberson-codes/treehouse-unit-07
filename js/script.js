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
let designTshirt = document.getElementById("design");
let colorShirt = document.getElementById("color");
let colorOptions = colorShirt.children;
colorShirt.disabled = true;
designTshirt.addEventListener("change", (event) => {
  colorShirt.disabled = false;
});
console.log(colorOptions);
