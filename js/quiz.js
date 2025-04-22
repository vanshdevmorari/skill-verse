const buttons = document.querySelectorAll("#quiz-container button");

buttons.forEach(btn => {
  btn.addEventListener("click", function() {
    if (btn.textContent === "New Delhi") {
      alert("Correct! 🎉");
    } else {
      alert("Oops! Try again.");
    }
  });
});
