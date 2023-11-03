// CampingEquipment.js
document.addEventListener("DOMContentLoaded", function () {
    // Display camping equipment items with the "Add to Basket" button
    displayCampingEquipment();
});

function displayCampingEquipment() {
    const campingEquipmentList = document.getElementById("camping-equipment-list");
    // Sample data for camping equipment (you can replace this with your data)
    const campingEquipment = [
        { name: "Tent", photo: "tent.jpg", price: 99.99 },
        { name: "Sleeping Bag", photo: "sleeping-bag.jpg", price: 49.99 },
        { name: "Backpack", photo: "backpack.jpg", price: 39.99 },
    ];

    campingEquipment.forEach(function (item) {
        const li = document.createElement("li");
        const img = document.createElement("img");
        img.src = item.photo;
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        const addButton = document.createElement("button");
        addButton.textContent = "Add to Basket";
        addButton.addEventListener("click", function () {
            addToBasket(item);
        });
        li.appendChild(img);
        li.appendChild(addButton);
        campingEquipmentList.appendChild(li);
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
