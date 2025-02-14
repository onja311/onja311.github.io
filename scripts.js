function resetPassword() {
    var emailOrPhone = document.getElementById("emailOrPhone").value;
    if (validateEmailOrPhone(emailOrPhone)) {
        alert("Rohy famerenana mot de passe nalefa");
    } else {
        alert("Azafady, ampidiro ny email na nomeraon-telefaonina mety.");
    }
}

function validateEmailOrPhone(input) {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var phonePattern = /^\d{10}$/;
    return emailPattern.test(input) || phonePattern.test(input);
}
