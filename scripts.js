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
document.addEventListener("DOMContentLoaded", function() {
    const publicationForm = document.getElementById("publicationForm");
    const publicationsSection = document.getElementById("publications");

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
            }
            reader.readAsDataURL(imageInput.files[0]);
        }

        if (videoInput.files && videoInput.files[0]) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const video = document.createElement("video");
                video.src = e.target.result;
                video.controls = true;
                publication.appendChild(video);
            }
            reader.readAsDataURL(videoInput.files[0]);
        }

        publicationsSection.appendChild(publication);

        // Mamerina ny formulaire
        publicationForm.reset();
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const publicationForm = document.getElementById("publicationForm");
    const publicationsSection = document.getElementById("publications");

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
            }
            reader.readAsDataURL(imageInput.files[0]);
        }

        if (videoInput.files && videoInput.files[0]) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const video = document.createElement("video");
                video.src = e.target.result;
                video.controls = true;
                publication.appendChild(video);
            }
            reader.readAsDataURL(videoInput.files[0]);
        }

        const likesContainer = document.createElement("div");
        likesContainer.classList.add("likes");

        const likeButton = document.createElement("button");
        likeButton.textContent = "J'aime";
        let likeCount = 0;
        const likeCounter = document.createElement("span");
        likeCounter.textContent = ` (${likeCount})`;

        likeButton.addEventListener("click", function() {
            likeCount++;
            likeCounter.textContent = ` (${likeCount})`;
        });

        const adoreButton = document.createElement("button");
        adoreButton.textContent = "J'adore";
        let adoreCount = 0;
        const adoreCounter = document.createElement("span");
        adoreCounter.textContent = ` (${adoreCount})`;

        adoreButton.addEventListener("click", function() {
            adoreCount++;
            adoreCounter.textContent = ` (${adoreCount})`;
        });

        likesContainer.appendChild(likeButton);
        likesContainer.appendChild(likeCounter);
        likesContainer.appendChild(adoreButton);
        likesContainer.appendChild(adoreCounter);

        publication.appendChild(likesContainer);

        publicationsSection.appendChild(publication);

        // Mamerina ny formulaire
        publicationForm.reset();
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const publicationForm = document.getElementById("publicationForm");
    const publicationsSection = document.getElementById("publications");

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
            }
            reader.readAsDataURL(imageInput.files[0]);
        }

        if (videoInput.files && videoInput.files[0]) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const video = document.createElement("video");
                video.src = e.target.result;
                video.controls = true;
                publication.appendChild(video);
            }
            reader.readAsDataURL(videoInput.files[0]);
        }

        const likesContainer = document.createElement("div");
        likesContainer.classList.add("likes");

        const likeButton = document.createElement("button");
        likeButton.textContent = "J'aime";
        let likeCount = 0;
        const likeCounter = document.createElement("span");
        likeCounter.textContent = ` (${likeCount})`;

        likeButton.addEventListener("click", function() {
            likeCount++;
            likeCounter.textContent = ` (${likeCount})`;
        });

        const adoreButton = document.createElement("button");
        adoreButton.textContent = "J'adore";
        let adoreCount = 0;
        const adoreCounter = document.createElement("span");
        adoreCounter.textContent = ` (${adoreCount})`;

        adoreButton.addEventListener("click", function() {
            adoreCount++;
            adoreCounter.textContent = ` (${adoreCount})`;
        });

        likesContainer.appendChild(likeButton);
        likesContainer.appendChild(likeCounter);
        likesContainer.appendChild(adoreButton);
        likesContainer.appendChild(adoreCounter);

        publication.appendChild(likesContainer);

        const commentForm = document.createElement("form");
        commentForm.classList.add("commentForm");
        const commentLabel = document.createElement("label");
        commentLabel.setAttribute("for", "comment");
        commentLabel.textContent = "Commentaire:";
        const commentInput = document.createElement("textarea");
        commentInput.setAttribute("name", "comment");
        commentInput.setAttribute("rows", "2");
        commentInput.setAttribute("required", true);
        const commentSubmit = document.createElement("input");
        commentSubmit.setAttribute("type", "submit");
        commentSubmit.setAttribute("value", "Envoyer");

        commentForm.appendChild(commentLabel);
        commentForm.appendChild(commentInput);
        commentForm.appendChild(commentSubmit);

        const commentsContainer = document.createElement("div");
        commentsContainer.classList.add("comments");

        commentForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const comment = commentInput.value;
            const commentElement = document.createElement("p");
            commentElement.textContent = comment;
            commentsContainer.appendChild(commentElement);
            commentInput.value = "";
        });

        publication.appendChild(commentForm);
        publication.appendChild(commentsContainer);

        publicationsSection.appendChild(publication);

        // Mamerina ny formulaire
        publicationForm.reset();
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const publicationForm = document.getElementById("publicationForm");
    const publicationsSection = document.getElementById("publications");

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
            }
            reader.readAsDataURL(imageInput.files[0]);
        }

        if (videoInput.files && videoInput.files[0]) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const video = document.createElement("video");
                video.src = e.target.result;
                video.controls = true;
                publication.appendChild(video);
            }
            reader.readAsDataURL(videoInput.files[0]);
        }

        const likesContainer = document.createElement("div");
        likesContainer.classList.add("likes");

        const likeButton = document.createElement("button");
        likeButton.textContent = "J'aime";
        let likeCount = 0;
        const likeCounter = document.createElement("span");
        likeCounter.textContent = ` (${likeCount})`;

        likeButton.addEventListener("click", function() {
            likeCount++;
            likeCounter.textContent = ` (${likeCount})`;
        });

        const adoreButton = document.createElement("button");
        adoreButton.textContent = "J'adore";
        let adoreCount = 0;
        const adoreCounter = document.createElement("span");
        adoreCounter.textContent = ` (${adoreCount})`;

        adoreButton.addEventListener("click", function() {
            adoreCount++;
            adoreCounter.textContent = ` (${adoreCount})`;
        });

        likesContainer.appendChild(likeButton);
        likesContainer.appendChild(likeCounter);
        likesContainer.appendChild(adoreButton);
        likesContainer.appendChild(adoreCounter);

        publication.appendChild(likesContainer);

        const commentForm = document.createElement("form");
        commentForm.classList.add("commentForm");
        const commentLabel = document.createElement("label");
        commentLabel.setAttribute("for", "comment");
        commentLabel.textContent = "Commentaire:";
        const commentInput = document.createElement("textarea");
        commentInput.setAttribute("name", "comment");
        commentInput.setAttribute("rows", "2");
        commentInput.setAttribute("required", true);
        const commentSubmit = document.createElement("input");
        commentSubmit.setAttribute("type", "submit");
        commentSubmit.setAttribute("value", "Envoyer");

        commentForm.appendChild(commentLabel);
        commentForm.appendChild(commentInput);
        commentForm.appendChild(commentSubmit);

        const commentsContainer = document.createElement("div");
        commentsContainer.classList.add("comments");

        commentForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const comment = commentInput.value;
            const commentElement = document.createElement("p");
            commentElement.textContent = comment;
            commentsContainer.appendChild(commentElement);
            commentInput.value = "";
        });

        publication.appendChild(commentForm);
        publication.appendChild(commentsContainer);

        publicationsSection.appendChild(publication);

        // Mamerina ny formulaire
        publicationForm.reset();
    });
});
