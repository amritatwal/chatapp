// Toggle password visibility: 

const passwordElements = document.querySelectorAll("input[type=password]");
const checkboxElement = document.querySelector("#checkbox");

function passwordToggle() {
    passwordElements.forEach(password => {
        if (password.type === "password") {
            password.type = "text";
        } else {
            password.type = "password";
        }
    })
};

checkboxElement.addEventListener("change", passwordToggle);