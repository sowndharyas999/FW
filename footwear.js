// Product Data
const products = [
    {
        id: 1,
        name: "APEX Pro Max",
        brand: "APEX",
        price: 299.99,
        rating: 4.8,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300'%3E%3Cdefs%3E%3ClinearGradient id='grad1' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23ff6b35;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%2300d4ff;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23grad1)' width='300' height='300'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-family='Montserrat' font-size='24' font-weight='bold'%3EAPEX PRO%3C/text%3E%3C/svg%3E",
        badge: "New"
    },
    {
        id: 2,
        name: "Quantum Runner",
        brand: "APEX",
        price: 249.99,
        rating: 4.6,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300'%3E%3Cdefs%3E%3ClinearGradient id='grad2' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%2300d4ff;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23ff6b35;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23grad2)' width='300' height='300'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-family='Montserrat' font-size='24' font-weight='bold'%3EQUANTUM%3C/text%3E%3C/svg%3E",
        badge: "Limited"
    },
    {
        id: 3,
        name: "Velocity X",
        brand: "APEX",
        price: 199.99,
        rating: 4.7,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300'%3E%3Cdefs%3E%3ClinearGradient id='grad3' x1='0%25' y1='0%25' x2='100%25' y2='0%25'%3E%3Cstop offset='0%25' style='stop-color:%23ff6b35;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23ff0066;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23grad3)' width='300' height='300'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-family='Montserrat' font-size='24' font-weight='bold'%3EVELOCITY%3C/text%3E%3C/svg%3E",
        badge: "Popular"
    },
    {
        id: 4,
        name: "Stealth Elite",
        brand: "APEX",
        price: 349.99,
        rating: 4.9,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300'%3E%3Cdefs%3E%3ClinearGradient id='grad4' x1='0%25' y1='100%25' x2='100%25' y2='0%25'%3E%3Cstop offset='0%25' style='stop-color:%231e293b;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%2300d4ff;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23grad4)' width='300' height='300'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-family='Montserrat' font-size='24' font-weight='bold'%3ESTEALTH%3C/text%3E%3C/svg%3E",
        badge: "Premium"
    },
    {
        id: 5,
        name: "Fusion Light",
        brand: "APEX",
        price: 179.99,
        rating: 4.5,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300'%3E%3Cdefs%3E%3CradialGradient id='grad5'%3E%3Cstop offset='0%25' style='stop-color:%23ff6b35;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%231e293b;stop-opacity:1' /%3E%3C/radialGradient%3E%3C/defs%3E%3Crect fill='url(%23grad5)' width='300' height='300'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-family='Montserrat' font-size='24' font-weight='bold'%3EFUSION%3C/text%3E%3C/svg%3E",
        badge: "Sale"
    },
    {
        id: 6,
        name: "Apex Classic",
        brand: "APEX",
        price: 159.99,
        rating: 4.4,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300'%3E%3Cdefs%3E%3ClinearGradient id='grad6' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23334155;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23ff6b35;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23grad6)' width='300' height='300'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-family='Montserrat' font-size='24' font-weight='bold'%3ECLASSIC%3C/text%3E%3C/svg%3E"
    }
];

// Shopping Cart State
let cart = [];
let currentCheckoutStep = 1;

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
    updateCartCount();
    setupScrollEffects();
    setupCardFormatting();
});

