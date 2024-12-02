var signupNameInput = document.getElementById("signupNameInput");
var signupEmailInput = document.getElementById("signupEmailInput");
var signupPasswordInput = document.getElementById("signupPasswordInput");
var signUpBtn = document.getElementById("signUpBtn");
var feedbackMessage = document.getElementById('incorrect');

var signUpArray = [];

if (localStorage.getItem('users') == null) {
    signUpArray = [];
} else {
    signUpArray = JSON.parse(localStorage.getItem('users'));
}

signUpBtn.addEventListener('click', function () {
    sinUp();
});

// Function to hide feedback message on input
function hideFeedbackOnInput() {
    feedbackMessage.classList.add('d-none'); // Add d-none to hide the message
}

// Attach input event listener to all input fields
signupNameInput.addEventListener('input', hideFeedbackOnInput);
signupEmailInput.addEventListener('input', hideFeedbackOnInput);
signupPasswordInput.addEventListener('input', hideFeedbackOnInput);

function checkInputsEmpty() {
    if (signupEmailInput.value === "" || signupNameInput.value === "" || signupPasswordInput.value === "") {
        return false;
    } else {
        return true;
    }
}

function checkExisting() {
    for (var i = 0; i < signUpArray.length; i++) {
        if (signUpArray[i].email === signupEmailInput.value) {
            return false;
        }
    }
    return true;
}

function clearForm() {
    signupNameInput.value = "";
    signupEmailInput.value = "";
    signupPasswordInput.value = "";
}

function sinUp() {
    if (checkInputsEmpty() == false) {
        feedbackMessage.innerHTML = '<span class="text-danger m-3">All inputs are required</span>';
        feedbackMessage.classList.remove('d-none'); // Show the feedback message
        return false;
    }
    var userData = {
        name: signupNameInput.value,
        email: signupEmailInput.value,
        password: signupPasswordInput.value,
    };
    if (signUpArray.length == 0) {
        signUpArray.push(userData);
        localStorage.setItem('users', JSON.stringify(signUpArray));
        feedbackMessage.innerHTML = '<span class="text-success m-3">Success</span>';
        feedbackMessage.classList.remove('d-none'); // Show the feedback message
        return true;
    }
    if (checkExisting() == false) {
        feedbackMessage.innerHTML = '<span class="text-danger m-3">Email already exists</span>';
        feedbackMessage.classList.remove('d-none'); // Show the feedback message
        return false;
    } else {
        signUpArray.push(userData);
        localStorage.setItem('users', JSON.stringify(signUpArray));
        feedbackMessage.innerHTML = '<span class="text-success m-3">Success</span>';
        feedbackMessage.classList.remove('d-none'); // Show the feedback message
    }
}
