document.getElementById("signupForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.querySelector("input[placeholder='Full Name']").value;
    const email = document.querySelector("input[placeholder='Email']").value;
    const password = document.querySelector("input[placeholder='Password']").value;
  
    const user = {
      name: name,
      email: email,
      password: password
    };
  
    localStorage.setItem("user", JSON.stringify(user));  // Store user info
    alert("Signup successful! You can now log in.");
    window.location.href = "login.html";  // Redirect to login page
  });
  