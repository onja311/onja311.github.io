function addProduct() {
    var productName = document.getElementById("productName").value;
    var productPrice = document.getElementById("productPrice").value;
    var productDescription = document.getElementById("productDescription").value;
    var productImage = document.getElementById("productImage").files[0];

    // Ampidiro ao amin'ny tahiry (database) ny entana vaovao
    // Ohatra: fampiasana API na tahiry JSON

    alert("Entana nampidirina soa aman-tsara!");
    window.location.href = "shop.html";
    return false;
}
