// Toggle password visibility: 

const passwordElement = document.querySelector("#password-field");
const checkboxElement = document.querySelector("#checkbox");

function passwordToggle() {
  if (passwordElement.type === "password") {
    passwordElement.type = "text";
  } else {
    passwordElement.type = "password";
  }
}

checkboxElement.addEventListener("change", passwordToggle);
