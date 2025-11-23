console.log("Contact.js file loaded and running");

const form = document.getElementById("contact-form");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Collect form data
    const data = Object.fromEntries(new FormData(form).entries());

    // Show details in an alert
    alert(
      `Thanks for reaching out!\n\n` +
      `Name: ${data.name}\n` +
      `Email: ${data.email}\n` +
      `Phone: ${data.phone || "(none)"}\n` +
      `Message: ${data.message}`
    );

    form.reset();
  });
} else {
  alert("Contact form not found");
}
