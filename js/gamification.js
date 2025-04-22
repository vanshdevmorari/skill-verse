document.addEventListener("DOMContentLoaded", () => {
    const totalPoints = 600; // Example static value
    const display = document.createElement("p");
    display.textContent = `Your current total score is: ${totalPoints} XP`;
    document.body.appendChild(display);
  });
  