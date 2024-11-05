let button1 = document.getElementById("projects-button");
let button2 = document.getElementById("photography-button");
let button3 = document.getElementById("contact-button");

function changeButton(event) {
    event.currentTarget.style.backgroundColor="rgba(0, 0, 0, 0.75)";
};

function addUnderline(event) {
    event.currentTarget.style.textDecoration="underline";
};

function removeBoth(event) {
    event.currentTarget.style.backgroundColor="";
    event.currentTarget.style.textDecoration="";
};

button1.addEventListener('mouseover', changeButton);
button2.addEventListener('mouseover', changeButton);
button3.addEventListener('mouseover', changeButton);

button1.addEventListener('mousedown', addUnderline);
button2.addEventListener('mousedown', addUnderline);
button3.addEventListener('mousedown', addUnderline);

button1.addEventListener('mouseout', removeBoth);
button2.addEventListener('mouseout', removeBoth);
button3.addEventListener('mouseout', removeBoth);