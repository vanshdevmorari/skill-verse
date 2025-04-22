document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const email = document.querySelector("input[placeholder='Email']").value;
    const password = document.querySelector("input[placeholder='Password']").value;
    
    const user = JSON.parse(localStorage.getItem("user"));
  
    if (user && user.email === email && user.password === password) {
      alert("Login successful!");
      window.location.href = "dashboard.html";  // Redirect to dashboard
    } else {
      alert("Invalid login details!");
    }
  });
  