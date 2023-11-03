document.addEventListener("DOMContentLoaded", function () {
    // Retrieve items from local storage and display them in the basket
    displayItemsInBasket();
});

function displayItemsInBasket() {
    const basketList = document.getElementById("basket-list");
    basketList.innerHTML = ""; // Clear the existing list

    // Get items from local storage
    const basketItems = JSON.parse(localStorage.getItem("basketItems")) || [];

    let totalPrice = 0;

    // Iterate through the items and display them
    basketItems.forEach(function (item) {
        const li = document.createElement("li");
        const img = document.createElement("img");
        img.src = item.photo;
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        li.appendChild(img);
        basketList.appendChild(li);

        // Update the total price
        totalPrice += item.price;
    });

    // Display the total price
    const totalElement = document.getElementById("total-price");
    totalElement.textContent = `Total Price: $${totalPrice.toFixed(2)}`;
}

function clearBasket() {
    // Clear the basket in local storage
    localStorage.removeItem("basketItems");

    // Refresh the displayed items and total price
    displayItemsInBasket();
}

function placeOrder() {
    // Show the order message
    const orderMessage = document.getElementById("order-message");
    orderMessage.style.display = "block"; // Display the message

    // Clear the basket
    clearBasket();
}
function redirectPage(selectedValue) {
    if (selectedValue) {
        window.location.href = selectedValue;
    }
}