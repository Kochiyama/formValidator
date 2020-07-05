const fieldElements = document.querySelectorAll("[required]");

function getValidityMessagesOnField(field) {
  let validityErrors = [];

  for ( const error in field.validity ) {
    if ( field.validity[error] ) {
      validityErrors.push(error);
    }
  }

  return validityErrors;
}

function getCustomErrorMessage(errorsList) {
  let errorMessage = "";

  if (errorsList[0] == "valueMissing") {
    errorMessage = "Please fill out this field";
  } else {
    errorMessage = "Please type an valid e-mail";
  }

  return errorMessage;
}

function customValidationForField(event) {
  event.preventDefault();

  const field = event.target;

  const spanError = field.parentNode.querySelector("span.error");

  const validityErrors = getValidityMessagesOnField(field);
  
  if (validityErrors == "valid") {
    spanError.classList.remove("active");
    spanError.innerHTML = "";
  } else {
    spanError.classList.add("active");
    spanError.innerHTML = getCustomErrorMessage(validityErrors);
  }

}

for (field of fieldElements) {
  field.addEventListener("invalid", customValidationForField);
  field.addEventListener("blur", customValidationForField);
};
