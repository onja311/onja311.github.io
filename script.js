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
});
