document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.querySelector(".signup_form");
    const startNowButton = document.getElementById("startNowButton");
    const loginButton = document.querySelector(".Login");
    const signupButton = document.querySelector(".Signup");
    const formContainer = document.querySelector(".form_container");
    const formCloser = document.querySelector(".form_closer");
    const loginEmail = document.getElementById("loginEmail");
    const loginPassword = document.getElementById("loginPassword");
    const loginError = document.getElementById("loginError");

    // Initially hide the form container and both forms
    formContainer.style.display = "none";
    loginForm.style.display = "none";
    signupForm.style.display = "none";

    // Event listener for the Start Now button
    startNowButton.addEventListener("click", function(event) {
        event.preventDefault();
        formContainer.style.display = "block";
        loginForm.style.display = "block";
        signupForm.style.display = "none";
    });

    // Event listener for the Sign up link in the login form
    signupButton.addEventListener("click", function(event) {
        event.preventDefault();
        loginForm.style.display = "none";
        signupForm.style.display = "block";
    });

    // Event listener for the Login link in the signup form
    loginButton.addEventListener("click", function(event) {
        event.preventDefault();
        signupForm.style.display = "none";
        loginForm.style.display = "block";
    });

    // Event listener for the close button in the form container
    formCloser.addEventListener("click", function() {
        formContainer.style.display = "none";
        loginForm.style.display = "none";
        signupForm.style.display = "none";
    });

    // Login form submission handling
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();  

        if (!loginEmail.value || !loginPassword.value) {
            loginError.textContent = "Username and password are required!";
            loginError.style.display = 'block';
            return; 
        }

        // Check both email and password
        if (loginEmail.value === "janakhairy@gmail.com" && loginPassword.value === "123") {
            // Correct email and password, proceed to show a new form or redirect
            alert("Login successful. Loading form...");
            window.location.href = 'home.html';

        } 
        else if
            (loginEmail.value === "rawan@gmail.com" && loginPassword.value === "19") {
                // Correct email and password, proceed to show a new form or redirect
                alert("Login successful. Loading form...");
                window.location.href = 'admin.html';

        }else {
            // Wrong email or password
            loginError.style.display = 'block'; // Show the error message
            loginError.textContent = "Wrong email or password!";
        }
    });

    document.getElementById("signupForm").addEventListener("submit", function(event) {
        event.preventDefault();  // Prevent form from submitting normally

        const signupEmail = document.getElementById("signupEmail");
        const signupPassword = document.getElementById("signupPassword");
        const confirmPassword = document.getElementById("confirmPassword");
        const signupError = document.getElementById("signupError");

        // Check if any field is empty
        if (!signupEmail.value || !signupPassword.value || !confirmPassword.value) {
            signupError.textContent = "All fields are required!";
            signupError.style.display = 'block';
            return; // Stop further execution
        }

        // Check if the passwords match
        if (signupPassword.value === confirmPassword.value) {
            // Check if the email is already registered
            if (localStorage.getItem(signupEmail.value)) {
                signupError.textContent = "Email already registered.";
                signupError.style.display = 'block';
            } else {
                // Store email and password in local storage (password is encoded with Base64)
                localStorage.setItem(signupEmail.value, btoa(signupPassword.value));

                // Display successful signup message
                alert("Signup successful. Your details have been saved.");

                // Optionally clear the form
                document.getElementById("signupForm").reset();

                // Redirect to quiz.html
                window.location.href = 'quiz.html';
            }
        } else {
            // Display error if passwords do not match
            signupError.textContent = "Passwords do not match!";
            signupError.style.display = 'block';
        }
    });

});
document.addEventListener("DOMContentLoaded", function() {
    const changeButton = document.querySelector('.change-weight');
    const measurementSelect = document.getElementById('measurementSelect');

    // Event listener for the Change button
    changeButton.addEventListener("click", function() {
        // Get the selected measurement type from the combo box
        const selectedMeasurement = measurementSelect.value;
        
        // Redirect to a new page based on the selected measurement type
        let pageURL;
        switch (selectedMeasurement) {
            case "neck":
                pageURL = "edit-neck.html";
                break;
            case "waist":
                pageURL = "edit-waist.html";
                break;
            case "hips":
                pageURL = "edit-hips.html";
                break;
            default:
                pageURL = "edit-measurement.html"; // Default to weight page
        }

        // Redirect to the selected page
        window.location.href = pageURL;
    });
});




const addbutton=document.querySelector('.add');
const removebutton=document.querySelector('.remove');
const currentcups=document.querySelector('.current-cups');
const currentliters=document.querySelector('.current-liters');
const currentpercentage=document.querySelector('.current-percentage');
const progresarea = document.querySelector('.progress');


const MAX_CUPS =10;
const MIN_CUPS=0;
let cups=0,
liters=0,
percentage=0;
addbutton.addEventListener("click",addCup);
removebutton.addEventListener("click", removeCup);
function addCup() {
    if (cups < MAX_CUPS) {
        cups++;
        liters += 250;

        percentage = (cups / MAX_CUPS) * 100;
        currentcups.textContent = `${cups}/10`;
        currentliters.textContent = `${liters / 1000}l/2.5l`;
        currentpercentage.textContent = `${percentage}%`;
        progresarea.style.height = `${percentage}%`;

        if (cups === MAX_CUPS) {
            addbutton.disabled = true;
        } else {
            removebutton.disabled = false;
        }
    }
}

function removeCup() {
    if (cups > MIN_CUPS) {
        cups--;
        liters -= 250;
        percentage = (cups / MAX_CUPS) * 100;
        currentcups.textContent = `${cups}/10`;
        currentliters.textContent = `${liters / 1000}l/2.5l`;
        currentpercentage.textContent = `${percentage}%`;
        progresarea.style.height = `${percentage}%`;

        if (cups === MIN_CUPS) {
            removebutton.disabled = true;
        } else {
            addbutton.disabled = false;
        }
    }
}


document.addEventListener("DOMContentLoaded", function() {
    const weightScaleButton = document.getElementById('weightScaleButton');

    weightScaleButton.addEventListener('click', function() {
        window.location.href = 'check-in.html'; 
    });
    const checkInLink = document.querySelector('.bottom_nav li:nth-child(3) a'); 
    checkInLink.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'check-in.html';
    });
    
    
});
quizForm.addEventListener("submit", function(event) {
    event.preventDefault();

    // Check if all required fields are filled out
    if (validateForm()) {
        // If all fields are filled out, show the alert and redirect
        alert("Quiz submitted!");
        window.location.href = 'home.html';
    } else {
        // If any required field is not filled out, display an error message
        alert("Please answer all questions before submitting the quiz.");
    }
});
function sendMessage() {
    var userInput = document.getElementById('user-input').value;
    if (!userInput.trim()) return; 
    appendMessage('You: ' + userInput);
    document.getElementById('user-input').value = ''; 

    setTimeout(function() {
        var botResponse = getBotResponse(userInput);
        appendMessage('Bot: ' + botResponse);
    }, 500);
}

function appendMessage(message) {
    var chatBox = document.getElementById('chat-box');
    var messageElement = document.createElement('div');
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; 
}

function getBotResponse(userInput) {
    var responses = {
        'hi': 'Hello there!',
        'how are you': 'I\'m doing well, thank you!',
        'bye': 'Goodbye!',
        'what is my current weight?': 'Your current weight is 150 lbs.',
        'what is my target weight?': 'Your target weight is 140 lbs.',
        'default': 'I\'m sorry, I didn\'t understand that.'
    };

    userInput = userInput.toLowerCase();
    return responses[userInput] || responses['default'];
}