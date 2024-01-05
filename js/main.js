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
// ========== End signup ===========

