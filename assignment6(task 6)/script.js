let form = document.getElementById("myForm");

form.onsubmit = function (e) {
    e.preventDefault();

    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let pass = document.getElementById("password");

    let nameErr = document.getElementById("nameError");
    let emailErr = document.getElementById("emailError");
    let passErr = document.getElementById("passError");

    let ok = true;

    if (name.value === "") {
        nameErr.textContent = "Name required";
        ok = false;
    } else {
        nameErr.textContent = "";
    }

    if (email.value.indexOf("@") === -1) {
        emailErr.textContent = "Invalid email";
        ok = false;
    } else {
        emailErr.textContent = "";
    }

    if (pass.value.length < 8) {
        passErr.textContent = "Password must be 8 chars";
        ok = false;
    } else {
        passErr.textContent = "";
    }

    if (ok) {
        alert("Form submitted!");
    }
};