// Render Products
function renderProducts() {
    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = '';

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.name}" class="product-image">
            </div>
            <div class="product-info">
                <div class="product-brand">${product.brand}</div>
                <div class="product-name">${product.name}</div>
                <div class="product-price">$${product.price}</div>
                <div class="product-rating">
                    ${generateStars(product.rating)}
                    <span class="rating-text">(${product.rating})</span>
                </div>
                <button class="add-to-cart-btn ripple" onclick="addToCart(${product.id})">
                    Add to Cart
                </button>
            </div>
        `;
        productsGrid.appendChild(productCard);
    });
}

// Generate Star Rating
function generateStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= Math.floor(rating)) {
            stars += '<svg class="star" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>';
        } else {
            stars += '<svg class="star empty" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>';
        }
    }
    return stars;
}

// Add to Cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            ...product,
            quantity: 1,
            cartId: Date.now()
        });
    }

    updateCart();
    showToast(`${product.name} added to cart!`);

    // Button animation
    event.target.classList.add('added');
    event.target.textContent = '✓ Added';
    setTimeout(() => {
        event.target.classList.remove('added');
        event.target.textContent = 'Add to Cart';
    }, 2000);
}

// Toggle Cart
function toggleCart() {
    document.getElementById('cartSidebar').classList.toggle('active');
}

// Update Cart
function updateCart() {
    updateCartCount();
    renderCartItems();
    updateCartTotal();
}

// Update Cart Count
function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cartCount').textContent = count;
}

// Render Cart Items
function renderCartItems() {
    const cartItemsContainer = document.getElementById('cartItems');

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-cart">
                <div class="empty-cart-icon">🛒</div>
                <p>Your cart is empty</p>
            </div>
        `;
        return;
    }

    cartItemsContainer.innerHTML = '';
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">$${item.price}</div>
                <div class="cart-item-quantity">
                    <button class="quantity-btn" onclick="updateQuantity(${item.cartId}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${item.cartId}, 1)">+</button>
                    <button class="remove-item" onclick="removeFromCart(${item.cartId})">Remove</button>
                </div>
            </div>
        `;
        cartItemsContainer.appendChild(cartItem);
    });
}

// Update Quantity
function updateQuantity(cartId, change) {
    const item = cart.find(item => item.cartId === cartId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(cartId);
        } else {
            updateCart();
        }
    }
}

// Remove from Cart
function removeFromCart(cartId) {
    cart = cart.filter(item => item.cartId !== cartId);
    updateCart();
    showToast('Item removed from cart');
}

// Update Cart Total
function updateCartTotal() {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    document.getElementById('cartTotal').textContent = `$${total.toFixed(2)}`;
}

// Checkout Functions
function openCheckout() {
    if (cart.length === 0) {
        showToast('Your cart is empty');
        return;
    }

    document.getElementById('checkoutModal').classList.add('active');
    toggleCart();
    currentCheckoutStep = 1;
    updateCheckoutStep();
}

function closeCheckout() {
    document.getElementById('checkoutModal').classList.remove('active');
}

function changeStep(direction) {
    currentCheckoutStep += direction;

    if (currentCheckoutStep < 1) currentCheckoutStep = 1;
    if (currentCheckoutStep > 3) currentCheckoutStep = 3;

    updateCheckoutStep();
}

function updateCheckoutStep() {
    // Hide all steps
    document.getElementById('checkoutStep1').style.display = 'none';
    document.getElementById('checkoutStep2').style.display = 'none';
    document.getElementById('checkoutStep3').style.display = 'none';

    // Show current step
    document.getElementById(`checkoutStep${currentCheckoutStep}`).style.display = 'block';

    // Update step indicators
    for (let i = 1; i <= 3; i++) {
        const step = document.getElementById(`step${i}`);
        step.classList.remove('active', 'completed');
        if (i < currentCheckoutStep) {
            step.classList.add('completed');
        } else if (i === currentCheckoutStep) {
            step.classList.add('active');
        }
    }

    // Update buttons
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    prevBtn.style.display = currentCheckoutStep === 1 ? 'none' : 'block';

    if (currentCheckoutStep === 3) {
        nextBtn.textContent = 'Complete Order';
        nextBtn.onclick = completeOrder;
        loadOrderSummary();
    } else {
        nextBtn.textContent = 'Next';
        nextBtn.onclick = () => changeStep(1);
    }
}

function loadOrderSummary() {
    const orderSummary = document.getElementById('orderSummary');
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    let summaryHTML = '<div style="margin-bottom: var(--spacing-md);">';
    cart.forEach(item => {
        summaryHTML += `
            <div style="display: flex; justify-content: space-between; margin-bottom: var(--spacing-sm); padding: var(--spacing-sm); background: rgba(255, 255, 255, 0.02); border-radius: 10px;">
                <span>${item.name} x${item.quantity}</span>
                <span>$${(item.price * item.quantity).toFixed(2)}</span>
            </div>
        `;
    });
    summaryHTML += `
        </div>
        <div style="display: flex; justify-content: space-between; font-size: 1.2rem; font-weight: 700; padding-top: var(--spacing-sm); border-top: 1px solid var(--glass-border);">
            <span>Total:</span>
            <span>$${total.toFixed(2)}</span>
        </div>
    `;

    orderSummary.innerHTML = summaryHTML;
}

function completeOrder() {
    showToast('Processing order...');

    setTimeout(() => {
        cart = [];
        updateCart();
        closeCheckout();
        showToast('Order placed successfully! 🎉');
    }, 2000);
}

// Toast Notification
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Scroll Effects
function setupScrollEffects() {
    const nav = document.querySelector('nav');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            nav.style.background = 'rgba(10, 10, 10, 0.95)';
        } else {
            nav.style.background = '';
        }
    });
}

// Card Formatting
function setupCardFormatting() {
    const cardNumber = document.getElementById('cardNumber');
    const expiryDate = document.getElementById('expiryDate');
    const cvv = document.getElementById('cvv');

    if (cardNumber) {
        cardNumber.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\s/g, '');
            let formattedValue = value.match(/.{1,4}/g)?.join(' ') || value;
            e.target.value = formattedValue;
        });
    }

    if (expiryDate) {
        expiryDate.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length >= 2) {
                value = value.slice(0, 2) + '/' + value.slice(2, 4);
            }
            e.target.value = value;
        });
    }

    if (cvv) {
        cvv.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/\D/g, '');
        });
    }
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
