

function validateInput(input, errorMessageId) {
    const errorMessage = document.getElementById(errorMessageId);

    if (!input.checkValidity()) {
        input.classList.add("invalid");
        input.classList.remove("valid");
        errorMessage.textContent = "Campo obrigatório";
    } else {
        input.classList.add("valid");
        input.classList.remove("invalid");
        errorMessage.textContent = "";
    }
}

document.getElementById("email").addEventListener("input", function() {
    validateInput(this, "email-error");
});

document.getElementById("password").addEventListener("input", function() {
    validateInput(this, "password-error");
});

function login() {
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    
    validateInput(email, "email-error");
    validateInput(password, "password-error");
    
    if (email.checkValidity() && password.checkValidity()) {
        alert("Login bem-sucedido!");
    }
}