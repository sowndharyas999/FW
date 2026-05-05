// Product Data
const products = [
    {
        id: 1,
        name: "NEXUS Alpha",
        price: 299.99,
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop",
        rating: 5,
        description: "Premium running shoe with advanced cushioning"
    },
    {
        id: 2,
        name: "NEXUS Beta",
        price: 349.99,
        image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=400&h=300&fit=crop",
        rating: 4,
        description: "High-performance basketball shoe"
    },
    {
        id: 3,
        name: "NEXUS Gamma",
        price: 279.99,
        image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=300&fit=crop",
        rating: 5,
        description: "Stylish casual sneaker"
    },
    {
        id: 4,
        name: "NEXUS Delta",
        price: 399.99,
        image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&h=300&fit=crop",
        rating: 4,
        description: "Professional training shoe"
    },
    {
        id: 5,
        name: "NEXUS Epsilon",
        price: 329.99,
        image: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=400&h=300&fit=crop",
        rating: 5,
        description: "Limited edition collector's item"
    },
    {
        id: 6,
        name: "NEXUS Zeta",
        price: 259.99,
        image: "https://images.unsplash.com/photo-1605348532760-6753a2b43667?w=400&h=300&fit=crop",
        rating: 4,
        description: "Everyday comfort shoe"
    }
];

// Shopping Cart State
let cart = [];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    loadProducts();
    updateCartUI();
    initializeEventListeners();
    addRippleEffect();
});

// Load products into the grid
function loadProducts() {
    const productGrid = document.getElementById('product-grid');
    
    products.forEach(product => {
        const productCard = createProductCard(product);
        productGrid.appendChild(productCard);
    });
}

// Create product card element
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <div class="product-info">
            <h3 class="product-name">${product.name}</h3>
            <div class="product-price">$${product.price.toFixed(2)}</div>
            <div class="product-rating">
                ${generateStars(product.rating)}
            </div>
            <button class="add-to-cart ripple" onclick="addToCart(${product.id})">
                Add to Cart
            </button>
        </div>
    `;
    return card;
}

// Generate star rating HTML
function generateStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars += '<svg class="star" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>';
        } else {
            stars += '<svg class="star" viewBox="0 0 24 24" style="opacity: 0.3"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>';
        }
    }
    return stars;
}

// Add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    updateCartUI();
    showToast(`${product.name} added to cart!`);
    
    // Add button animation
    event.target.classList.add('added');
    setTimeout(() => {
        event.target.classList.remove('added');
    }, 1000);
}

// Update cart UI
function updateCartUI() {
    updateCartCount();
    updateCartItems();
    updateCartTotal();
}

// Update cart count badge
function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cart-count').textContent = count;
}

// Update cart items display
function updateCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p style="text-align: center; color: var(--text-secondary);">Your cart is empty</p>';
        return;
    }
    
    cartItemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                <div class="cart-item-quantity">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                </div>
            </div>
            <button class="remove-item" onclick="removeFromCart(${item.id})">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M18 6L6 18M6 6l12 12"/>
                </svg>
            </button>
        </div>
    `).join('');
}

// Update cart total
function updateCartTotal() {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    document.getElementById('cart-total').textContent = `$${total.toFixed(2)}`;
    document.getElementById('checkout-total').textContent = `$${total.toFixed(2)}`;
}

// Update item quantity
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCartUI();
        }
    }
}

// Remove item from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
    showToast('Item removed from cart');
}

// Toggle cart sidebar
function toggleCart() {
    const cartSidebar = document.getElementById('cart-sidebar');
    cartSidebar.classList.toggle('open');
}

// Open checkout modal
function openCheckout() {
    if (cart.length === 0) {
        showToast('Your cart is empty');
        return;
    }
    
    document.getElementById('checkout-modal').classList.add('active');
    updateCheckoutItems();
    toggleCart();
}

// Update checkout items display
function updateCheckoutItems() {
    const checkoutItems = document.getElementById('checkout-items');
    checkoutItems.innerHTML = cart.map(item => `
        <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
            <span>${item.name} x${item.quantity}</span>
            <span>$${(item.price * item.quantity).toFixed(2)}</span>
        </div>
    `).join('');
}

// Close checkout modal
function closeCheckout() {
    document.getElementById('checkout-modal').classList.remove('active');
    resetCheckoutSteps();
}

// Reset checkout steps
function resetCheckoutSteps() {
    document.getElementById('step-1').classList.add('active');
    document.getElementById('step-2').classList.remove('active');
}

