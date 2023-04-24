document.addEventListener("DOMContentLoaded", function() {
    const events = [
        { date: "2023-05-01", name: "Clothing Swap Event" },
        { date: "2023-06-15", name: "Summer Fashion Exchange" },
    ];
    const products = [
        { id: 1, name: "I love Aditya Raman T-Shirt", price: 25, imageUrl: "https://numberonenation.com" },
        { id: 2, name: "I love Aditya Raman Hoodie", price: 50, imageUrl: "https://numberonenation.com" },
    ];

    const eventsContainer = document.getElementById("events");

    events.forEach(event => {
        const eventDiv = document.createElement("div");
        eventDiv.innerHTML = `<strong>${event.date}:</strong> ${event.name}`;
        eventsContainer.appendChild(eventDiv);
    });
});

// Add this function to render products
function renderProducts() {
    const productsContainer = document.getElementById("products");

    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");

        productDiv.innerHTML = `
            <img src="${product.imageUrl}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button data-product-id="${product.id}">Add to Cart</button>
        `;

        productsContainer.appendChild(productDiv);
    });
}

// Call the renderProducts function
renderProducts();

// Handle the "Add to Cart" button clicks
document.getElementById("products").addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        const productId = parseInt(event.target.dataset.productId);
        console.log(`Product ID ${productId} added to the cart.`);

        // Implement "add to cart" functionality here.
    }
});
