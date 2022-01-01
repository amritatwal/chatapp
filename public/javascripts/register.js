// Toggle password visibility:

const passwordElements = document.querySelectorAll("input[type=password]");
const checkboxElement = document.querySelector("#checkbox");
const submitButton = document.querySelector(".register__btn");

// Handle password match error 
const passwordErrMsg = document.querySelector("#password-err");

function passwordToggle() {
  passwordElements.forEach((password) => {
    if (password.type === "password") {
      password.type = "text";
    } else {
      password.type = "password";
    }
  });
}

checkboxElement.addEventListener("change", passwordToggle);

function checkPasswordsMatch() {
    if (passwordElements[0].value !== passwordElements[1].value) {
        submitButton.disabled = true;
        passwordErrMsg.style.display = 'inline';
    } 
} 
submitButton.addEventListener("click", checkPasswordsMatch);