// Next checkout step
function nextStep(stepNumber) {
    const currentStep = document.querySelector('.step.active');
    const nextStep = document.getElementById(`step-${stepNumber}`);
    
    // Simple validation for shipping form
    if (stepNumber === 2) {
        const shippingForm = document.getElementById('shipping-form');
        const inputs = shippingForm.querySelectorAll('input[required]');
        let isValid = true;
        
        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.style.borderColor = 'var(--accent-color)';
            } else {
                input.style.borderColor = 'var(--glass-border)';
            }
        });
        
        if (!isValid) {
            showToast('Please fill in all required fields');
            return;
        }
    }
    
    currentStep.classList.remove('active');
    nextStep.classList.add('active');
}

// Process payment
function processPayment(event) {
    event.preventDefault();
    
    // Show loading state
    const submitButton = event.target.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.innerHTML = '<span class="loading"></span> Processing...';
    submitButton.disabled = true;
    
    // Simulate payment processing
    setTimeout(() => {
        showToast('Payment successful! Order confirmed.');
        cart = [];
        updateCartUI();
        closeCheckout();
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    }, 2000);
}

// Show toast notification
function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toast-message');
    
    toastMessage.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Scroll to shop section
function scrollToShop() {
    document.getElementById('shop').scrollIntoView({ behavior: 'smooth' });
}

// Initialize event listeners
function initializeEventListeners() {
    // Cart toggle
    document.getElementById('cart-toggle').addEventListener('click', function(e) {
        e.preventDefault();
        toggleCart();
    });
    
    // Close cart on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const cartSidebar = document.getElementById('cart-sidebar');
            const checkoutModal = document.getElementById('checkout-modal');
            
            if (checkoutModal.classList.contains('active')) {
                closeCheckout();
            } else if (cartSidebar.classList.contains('open')) {
                toggleCart();
            }
        }
    });
    
    // Close modal on background click
    document.getElementById('checkout-modal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeCheckout();
        }
    });
    
    // Format card number input
    document.addEventListener('input', function(e) {
        if (e.target.placeholder === 'Card Number') {
            let value = e.target.value.replace(/\s/g, '');
            let formattedValue = value.match(/.{1,4}/g)?.join(' ') || value;
            e.target.value = formattedValue;
        }
        
        if (e.target.placeholder === 'MM/YY') {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length >= 2) {
                value = value.slice(0, 2) + '/' + value.slice(2, 4);
            }
            e.target.value = value;
        }
        
        if (e.target.placeholder === 'CVV') {
            e.target.value = e.target.value.replace(/\D/g, '');
        }
    });
    
    // Navbar scroll effect
    let lastScroll = 0;
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
        } else {
            navbar.style.background = 'var(--glass-bg)';
            navbar.style.boxShadow = 'none';
        }
        
        lastScroll = currentScroll;
    });
    
    // Add hover effect to product cards
    document.addEventListener('mouseover', function(e) {
        if (e.target.closest('.product-card')) {
            const card = e.target.closest('.product-card');
            card.style.transform = 'translateY(-10px) scale(1.02)';
        }
    });
    
    document.addEventListener('mouseout', function(e) {
        if (e.target.closest('.product-card')) {
            const card = e.target.closest('.product-card');
            card.style.transform = 'translateY(0) scale(1)';
        }
    });
}

// Add ripple effect to buttons
function addRippleEffect() {
    const buttons = document.querySelectorAll('.ripple');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple-effect');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    .ripple {
        position: relative;
        overflow: hidden;
    }
    
    .ripple-effect {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Add intersection observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe product cards for animation
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        const productCards = document.querySelectorAll('.product-card');
        productCards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(card);
        });
    }, 100);
});

// Add parallax effect to hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const heroImage = document.querySelector('.floating-shoe');
    
    if (hero && heroImage) {
        heroImage.style.transform = `translateY(${scrolled * 0.3}px) rotate(${scrolled * 0.1}deg)`;
    }
});

// Add keyboard navigation
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + K to open cart
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        toggleCart();
    }
    
    // Ctrl/Cmd + / to focus search (if implemented)
    if ((e.ctrlKey || e.metaKey) && e.key === '/') {
        e.preventDefault();
        // Focus search input if implemented
    }
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll handlers
const debouncedScrollHandler = debounce(function() {
    // Scroll-related optimizations
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);
