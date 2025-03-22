// Initialize EmailJS
(function() {
    emailjs.init("k2PR5-qhBuRDWXwoL");  // <-- Replace with your EmailJS Public Key
  })();
  
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      // Send the form data
      emailjs.sendForm("service_qpoz2q7", "template_a393nel", form)
        .then(function () {
          alert("✅ Message sent successfully!");
          form.reset();
        }, function (error) {
          alert("❌ Failed to send message: " + JSON.stringify(error));
        });
    });
  });
  