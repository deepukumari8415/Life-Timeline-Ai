*{font-family: 'Poppins', sans-serif; box-sizing: border-box;}
body {
  background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
}

/* ANIME INTRO */
.intro-screen {
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: linear-gradient(135deg, #0f0c29, #302b63);
  z-index: 9999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: fadeOut 1s ease 4s forwards;
}
.intro-boy {
  width: 200px;
  animation: walkAndPose 3s ease forwards;
}
.intro-text {
  color: #00d4ff;
  font-size: 22px;
  font-weight: 600;
  margin-top: 20px;
  opacity: 0;
  animation: showText 1s ease 2.5s forwards;
  text-shadow: 0 0 10px #00d4ff;
}
@keyframes walkAndPose {
 0% { transform: translateX(-500px); }
 60% { transform: translateX(0) scale(1.1); }
 100% { transform: translateX(0) scale(1); }
}
@keyframes showText { to { opacity: 1; } }
@keyframes fadeOut { to { opacity: 0; visibility: hidden; } }

/* MAIN BOX */
.container {
  background: rgba(255,255,255,0.05);
  backdrop-filter: blur(15px);
  padding: 30px;
  border-radius: 20px;
  border: 1px solid rgba(255,255,255,0.1);
  box-shadow: 0 0 30px #8a2be2;
  width: 90%;
  max-width: 450px;
}
h1 {text-align: center; color: #00d4ff;}
label {display: block; margin-top: 15px; font-weight: 600;}
input, select, button {
  width: 100%;
  padding: 12px;
  margin-top: 8px;
  border-radius: 10px;
  border: 1px solid #8a2be2;
  background: rgba(255,255,255,0.1);
  color: white;
  outline: none;
}
button {
  background: linear-gradient(90deg, #8a2be2, #00d4ff);
  border: none;
  font-weight: bold;
  cursor: pointer;
  margin-top: 20px;
  transition: 0.3s;
}
button:hover {
  box-shadow: 0 0 15px #00d4ff;
  transform: scale(1.05);
}
#resultBox {
  margin-top: 20px;
  padding: 15px;
  background: rgba(0,212,255,0.1);
  border-radius: 10px;
  border-left: 4px solid #00d4ff;
  white-space: pre-line;
  display: none;
}
.hidden { display: none; }
