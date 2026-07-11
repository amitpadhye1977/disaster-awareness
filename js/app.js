// =========================================
// Disaster Preparedness Awareness Initiative
// Version 2.0
// =========================================

let currentQuestion = 0;
let score = 0;

const participant = {};

const answers = [];

const app = document.getElementById("app");

// =========================================
// Start Application
// =========================================

showHome();


// =========================================
// HOME SCREEN
// =========================================

function showHome() {

    app.innerHTML = `

    <div class="main-card text-center">

        <h1>🛡️</h1>

        <h2 class="mt-3">
            Disaster Preparedness
            Awareness Initiative
        </h2>

        <p class="subtitle">
            Creating Safer Homes Through Awareness
        </p>

        <hr>

        <h5>Prepared by</h5>

        <h4>Amit Padhye</h4>

        <p>
            Certificate Program in Disaster Management Law<br>
            VPM's TMC Law College, Thane
        </p>

        <hr>

        <p class="intro">

            Welcome!

            <br><br>

            You will be presented with practical real-life situations
            related to fire, gas leakage, earthquakes, floods and
            building safety.

            <br><br>

            After every response, the recommended safety practice
            will be explained.

        </p>

        <button
            class="btn btn-primary btn-lg mt-3"
            onclick="showParticipant()">

            Begin Awareness Initiative

        </button>

    </div>

    `;

}



// =========================================
// PARTICIPANT
// =========================================

function showParticipant(){

app.innerHTML=`

<div class="main-card">

<h3 class="mb-4">Participant Details</h3>

<div class="mb-3">

<label>Age Group</label>

<select id="age" class="form-select">

<option value="">Select</option>

<option>Below 18</option>
<option>18-30</option>
<option>31-45</option>
<option>46-60</option>
<option>Above 60</option>

</select>

</div>

<div class="mb-3">

<label>Gender (Optional)</label>

<select id="gender" class="form-select">

<option value="">Select</option>
<option>Male</option>
<option>Female</option>
<option>Prefer not to say</option>

</select>

</div>

<div class="mb-3">

<label>City</label>

<input
type="text"
id="city"
class="form-control">

</div>

<div class="mb-3">

<label>Locality</label>

<input
type="text"
id="locality"
class="form-control">

</div>

<div class="mb-4">

<label>Type of Residence</label>

<select id="residence"
class="form-select">

<option value="">Select</option>

<option>Apartment</option>
<option>Independent House</option>
<option>Chawl</option>
<option>Other</option>

</select>

</div>

<div class="text-center">

<button
class="btn btn-success"
onclick="startAwareness()">

Continue

</button>

</div>

</div>

`;

}



// =========================================

function startAwareness(){

participant.age=document.getElementById("age").value;
participant.gender=document.getElementById("gender").value;
participant.city=document.getElementById("city").value;
participant.locality=document.getElementById("locality").value;
participant.residence=document.getElementById("residence").value;

currentQuestion=0;
score=0;
answers.length=0;

showQuestion();

}



// =========================================
// SHOW QUESTION
// =========================================

function showQuestion(){

const q=questions[currentQuestion];

let html=`

<div class="main-card">

<div class="d-flex justify-content-between">

<div>

<h5>

${q.icon} Situation ${currentQuestion+1}
of ${questions.length}

</h5>

</div>

<div>

<span class="risk ${q.risk}">

${q.category}

</span>

</div>

</div>

<div class="progress mt-3">

<div
class="progress-bar"

style="width:${((currentQuestion+1)/questions.length)*100}%">

</div>

</div>

<h3 class="mt-4">

${q.title}

</h3>

<p>

${q.situation}

</p>

`;

q.options.forEach((option,index)=>{

html+=`

<div

class="option-card"

onclick="selectAnswer(${index})"

id="option${index}">

${option.text}

</div>

`;

});

html+=`

<div class="text-center mt-4">

<button

class="btn btn-primary"

onclick="submitAnswer()">

Submit Response

</button>

</div>

</div>

`;

app.innerHTML=html;

window.selectedAnswer=-1;

}



// =========================================

function selectAnswer(index){

window.selectedAnswer=index;

document
.querySelectorAll(".option-card")
.forEach(card=>{

card.classList.remove("selected");

});

document
.getElementById("option"+index)
.classList.add("selected");

}



// =========================================

function submitAnswer(){

if(window.selectedAnswer==-1){

alert("Please select an option.");

return;

}

const q=questions[currentQuestion];

const selected=q.options[window.selectedAnswer];

answers.push(window.selectedAnswer);

if(selected.correct){

score++;

}

showFeedback(selected,q);

}



// =========================================
// FEEDBACK
// =========================================

function showFeedback(selected,q){

const cardClass=
selected.correct?
"correct-card":
"wrong-card";

const title=
selected.correct?
"✅ Recommended Response":
"🟠 A Safer Approach";

app.innerHTML=`

<div class="main-card">

<div class="${cardClass}">

<h3>

${title}

</h3>

<p>

${selected.feedback}

</p>

</div>

<div class="info-box">

<h5>📖 Did You Know?</h5>

<p>

${q.didYouKnow}

</p>

</div>

<div class="tip-box">

<h5>🛡 Safety Tip</h5>

<p>

${q.tip}

</p>

</div>

<div class="text-center mt-4">

<button

class="btn btn-success"

onclick="nextQuestion()">

${currentQuestion==(questions.length-1)?
"View Awareness Summary":
"Next Situation"}

</button>

</div>

</div>

`;

}



// =========================================

function nextQuestion(){

currentQuestion++;

if(currentQuestion>=questions.length){

showSummary();

return;

}

showQuestion();

}



// =========================================
// SUMMARY
// =========================================

function showSummary(){

const percent=Math.round(
(score/questions.length)*100
);

app.innerHTML=`

<div class="main-card text-center">

<h2>

🎉 Awareness Completed

</h2>

<hr>

<h1>

${score}/${questions.length}

</h1>

<h4>

${percent}% Awareness Score

</h4>

<p class="mt-4">

Thank you for participating in this

Disaster Preparedness Awareness Initiative.

</p>

<button

class="btn btn-primary mt-3"

onclick="location.reload()">

Start Again

</button>

</div>

`;

}
