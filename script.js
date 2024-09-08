// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Adjust for fixed header height
                behavior: 'smooth'
            });
        }
    });
});

// Validate and submit the form using WhatsApp
function validateForm() {
    var name = document.getElementById("name").value;
    var mobile = document.getElementById("mobile").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    var mobilePattern = /^0\d{9}$/; // Mobile number pattern

    // Check if the mobile number is valid
    if (!mobile.match(mobilePattern)) {
        alert("Please enter a 10-digit number starting with 0.");
        return false;
    }

    // Check if all fields are filled
    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
        alert("Please fill in all the required information.");
        return false;
    }

    // Create a WhatsApp link with the provided information
    var whatsappLink =
        "https://api.whatsapp.com/send?phone=+27642152212&text=" +
        "Name: " +
        encodeURIComponent(name) +
        "%0A" +
        "Mobile: " +
        encodeURIComponent(mobile) +
        "%0A" +
        "Email: " +
        encodeURIComponent(email) +
        "%0A" +
        "Message: " +
        encodeURIComponent(message);

    window.open(whatsappLink); // Open WhatsApp with the pre-filled message

    return false; // Prevent form submission
}
