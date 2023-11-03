// Offers.js
document.addEventListener("DOMContentLoaded", function () {
    // Display special offers with the "Add to Basket" button
    displaySpecialOffers();
});

function displaySpecialOffers() {
    const offersList = document.getElementById("offers-list");
    // Sample data for special offers (you can replace this with your data)
    const specialOffers = [
        { name: "Item 1", photo: "item1.jpg", price: 25.99 },
        { name: "Item 2", photo: "item2.jpg", price: 19.99 },
        { name: "Item 3", photo: "item3.jpg", price: 29.99 },
    ];

    specialOffers.forEach(function (offer) {
        const li = document.createElement("li");
        const img = document.createElement("img");
        img.src = offer.photo;
        li.textContent = `${offer.name} - $${offer.price.toFixed(2)}`;
        const addButton = document.createElement("button");
        addButton.textContent = "Add to Basket";
        addButton.addEventListener("click", function () {
            addToBasket(offer);
        });
        li.appendChild(img);
        li.appendChild(addButton);
        offersList.appendChild(li);
    });
}

function addToBasket(item) {
    // Retrieve items from local storage
    const basketItems = JSON.parse(localStorage.getItem("basketItems")) || [];

    // Add the item to the basket
    basketItems.push(item);

    // Store the updated basket in local storage
    localStorage.setItem("basketItems", JSON.stringify(basketItems));
}
