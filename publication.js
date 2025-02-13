document.addEventListener("DOMContentLoaded", function() {
    const logoutButton = document.getElementById("logoutButton");
    const publicationsContainer = document.getElementById("publications");
    const suggestionsContainer = document.getElementById("suggestions");

    logoutButton.addEventListener("click", function() {
        const confirmLogout = confirm("Êtes-vous sûr de vouloir vous déconnecter?");
        if (confirmLogout) {
            window.location.href = "index.html";
        }
    });

    // Ohatra: mampiditra publication avy amin'ny data feno
    const publications = [
        { title: "Publication 1", description: "Description de la publication 1", author: "Membre 1" },
        { title: "Publication 2", description: "Description de la publication 2", author: "Membre 2" },
    ];

    publications.forEach(function(publication) {
        const publicationElement = document.createElement("div");
        const title = document.createElement("h3");
        title.textContent = publication.title;
        const description = document.createElement("p");
        description.textContent = publication.description;
        const author = document.createElement("p");
        author.textContent = `Par: ${publication.author}`;

        publicationElement.appendChild(title);
        publicationElement.appendChild(description);
        publicationElement.appendChild(author);
        publicationsContainer.appendChild(publicationElement);
    });

    // Ohatra: mampiditra fanolorana
    const suggestions = [
        { name: "Suggestion 1", description: "Description de la suggestion 1" },
        { name: "Suggestion 2", description: "Description de la suggestion 2" },
    ];

    suggestions.forEach(function(suggestion) {
        const suggestionElement = document.createElement("div");
        const name = document.createElement("h3");
        name.textContent = suggestion.name;
        const description = document.createElement("p");
        description.textContent = suggestion.description;

        suggestionElement.appendChild(name);
        suggestionElement.appendChild(description);
        suggestionsContainer.appendChild(suggestionElement);
    });
});
