// =========================
// Start Application
// =========================

renderHeader();
renderProgress(0,"Welcome");
renderFooter();

showHome();


// =========================
// HOME
// =========================

function showHome(){

document.getElementById("content").innerHTML=`

<div class="container">

<div class="main-card">

<h3 class="text-primary">

Welcome

</h3>

<p class="intro">

This initiative has been developed to create awareness about disaster preparedness through practical day-to-day situations.

You will be presented with situations related to:

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

<li>Practical real-life situations</li>

<li>Immediate learning after every response</li>

<li>Approximate time: 5 minutes</li>

<li>No personal information will be collected</li>

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





                </button>

            </div>

        </div>

    </div>

    `;

}


function startAwareness(){

    participant.age =
    document.getElementById("age").value;

    participant.gender =
    document.getElementById("gender").value;

    participant.city =
    document.getElementById("city").value.trim();

    participant.locality =
    document.getElementById("locality").value.trim();

    participant.residence =
    document.getElementById("residence").value;

    if(participant.age==""){

        alert("Please select Age Group.");

        return;

    }

    if(participant.city==""){

        alert("Please enter City.");

        return;

    }

    if(participant.locality==""){

        alert("Please enter Locality.");

        return;

    }

    if(participant.residence==""){

        alert("Please select Type of Residence.");

        return;

    }

    currentQuestion = 0;

    score = 0;

    answers.length = 0;

    showQuestion();

}




function showQuestion(){

    renderProgress(
        20,
        "Fire Safety • Situation 1"
    );

    document.getElementById("content").innerHTML = `

    <div class="container">

        <div class="main-card text-center">

            <h2>
                🔥 Situation Screen
            </h2>

            <p>

                Coming in Step 5

            </p>

        </div>

    </div>

    `;

}



