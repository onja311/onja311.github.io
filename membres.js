document.addEventListener("DOMContentLoaded", function() {
    const logoutButton = document.getElementById("logoutButton");

    logoutButton.addEventListener("click", function() {
        window.location.href = "index.html";
    });

    // Ohatra: mampiditra publication amin'ny data feno
    const publicationsContainer = document.getElementById("publications");
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
    const membersContainer = document.getElementById("members");
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

        memberElement.appendChild(name);
        memberElement.appendChild(bio);
        membersContainer.appendChild(memberElement);
    });

    // Ohatra: mampiditra sary
    const photosContainer = document.getElementById("photos");
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
    const accountSettingsContainer = document.getElementById("accountSettings");
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
