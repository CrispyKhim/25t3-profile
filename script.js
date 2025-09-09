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


// Show / Hide Sections in Main Container
// - On button click, show relevant section and hide others

// Array of IDs
var sections = ["home", "about_me", "interests", "projects", "extras", "contact"];

// Helper to show one section and hide others
function showSection(sectionId) {
    sections.forEach(function(id) {
        if (id === sectionId) {
            document.getElementById(id).style.display = "block";
        } else {
            document.getElementById(id).style.display = "none";
        }
    });
}

// Attach click handlers to nav buttons
sections.forEach(function(id) {
    var btn = document.getElementById(id + "_btn");
    if (btn) {
        btn.onclick = function() {
            showSection(id);
        };
    }
});
