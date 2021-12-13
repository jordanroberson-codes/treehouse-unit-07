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
