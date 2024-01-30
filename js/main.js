function openModal() {
    // Check if user has already submitted the form
    if (!hasUserSubmitted()) {
        document.getElementById('modal').style.opacity = '1';
        document.getElementById('overlay').style.opacity = '1';
        document.getElementById('modal').style.visibility = 'visible';
        document.getElementById('overlay').style.visibility = 'visible';
    }
}

function closeModal() {
    document.getElementById('modal').style.opacity = '0';
    document.getElementById('overlay').style.opacity = '0';
    document.getElementById('modal').style.visibility = 'hidden';
    document.getElementById('overlay').style.visibility = 'hidden';

    // Mark user as submitted in local storage
    markUserAsSubmitted();
}

// Open the modal when the page loads
window.onload = function() {
    setTimeout(openModal, 1000);
};

function validate() {
    const Name = document.getElementById("name").value;
    const Phone = document.getElementById("phone").value;
    const Course = document.getElementById("course").value;
    const Email = document.getElementById("email").value;
    const error = document.getElementById("error-message");

    if (!Name || !Phone || !Course || !Email) {
        error.textContent = 'Please fill out all the required fields.';
        return;
    }

    // Simple Email Validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(Email)) {
        error.textContent = 'Please enter a valid email address.';
        return;
    }

    // Store user input in local storage
    storeUserInput(Name, Phone, Course, Email);

    setTimeout(closeModal, 1000);
}

function storeUserInput(name, phone, course, email) {
    // Store user input in local storage
    localStorage.setItem('userInput', JSON.stringify({ name, phone, course, email }));
}

function markUserAsSubmitted() {
    // Mark user as submitted in local storage
    localStorage.setItem('userSubmitted', 'true');
}

function hasUserSubmitted() {
    // Check if user has already submitted the form
    return localStorage.getItem('userSubmitted') === 'true';
}

// Check local storage on page load and decide whether to show the modal
window.onload = function () {
    if (!hasUserSubmitted()) {
        setTimeout(openModal, 1000);
    }
};

// localStorage.removeItem('userInput');
// localStorage.removeItem('userSubmitted');
