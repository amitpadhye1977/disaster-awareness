// =======================================
// Disaster Preparedness Awareness Initiative
// app.js
// =======================================

// ----------------------------
// Global Variables
// ----------------------------

let currentQuestion = 0;
let score = 0;

const participant = {};
const answers = [];
let answerLocked = false;

// ----------------------------
// Start Application
// ----------------------------

window.onload = function () {

    renderHeader();
    renderProgress(0, "Welcome");
    renderFooter();

    showHome();

};

// ----------------------------
// HOME
// ----------------------------

function showHome() {

    renderProgress(0, "Welcome");

    document.getElementById("content").innerHTML = `

<div class="container">

<div class="main-card">

<h3 class="text-primary">

Welcome

</h3>

<p class="intro">

Welcome to the Disaster Preparedness Awareness Initiative.

This initiative has been developed to create awareness about disasters through practical day-to-day situations.

</p>

<div class="row mt-4">

<div class="col-6 mb-3">

<div class="alert alert-danger text-center">

🔥<br>

Fire

</div>

</div>

<div class="col-6 mb-3">

<div class="alert alert-warning text-center">

💨<br>

Gas Leakage

</div>

</div>

<div class="col-6 mb-3">

<div class="alert alert-info text-center">

🌍<br>

Earthquake

</div>

</div>

<div class="col-6 mb-3">

<div class="alert alert-primary text-center">

🌧️<br>

Flood

</div>

</div>

<div class="col-12">

<div class="alert alert-secondary text-center">

🏢<br>

Building Safety

</div>

</div>

</div>

<hr>

<div class="alert alert-success">

<strong>What to Expect</strong>

<ul class="mt-2 mb-0">

<li>Real-life situations</li>

<li>Immediate learning after every response</li>

<li>Approximate duration: 5 minutes</li>

<li>No name, phone number or email will be collected</li>

</ul>

</div>

<div class="text-center mt-4">

<button
class="btn btn-primary btn-lg"
onclick="showParticipant()">

Begin Awareness Initiative

</button>

</div>

</div>

</div>

`;

}

// ----------------------------
// PARTICIPANT
// ----------------------------

function showParticipant() {

    renderProgress(10, "Participant Details");

    document.getElementById("content").innerHTML = `

<div class="container">

<div class="main-card">

<h3 class="mb-4">

👤 Participant Details

</h3>

<div class="mb-3">

<label class="form-label">

Age Group

</label>

<select
id="age"
class="form-select">

<option value="">Select</option>

<option>Below 18</option>

<option>18 - 30</option>

<option>31 - 45</option>

<option>46 - 60</option>

<option>Above 60</option>

</select>

</div>

<div class="mb-3">

<label class="form-label">

Gender (Optional)

</label>

<select
id="gender"
class="form-select">

<option value="">Prefer not to say</option>

<option>Male</option>

<option>Female</option>

<option>Other</option>

</select>

</div>

<div class="mb-3">

<label class="form-label">

City

</label>

<input
type="text"
id="city"
class="form-control">

</div>

<div class="mb-3">

<label class="form-label">

Locality / Area

</label>

<input
type="text"
id="locality"
class="form-control">

</div>

<div class="mb-4">

<label class="form-label">

Type of Residence

</label>

<select
id="residence"
class="form-select">

<option value="">Select</option>

<option>Apartment</option>

<option>Independent House</option>

<option>Chawl</option>

<option>Row House / Villa</option>

<option>Other</option>

</select>

</div>

<div class="text-center">

<button
class="btn btn-success btn-lg"
onclick="startAwareness()">

Continue →

</button>

</div>

</div>

</div>

`;

}

// ----------------------------
// START QUIZ
// ----------------------------

function startAwareness() {

    participant.age = document.getElementById("age").value;
    participant.gender = document.getElementById("gender").value;
    participant.city = document.getElementById("city").value.trim();
    participant.locality = document.getElementById("locality").value.trim();
    participant.residence = document.getElementById("residence").value;

    if (participant.age === "") {

        alert("Please select Age Group.");
        return;

    }

    if (participant.city === "") {

        alert("Please enter City.");
        return;

    }

    if (participant.locality === "") {

        alert("Please enter Locality.");
        return;

    }

    if (participant.residence === "") {

        alert("Please select Type of Residence.");
        return;

    }

    currentQuestion = 0;
    score = 0;
    answers.length = 0;

    showQuestion();

}

