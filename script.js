  <!-- JavaScript for Form -->
 // Event listener for the form submission
document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission

  // Get form values
  const firstName = document.getElementById("firstName").value.trim();
  const surname = document.getElementById("surname").value.trim();
  const phoneNumber = document.getElementById("phoneNumber").value.trim();
  const email = document.getElementById("email").value.trim();
  const vehicleMakeModel = document.getElementById("vehicleMakeModel").value.trim();
  const carYear = document.getElementById("carYear").value.trim();
  const vehiclePart = document.getElementById("vehiclePart").value.trim();

  // Validate input fields
  if (!firstName || !surname || !phoneNumber || !email || !vehicleMakeModel || !carYear || !vehiclePart) {
    alert("Please fill in all the fields before submitting.");
    return;
  }

  // Create the WhatsApp API URL
  const whatsappNumber = "27642152212";
  const message = `Hi Conti Spares,%0A%0AI would like to inquire about a spare part:%0A%0AName: ${firstName} ${surname}%0APhone: ${phoneNumber}%0AEmail: ${email}%0AVehicle: ${vehicleMakeModel}%0AYear: ${carYear}%0APart Required: ${vehiclePart}`;
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;

  // Redirect to WhatsApp
  window.open(whatsappURL, "_blank");
});
