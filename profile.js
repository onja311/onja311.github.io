document.addEventListener("DOMContentLoaded", function() {
    const profileForm = document.getElementById("profileForm");

    profileForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Misoroka ny fisehoana mahazatra amin'ny fanaterana
        const fullName = document.getElementById("fullName").value;
        const job = document.getElementById("job").value;
        const location = document.getElementById("location").value;
        const product = document.getElementById("product").value;
        const profilePictureInput = document.getElementById("profilePicture");

        let profilePictureURL = "";
        if (profilePictureInput.files && profilePictureInput.files[0]) {
            const reader = new FileReader();
            reader.onload = function(e) {
                profilePictureURL = e.target.result;
                // Ampidiro eto ny kaody mba hikirakira ny sary profil
                alert("Profil enregistré avec succès!");
                window.location.href = "nextpage.html"; // Redirect amin'ny pejy manaraka
            };
            reader.readAsDataURL(profilePictureInput.files[0]);
        } else {
            // Raha tsy misy sary dia mandeha tsotra izao ny alert sy redirect
            alert("Profil enregistré avec succès!");
            window.location.href = "nextpage.html"; // Redirect amin'ny pejy manaraka
        }

        console.log("Profil enregistré:", fullName, job, location, product, profilePictureURL);
    });
});
