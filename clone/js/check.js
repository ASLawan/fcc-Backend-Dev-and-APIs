document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission for validation

    const email = event.target.email.value.trim();
    const password = event.target.password.value.trim();
    const errorMessage = document.getElementById("errorMessage");

    // Check if email or password is empty
    if (!email || !password) {
      errorMessage.style.display = "block"; // Show error message
      return;
    } else {
      errorMessage.style.display = "none"; // Hide error message if input is valid
    }

    // If fields are not empty, proceed with form submission
    fetch("/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.text())
      .then((message) => {
        alert(message); // Show success message
      })
      .catch((error) => {
        alert("Failed to send email. Please try again.");
        console.error("Error:", error);
      });
  });
