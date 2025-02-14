function register() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    if (password === confirmPassword) {
        alert("Fisoratana anarana nahomby!");
        return true;
    } else {
        alert("Tsy mitovy ny teny miafina. Ampidiro indray.");
        return false;
    }
}
