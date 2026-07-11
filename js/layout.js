function renderHeader(){

document.getElementById("header").innerHTML=`

<div class="header-wrapper">

<div class="container">

<div class="header-card">

<div class="d-flex align-items-center">

<div class="logo">

🛡️

</div>

<div class="ms-3">

<h4 class="m-0">

${APP.title}

</h4>

<div class="subtitle">

${APP.tagline}

</div>

</div>

</div>

<hr>

<div class="small text-center">

<strong>${APP.preparedBy}</strong><br>

${APP.course}<br>

${APP.college}

</div>

</div>

</div>

</div>

`;

}

function renderProgress(percent=0,text="Welcome"){

document.getElementById("progressContainer").innerHTML=`

<div class="progress-wrapper">

<div class="container">

<div class="progress-card">

<div class="d-flex justify-content-between">

<div>

<strong>

${text}

</strong>

</div>

<div>

${percent}%

</div>

</div>

<div class="progress mt-2">

<div
class="progress-bar"

style="width:${percent}%">

</div>

</div>

</div>

</div>

</div>

`;

}

function renderFooter(){

document.getElementById("footer").innerHTML=`

<div class="container">

<div class="footer">

Prepared as part of an Academic Public Awareness Initiative

</div>

</div>

`;

}
