document.addEventListener("DOMContentLoaded", function() {
    const loginSection = document.getElementById("loginSection");
    const registerSection = document.getElementById("registerSection");
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");
    const loginLink = document.getElementById("loginLink");
    const registerLink = document.getElementById("registerLink");
    const forgotPassword = document.getElementById("forgotPassword");
    const languageSelector = document.getElementById("languageSelector");

    loginLink.addEventListener("click", function(event) {
        event.preventDefault();
        loginSection.style.display = "block";
        registerSection.style.display = "none";
    });

    registerLink.addEventListener("click", function(event) {
        event.preventDefault();
        loginSection.style.display = "none";
        registerSection.style.display = "block";
    });

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Misoroka ny fisehoana mahazatra amin'ny fidirana
        alert("Connexion réussie!");
        // Add code here to handle login and redirect to the member page
    });

    registerForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Misoroka ny fisehoana mahazatra amin'ny fisoratana anarana
        alert("Inscription réussie!");
        // Add code here to handle registration and redirect to the member page
    });

    forgotPassword.addEventListener("click", function(event) {
        event.preventDefault();
        alert("Veuillez contacter l'administrateur pour réinitialiser votre mot de passe.");
    });

    // Fisorohana ny safidy fiteny
    languageSelector.addEventListener("change", function(event) {
        const selectedLanguage = event.target.value;
        // Add code here to handle language change
        alert("Langue sélectionnée: " + selectedLanguage);
    });
});
