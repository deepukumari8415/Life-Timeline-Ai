document.getElementById('course').addEventListener('change', function(){
  let val = this.value;
  document.getElementById('streamBox').style.display = (val == '11th' || val == '12th') ? 'block' : 'none';
  document.getElementById('extraBox').style.display = (val == 'btech' || val == 'ba' || val == 'bsc') ? 'block' : 'none';
});

function generateTimeline(){
  let dob = document.getElementById('dob').value;
  let course = document.getElementById('course').value;
  let currentYear = parseInt(document.getElementById('currentYear').value) || 0;
  let stream = document.getElementById('stream').value;
  let resultBox = document.getElementById('resultBox');
  let currentYr = new Date().getFullYear();
  let result = "";

  if(!course){
    alert("Please select a course first!");
    return;
  }

  if(course == 'btech'){
    let yearsLeft = 4 - currentYear;
    let passYear = currentYr + yearsLeft;
    result = `🎓 You are currently in ${currentYear} year of B.Tech.
👉 You will graduate in ${passYear}.
👉 Suggestion: Start Coding + Internship + Placement prep from now. Make your final year project strong.`;
  }
  else if(course == 'ba'){
    let yearsLeft = 3 - currentYear;
    let passYear = currentYr + yearsLeft;
    result = `📚 You are currently in ${currentYear} year of BA.
👉 You will graduate in ${passYear}.
👉 Suggestion: Try UPSC, SSC, Teaching, Content Writing.`;
  }
  else if(course == 'bsc'){
    let yearsLeft = 3 - currentYear;
    let passYear = currentYr + yearsLeft;
    result = `🔬 You are currently in ${currentYear} year of BSc.
👉 You will graduate in ${passYear}.
👉 Suggestion: Go for MSc, Research, Lab jobs, or IT jobs.`;
  }
  else if(course == '11th' || course == '12th'){
    if(stream == 'science'){
      result = `🚀 You chose Science Stream.
👉 Career Options: Doctor, Engineer, Pilot, IT
👉 Tip: Start JEE/NEET preparation now.`;
    }
    else if(stream == 'arts'){
      result = `🎨 You chose Arts Stream.
👉 Career Options: UPSC, Law, Psychology, Journalism
👉 Tip: Improve GK and Writing skills.`;
    }
    else if(stream == 'commerce'){
      result = `💰 You chose Commerce Stream.
👉 Career Options: CA, BBA, Banking, Marketing
👉 Tip: Focus on Accounts and Maths.`;
    }
  }
  else if(course == '10th'){
    result = `✨ After 10th you have 3 paths: Science, Arts, Commerce.
Choose wisely based on your interest!`;
  }

  resultBox.innerText = result;
  resultBox.style.display = 'block';
}
