function changeText() {
    document.getElementById("demo").innerText = "Text Changed!";
}

function changeColor() {
    document.body.style.backgroundColor = "#f0f8ff";
}

function changeColor(color) {
    document.body.style.backgroundColor = color;
}

function showMessage(message) {
    document.getElementById("demo").innerText = message;
}

document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll(".fade-in");
    elements.forEach(element => {
        element.classList.add("visible");
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll(".fade-in");
    elements.forEach(element => {
        element.classList.add("visible");
    });
});
.slide-in {
    opacity: 0;
    transform: translateX(-100%);
    transition: opacity 1s ease-out, transform 1s ease-out;
}

.slide-in.visible {
    opacity: 1;
    transform: translateX(0);
}
document.addEventListener("DOMContentLoaded", function() {
    const publicationForm = document.getElementById("publicationForm");
    const publicationsSection = document.getElementById("publications");

    publicationForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Fisorohana ny fisehoan'ny pejy
        const title = document.getElementById("title").value;
        const description = document.getElementById("description").value;

        const publication = document.createElement("div");
        publication.classList.add("publication");

        const publicationTitle = document.createElement("h3");
        publicationTitle.textContent = title;

        const publicationDescription = document.createElement("p");
        publicationDescription.textContent = description;

        publication.appendChild(publicationTitle);
        publication.appendChild(publicationDescription);

        publicationsSection.appendChild(publication);

        // Mamerina ny formulaire
        publicationForm.reset();
    });
});
