<!DOCTYPE html>
<html lang="mg">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hisoratra anarana - MINET</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <div class="logo">
            <h1>MINET</h1>
        </div>
    </header>
    <main>
        <section class="register-container">
            <h2>Hanokatra Kaonty Vaovao</h2>
            <form id="registerForm" onsubmit="return register()">
                <input type="text" id="emailOrPhone" name="emailOrPhone" placeholder="Laharana finday na Email" required>
                <input type="password" id="password" name="password" placeholder="Teny miafina" required>
                <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Avereno ny teny miafina" required>
                <button type="submit">Hisoratra anarana</button>
            </form>
        </section>
    </main>
    <footer>
        <p>&copy; 2025 MINET. Zo rehetra voatokana.</p>
    </footer>
    <script src="register.js"></script>
</body>
</html>
