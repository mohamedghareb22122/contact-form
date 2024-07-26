const form = document.getElementById("contact-form");
const successMessage = document.getElementById("success-message");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const firstName = document.getElementById("first-name").value.trim();
  const lastName = document.getElementById("last-name").value.trim();
  const email = document.getElementById("email").value.trim();
  const queryType = document.querySelector('input[name="query-type"]:checked');
  const message = document.getElementById("message").value.trim();
  const consent = document.getElementById("consent").checked;

  const formAlerts = document.querySelectorAll(".form-alert");
  let isValid = true;

  // First Name Validation
  const firstNameAlert = document.querySelector("#first-name + .form-alert");
  const firstNameInput = document.getElementById("first-name");
  if (firstName === "") {
    isValid = false;
    firstNameAlert.style.display = "block";
    firstNameInput.style.border = "1px solid var(--red)";
  } else {
    firstNameAlert.style.display = "none";
    firstNameInput.style.border = "1px solid var(--medium-grey)";
  }

  // Last Name Validation
  const lastNameAlert = document.querySelector("#last-name + .form-alert");
  const lastNameInput = document.getElementById("last-name");
  if (lastName === "") {
    isValid = false;
    lastNameAlert.style.display = "block";
    lastNameInput.style.border = "1px solid var(--red)";
  } else {
    lastNameAlert.style.display = "none";
    lastNameInput.style.border = "1px solid var(--medium-grey)";
  }

  // Email Validation
  const emailAlert = document.querySelector("#email + .form-alert");
  const emailInput = document.getElementById("email");
  if (!isValidEmail(email)) {
    isValid = false;
    emailAlert.style.display = "block";
    emailInput.style.border = "1px solid var(--red)";
  } else {
    emailAlert.style.display = "none";
    emailInput.style.border = "1px solid var(--medium-grey)";
  }

  // Query Type Validation
  const queryTypeAlert = document.querySelector(".radio-inputs + .form-alert");
  if (!queryType) {
    isValid = false;
    queryTypeAlert.style.display = "block";
  } else {
    queryTypeAlert.style.display = "none";
  }

  // Message Validation
  const messageAlert = document.querySelector("#message + .form-alert");
  const messageTextarea = document.getElementById("message");
  if (message === "") {
    isValid = false;
    messageAlert.style.display = "block";
    messageTextarea.style.border = "1px solid var(--red)";
  } else {
    messageAlert.style.display = "none";
    messageTextarea.style.border = "1px solid var(--medium-grey)";
  }

  // Consent Validation
  const consentAlert = formAlerts[5]; // Assuming the consent alert is the 6th one
  if (!consent) {
    isValid = false;
    consentAlert.classList.add("form-error");
  } else {
    consentAlert.classList.remove("form-error");
  }

  // Form is valid
  if (isValid) {
    successMessage.classList.add("active");
    form.reset();
  }
});

// Email Validation Function
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
