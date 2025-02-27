document.addEventListener("DOMContentLoaded", function() {
    const logoutButton = document.getElementById("logoutButton");
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");
    const searchResults = document.getElementById("searchResults");
    const publicationForm = document.getElementById("publicationForm");
    const publicationsContainer = document.getElementById("publications");

    logoutButton.addEventListener("click", function() {
        window.location.href = "index.html";
    });

    searchButton.addEventListener("click", function() {
        const query = searchInput.value.toLowerCase();
        searchResults.innerHTML = ""; // Mamafa ny valiny teo aloha

        let foundResults = false;

        // Fikarohana mpikambana
        const members = [
            { name: "Mpikambana 1", bio: "Bio an'i Mpikambana 1" },
            { name: "Mpikambana 2", bio: "Bio an'i Mpikambana 2" },
        ];

        members.forEach(function(member) {
            if (member.name.toLowerCase().includes(query) || member.bio.toLowerCase().includes(query)) {
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
                searchResults.appendChild(memberElement);
                foundResults = true;
            }
        });

        // Fikarohana produits
        const publications = [
            { title: "Publication 1", description: "Description de la publication 1" },
            { title: "Publication 2", description: "Description de la publication 2" },
        ];

        publications.forEach(function(publication) {
            if (publication.title.toLowerCase().includes(query) || publication.description.toLowerCase().includes(query)) {
                const publicationElement = document.createElement("div");
                const title = document.createElement("h3");
                title.textContent = publication.title;
                const description = document.createElement("p");
                description.textContent = publication.description;

                publicationElement.appendChild(title);
                publicationElement.appendChild(description);
                searchResults.appendChild(publicationElement);
                foundResults = true;
            }
        });

        // Fikarohana services (azonao atao ny manampy fizarana iray misaraka na mametraka ao anatin'ny publication ihany koa ny services)

        if (!foundResults) {
            const noResultsElement = document.createElement("p");
            noResultsElement.textContent = "Aucune résultat trouvé.";
            searchResults.appendChild(noResultsElement);
        } else {
            const similarResultsElement = document.createElement("p");
            similarResultsElement.textContent = "Résultats similaires trouvés.";
            searchResults.appendChild(similarResultsElement);
        }
    });

    // Mametaka ny publication amin'ny data feno
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

    // Famoahana publication vaovao
    publicationForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Fisorohana ny fisehoan'ny pejy
        const title = document.getElementById("title").value;
        const description = document.getElementById("description").value;
        const imageInput = document.getElementById("image");
        const videoInput = document.getElementById("video");

        const publication = document.createElement("div");
        publication.classList.add("publication");

        const publicationTitle = document.createElement("h3");
        publicationTitle.textContent = title;

        const publicationDescription = document.createElement("p");
        publicationDescription.textContent = description;

        publication.appendChild(publicationTitle);
        publication.appendChild(publicationDescription);

        if (imageInput.files && imageInput.files[0]) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const image = document.createElement("img");
                image.src = e.target.result;
                image.alt = title;
                publication.appendChild(image);
            };
            reader.readAsDataURL(imageInput.files[0]);
        }

        if (videoInput.files && videoInput.files[0]) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const video = document.createElement("video");
                video.src = e.target.result;
                video.controls = true;
                publication.appendChild(video);
            };
            reader.readAsDataURL(videoInput.files[0]);
        }

        // Mampiditra publication amin'ny lisitra
        publicationsContainer.appendChild(publication);

        // Mamerina ny formulaire
        publicationForm.reset();
    });

    // Mametaka lisitry ny mpikambana miaraka amin'ny fiasa s'uivre (follow)
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

    // Mametaka sary
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

    // Mametaka parametres du compte
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
