function register() {
    var emailOrPhone = document.getElementById("emailOrPhone").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    if (password === confirmPassword) {
        // Miantso ny pejy famoronana profil aorian'ny fisoratana anarana nahomby
        window.location.href = "create_profile.html";
        return true;
    } else {
        alert("Tsy mitovy ny teny miafina. Ampidiro indray.");
        return false;
    }
}
