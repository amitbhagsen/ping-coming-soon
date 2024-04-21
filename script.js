const form = document.querySelector("form");
const input = document.querySelector(".mail");
const error = document.querySelector(".error");
const submitBtn = document.querySelector(".submitbtn");
const valid = document.querySelector(".valid");
const invalid = document.querySelector(".invalid");

const inputRegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
input.addEventListener("input", function(){
    if (input.value.match(inputRegExp)){
        form.classList.add("valid");
        form.classList.remove("invalid");
        error.textContent = "";
    } else {
        form.classList.remove("valid");
        form.classList.add("invalid");
        error.textContent = "please enter a valid email address";
    }
});

submitBtn.addEventListener("click", function(event) {
    event.preventDefault();
    if (input.value.match(inputRegExp)) {
        submitBtn.classList.add("active");
    } else {
        error.textContent = "please enter a valid email address";
    }
});