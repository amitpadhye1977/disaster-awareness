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

    participantNext.onclick = function(){

    showQuestion(0);

}

});