// ----------------------------
// SHOW QUESTION
// ----------------------------

function showQuestion() {

    const q = questions[currentQuestion];

    renderProgress(
        Math.round(((currentQuestion + 1) / questions.length) * 100),
        `${q.icon} ${q.category} • Situation ${currentQuestion + 1} of ${questions.length}`
    );

    let html = `

    <div class="container">

        <div class="main-card">

            <div class="d-flex justify-content-between align-items-center">

                <h3 class="mb-0">

                    ${q.icon} ${q.title}

                </h3>

                <span class="risk ${q.risk}">

                    ${q.risk.toUpperCase()}

                </span>

            </div>

            <hr>

            <p class="fs-5">

                ${q.situation}

            </p>

    `;

    q.options.forEach(function(option, index){

        html += `

        <div
            class="option-card"
            id="option${index}"
            onclick="selectOption(${index})">

            ${option.text}

        </div>

        `;

    });

    html += `

        </div>

    </div>

    `;

    document.getElementById("content").innerHTML = html;

}


function selectOption(index){

    if(answerLocked) return;

    answerLocked = true;

    document.querySelectorAll(".option-card")
        .forEach(function(card){

            card.classList.remove("selected");

            card.style.pointerEvents="none";

        });

    document
        .getElementById("option"+index)
        .classList.add("selected");

    const q = questions[currentQuestion];

    const selected = q.options[index];

    if(selected.correct){

        score++;

    }

    answers.push(index);

    setTimeout(function(){

        showFeedback(selected,q);

    },500);

}
function nextQuestion(){

    currentQuestion++;

    if(currentQuestion >= questions.length){

        showSummary();
        return;

    }

    showQuestion();

}

function showSummary(){

    const percentage = Math.round((score / questions.length) * 100);

    let preparedness = "";
    let badge = "";
    let alertClass = "";

    if(percentage >= 80){

        preparedness = "Well Prepared";
        badge = "🟢";
        alertClass = "alert-success";

    }
    else if(percentage >= 60){

        preparedness = "Moderately Prepared";
        badge = "🟡";
        alertClass = "alert-warning";

    }
    else{

        preparedness = "Needs Improvement";
        badge = "🔴";
        alertClass = "alert-danger";

    }

    document.getElementById("content").innerHTML = `

    <div class="container">

        <div class="main-card text-center">

            <h2>

                🎉 Awareness Completed

            </h2>

            <hr>

            <h1 class="display-4">

                ${percentage}%

            </h1>

            <div class="alert ${alertClass}">

                <h4>

                    ${badge} ${preparedness}

                </h4>

            </div>

            <p>

                You completed

                <strong>${questions.length}</strong>

                practical situations.

            </p>

            <p>

                Community Preparedness Index

            </p>

            <h2>

                ${percentage} / 100

            </h2>

            <hr>

            <div class="text-start">

                <h5>Participant Details</h5>

                <table class="table table-bordered">

                    <tr>
                        <th>Age Group</th>
                        <td>${participant.age}</td>
                    </tr>

                    <tr>
                        <th>Gender</th>
                        <td>${participant.gender || "-"}</td>
                    </tr>

                    <tr>
                        <th>City</th>
                        <td>${participant.city}</td>
                    </tr>

                    <tr>
                        <th>Locality</th>
                        <td>${participant.locality}</td>
                    </tr>

                    <tr>
                        <th>Residence</th>
                        <td>${participant.residence}</td>
                    </tr>

                </table>

            </div>

            <div class="alert alert-info mt-4">

                <strong>

                    Thank you for participating.

                </strong>

                <br><br>

                Disaster preparedness begins with awareness.
                Share this initiative with your family,
                friends and neighbours.

            </div>

            <div class="d-grid gap-2 mt-4">

                <button
                    class="btn btn-success"
                    onclick="restartApp()">

                    Start Again

                </button>

            </div>

        </div>

    </div>

    `;

    renderProgress(100,"Awareness Completed");

}

function restartApp(){

    currentQuestion = 0;

    score = 0;

    answers.length = 0;

    showHome();

}


