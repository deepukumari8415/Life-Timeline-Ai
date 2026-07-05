document.addEventListener('DOMContentLoaded', function() {

document.getElementById('goal').addEventListener('change', function(){
  let val = this.value;
  document.getElementById('streamBox').classList.add('hidden');
  document.getElementById('branchBox').classList.add('hidden');
  document.getElementById('yearBox').classList.add('hidden');
  document.getElementById('diplomaTypeBox').classList.add('hidden');

  if(val == '11th' || val == '12th'){
    document.getElementById('streamBox').classList.remove('hidden');
  }
  if(val == 'diploma'){
    document.getElementById('diplomaTypeBox').classList.remove('hidden');
    document.getElementById('branchBox').classList.remove('hidden');
    document.getElementById('yearBox').classList.remove('hidden');
  }
  if(val == 'btech' || val == 'bba' || val == 'bca' || val == 'ba' || val == 'bsc' || val == 'bcom'){
    document.getElementById('branchBox').classList.remove('hidden');
    document.getElementById('yearBox').classList.remove('hidden');
  }
});

function getMotivation(goal, stream, branch){
  let quotes = {
    science: "🚀 'Science is the future. Crack JEE/NEET and build technologies that change the world!'",
    arts: "🎨 'Arts shape society. Become a leader, lawyer, or storyteller who inspires millions!'",
    commerce: "💰 'Commerce is about building empires. Master finance and become unstoppable!'",
    cs: "💻 'Code today, Lead tomorrow. Tech companies are waiting for innovators like you!'",
    me: "⚙️ 'Mechanical engineers build the world. From cars to rockets, you can create anything!'",
    ce: "🏗️ 'Civil engineers shape cities. Build infrastructure that lasts for generations!'",
    ee: "⚡ 'Electrical engineers power the future. Innovate in energy, robotics and AI!'",
    it: "🌐 'IT is the backbone of digital world. Build apps and systems that millions use!'",
    management: "📈 'Leaders are made, not born. Master business and lead teams to success!'",
    accounts: "📊 'Money makes the world go round. Master accounts and become financially smart!'",
    default: "✨ 'Work hard now, shine forever. Your 5 years of focus = Lifetime of success!'"
  };
  return quotes[stream] || quotes[branch] || quotes.default;
}

function generateTimeline(){
  let dob = document.getElementById('dob').value;
  let goal = document.getElementById('goal').value;
  let stream = document.getElementById('stream')?.value;
  let branch = document.getElementById('branch')?.value;
  let diplomaType = document.getElementById('diplomaType')?.value;
  let currentYear = parseInt(document.getElementById('currentYear')?.value) || 0;
  let resultBox = document.getElementById('resultBox');
  let currentYr = new Date().getFullYear();

  if(!dob ||!goal){
    alert("Please enter DOB and Goal first!");
    return;
  }

  let birthYear = new Date(dob).getFullYear();
  let age = currentYr - birthYear;
  let result = "";

  let duration = {
    diploma: diplomaType == 'after12'? 2 : 3,
    btech: 4, bba: 3, bca: 3, ba: 3, bsc: 3, bcom: 3
  };

  if(goal == '10th'){
    result = `👤 Age: ${age} years
✨ Current Status: 10th Standard
👉 Next Step: Choose Science, Arts, or Commerce
🔥 MOTIVATION: "The decision you take after 10th will define your career. Choose with passion!"`;
  }
  else if(goal == '11th' || goal == '12th'){
    let passYear = currentYr + (12 - parseInt(goal));
    result = `👤 Age: ${age} years
🚀 Current: ${goal} - ${stream.toUpperCase()} Stream
👉 12th Completion Year: ${passYear}
👉 Career Paths: ${stream=='science'?'Doctor, Engineer, Pilot, Researcher': stream=='arts'?'UPSC, Law, Journalism, Psychology':'CA, BBA, Banking, Marketing'}
👉 ACTION PLAN:
   1. Study 3 hours daily with consistency
   2. Take mock tests and analyze mistakes
   3. Build skills related to your stream
${getMotivation(goal, stream, branch)}`;
  }
  else {
    let totalYears = duration[goal];
    if(currentYear < 1 || currentYear > totalYears){
      alert(`Please enter year between 1 to ${totalYears}`);
      return;
    }
    let yearsLeft = totalYears - currentYear;
    let passYear = currentYr + yearsLeft;
    let gradAge = age + yearsLeft;
    let diplomaInfo = goal=='diploma'? ` [${totalYears} Years Course]` : '';

    result = `👤 Age: ${age} years
🎓 Current: ${goal.toUpperCase()}${diplomaInfo} - ${branch.toUpperCase()}
👉 Year: ${currentYear} | Graduation: ${passYear} | Age at Graduation: ${gradAge}
👉 ACTION PLAN:
   1. Do internships every summer break
   2. Build 2-3 strong projects in ${branch}
   3. Start placement prep from 3rd year
   4. Learn skills: Communication + Technical + Tools
${getMotivation(goal, stream, branch)}`;
  }

  resultBox.innerText = result;
  resultBox.style.display = 'block';
}
});
