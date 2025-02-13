<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Espace Membre</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Bienvenue à l'Espace Membre</h1>
        <button id="loginButton">Se connecter</button>
        <button id="logoutButton" style="display:none;">Déconnecter</button>
    </header>
    <nav>
        <ul>
            <li><a href="index.html">Accueil</a></li>
            <li><a href="a-propos.html">A propos</a></li>
            <li><a href="services.html">Services</a></li>
            <li><a href="contact.html">Contact</a></li>
            <li><a href="faq.html">FAQ</a></li>
            <li><a href="blog.html">Blog</a></li>
            <li><a href="membre.html">Espace Membre</a></li>
        </ul>
    </nav>
    <main>
        <section>
            <h2>Vos Avantages en Tant que Membre</h2>
            <p>En tant que membre, vous bénéficiez d'avantages exclusifs, de réductions, et d'accès à du contenu spécial.</p>
        </section>
        <section id="loginSection" style="display:none;">
            <h2>Se connecter</h2>
            <form id="loginForm">
                <label for="username">Nom d'utilisateur:</label>
                <input type="text" id="username" name="username" required><br><br>
                <label for="password">Mot de passe:</label>
                <input type="password" id="password" name="password" required><br><br>
                <input type="submit" value="Connexion">
            </form>
        </section>
        <section>
            <h2>Publier Votre Service ou Produit</h2>
            <form id="publicationForm" style="display:none;">
                <label for="title">Titre:</label>
                <input type="text" id="title" name="title" required><br><br>
                <label for="description">Description:</label>
                <textarea id="description" name="description" rows="4" required></textarea><br><br>
                <label for="image">Image:</label>
                <input type="file" id="image" name="image" accept="image/*"><br><br>
                <label for="video">Vidéo:</label>
                <input type="file" id="video" name="video" accept="video/*"><br><br>
                <input type="submit" value="Publier">
            </form>
        </section>
        <section id="publications" style="display:none;">
            <h2>Publications des Membres</h2>
            <!-- Teo no hampisehoana ireo publication avy amin'ny mpikambana -->
        </section>
    </main>
    <footer>
        <p>&copy; 2025 Mon Site Web. Tous droits réservés.</p>
        <p>Contactez-nous: <a href="mailto:harisoaonja06@gmail.com">harisoaonja06@gmail.com</a></p>
        <p>Suivez-nous: 
            <a href="https://www.facebook.com/minet" target="_blank">Facebook</a>
        </p>
    </footer>
    <script src="scripts.js"></script>
</body>
</html>
