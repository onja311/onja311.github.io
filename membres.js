document.addEventListener("DOMContentLoaded", function() {
    const logoutButton = document.getElementById("logoutButton");
    const profileForm = document.getElementById("profileForm");

    logoutButton.addEventListener("click", function() {
        window.location.href = "index.html";
    });

    profileForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Misorohana ny fisehoan'ny pejy
        const fullName = document.getElementById("fullName").value;
        const phoneNumber = document.getElementById("phoneNumber").value;
        const bio = document.getElementById("bio").value;
        const profilePictureInput = document.getElementById("profilePicture");

        let profilePictureURL = "";
        if (profilePictureInput.files && profilePictureInput.files[0]) {
            const reader = new FileReader();
            reader.onload = function(e) {
                profilePictureURL = e.target.result;
                // Avelao ny sary hiseho ao amin'ny profil na hotehirizina
            };
            reader.readAsDataURL(profilePictureInput.files[0]);
        }

        // Tehirizo ny angona profil any amin'ny console.log("Profil enregistré:", fullName, phoneNumber, bio, profilePictureURL);
        alert("Profil enregistré avec succès!");
        window.location.href = "membre.html"; // Redirect mankany amin'ny pejy membre rehefa voarakitra ny profil
    });
});
