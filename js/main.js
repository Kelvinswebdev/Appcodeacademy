// ========== signup ===========
function openModal() {
    document.getElementById('modal').style.opacity = '1';
    document.getElementById('overlay').style.opacity = '1';
    document.getElementById('modal').style.visibility = 'visible';
    document.getElementById('overlay').style.visibility = 'visible';
}

function closeModal() {
    document.getElementById('modal').style.opacity = '0';
    document.getElementById('overlay').style.opacity = '0';
    document.getElementById('modal').style.visibility = 'hidden';
    document.getElementById('overlay').style.visibility = 'hidden';
}

// Open the modal when the page loads
    window.onload = function() {
        setTimeout(openModal, 4000);
    };

function validate(){
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
setTimeout(closeModal, 8000);
}
// ========== End signup ===========

