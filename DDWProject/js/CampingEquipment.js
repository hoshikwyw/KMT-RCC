// CampingEquipment.js
document.addEventListener("DOMContentLoaded", function () {
    // Display camping equipment items with the "Add to Basket" button
    displayCampingEquipment();
});

function displayCampingEquipment() {
    const campingEquipmentList = document.getElementById("camping-equipment-list");
    // Sample data for camping equipment (you can replace this with your data)
    const campingEquipment = [
        { name: "BackPack", photo: "https://campe-theme.myshopify.com/cdn/shop/products/Product7.jpg?v=1598945868", price: 99.99 },
        { name: "Hiking Boot", photo: "https://campe-theme.myshopify.com/cdn/shop/products/Product1_2000x.jpg?v=1598945754", price: 49.99 },
        { name: "LED Torch Light", photo: "https://campe-theme.myshopify.com/cdn/shop/products/Product24_2000x.jpg?v=1598946040", price: 39.99 },
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
