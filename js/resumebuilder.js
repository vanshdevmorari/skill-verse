document.getElementById("resumeForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.querySelector("input[placeholder='Full Name']").value;
    const objective = document.querySelector("input[placeholder='Career Objective']").value;
    const skills = document.querySelector("input[placeholder='Skills (comma-separated)']").value;
    const education = document.querySelector("input[placeholder='Education Details']").value;
  
    document.getElementById("resumeOutput").innerHTML = `
      <h3>${name}</h3>
      <p><strong>Objective:</strong> ${objective}</p>
      <p><strong>Skills:</strong> ${skills}</p>
      <p><strong>Education:</strong> ${education}</p>
      <button onclick="window.print()">Print Resume</button>
    `;
  });
  