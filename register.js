function register() {
    var emailOrPhone = document.getElementById("emailOrPhone").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    if (password === confirmPassword) {
        // Redirect mankany amin'ny pejy famoronana profil
        window.location.href = "create_profile.html";
        return false; // Manakana ny form mba hisorohana ny famerenana redirect
    } else {
        alert("Tsy mitovy ny teny miafina. Ampidiro indray.");
        return false;
    }
}
