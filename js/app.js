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
