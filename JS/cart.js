let cart = [];
let totalItems = 0;

const cartBtn = document.querySelector(".header__cart-container");
const cartSidebar = document.getElementById("cartSidebar");
const cartOverlay = document.getElementById("cartOverlay");
const closeBtn = document.querySelector(".cart-sidebar__close");
const emptyCartText = document.getElementById("emptyCartText")

// Open cart
cartBtn.addEventListener('click', () => {
    cartSidebar.classList.add('open');
    cartOverlay.classList.add('active');
});

// Close cart
closeBtn.addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);

function closeCart() {
    cartSidebar.classList.remove('open');
    cartOverlay.classList.remove('active');
}

function addToCart(name, price) {
    cart.push({ name: name, price: price });
    totalItems++;
    emptyCartText.innerText = "";

    // Update badge
    document.getElementById("badge").innerText = totalItems;

    // Update total price
    let total = 0;
    for(let i = 0; i < cart.length; i++) {
        total = total + cart[i].price;
    }

    // Show item in cart
    let list = document.getElementById("cartItems");
    let newItem = document.createElement("p");
    newItem.innerText = name + " - $" + price;
    list.appendChild(newItem);
}