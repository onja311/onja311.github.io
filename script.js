function resetPassword() {
    var emailOrPhone = document.getElementById("emailOrPhone").value;
    if (validateEmailOrPhone(emailOrPhone)) {
        alert("Rohy famerenana teny miafina nalefa");
        return true;
    } else {
        alert("Azafady, ampidiro ny email na nomeraon-telefaonina mety.");
        return false;
    }
}

function validateEmailOrPhone(input) {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var phonePattern = /^\d{10}$/;
    return emailPattern.test(input) || phonePattern.test(input);
}
