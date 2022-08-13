const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

//Show input error message
function showErrorMsg(input, message) {
  const formControl = input.parentElement;
  formControl.classList.add("error");
  const small = formControl.querySelector("small");
  small.innerText = message;
}

//Show success Outline
function showSuccessMsg(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

//check email is valid
function isEmailValid(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

//Check required fields
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      //trim is just to cut spaces
      showErrorMsg(input, `${getFieldName(input)} is required`);
    } else {
      showSuccessMsg(input);
    }
  });
}

//get field name function is to just cpatialise first letter of input.id
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//check length function
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showErrorMsg(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showErrorMsg(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
  } else {
    showSuccessMsg(input);
  }
}

// check password match
function checkPasswordMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showErrorMsg(input2, `Password do not match`);
  }
}

//Event Listeners
form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkPasswordMatch(password, password2);

  /*
  this is a long method to do so
  if (username.value === "") {
    showErrorMsg(username, "Username is required");
  } else {
    showSuccessMsg(username);
  }
  if (email.value === "") {
    showErrorMsg(email, "Email is required");
  } else if (!isEmailValid(email.value)) {
    showErrorMsg(email, "Enter Valid Email");
  } else {
    showSuccessMsg(email);
  }
  if (password.value === "") {
    showErrorMsg(password, "Password is required");
  } else {
    showSuccessMsg(password);
  }
  if (password2.value === "") {
    showErrorMsg(password2, "Password is required");
  } else {
    showSuccessMsg(password2);
  }
  */
});
