document.getElementById("certificateForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const user = document.querySelector("input[placeholder='Your Name']").value;
    const course = document.querySelector("input[placeholder='Course Name']").value;
  
    document.getElementById("certificateOutput").innerHTML = `
      <div style="border:2px solid black; padding:20px; margin-top:20px;">
        <h2>Certificate of Completion</h2>
        <p>This certifies that <strong>${user}</strong> has successfully completed the <strong>${course}</strong> course on Skill Verse.</p>
        <p>Date: ${new Date().toLocaleDateString()}</p>
      </div>
    `;
  });
  