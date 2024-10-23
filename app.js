// Initialize EmailJS
(function () {
  emailjs.init("GIejThaQL1y09VYXz"); // Replace with your EmailJS user ID
})();

document
  .getElementById("contact.html")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Send email
    emailjs
      .send("service_jcxxwea", "template_kv36bf7", {
        from_name: name,
        from_email: email,
        message: message,
      })
      .then(
        function (response) {
          alert("Message sent successfully!");
          document.getElementById("contact.html").reset();
        },
        function (error) {
          alert("Failed to send message. Please try again later.");
        }
      );
  });
