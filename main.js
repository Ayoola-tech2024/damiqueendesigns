// Damiqueen Footwears - Main JavaScript
// Premium e-commerce functionality with WhatsApp integration

class DamiqueenApp {
    constructor() {
        this.products = this.initializeProducts();
        this.cart = JSON.parse(localStorage.getItem('damiqueen-cart')) || [];
        this.currentFilter = 'all';
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.setupMobileNavigation();
        this.initializeAnimations();
        this.updateCartCount();
        this.initializeFilters();
        // setup mobile menu for hamburger drawer
        this.setupMobileMenu();
        this.setupScrollAnimations();
    }

    setupMobileNavigation() {
        const navContainer = document.querySelector('.nav-container');
        const menuToggle = document.querySelector('.menu-toggle');
        const navLinks = document.querySelector('.nav-links');

        if (!navContainer || !menuToggle || !navLinks) return;

        menuToggle.addEventListener('click', () => {
            const isOpen = navContainer.classList.toggle('menu-open');
            menuToggle.setAttribute('aria-expanded', String(isOpen));
        });

        navLinks.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => {
                navContainer.classList.remove('menu-open');
                menuToggle.setAttribute('aria-expanded', 'false');
            });
        });

        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                navContainer.classList.remove('menu-open');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    initializeProducts() {
        return [
            // Men's Footwear
            {
                id: 'm1',
                name: 'Classic Oxford Black',
                category: 'men',
                price: 30000,
                image: 'https://kimi-web-img.moonshot.cn/img/www.apetogentleman.com/3023637c8fa8e57790f252d2e276f951ec657e8b.jpg',
                description: 'Handcrafted premium leather oxford shoes featuring exquisite stitching and timeless design.',
                sizes: ['40', '41', '42', '43', '44', '45']
            },
            {
                id: 'm2',
                name: 'Elegant Brown Brogues',
                category: 'men',
                price: 35000,
                image: 'https://kimi-web-img.moonshot.cn/img/cdn.shopify.com/3f72b9f6c5f2051b8bd195160df78584838229c3.jpg',
                description: 'Traditional brogue detailing meets modern comfort in these sophisticated brown leather shoes.',
                sizes: ['40', '41', '42', '43', '44', '45']
            },
            {
                id: 'm3',
                name: 'Premium Monk Strap',
                category: 'men',
                price: 28000,
                image: 'https://kimi-web-img.moonshot.cn/img/www.fashionbeans.com/59cbb30f76028198e0afcd75ef88dcda7ac1e095.jpg',
                description: 'Double monk strap design with premium leather and polished buckles.',
                sizes: ['40', '41', '42', '43', '44', '45']
            },
            {
                id: 'm4',
                name: 'Luxury Leather Boots',
                category: 'men',
                price: 40000,
                image: 'https://kimi-web-img.moonshot.cn/img/i.pinimg.com/9a868a78013bf297486e2932266c7f99e57aa951.jpg',
                description: 'Handcrafted leather boots with superior comfort and durability.',
                sizes: ['40', '41', '42', '43', '44', '45']
            },
            {
                id: 'm5',
                name: 'Brown Oxford Shoes',
                category: 'men',
                price: 32000,
                image: 'https://kimi-web-img.moonshot.cn/img/oxfordshoesonline.com/0ad043b09fd12e23a211bcc84fc381dd0ec05661.jpg',
                description: 'Classic brown oxford shoes perfect for formal occasions.',
                sizes: ['40', '41', '42', '43', '44', '45']
            },
            {
                id: 'm6',
                name: 'White Leather Sneakers',
                category: 'men',
                price: 40000,
                image: 'https://kimi-web-img.moonshot.cn/img/images.opumo.com/b92839bd6f12ef5f4b7e28b5f780ca7087355fb3.png',
                description: 'Premium white leather sneakers for casual luxury.',
                sizes: ['40', '41', '42', '43', '44', '45']
            },
            // Women's Footwear
            {
                id: 'w1',
                name: 'Classic Black Heels',
                category: 'women',
                price: 20000,
                image: 'https://kimi-web-img.moonshot.cn/img/xcdn.next.co.uk/b6105bdc5bcef5b14db2207d3a3dba935777b691.jpg',
                description: 'Elegant black leather heels perfect for professional wear.',
                sizes: ['36', '37', '38', '39', '40', '41']
            },
            {
                id: 'w2',
                name: 'Nude Premium Pumps',
                category: 'women',
                price: 40000,
                image: 'https://kimi-web-img.moonshot.cn/img/ragnco.com/15dcc2ee77f2966794791d84a3a85fb942362461.jpg',
                description: 'Sophisticated nude pumps with comfortable heel height.',
                sizes: ['36', '37', '38', '39', '40', '41']
            },
            {
                id: 'w3',
                name: 'Elegant Dress Shoes',
                category: 'women',
                price: 30000,
                image: 'https://kimi-web-img.moonshot.cn/img/marelbo.com/a8d96b87a9836aca0a486618c5f736eba9cef470.jpg',
                description: 'Comfortable and stylish dress shoes for everyday elegance.',
                sizes: ['36', '37', '38', '39', '40', '41']
            },
            {
                id: 'w4',
                name: 'Luxury Stilettos',
                category: 'women',
                price: 45000,
                image: 'https://kimi-web-img.moonshot.cn/img/m.media-amazon.com/258084ca3a599ba6906e252ad7cc9930c3f7a956.jpg',
                description: 'High-end stilettos with premium materials and craftsmanship.',
                sizes: ['36', '37', '38', '39', '40', '41']
            },
            {
                id: 'w5',
                name: 'Comfortable Wedges',
                category: 'women',
                price: 35000,
                image: 'https://kimi-web-img.moonshot.cn/img/m.media-amazon.com/4cda4bb664c5b1e25e0dff4b7b057fe195282324.jpg',
                description: 'Stylish wedges offering both height and comfort.',
                sizes: ['36', '37', '38', '39', '40', '41']
            },
            {
                id: 'w6',
                name: 'Professional Pumps',
                category: 'women',
                price: 20000,
                image: 'https://kimi-web-img.moonshot.cn/img/www.net-a-porter.com/7b174925b1db13e644c6b1a19400cfd14781de9e.jpg',
                description: 'Professional pumps perfect for the modern workplace.',
                sizes: ['36', '37', '38', '39', '40', '41']
            }
        ];
    }

    setupEventListeners() {
        // WhatsApp order buttons
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('order-btn')) {
                const productId = e.target.dataset.productId;
                this.openOrderModal(productId);
            }
            
            if (e.target.classList.contains('whatsapp-order-btn')) {
                this.submitWhatsAppOrder(e);
            }
            
            if (e.target.classList.contains('filter-btn')) {
                this.filterProducts(e.target.dataset.category);
            }
            
            if (e.target.classList.contains('modal-close')) {
                this.closeModal();
            }
        });

        // Modal overlay click to close
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal-overlay')) {
                this.closeModal();
            }
        });

        // Form validation
        document.addEventListener('input', (e) => {
            if (e.target.classList.contains('validate')) {
                this.validateField(e.target);
            }
        });
    }

    initializeAnimations() {
        // Initialize Anime.js animations
        if (typeof anime !== 'undefined') {
            // Hero text animation
            anime({
                targets: '.hero-title',
                translateY: [50, 0],
                opacity: [0, 1],
                duration: 1000,
                easing: 'easeOutQuart',
                delay: 300
            });

            // Product cards stagger animation
            anime({
                targets: '.product-card',
                translateY: [30, 0],
                opacity: [0, 1],
                duration: 800,
                easing: 'easeOutQuart',
                delay: anime.stagger(100)
            });
        }
    }

    setupScrollAnimations() {
        // Intersection Observer for scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);

        // Observe elements for animation
        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            observer.observe(el);
        });
    }

    // New: setupMobileMenu added to class
    setupMobileMenu() {
        const navLinks = document.querySelector('.nav-links');
        if (!navLinks) return;
        if (document.getElementById('mobile-drawer')) return;

        const drawer = document.createElement('div');
        drawer.id = 'mobile-drawer';
        drawer.className = 'mobile-drawer';
        drawer.innerHTML = `
            <button class="drawer-close" aria-label="Close menu">&times;</button>
            <ul class="drawer-links">${navLinks.innerHTML}</ul>
        `;
        document.body.appendChild(drawer);

        const hamburger = document.querySelector('.hamburger');
        const closeBtn = drawer.querySelector('.drawer-close');

        const openDrawer = () => {
            drawer.classList.add('open');
            hamburger?.setAttribute('aria-expanded', 'true');
            document.body.classList.add('no-scroll');
            const firstLink = drawer.querySelector('a');
            firstLink?.focus();
        };

        const closeDrawer = () => {
            drawer.classList.remove('open');
            hamburger?.setAttribute('aria-expanded', 'false');
            document.body.classList.remove('no-scroll');
            hamburger?.focus();
        };

        hamburger?.addEventListener('click', (e) => {
            e.stopPropagation();
            if (drawer.classList.contains('open')) closeDrawer(); else openDrawer();
        });

        closeBtn?.addEventListener('click', (e) => { e.stopPropagation(); closeDrawer(); });

        drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', () => closeDrawer()));

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && drawer.classList.contains('open')) closeDrawer();
        });

        document.addEventListener('click', (e) => {
            if (drawer.classList.contains('open') && !drawer.contains(e.target) && !hamburger.contains(e.target)) {
                closeDrawer();
            }
        });
    }

    openOrderModal(productId) {
        const product = this.products.find(p => p.id === productId);
        if (!product) return;

        const modal = document.createElement('div');
        modal.className = 'modal-overlay';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h3>Order ${product.name}</h3>
                    <button class="modal-close">&times;</button>
                </div>
                <div class="modal-body">
                    <div class="product-summary">
                        <img src="${product.image}" alt="${product.name}" class="modal-product-image">
                        <div class="product-info">
                            <h4>${product.name}</h4>
                            <p class="price">₦${product.price.toLocaleString()}</p>
                            <p class="description">${product.description}</p>
                        </div>
                    </div>
                    <form class="order-form">
                        <div class="form-group">
                            <label for="buyerName">Your Name *</label>
                            <input type="text" id="buyerName" class="validate" required>
                        </div>
                        <div class="form-group">
                            <label for="quantity">Quantity</label>
                            <select id="quantity">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="size">Size</label>
                            <select id="size">
                                ${product.sizes.map(size => `<option value="${size}">${size}</option>`).join('')}
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="deliveryDate">Expected Delivery Date</label>
                            <input type="date" id="deliveryDate" min="${new Date().toISOString().split('T')[0]}">
                        </div>
                        <button type="button" class="whatsapp-order-btn" data-product-id="${product.id}">
                            Order via WhatsApp
                        </button>
                    </form>
                </div>
            </div>
        `;

        document.body.appendChild(modal);
        
        // Animate modal in
        if (typeof anime !== 'undefined') {
            anime({
                targets: modal,
                opacity: [0, 1],
                duration: 300,
                easing: 'easeOutQuart'
            });
            
            anime({
                targets: '.modal-content',
                scale: [0.8, 1],
                opacity: [0, 1],
                duration: 400,
                easing: 'easeOutBack'
            });
        }
    }

    submitWhatsAppOrder(e) {
        const productId = e.target.dataset.productId;
        const product = this.products.find(p => p.id === productId);
        
        const buyerName = document.getElementById('buyerName').value;
        const quantity = document.getElementById('quantity').value;
        const size = document.getElementById('size').value;
        const deliveryDate = document.getElementById('deliveryDate').value;

        if (!buyerName.trim()) {
            alert('Please enter your name');
            return;
        }

        const message = `New Order from: ${buyerName}\n\nProduct Name: ${product.name}\nPrice: ₦${product.price.toLocaleString()}\nQuantity: ${quantity}\nSize: ${size}\n${deliveryDate ? `Expected Delivery Date: ${deliveryDate}\n` : ''}Image Link: ${product.image}\n\nPlease confirm availability.`;

        const whatsappUrl = `https://wa.me/2349133683657?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
        
        this.closeModal();
    }

    closeModal() {
        const modal = document.querySelector('.modal-overlay');
        if (modal) {
            if (typeof anime !== 'undefined') {
                anime({
                    targets: modal,
                    opacity: [1, 0],
                    duration: 200,
                    easing: 'easeInQuart',
                    complete: () => modal.remove()
                });
            } else {
                modal.remove();
            }
        }
    }

    filterProducts(category) {
        this.currentFilter = category;
        
        // Update active filter button
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-category="${category}"]`).classList.add('active');

        // Filter products
        const filteredProducts = category === 'all' 
            ? this.products 
            : this.products.filter(p => p.category === category);

        this.renderProducts(filteredProducts);
    }

    renderProducts(products) {
        const container = document.querySelector('.products-grid');
        if (!container) return;

        container.innerHTML = products.map(product => `
            <div class="product-card animate-on-scroll" data-product-id="${product.id}">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}" loading="lazy">
                    <div class="product-overlay">
                        <button class="order-btn" data-product-id="${product.id}">
                            Order Now
                        </button>
                    </div>
                </div>
                <div class="product-info">
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-price">₦${product.price.toLocaleString()}</p>
                    <p class="product-description">${product.description}</p>
                </div>
            </div>
        `).join('');

        // Re-initialize animations for new products
        if (typeof anime !== 'undefined') {
            anime({
                targets: '.product-card',
                translateY: [30, 0],
                opacity: [0, 1],
                duration: 600,
                easing: 'easeOutQuart',
                delay: anime.stagger(100)
            });
        }

        // Re-setup scroll animations
        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            el.classList.remove('animate-in');
        });
        this.setupScrollAnimations();
    }

    initializeFilters() {
        // Set initial filter state
        const allBtn = document.querySelector('[data-category="all"]');
        if (allBtn) {
            allBtn.classList.add('active');
        }
        
        // Render all products initially
        this.renderProducts(this.products);
    }

    validateField(field) {
        const value = field.value.trim();
        const isValid = value.length > 0;
        
        field.classList.toggle('valid', isValid);
        field.classList.toggle('invalid', !isValid);
        
        return isValid;
    }

    updateCartCount() {
        const cartCount = document.querySelector('.cart-count');
        if (cartCount) {
            cartCount.textContent = this.cart.length;
        }
    }

    // Utility functions
    formatPrice(price) {
        return `₦${price.toLocaleString()}`;
    }

    showNotification(message, type = 'success') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        if (typeof anime !== 'undefined') {
            anime({
                targets: notification,
                translateY: [-50, 0],
                opacity: [0, 1],
                duration: 300,
                easing: 'easeOutQuart'
            });
            
            setTimeout(() => {
                anime({
                    targets: notification,
                    translateY: [0, -50],
                    opacity: [1, 0],
                    duration: 300,
                    easing: 'easeInQuart',
                    complete: () => notification.remove()
                });
            }, 3000);
        } else {
            setTimeout(() => notification.remove(), 3000);
        }
    }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.damiqueenApp = new DamiqueenApp();
});

// Smooth scrolling for anchor links
document.addEventListener('click', (e) => {
    if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
});

// WhatsApp floating button functionality
function toggleWhatsAppButton() {
    const button = document.querySelector('.whatsapp-float');
    if (button) {
        button.addEventListener('click', () => {
            window.open('https://wa.me/2349133683657', '_blank');
        });
    }
}

// Initialize WhatsApp button
document.addEventListener('DOMContentLoaded', toggleWhatsAppButton);