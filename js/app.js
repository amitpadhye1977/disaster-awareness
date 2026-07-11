const homeScreen = document.getElementById("homeScreen");
const participantScreen = document.getElementById("participantScreen");

document
.getElementById("startBtn")
.addEventListener("click", function () {

    homeScreen.style.display = "none";
    participantScreen.style.display = "block";

});

document
.getElementById("participantNext")
.addEventListener("click", function () {

    showQuestion(0);

});

function showQuestion(index){

    participantScreen.style.display = "none";

document
.getElementById("questionScreen")
.style.display = "block";

    const q = questions[index];

    let html = "";

    html += "<h5>Situation "+(index+1)+" of "+questions.length+"</h5>";

    html += "<hr>";

    html += "<h3>"+q.title+"</h3>";

    html += "<p>"+q.situation+"</p>";

    for(let i=0;i<q.options.length;i++){

        html += `
        <div class="form-check mb-3">

            <input class="form-check-input"
                   type="radio"
                   name="answer"
                   value="${i}">

            <label class="form-check-label">

                ${q.options[i]}

            </label>

        </div>
        `;

    }

    html += `
    <button class="btn btn-success mt-3"
            onclick="checkAnswer(${index})">

            Submit Answer

    </button>
    `;

    document
    .getElementById("questionContainer")
    .innerHTML = html;

}


function checkAnswer(index){

    const selected =
    document.querySelector('input[name="answer"]:checked');

    if(selected==null){

        alert("Please select an answer.");

        return;

    }

    const answer =
    parseInt(selected.value);

    const q = questions[index];

    if(answer==q.correct){

        alert("Correct!");

    }

    else{

        alert("Incorrect!\n\n"+q.explanation);

    }

}
