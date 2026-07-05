/* =========================
   GOOGLE FONT
========================= */

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:'Poppins',sans-serif;
}

body{
    min-height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:30px;
    overflow-x:hidden;
    background:linear-gradient(-45deg,#0f172a,#1e3a8a,#2563eb,#06b6d4);
    background-size:400% 400%;
    animation:bgMove 12s ease infinite;
}

/* Animated Background */

@keyframes bgMove{

0%{
background-position:0% 50%;
}

50%{
background-position:100% 50%;
}

100%{
background-position:0% 50%;
}

}

/* Floating Background */

.background{
position:fixed;
width:100%;
height:100%;
left:0;
top:0;
z-index:-1;
overflow:hidden;
}

.background::before,
.background::after{

content:"";

position:absolute;

width:350px;
height:350px;

border-radius:50%;

filter:blur(120px);

opacity:.45;

}

.background::before{

background:#00e5ff;

top:-100px;

left:-80px;

}

.background::after{

background:#7c3aed;

bottom:-100px;

right:-80px;

}

/* Main Card */

.container{

width:100%;
max-width:700px;

background:rgba(255,255,255,.12);

backdrop-filter:blur(18px);

border:1px solid rgba(255,255,255,.18);

border-radius:25px;

padding:35px;

box-shadow:0 15px 40px rgba(0,0,0,.25);

animation:cardUp 1s ease;

}

@keyframes cardUp{

from{

opacity:0;

transform:translateY(50px);

}

to{

opacity:1;

transform:translateY(0);

}

}

h1{

text-align:center;

color:#fff;

font-size:34px;

margin-bottom:10px;

}

.subtitle{

text-align:center;

color:#f1f5f9;

margin-bottom:30px;

font-size:15px;

letter-spacing:.5px;

}

/* Labels */

label{

display:block;

margin-top:18px;

margin-bottom:8px;

color:#fff;

font-weight:600;

font-size:15px;

}

/* Inputs */

input,
select{

width:100%;

padding:14px;

border:none;

outline:none;

border-radius:12px;

background:rgba(255,255,255,.18);

color:white;

font-size:15px;

transition:.3s;

}

input::placeholder{

color:#ddd;

}

input:focus,
select:focus{

background:rgba(255,255,255,.25);

transform:scale(1.02);

}

.hidden{

display:none;

}
/* =========================
   BUTTON
========================= */

button{
    width:100%;
    margin-top:30px;
    padding:16px;
    border:none;
    border-radius:14px;
    font-size:17px;
    font-weight:600;
    cursor:pointer;
    color:#fff;
    background:linear-gradient(135deg,#2563eb,#7c3aed);
    transition:0.3s;
    box-shadow:0 10px 25px rgba(0,0,0,0.25);
}

button:hover{
    transform:translateY(-3px) scale(1.02);
    box-shadow:0 18px 35px rgba(0,0,0,0.35);
}

button:active{
    transform:scale(0.98);
}

/* =========================
   RESULT BOX
========================= */

#resultBox{
    display:none;
    margin-top:30px;
    padding:22px;
    border-radius:18px;
    background:rgba(255,255,255,0.15);
    border:1px solid rgba(255,255,255,0.2);
    color:#fff;
    font-size:15px;
    line-height:1.8;
    white-space:pre-line;
    animation:fadeIn 0.7s ease;
    box-shadow:0 10px 30px rgba(0,0,0,0.2);
}

/* =========================
   ANIMATION
========================= */

@keyframes fadeIn{

from{
opacity:0;
transform:translateY(25px);
}

to{
opacity:1;
transform:translateY(0);
}

}

/* =========================
   SCROLLBAR
========================= */

::-webkit-scrollbar{
    width:8px;
}

::-webkit-scrollbar-thumb{
    background:#6d28d9;
    border-radius:20px;
}

::-webkit-scrollbar-track{
    background:#0f172a;
}

/* =========================
   MOBILE
========================= */

@media(max-width:768px){

.container{

padding:25px;

}

h1{

font-size:28px;

}

.subtitle{

font-size:14px;

}

label{

font-size:14px;

}

input,
select{

font-size:14px;

padding:12px;

}

button{

font-size:15px;

padding:14px;

}

#resultBox{

font-size:14px;

padding:18px;

}

}

/* =========================
   SMALL MOBILE
========================= */

@media(max-width:480px){

body{

padding:15px;

}

.container{

padding:18px;

border-radius:18px;

}

h1{

font-size:24px;

}

.subtitle{

font-size:13px;

}

}
