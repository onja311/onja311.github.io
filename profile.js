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

        // Tehirizo ny angona profil
        console.log("Profil enregistré:", fullName, phoneNumber, bio, profilePictureURL);
        alert("Profil enregistré avec succès!");

        // Fampisehoana ny fizarana hafa
        const publicationsContainer = document.getElementById("publications");
        const membersContainer = document.getElementById("members");
        const photosContainer = document.getElementById("photos");
        const accountSettingsContainer = document.getElementById("accountSettings");

        // Ohatra: mampiditra publication
        const publications = [
            { title: "Publication 1", description: "Description de la publication 1" },
            { title: "Publication 2", description: "Description de la publication 2" },
        ];
        
        publications.forEach(function(publication) {
            const publicationElement = document.createElement("div");
            const title = document.createElement("h3");
            title.textContent = publication.title;
            const description = document.createElement("p");
            description.textContent = publication.description;

            publicationElement.appendChild(title);
            publicationElement.appendChild(description);
            publicationsContainer.appendChild(publicationElement);
        });

        // Ohatra: mampiditra lisitry ny mpikambana
        const members = [
            { name: "Mpikambana 1", bio: "Bio an'i Mpikambana 1" },
            { name: "Mpikambana 2", bio: "Bio an'i Mpikambana 2" },
        ];

        members.forEach(function(member) {
            const memberElement = document.createElement("div");
            const name = document.createElement("h3");
            name.textContent = member.name;
            const bio = document.createElement("p");
            bio.textContent = member.bio;

            const followButton = document.createElement("button");
            followButton.textContent = "S'uivre";
            followButton.addEventListener("click", function() {
                alert(`Vous suivez maintenant ${member.name}`);
            });

            memberElement.appendChild(name);
            memberElement.appendChild(bio);
            memberElement.appendChild(followButton);
            membersContainer.appendChild(memberElement);
        });

        // Ohatra: mampiditra sary
        const photos = [
            "photo1.jpg",
            "photo2.jpg",
        ];

        photos.forEach(function(photo) {
            const img = document.createElement("img");
            img.src = photo;
            photosContainer.appendChild(img);
        });

        // Ohatra: mampiditra parametres du compte
        const settings = [
            { setting: "Changement de mot de passe" },
            { setting: "Mise à jour de l'adresse email" },
        ];

        settings.forEach(function(setting) {
            const settingElement = document.createElement("div");
            const settingText = document.createElement("p");
            settingText.textContent = setting.setting;

            settingElement.appendChild(settingText);
            accountSettingsContainer.appendChild(settingElement);
        });
    });
});
