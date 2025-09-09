// Initialise display
// - Show introduction box by default
// - Hide nav and main containers by default
var nav = document.getElementsByTagName("nav");
var main = document.getElementsByTagName("main");
nav[0].style.display = "none";
main[0].style.display = "none";


// Home / Introduction Modal Box
// - On button click, show / hide introduction box and nav + main containers
var introduction = document.getElementById("intro");
var wakeBtn = document.getElementById("intro_btn_wake");
var sleepBtn = document.getElementById("intro_btn_sleep");

// Hide Introduction Screen on button click
wakeBtn.onclick = function() {
    introduction.style.display = "block";
    nav[0].style.display = "none";
    main[0].style.display = "none";
}
sleepBtn.onclick = function() {
    introduction.style.display = "none";
    nav[0].style.display = "block";
    main[0].style.display = "block";
}

document.getElementById("about_me").style.display = "none";
// Show / Hide Sections in Main Container
// - On button click, show relevant section and hide others
// Check for button click
var home = document.getElementById("home_btn");
home.onclick = function() {
    document.getElementById("home").style.display = "block";
    document.getElementById("about_me").style.display = "none";
    document.getElementById("interests").style.display = "none";
    document.getElementById("projects").style.display = "none";
    document.getElementById("extras").style.display = "none";
    document.getElementById("contact").style.display = "none";
}
var about_me = document.getElementById("about_me_btn");
about_me.onclick = function() {
    document.getElementById("home").style.display = "none";
    document.getElementById("about_me").style.display = "block";
    document.getElementById("interests").style.display = "none";
    document.getElementById("projects").style.display = "none";
    document.getElementById("extras").style.display = "none";
    document.getElementById("contact").style.display = "none";
}
var interests = document.getElementById("interests_btn");
interests.onclick = function() {
    document.getElementById("home").style.display = "none";
    document.getElementById("about_me").style.display = "none";
    document.getElementById("interests").style.display = "block";
    document.getElementById("projects").style.display = "none";
    document.getElementById("extras").style.display = "none";
    document.getElementById("contact").style.display = "none";
}
var projects = document.getElementById("projects_btn");
projects.onclick = function() {
    document.getElementById("home").style.display = "none";
    document.getElementById("about_me").style.display = "none";
    document.getElementById("interests").style.display = "none";
    document.getElementById("projects").style.display = "block";
    document.getElementById("extras").style.display = "none";
    document.getElementById("contact").style.display = "none";
}
var extras = document.getElementById("extras_btn");
extras.onclick = function() {
    document.getElementById("home").style.display = "none";
    document.getElementById("about_me").style.display = "none";
    document.getElementById("interests").style.display = "none";
    document.getElementById("projects").style.display = "none";
    document.getElementById("extras").style.display = "block";
    document.getElementById("contact").style.display = "none";
}
var contact = document.getElementById("contact_btn");
contact.onclick = function() {
    document.getElementById("home").style.display = "none";
    document.getElementById("about_me").style.display = "none";
    document.getElementById("interests").style.display = "none";
    document.getElementById("projects").style.display = "none";
    document.getElementById("extras").style.display = "none";
    document.getElementById("contact").style.display = "block";
}