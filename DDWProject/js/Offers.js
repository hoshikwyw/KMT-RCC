// Offers.js
document.addEventListener("DOMContentLoaded", function () {
    // Display special offers with the "Add to Basket" button
    displaySpecialOffers();
});

function displaySpecialOffers() {
    const offersList = document.getElementById("offers-list");
    // Sample data for special offers (you can replace this with your data)
    const specialOffers = [
        { name: "Yellow Tent", photo: "https://www.luluhypermarket.com/cdn-cgi/image/f=auto/medias/1200Wx1200H-null?context=bWFzdGVyfGltYWdlc3wyMDk3MjR8aW1hZ2UvanBlZ3xhR1kzTDJnMU1TOHhOekU0TXpJME16Y3pNRGszTkM4eE1qQXdWM2d4TWpBd1NGOXVkV3hzfDg2M2YwZDUzYTZiOTE5MzI4YzYyOTBkMWRlMjMzZTc1ZjAxYzNjNTYzYTQ2NDNlNWFlZTM2YzdlZmQyZDE1ZWU", price: 25.99 },
        { name: "Camp stove", photo: "https://assets.wfcdn.com/im/67015440/resize-h755-w755%5Ecompr-r85/1711/171122849/Portable+Camp+Stove+Wood+Stovetent+Stove+Hunting+Fishing+Stove+Backpacking+Stove+Outdoor+Stove+Camping+Stove+Griddle.jpg", price: 19.99 },
        { name: "Red Backpack", photo: "https://www.trailspace.com/images/gear/2014/pack-300x300.jpg", price: 29.99 },
    ];

    specialOffers.forEach(function (offer) {
        const li = document.createElement("li");
        const img = document.createElement("img");
        img.src = offer.photo;
        // Create and append the first <h2> element
        const h2Name = document.createElement("h4");
        h2Name.textContent = offer.name;
        li.appendChild(h2Name);

        // Create and append the second <h2> element for price
        const h2Price = document.createElement("h4");
        h2Price.textContent = `$${offer.price.toFixed(2)}`;
        li.appendChild(h2Price);
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
function redirectPage(selectedValue) {
    if (selectedValue) {
        window.location.href = selectedValue;
    }
}