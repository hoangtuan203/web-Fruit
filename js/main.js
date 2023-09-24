document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".form_signup");
  const emailField = form.querySelector('input[name="email"]');
  const passwordField = form.querySelector('input[name="password"]');
  const errorMessage = document.querySelector(".error");
  const validationItems = document.querySelectorAll(".validation_form");
  const passwordInput = document.getElementById("password_input");
  const showPasswordButton = document.getElementById("showPassword");

  let passwordValid = false;

  passwordField.addEventListener("input", function () {
    let password = this.value;

    validationItems.forEach((item) => {
      let condition = item.getAttribute("data-condition");
      let conditionRegex = getConditionRegex(condition);

      if (conditionRegex.test(password)) {
        item.classList.add("fulfilled");
      } else {
        item.classList.remove("fulfilled");
      }
      if (
        getConditionRegex("One lowercase character").test(password) &&
        getConditionRegex("One special character").test(password) &&
        getConditionRegex("One uppercase character").test(password) &&
        getConditionRegex("8 characters minimum").test(password) &&
        getConditionRegex("One number").test(password)
      ) {
        passwordValid = true;
      }
    });
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // prevent default form submission
    let valid = true;
    let emailErrMessage = "";
    let emailEmpty = "";
    if (emailField.value == "") {
      valid = false;
      emailEmpty = "Email cannot be empty";
      errorMessage.innerHTML = emailEmpty;
      emailField.classList.add("input_error");
    } else if (!isEmail(emailField.value)) {
      valid = false;
      emailErrMessage = "Looks like you forgot something";
      errorMessage.innerHTML = emailErrMessage;
      emailField.classList.add("input_error");
    } else {
      errorMessage.innerHTML = ""; // Clear error message if email is valid
      emailField.classList.remove("input_error"); // remove the class when there is no error
    }

    if (!passwordValid) {
      valid = false;
      passwordField.classList.add("input_error");
    } else {
      passwordField.classList.remove("input_error");
    }

    if (valid) {
      form.submit(); // send form when there is no error
    }
  });

  showPasswordButton.addEventListener("click", function () {
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      showPasswordButton.textContent = "Ẩn";
    } else {
      passwordInput.type = "password";
      showPasswordButton.textContent = "Xem";
    }
  });

  function getConditionRegex(condition) {
    if (condition === "One lowercase character") {
      return /[a-z]/;
    } else if (condition === "One special character") {
      return /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    } else if (condition === "One uppercase character") {
      return /[A-Z]/;
    } else if (condition === "8 characters minimum") {
      return /.{8,}/;
    } else if (condition === "One number") {
      return /[0-9]/;
    }
  }

  function isEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  }
});
