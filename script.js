document.addEventListener("DOMContentLoaded", function() {
    var progressBar = document.querySelector(".progress");
    var width = 0;
    var interval = setInterval(function() {
        if (width >= 100) {
            clearInterval(interval);
            document.getElementById("splash-screen").style.display = "none";
            document.getElementById("main-content").style.display = "block";
        } else {
            width++;
            progressBar.style.width = width + "%";
        }
    }, 30); // Fanitarana ny tsipika mandritra ny 3 segondra

    // Fanampiana timer ho an'ny dots
    var dots = document.querySelector(".dots");
    var dotInterval = setInterval(function() {
        if (dots.innerHTML.length >= 4) {
            dots.innerHTML = ".";
        } else {
            dots.innerHTML += ".";
        }
    }, 500); // Manova dots isaky ny 500ms
});
