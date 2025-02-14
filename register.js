function register() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    if (password === confirmPassword) {
        alert("Fisoratana anarana nahomby!");
        // Misy kaody ilaina mba hitehirizana ny vaovao fisoratana anarana ao amin'ny server-nao
        return true;
    } else {
        alert("Tsy mitovy ny mot de passe. Ampidiro indray.");
        return false;
    }
}
