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
        alert("Langue sélectionnée: " + selectedLanguage);
        // Mampiditra ny fiovan'ny fiteny amin'ny tranonkala
        if (selectedLanguage === "fr") {
            document.documentElement.lang = "fr";
            document.title = "Accueil";
            document.querySelector("h1").textContent = "Bienvenue sur notre plateforme";
            document.querySelector("label[for='username']").textContent = "Nom d'utilisateur ou Email:";
            document.querySelector("label[for='password']").textContent = "Mot de passe:";
            document.querySelector("input[type='submit'][value='Connexion']").value = "Connexion";
            document.getElementById("forgotPassword").textContent = "Mot de passe oublié?";
            document.querySelector("p a#registerLink").textContent = "S'inscrire";
            document.querySelector("p:contains('Pas encore de compte?')").textContent = "Pas encore de compte?";
            document.querySelector("h2:contains('S'inscrire')").textContent = "S'inscrire";
            document.querySelector("label[for='newUsername']").textContent = "Nom d'utilisateur:";
            document.querySelector("label[for='newEmail']").textContent = "Email:";
            document.querySelector("label[for='newPassword']").textContent = "Mot de passe:";
            document.querySelector("label[for='fullName']").textContent = "Nom complet:";
            document.querySelector("label[for='phoneNumber']").textContent = "Numéro de téléphone:";
            document.querySelector("label[for='age']").textContent = "Âge:";
            document.querySelector("label[for='location']").textContent = "Lieu de résidence:";
            document.querySelector("input[type='submit'][value='S'inscrire']").value = "S'inscrire";
            document.querySelector("p a#loginLink").textContent = "Se connecter";
            document.querySelector("p:contains('Déjà un compte?')").textContent = "Déjà un compte?";
        } else if (selectedLanguage === "en") {
            document.documentElement.lang = "en";
            document.title = "Home";
            document.querySelector("h1").textContent = "Welcome to our platform";
            document.querySelector("label[for='username']").textContent = "Username or Email:";
            document.querySelector("label[for='password']").textContent = "Password:";
            document.querySelector("input[type='submit'][value='Connexion']").value = "Login";
            document.getElementById("forgotPassword").textContent = "Forgot Password?";
            document.querySelector("p a#registerLink").textContent = "Register";
            document.querySelector("p:contains('Pas encore de compte?')").textContent = "Don't have an account yet?";
            document.querySelector("h2:contains('S'inscrire')").textContent = "Register";
            document.querySelector("label[for='newUsername']").textContent = "Username:";
            document.querySelector("label[for='newEmail']").textContent = "Email:";
            document.querySelector("label[for='newPassword']").textContent = "Password:";
            document.querySelector("label[for='fullName']").textContent = "Full Name:";
            document.querySelector("label[for='phoneNumber']").textContent = "Phone Number:";
            document.querySelector("label[for='age']").textContent = "Age:";
            document.querySelector("label[for='location']").textContent = "Location:";
            document.querySelector("input[type='submit'][value='S'inscrire']").value = "Register";
            document.querySelector("p a#loginLink").textContent = "Login";
            document.querySelector("p:contains('Déjà un compte?')").textContent = "Already have an account?";
        } else if (selectedLanguage === "mg") {
            document.documentElement.lang = "mg";
            document.title = "Fandraisana";
            document.querySelector("h1").textContent = "Tongasoa eto amin'ny sehatra";
            document.querySelector("label[for='username']").textContent = "Anaran'ny mpampiasa na Email:";
            document.querySelector("label[for='password']").textContent = "Tenimiafina:";
            document.querySelector("input[type='submit'][value='Connexion']").value = "Hiditra";
            document.getElementById("forgotPassword").textContent = "Hadino ny tenimiafina?";
            document.querySelector("p a#registerLink").textContent = "Hisoratra anarana";
            document.querySelector("p:contains('Pas encore de compte?')").textContent = "Tsy manana kaonty?";
            document.querySelector("h2:contains('S'inscrire')").textContent = "Hisoratra anarana";
            document.querySelector("label[for='newUsername']").textContent = "Anaran'ny mpampiasa:";
            document.querySelector("label[for='newEmail']").textContent = "Email:";
            document.querySelector("label[for='newPassword']").textContent = "Tenimiafina:";
            document.querySelector("label[for='fullName']").textContent = "Anarana feno:";
            document.querySelector("label[for='phoneNumber']").textContent = "Nomerao finday:";
            document.querySelector("label[for='age']").textContent = "Taona:";
            document.querySelector("label[for='location']").textContent = "Toerana ipetrahana:";
            document.querySelector("input[type='submit'][value='S'inscrire']").value = "Hisoratra anarana";
            document.querySelector("p a#loginLink").textContent = "Hiditra";
            document.querySelector("p:contains('Déjà un compte?')").textContent = "Efa manana kaonty?";
        }
    });
});
