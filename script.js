"use strict";
let firstnameError = document.getElementById("firstname-error");
let lastnameError = document.getElementById("lastname-error");
let dayError = document.getElementById("day-error");
let emailError = document.getElementById("email-error");
let phoneError = document.getElementById("phonenumber-error");

function validatefirstname() {
  let firstname = document.getElementById("firstname").value;

  if (firstname.length == 0) {
    firstnameError.innerHTML = "firstname required";
    return false;
  }
  if (!firstname.match(/^[a-zA-Z]+$/)) {
    firstnameError.innerHTML = "firstname should not contain number";
    return false;
  }
  if (firstname.length < 3) {
    firstnameError.innerHTML = "enter valid first name";
    return false;
  }
  if (firstname.length > 20) {
    firstnameError.innerHTML = "enter valid first name";
    return false;
  }
  firstnameError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
}

function validatelastname() {
  let lastname = document.getElementById("lastname").value;

  if (lastname.length == 0) {
    lastnameError.innerHTML = "lastname required";
    return false;
  }
  if (!lastname.match(/^[a-zA-Z]+$/)) {
    lastnameError.innerHTML = "lastname should not contain number";
    return false;
  }
  if (lastname.length < 3) {
    lastnameError.innerHTML = "enter valid first name";
    return false;
  }
  if (lastname.length > 20) {
    lastnameError.innerHTML = "enter valid first name";
    return false;
  }
  lastnameError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
}

function validateday() {
  let day = document.getElementById("day").value;

  if (day.length == "days") {
    dayError.innerHTML = "day should not blank";
    return false;
  }
  dayError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
}
function validateemail() {
  let email = document.getElementById("email").value;

  if (email.length == 0) {
    emailError.innerHTML = "Email is required";
    return false;
  }
  if (email.length <= 12) {
    emailError.innerHTML = "Enter the  correct Email";
    return false;
  }
  if (!email.match(/^[a-zA-Z]\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,4}$/)) {
    emailError.innerHTML = "Email Invalid";
    return false;
  }

  emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
}

function validatephone() {
  let phone = document.getElementById("phonenumber").value;

  if (phone.length == 0) {
    phoneError.innerHTML = "phone number required";
    return false;
  }
  if (phone.length < 10) {
    phoneError.innerHTML = "Mobile must be 10 digit";
    return false;
  }
  if (!phone.match(/^[7-9]{1}[0-9]{9}$/)) {
    phoneError.innerHTML = "only 10 digit & start with 7,8,9.";
    return false;
  }
  phoneError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
}

let addressError = document.getElementById("address-error");

function validateaddress() {
  let address = document.getElementById("address").value;
  if (address.length == 0) {
    addressError.innerHTML = "Please enter address";
    return false;
  }
  if (address.length < 50) {
    addressError.innerHTML = "Please enter full address";
    return false;
  }
  addressError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
}

let stateError = document.getElementById("state-error");

function validatestate() {
  let state = document.getElementById("state").value;
  if (state.length == 0) {
    stateError.innerHTML = "State name required!";
    return false;
  }
  if (!state.match(/^[a-zA-Z]+$/)) {
    stateError.innerHTML = "state name should not contain number";
    return false;
  }
  if (state.length < 3) {
    stateError.innerHTML = "please enter  valid name";
    return false;
  }

  stateError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
}
let cityError = document.getElementById("city-error");

function validatecity() {
  let city = document.getElementById("city").value;
  if (city.length == 0) {
    cityError.innerHTML = "city name required!";
    return false;
  }
  if (!city.match(/^[a-zA-Z]+$/)) {
    cityError.innerHTML = "city name should not contain number";
    return false;
  }
  if (city.length < 3) {
    cityError.innerHTML = "Enter valid city name";
    return false;
  }
  cityError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
}

let pincodeError = document.getElementById("pincode-error");

function validatepincode() {
  let pincode = document.getElementById("pincode").value;
  if (pincode.length == 0) {
    pincodeError.innerHTML = "Pincode name required!";
    return false;
  }
  if (pincode.length < 6) {
    pincodeError.innerHTML = "Enter valid pincode";
    return false;
  }
  if (!pincode.match(/^[4]{1}[0-9]{5}$/)) {
    pincodeError.innerHTML = "enter valid data";
    return false;
  }
  pincodeError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
}
let genderError = document.getElementById("gender-error");

let hobbiesError = document.getElementById("hobbies-error");
let submitError = document.getElementById("submit-error");
function validate() {
  let gender = document.form.gender;

  if (gender.value.length <= 0) {
    genderError.innerHTML = "Gender is required";
    // alert("Gender is required");
    // alert(gender.value.length);
    return false;
  } else {
    genderError.innerHTML = '<i class="fas fa-check-circle"></i>';
  }
  let hobbies = document.form.hobbies;

  if (hobbies.value.length <= 0) {
    hobbiesError.innerHTML = "please Select hobbies";
    // alert("Hobbies is required");
    return false;
  } else {
    hobbiesError.innerHTML = '<i class="fas fa-check-circle"></i>';
  }
  if (
    !validatefirstname() ||
    !validatelastname() ||
    !validateemail() ||
    !validatephone() ||
    !validateaddress() ||
    !validatestate() ||
    !validatecity() ||
    !validatepincode()
  ) {
    submitError.style.display = "block";
    submitError.innerHTML = "please Enter valid data";
    submitError.innerHTML = "please fix error to submit";
    setTimeout(function () {
      submitError.style.display = "none";
    }, 3000);
    return false;
  }
  submitError.innerHTML = "please Enter valid data";
  submitError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
}
