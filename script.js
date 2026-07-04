document.getElementById('generateBtn').addEventListener('click', () => {
    const dob = document.getElementById('dob').value;
    const milestone = document.getElementById('milestone').value;
    const resultDiv = document.getElementById('result');

    if (!dob || !milestone) {
        alert("Please enter both Date of Birth and Milestone");
        return;
    }

    // Button pe loading effect
    const btn = document.getElementById('generateBtn');
    btn.innerText = "Generating... ✨";
    btn.disabled = true;

    setTimeout(() => {
        // AI Logic - Smart Predictions
        let prediction = "";
        let motivation = "";
        const currentYear = new Date().getFullYear();

        if(milestone.toLowerCase().includes("10")) {
            prediction = `By ${currentYear + 1}: Complete 12th with good marks. By ${currentYear + 5}: Graduate from College. By ${currentYear + 7}: Start your career and become independent.`;
            motivation = "The future belongs to those who prepare for it today. Keep learning and stay focused!";
        } else if(milestone.toLowerCase().includes("12")) {
            prediction = `By ${currentYear + 3}: Complete Graduation. By ${currentYear + 5}: Get your first job or start preparing for higher studies.`;
            motivation = "12th is just the beginning. Your real journey starts now. Aim high!";
        } else if(milestone.toLowerCase().includes("startup")) {
            prediction = `By ${currentYear + 1}: Learn skills & make a plan. By ${currentYear + 3}: Launch your MVP. By ${currentYear + 5}: Scale your startup and build a team.`;
            motivation = "Every big company started small. Your journey starts with one step. Believe in yourself!";
        } else if(milestone.toLowerCase().includes("job")) {
            prediction = `By ${currentYear + 1}: Learn required skills. By ${currentYear + 2}: Apply and crack interviews. By ${currentYear + 3}: Get promoted to next level.`;
            motivation = "Consistency is the key to success. Work hard and opportunities will come to you.";
        } else {
            prediction = `Based on "${milestone}", set small goals for next 2 years. Stay consistent and you will achieve it by ${currentYear + 3}.`;
            motivation = "Success is not final, failure is not fatal. It is the courage to continue that counts.";
        }

        resultDiv.innerHTML = `
            <div class="timeline-box">
                <h2>🌟 Your AI Timeline 🌟</h2>
                <p><b>Date of Birth:</b> ${dob}</p>
                <p><b>Your Goal:</b> ${milestone}</p>
                <p><b>AI Prediction:</b> ${prediction}</p>
                <p><b>Motivation:</b> "${motivation}"</p>
            </div>
        `;

        btn.innerText = "Generate Timeline ✨";
        btn.disabled = false;

    }, 1000); // 1 second loading effect
});
