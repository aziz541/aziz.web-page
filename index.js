function addToCart(button) {
    const card = button.closest('.card');
    const name = card.getAttribute('data-name');
    const price = card.getAttribute('data-price');

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name, price });
    localStorage.setItem('cart', JSON.stringify(cart));

    alert(`${name} has been added to your cart!`);
}
