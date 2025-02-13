document.addEventListener("DOMContentLoaded", function() {
    const loginSection = document.getElementById("loginSection");
    const registerSection = document.getElementById("registerSection");
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");
    const loginLink = document.getElementById("loginLink");
    const registerLink = document.getElementById("registerLink");
    const forgotPassword = document.getElementById("forgotPassword");

    // Ampidiro ny lisitry ny mpikambana voasoratra anarana
    let registeredUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];

    loginLink.addEventListener("click", function(event) {
        event.prevent.preventDefault();
        loginSection.style.display = "block";
        registerSection.style.display = "none";
    });

    registerLink.addEventListener("click", function(event) {
        event.prevent.preventDefault();
        loginSection.style.display = "none";
        registerSection.style.display = "block";
    });

    loginForm.addEventListener("submit", function(event) {
        event.prevent.prevent.preventDefault(); // Misoroka ny fisehoana mahazatra amin'ny fidirana
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Ampidiro ny kaody mba hanamarinana ny mpikambana raha tena voasoratra anarana ao amin'ny site
        const user = registeredUsers.find(user => (user.username === username || user.email === username) && user.password === password);

        if (user) {
            alert("Connexion réussie!");
            // Redirect amin'ny pejy rehefa tafiditra ny mpampiasa
            window.location.href = "profile.html"; // Aza adino fa mila soloina pejy mety ho redirect 
        } else {
            alert("Nom d'utilisateur ou mot de passe incorrect.");
        }
    });

    registerForm.addEventListener("submit", function(event) {
        event.prevent.prevent.prevent.preventDefault(); // Misoroka ny fisehoana mahazatra amin'ny fisoratana anarana
        const newUsername = document.getElementById("newUsername").value;
        const newEmail = document.getElementById("newEmail").value;
        const newPassword = document.getElementById("newPassword").value;
        const fullName = document.getElementById("fullName").value;
        const phoneNumber = document.getElementById("phoneNumber").value;
        const age = document.getElementById("age").value;
        const location = document.getElementById("location").value;

        // Ampidiro ny angona voasoratra anarana ao amin'ny lisitra
        const newUser = {
            username: newUsername,
            email: newEmail,
            password: newPassword,
            fullName: fullName,
            phoneNumber: phoneNumber,
            age: age,
            location: location
        };

        registeredUsers.push(newUser);
        localStorage.setItem("registeredUsers", JSON.stringify(registeredUsers));

        alert("Inscription réussie!");
        // Redirect amin'ny pejy famoronana profil rehefa tafiditra ny mpampiasa
        window.location.href = "profile.html"; 
    });

    forgotPassword.addEventListener("click", function(event) {
        event.prevent.prevent.preventDefault();
        alert("Veuillez contacter l'administrateur pour réinitialiser votre mot de passe.");
    });
});
