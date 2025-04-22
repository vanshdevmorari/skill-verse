const submitButtons = document.querySelectorAll("button");

submitButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    alert("Assignment submitted successfully! ✅");
  });
});
