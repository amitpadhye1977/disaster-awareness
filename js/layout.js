function renderHeader(){

document
.getElementById("header")
.innerHTML=`

<div class="container">

<div class="main-card text-center">

<h2>

🛡️ ${APP.title}

</h2>

<p class="subtitle">

${APP.tagline}

</p>

<hr>

<div>

<strong>

Prepared by

</strong>

<br>

${APP.preparedBy}

<br>

${APP.course}

<br>

${APP.college}

</div>

</div>

</div>

`;

}

function renderProgress(){

document
.getElementById("progressContainer")
.innerHTML="";

}

function renderFooter(){

document
.getElementById("footer")
.innerHTML=`

<div class="container">

<div class="footer">

Prepared as part of an Academic Public Awareness Initiative

</div>

</div>

`;

}
