// ================================
// LIFE TIMELINE AI
// Part 1
// ================================

document.addEventListener("DOMContentLoaded", () => {

const goal = document.getElementById("goal");
const streamBox = document.getElementById("streamBox");
const branchBox = document.getElementById("branchBox");
const diplomaTypeBox = document.getElementById("diplomaTypeBox");
const yearBox = document.getElementById("yearBox");

goal.addEventListener("change", function(){

streamBox.classList.add("hidden");
branchBox.classList.add("hidden");
diplomaTypeBox.classList.add("hidden");
yearBox.classList.add("hidden");

let value = this.value;

if(value==="11th" || value==="12th"){
streamBox.classList.remove("hidden");
}

if(value==="diploma"){
branchBox.classList.remove("hidden");
diplomaTypeBox.classList.remove("hidden");
yearBox.classList.remove("hidden");
}

if(
value==="btech" ||
value==="bca" ||
value==="bba" ||
value==="bcom" ||
value==="ba" ||
value==="bsc"
){
branchBox.classList.remove("hidden");
yearBox.classList.remove("hidden");
}

});

});

// ================================
// Motivation Quotes
// ================================

function getMotivation(goal, stream, branch){

const quotes={

science:"🚀 Dream big. Science can change the world.",

commerce:"💰 Learn money, business and finance. Success will follow.",

arts:"🎨 Creativity is your biggest superpower.",

cs:"💻 Coding today creates tomorrow.",

it:"🌐 Technology never sleeps. Keep learning.",

me:"⚙️ Mechanical engineers build machines that move the world.",

ce:"🏗️ Civil engineers build the future.",

ee:"⚡ Electricity powers modern civilization.",

management:"📈 Great leaders create great companies.",

accounts:"📊 Numbers tell stories. Learn them well.",

default:"✨ Stay consistent. Your future depends on today's efforts."

};

return quotes[branch] || quotes[stream] || quotes.default;

}
// ================================
// Generate Timeline
// Part 2
// ================================

function generateTimeline(){

const dob=document.getElementById("dob").value;
const goal=document.getElementById("goal").value;
const stream=document.getElementById("stream").value;
const branch=document.getElementById("branch").value;
const diplomaType=document.getElementById("diplomaType").value;
const currentYear=parseInt(document.getElementById("currentYear").value)||1;
const resultBox=document.getElementById("resultBox");

if(dob==="" || goal===""){
alert("Please enter DOB and select your course.");
return;
}

const today=new Date();
const birth=new Date(dob);

let age=today.getFullYear()-birth.getFullYear();

const month=today.getMonth()-birth.getMonth();

if(month<0 || (month===0 && today.getDate()<birth.getDate())){
age--;
}

const duration={

diploma:diplomaType==="after12"?2:3,

btech:4,

bca:3,

bba:3,

bcom:3,

ba:3,

bsc:3

};

let result="";

let passYear=today.getFullYear();

let graduationAge=age;

if(goal==="10th"){

result+=
`👤 Current Age : ${age} Years

🎓 Current Class : 10th

➡️ Next Step :
Choose Science, Commerce or Arts carefully.

`;

}

else if(goal==="11th" || goal==="12th"){

passYear=today.getFullYear()+(12-parseInt(goal));

graduationAge=age+(12-parseInt(goal));

result+=
`👤 Current Age : ${age} Years

📚 Current Class : ${goal}

🎯 Stream : ${stream.toUpperCase()}

📅 12th Passing Year : ${passYear}

`;

}

else{

const totalYears=duration[goal];

if(currentYear>totalYears){

alert("Current year is invalid.");

return;

}

const left=totalYears-currentYear;

passYear=today.getFullYear()+left;

graduationAge=age+left;

result+=
`👤 Current Age : ${age} Years

🎓 Course : ${goal.toUpperCase()}

🏷️ Branch : ${branch.toUpperCase()}

📖 Current Year : ${currentYear}

🎉 Graduation Year : ${passYear}

🎂 Graduation Age : ${graduationAge}

`;

}
   // ================================
// Career Prediction + Result
// Part 3 (Final)
// ================================

if(goal==="btech"){

result+=`💼 Career Options:
• Software Engineer
• Data Scientist
• AI Engineer
• Cloud Engineer
• Cyber Security Engineer

💰 Estimated Starting Salary:
₹4 LPA – ₹12 LPA

📚 Skills To Learn:
✔ DSA
✔ Web Development
✔ Python
✔ SQL
✔ Communication Skills

`;

}

else if(goal==="bca"){

result+=`💼 Career Options:
• Software Developer
• Web Developer
• App Developer
• QA Engineer

💰 Estimated Starting Salary:
₹3 LPA – ₹8 LPA

📚 Skills:
✔ HTML
✔ CSS
✔ JavaScript
✔ React
✔ Node.js

`;

}

else if(goal==="bba" || goal==="bcom"){

result+=`💼 Career Options:
• Business Analyst
• Marketing Executive
• HR
• Finance Executive
• Sales Manager

💰 Estimated Salary:
₹3 LPA – ₹7 LPA

📚 Skills:
✔ Excel
✔ Communication
✔ Digital Marketing
✔ Finance Basics

`;

}

else if(goal==="ba" || goal==="bsc"){

result+=`💼 Career Options:
• Government Jobs
• Teacher
• Research
• UPSC
• Banking

💰 Estimated Salary:
₹3 LPA – ₹8 LPA

`;

}

else if(goal==="diploma"){

result+=`💼 Career Options:
• Junior Engineer
• Technician
• Site Engineer
• Production Engineer

💰 Estimated Salary:
₹2.5 LPA – ₹6 LPA

`;

}

else if(goal==="11th" || goal==="12th"){

result+=`📚 Focus On:
✔ Strong Basics
✔ Competitive Exams
✔ Communication
✔ Daily Practice

`;

}

else{

result+=`📚 Work Hard.
Your future starts from today.

`;

}

// Motivation

result+=`

🔥 Motivation

${getMotivation(goal,stream,branch)}

-----------------------------------

🚀 AI Recommendation

✔ Build Projects

✔ Learn New Skills

✔ Improve English

✔ Create LinkedIn Profile

✔ Do Internships

✔ Stay Consistent

⭐ Success comes with consistency, not shortcuts.

`;

resultBox.innerText=result;

resultBox.style.display="block";

resultBox.scrollIntoView({

behavior:"smooth"

});

}
