function createProfile() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var birthDate = document.getElementById("birthDate").value;
    var bio = document.getElementById("bio").value;
    
    // Ampidiro ao amin'ny tahiry (database) ny mombamomba ny profil
    
    alert("Profil voaforona soa aman-tsara!");
    
    // Mampiseho ny faritra fametrahana sary
    document.getElementById("profilePhotos").style.display = "block";
    
    // Afeno ny form profil
    document.querySelector("form").style.display = "none";
    
    return false; // Manakana ny form mba hisorohana ny famerenana redirect
}

function submitPhotos() {
    var profilePhoto = document.getElementById("profilePhoto").files[0];
    var coverPhoto = document.getElementById("coverPhoto").files[0];
    
    // Ampidiro ao amin'ny tahiry (database) ny sary mombamomba sy ny sary fonony
    
    alert("Sary nampidirina soa aman-tsara!");
    
    // Hafatra fiarahabana
    alert("Tongasoa eto amin'ny MINET, " + document.getElementById("firstName").value + "!");
    
    // Redirect mankany amin'ny pejy tena izy na pejy hafa
    window.location.href = "home.html"; // Hanoloana amin'ny URL mety
}
