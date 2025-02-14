document.addEventListener("DOMContentLoaded", function() {
    loadProducts();
});

function loadProducts() {
    // Ohatra: Ampidiro ny entana voatahiry ao amin'ny tahiry (database)
    var products = [
        {
            name: "Product 1",
            price: 10000,
            description: "Description for Product 1",
            image: "path/to/product1.jpg"
        },
        {
            name: "Product 2",
            price: 20000,
            description: "Description for Product 2",
            image: "path/to/product2.jpg"
        }
    ];

    var productsContainer = document.querySelector(".products");
    products.forEach(function(product) {
        var productElement = document.createElement("div");
        productElement.classList.add("product");
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price} MGA</p>
            <p>${product.description}</p>
            <button>Mividy</button>
        `;
        productsContainer.appendChild(productElement);
    });
}
