
  document.getElementById("passwordIcon1").addEventListener("click", togglePassword1);

  function togglePassword1() {
    const myButton = document.getElementById("passwordIcon1");
    const passwordInput = document.getElementById("passwordtype1");

    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      myButton.classList.remove("fa-eye-slash");
      myButton.classList.add("fa-eye");
    } else {
      passwordInput.type = "password";
      myButton.classList.remove("fa-eye");
      myButton.classList.add("fa-eye-slash");
    }
  }

  document.getElementById("passwordIcon2").addEventListener("click", togglePassword2);

  function togglePassword2() {
    const myButton = document.getElementById("passwordIcon2");
    const passwordInput = document.getElementById("passwordtype2");

    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      myButton.classList.remove("fa-eye-slash");
      myButton.classList.add("fa-eye");
    } else {
      passwordInput.type = "password";
      myButton.classList.remove("fa-eye");
      myButton.classList.add("fa-eye-slash");
    }
  }
