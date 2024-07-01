document.addEventListener('DOMContentLoaded', () => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItems = document.getElementById('cartItems');
    const totalPriceElem = document.getElementById('totalPrice');
    let totalPrice = 0;

    cart.forEach(item => {
        const itemElem = document.createElement('div');
        itemElem.textContent = `${item.name}: $${item.price}`;
        cartItems.appendChild(itemElem);
        totalPrice += parseFloat(item.price);
    });

    totalPriceElem.textContent = totalPrice.toFixed(2);
});

function checkout() {
    localStorage.removeItem('cart');
    alert('Thank you for your purchase!');
    window.location.href = 'index.html';
}
