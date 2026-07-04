function generateTimeline() {
  let dob = document.getElementById("dob").value;
  let milestone = document.getElementById("milestone").value;
  let timeline = document.getElementById("timeline");
  
  if(dob == "" || milestone == "") {
    alert("Please dono fields bharo Malkin 😅");
    return;
  }
  
  timeline.innerHTML = `
    <h2>🌟 Your AI Timeline 🌟</h2>
    <p><b>Born:</b> ${dob}</p>
    <p><b>Milestone:</b> ${milestone}</p>
    <p><b>AI Prediction:</b> 2028 me tum college top karogi aur 2030 me apna startup! 🚀</p>
    <p><b>Motivation:</b> "Future tumhara hai, bas mehnat karte raho. Andhero ke baad roshni pakki hai" 💫</p>
  `;
}
