const cartItems = [];
let total = 0;

function addToCart(itemName, itemPrice) {
    cartItems.push({ name: itemName, price: itemPrice });
    total += itemPrice;

    updateCartDisplay();
}

function updateCartDisplay() {
    const cartList = document.getElementById("cartItems");
    const cartTotal = document.getElementById("cartTotal");

    cartList.innerHTML = "";
    cartItems.forEach((item) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartList.appendChild(listItem);
    });

    cartTotal.textContent = total.toFixed(2);
}

function checkout() {
    // Implement your checkout logic here (e.g., payment processing).
    // For this example, we will simulate a successful payment.
    alert("Payment successful!");
    cartItems.length = 0;
    total = 0;
    updateCartDisplay();
}
