// Product Catalog Database
const products = [
    {
        id: "p1",
        name_en: "Bringamalakadi Thailam",
        name_ta: "பிருங்காமலகாதி தைலம்",
        desc_en: "Premium herbal oil for cooling the head, promoting hair growth, and deep sleep.",
        desc_ta: "தலைக்கு குளிர்ச்சி தந்து, முடி வளர்ச்சியை ஊக்குவித்து, ஆழ்ந்த உறக்கம் தரும் உயர்தர மூலிகை எண்ணெய்.",
        price: 180,
        category: "oils",
        icon: "🧴",
        inStock: true
    },
    {
        id: "p2",
        name_en: "Kabasura Kudineer Choornam",
        name_ta: "கபசுர குடிநீர் சூரணம்",
        desc_en: "Traditional formula with 15 herbs to boost immunity and fight respiratory issues.",
        desc_ta: "நோய் எதிர்ப்பு சக்தியை அதிகரிக்கவும், சுவாச கோளாறுகளை குணப்படுத்தவும் 15 மூலிகைகள் கொண்ட பாரம்பரிய பொடி.",
        price: 120,
        category: "decoctions",
        icon: "🍵",
        inStock: true
    },
    {
        id: "p3",
        name_en: "Nalangu Maavu Herbal Bath Powder",
        name_ta: "நலங்கு மாவு குளியல் பொடி",
        desc_en: "Traditional body wash powder made of green gram, rose petals, and skin healing herbs.",
        desc_ta: "பாசிப்பயறு, ரோஜா இதழ்கள் மற்றும் சருமம் காக்கும் மூலிகைகள் கொண்டு தயாரிக்கப்பட்ட குளியல் பொடி.",
        price: 95,
        category: "skincare",
        icon: "🌸",
        inStock: true
    },
    {
        id: "p4",
        name_en: "Karpooradi Thailam",
        name_ta: "கற்பூராதி தைலம்",
        desc_en: "Soothing massage oil for relieving joint pain, muscle stiffness, and chest congestion.",
        desc_ta: "மூட்டு வலி, தசை பிடிப்பு மற்றும் மார்பு சளியை போக்கும் மூலிகை மசாஜ் எண்ணெய்.",
        price: 150,
        category: "oils",
        icon: "🧴",
        inStock: true
    },
    {
        id: "p5",
        name_en: "Agasthiyar Rasayanam",
        name_ta: "அகத்தியர் ரசாயனம்",
        desc_en: "Herbal jam (Lehyam) formulation for strengthening lungs, chronic cough, and asthma.",
        desc_ta: "நுரையீரலை வலுப்படுத்தவும், இருமல் மற்றும் ஆஸ்துமாவை குணப்படுத்தவும் உதவும் மூலிகை லேகியம்.",
        price: 240,
        category: "powders",
        icon: "🍯",
        inStock: true
    },
    {
        id: "p6",
        name_en: "Nilavembu Kudineer Choornam",
        name_ta: "நிலவேம்பு குடிநீர் சூரணம்",
        desc_en: "Effective immunity booster that cleanses toxins and helps manage viral fevers.",
        desc_ta: "உடலில் உள்ள நச்சுக்களை வெளியேற்றி, காய்ச்சலை தணிக்கும் சிறந்த நோய் எதிர்ப்பு குடிநீர்.",
        price: 110,
        category: "decoctions",
        icon: "🍵",
        inStock: true
    },
    {
        id: "p7",
        name_en: "Triphala Choornam",
        name_ta: "திரிபலா சூரணம்",
        desc_en: "A classical remedy of three fruits for digestion, rejuvenation, and detoxification.",
        desc_ta: "செரிமானம், இளமை மீட்பு மற்றும் நச்சு நீக்கத்திற்கு பயன்படும் மூன்று கனிகளின் கலவை பொடி.",
        price: 85,
        category: "powders",
        icon: "🌿",
        inStock: true
    },
    {
        id: "p8",
        name_en: "Kumkumadi Saffron Oil",
        name_ta: "குங்குமாதி குங்குமப்பூ எண்ணெய்",
        desc_en: "Luxurious face oil with pure saffron for skin brightening and natural radiance.",
        desc_ta: "தூய குங்குமப்பூ கலந்த சரும பளபளப்பு மற்றும் இயற்கை பொலிவு தரும் அதிநவீன முக எண்ணெய்.",
        price: 360,
        category: "skincare",
        icon: "✨",
        inStock: true
    }
];

// Initial Reviews Database
let reviewsList = [
    {
        name: "Karthik Raja",
        rating: 5,
        date: "2026-05-15",
        comment_en: "Excellent treatment for my back pain! I took Thokkanam massage here, and within 3 sessions, I felt massive relief. The therapists are extremely professional.",
        comment_ta: "எனது முதுகு வலிக்கு மிகச் சிறந்த சிகிச்சை! நான் இங்கு தொக்கணம் மசாஜ் எடுத்தேன், 3 அமர்வுகளிலேயே பெரும் நிவாரணம் கிடைத்தது. சிகிச்சையாளர்கள் மிகவும் தொழில்முறை வாய்ந்தவர்கள்."
    },
    {
        name: "Meenakshi Sundaram",
        rating: 5,
        date: "2026-05-28",
        comment_en: "The Kabasura Kudineer and Bringamalakadi Hair Oil are of excellent quality. I always order online for door delivery to Chennai. Fast delivery and original products.",
        comment_ta: "கபசுர குடிநீர் மற்றும் பிருங்காமலகாதி கூந்தல் எண்ணெய் மிக உயர்ந்த தரம் வாய்ந்தது. நான் எப்போதும் சென்னைக்கு டோர் டெலிவரி மூலம் ஆன்லைனில் ஆர்டர் செய்கிறேன். விரைவான விநியோகம்!"
    },
    {
        name: "Dr. Anand G.",
        rating: 4,
        date: "2026-06-02",
        comment_en: "Very authentic place. Visited their Rameswaram clinic. Highly clean and strictly adheres to traditional text methods. The Varmam stimulation was very effective.",
        comment_ta: "மிகவும் நம்பகமான இடம். ராமேஸ்வரத்தில் உள்ள மருந்தகத்திற்கு நேரில் சென்றேன். மிகவும் தூய்மையானது மற்றும் பாரம்பரிய முறைகளை சரியாக பின்பற்றுகிறார்கள். வர்ம சிகிச்சை பயனுள்ளதாக இருந்தது."
    }
];

// Application State
let currentLang = localStorage.getItem("siddha_lang") || "en";
let cart = JSON.parse(localStorage.getItem("siddha_cart")) || [];
let activeCategory = "all";
let searchFilter = "";

document.addEventListener("DOMContentLoaded", () => {
    // Initial Translation & Render
    initLanguage();
    renderProducts();
    renderReviews();
    updateCartCount();

    // Event Listeners
    setupEventListeners();
    setupIntersectionObserver();
});

// LANGUAGE SYSTEM
function initLanguage() {
    const langToggleBtn = document.getElementById("lang-toggle");
    if (langToggleBtn) {
        langToggleBtn.innerText = currentLang === "en" ? "தமிழ்" : "English";
    }
    updateLanguageDOM(currentLang);
}

function toggleLanguage() {
    const body = document.body;
    body.classList.add("fade-out-transition");
    
    setTimeout(() => {
        currentLang = currentLang === "en" ? "ta" : "en";
        localStorage.setItem("siddha_lang", currentLang);
        
        const langToggleBtn = document.getElementById("lang-toggle");
        if (langToggleBtn) {
            langToggleBtn.innerText = currentLang === "en" ? "தமிழ்" : "English";
        }
        
        updateLanguageDOM(currentLang);
        renderProducts(); // Re-render products to display translated strings
        renderReviews();  // Re-render reviews to display translated strings
        renderCart();     // Re-render cart item titles
        
        body.classList.remove("fade-out-transition");
    }, 250);
}

function updateLanguageDOM(lang) {
    const dict = window.translations[lang];
    if (!dict) return;

    // Apply translations to elements with [data-i18n]
    document.querySelectorAll("[data-i18n]").forEach(elem => {
        const key = elem.getAttribute("data-i18n");
        if (dict[key]) {
            elem.innerHTML = dict[key];
        }
    });

    // Apply translations to input placeholders
    document.querySelectorAll("[data-i18n-placeholder]").forEach(elem => {
        const key = elem.getAttribute("data-i18n-placeholder");
        if (dict[key]) {
            elem.setAttribute("placeholder", dict[key]);
        }
    });

    // Update document title dynamically
    document.title = lang === "ta" 
        ? "பண்டிட் ஆனந்தம் சித்தா & ஆயுர்வேத மருந்தகம்" 
        : "Pandit Anandam Siddha & Ayurveda Marunthagam";

    // Update logo image src dynamically
    const logoImg = document.getElementById("logo-image");
    if (logoImg) {
        logoImg.src = lang === "ta" 
            ? "assets/logo_ta.jpg?v=" + new Date().getTime() 
            : "assets/logo.png?v=" + new Date().getTime();
    }

    // Apply fonts based on language
    if (lang === "ta") {
        document.documentElement.style.setProperty("--font-family-body", "'Mukta Malar', 'Noto Sans Tamil', sans-serif");
        document.documentElement.style.setProperty("--font-family-heading", "'Mukta Malar', 'Noto Sans Tamil', serif");
    } else {
        document.documentElement.style.setProperty("--font-family-body", "'Inter', sans-serif");
        document.documentElement.style.setProperty("--font-family-heading", "'Playfair Display', serif");
    }
}

// PRODUCT CATALOG SYSTEM
function renderProducts() {
    const grid = document.getElementById("products-grid");
    if (!grid) return;
    grid.innerHTML = "";

    const filtered = products.filter(p => {
        const matchesCategory = activeCategory === "all" || p.category === activeCategory;
        const matchesSearch = searchFilter === "" || 
            p.name_en.toLowerCase().includes(searchFilter) || 
            p.name_ta.includes(searchFilter) ||
            p.desc_en.toLowerCase().includes(searchFilter) ||
            p.desc_ta.includes(searchFilter);
        return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="no-products text-center py-5" style="grid-column: 1 / -1;">
                <p style="font-size: 1.2rem; color: var(--color-text-muted);">
                    ${currentLang === 'en' ? 'No products match your search.' : 'தேடலுக்குரிய தயாரிப்புகள் எதுவும் இல்லை.'}
                </p>
            </div>
        `;
        return;
    }

    filtered.forEach(p => {
        const name = currentLang === "en" ? p.name_en : p.name_ta;
        const desc = currentLang === "en" ? p.desc_en : p.desc_ta;
        const btnText = currentLang === "en" ? "Add to Cart" : "கூடையில் சேர்க்க";
        const stockText = p.inStock 
            ? (currentLang === "en" ? "In Stock" : "இருப்பில் உள்ளது") 
            : (currentLang === "en" ? "Out of Stock" : "இருப்பில் இல்லை");
        const stockClass = p.inStock ? "badge-instock" : "badge-outofstock";

        const card = document.createElement("div");
        card.className = "product-card animated scaleIn";
        card.innerHTML = `
            <div class="product-badge ${stockClass}">${stockText}</div>
            <div class="product-icon">${p.icon}</div>
            <div class="product-info">
                <h3>${name}</h3>
                <p class="product-desc">${desc}</p>
                <div class="product-footer">
                    <span class="product-price">₹${p.price}</span>
                    <button class="btn btn-primary btn-sm btn-cart" onclick="addProductToCart('${p.id}')">
                        <i class="fas fa-shopping-cart" style="margin-right: 5px;"></i> ${btnText}
                    </button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

function handleCategoryFilter(cat, btnElement) {
    activeCategory = cat;
    document.querySelectorAll(".category-btn").forEach(btn => btn.classList.remove("active"));
    btnElement.classList.add("active");
    renderProducts();
}

function handleSearch(e) {
    searchFilter = e.target.value.toLowerCase().trim();
    renderProducts();
}

// CART STATE OPERATIONS
window.addProductToCart = function(productId) {
    const product = products.find(p => p.id === productId);
    if (!product || !product.inStock) return;

    const existingIndex = cart.findIndex(item => item.id === productId);
    if (existingIndex > -1) {
        cart[existingIndex].quantity += 1;
    } else {
        cart.push({ id: productId, quantity: 1 });
    }

    saveCart();
    updateCartCount();
    showToast(`${currentLang === 'en' ? 'Added to Cart: ' : 'கூடையில் சேர்க்கப்பட்டது: '} ${currentLang === 'en' ? product.name_en : product.name_ta}`);
    renderCart();
}

function saveCart() {
    localStorage.setItem("siddha_cart", JSON.stringify(cart));
}

function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    const countBadge = document.getElementById("cart-count-badge");
    const countBadgeMobile = document.getElementById("cart-count-badge-mobile");
    
    if (countBadge) {
        countBadge.innerText = count;
        countBadge.style.display = count > 0 ? "flex" : "none";
    }
    if (countBadgeMobile) {
        countBadgeMobile.innerText = count;
        countBadgeMobile.style.display = count > 0 ? "flex" : "none";
    }
}

function renderCart() {
    const itemsContainer = document.getElementById("cart-items-container");
    if (!itemsContainer) return;
    
    itemsContainer.innerHTML = "";

    if (cart.length === 0) {
        itemsContainer.innerHTML = `
            <div class="cart-empty-state text-center py-5">
                <i class="fas fa-shopping-basket" style="font-size: 3rem; color: var(--color-border); margin-bottom: 15px;"></i>
                <p data-i18n="cart_empty" style="color: var(--color-text-muted); font-size: 1.1rem;">
                    ${window.translations[currentLang].cart_empty}
                </p>
            </div>
        `;
        document.getElementById("cart-summary-box").style.display = "none";
        return;
    }

    document.getElementById("cart-summary-box").style.display = "block";
    let subtotal = 0;

    cart.forEach(item => {
        const product = products.find(p => p.id === item.id);
        if (!product) return;

        const name = currentLang === "en" ? product.name_en : product.name_ta;
        const totalItemPrice = product.price * item.quantity;
        subtotal += totalItemPrice;

        const cartItem = document.createElement("div");
        cartItem.className = "cart-item";
        cartItem.innerHTML = `
            <span class="cart-item-icon">${product.icon}</span>
            <div class="cart-item-details">
                <h4>${name}</h4>
                <p class="cart-item-price">₹${product.price} x ${item.quantity}</p>
            </div>
            <div class="cart-qty-controls">
                <button onclick="changeQty('${product.id}', -1)" class="btn-qty">-</button>
                <span class="cart-qty-val">${item.quantity}</span>
                <button onclick="changeQty('${product.id}', 1)" class="btn-qty">+</button>
            </div>
            <button onclick="removeCartItem('${product.id}')" class="btn-remove-item" title="Remove">×</button>
        `;
        itemsContainer.appendChild(cartItem);
    });

    const isFreeShipping = subtotal >= 500;
    const shipping = isFreeShipping ? 0 : 60;
    const total = subtotal + shipping;

    document.getElementById("cart-subtotal-val").innerText = `₹${subtotal}`;
    
    const shippingElem = document.getElementById("cart-shipping-val");
    if (isFreeShipping) {
        shippingElem.innerText = currentLang === "en" ? "FREE" : "இலவசம்";
        shippingElem.style.color = "var(--color-primary)";
        shippingElem.style.fontWeight = "bold";
    } else {
        shippingElem.innerText = `₹${shipping}`;
        shippingElem.style.color = "var(--color-text)";
        shippingElem.style.fontWeight = "normal";
    }

    document.getElementById("cart-total-val").innerText = `₹${total}`;
}

window.changeQty = function(productId, delta) {
    const index = cart.findIndex(item => item.id === productId);
    if (index === -1) return;

    cart[index].quantity += delta;
    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }

    saveCart();
    updateCartCount();
    renderCart();
}

window.removeCartItem = function(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartCount();
    renderCart();
    showToast(currentLang === 'en' ? 'Item removed from cart' : 'பொருள் கூடையில் இருந்து நீக்கப்பட்டது');
}

// REVIEWS SYSTEM
function renderReviews() {
    const listContainer = document.getElementById("reviews-list-container");
    if (!listContainer) return;
    listContainer.innerHTML = "";

    reviewsList.slice().reverse().forEach(r => {
        const comment = currentLang === "en" ? r.comment_en : r.comment_ta;
        
        let starsHtml = "";
        for (let i = 1; i <= 5; i++) {
            if (i <= r.rating) {
                starsHtml += `<i class="fas fa-star" style="color: #ffb703;"></i>`;
            } else {
                starsHtml += `<i class="far fa-star" style="color: var(--color-border);"></i>`;
            }
        }

        const reviewCard = document.createElement("div");
        reviewCard.className = "review-card animated fadeInUp";
        reviewCard.innerHTML = `
            <div class="review-header">
                <div class="review-meta">
                    <h4>${r.name}</h4>
                    <span class="review-date">${r.date}</span>
                </div>
                <div class="review-rating">${starsHtml}</div>
            </div>
            <p class="review-comment">"${comment}"</p>
        `;
        listContainer.appendChild(reviewCard);
    });
}

function handleAddReview(e) {
    e.preventDefault();
    const nameInput = document.getElementById("rev-name");
    const ratingSelect = document.getElementById("rev-rating");
    const commentInput = document.getElementById("rev-comment");

    if (!nameInput.value.trim() || !commentInput.value.trim()) {
        showToast(currentLang === 'en' ? 'Please fill out all fields.' : 'தயவுசெய்து அனைத்து விவரங்களையும் நிரப்பவும்.');
        return;
    }

    const newReview = {
        name: nameInput.value.trim(),
        rating: parseInt(ratingSelect.value),
        date: new Date().toISOString().split('T')[0],
        comment_en: commentInput.value.trim(),
        comment_ta: commentInput.value.trim() // In simulation, we store same comment for both to represent user input
    };

    reviewsList.push(newReview);
    renderReviews();

    // Reset Form
    nameInput.value = "";
    commentInput.value = "";
    ratingSelect.value = "5";

    // Show Success message in toast/alert
    showToast(window.translations[currentLang].reviews_form_success);
}

// THERAPY BOOKING SYSTEM
function handleBookingSubmit(e) {
    e.preventDefault();
    const name = document.getElementById("book-name").value.trim();
    const phone = document.getElementById("book-phone").value.trim();
    const date = document.getElementById("book-date").value;
    const therapy = document.getElementById("book-therapy").value;

    if (!name || !phone || !date || !therapy) {
        showToast(currentLang === 'en' ? 'Please complete the form.' : 'படிவத்தை முழுமையாக பூர்த்தி செய்யவும்.');
        return;
    }

    closeModal("booking-modal");
    
    // Clear form fields
    document.getElementById("booking-form").reset();

    // Show Success Modal
    showConfirmationModal(
        window.translations[currentLang].booking_title,
        window.translations[currentLang].booking_success
    );
}

// CHECKOUT SYSTEM
function handleCheckoutSubmit(e) {
    e.preventDefault();
    const name = document.getElementById("ship-name").value.trim();
    const phone = document.getElementById("ship-phone").value.trim();
    const address = document.getElementById("ship-address").value.trim();
    const pincode = document.getElementById("ship-pincode").value.trim();

    if (!name || !phone || !address || !pincode) {
        showToast(currentLang === 'en' ? 'Please complete all delivery fields.' : 'தயவுசெய்து அனைத்து விநியோக விவரங்களையும் நிரப்பவும்.');
        return;
    }

    // Clear cart
    cart = [];
    saveCart();
    updateCartCount();
    closeModal("checkout-modal");
    closeModal("cart-drawer");

    // Reset checkout form
    document.getElementById("checkout-form").reset();

    // Show Success Modal
    showConfirmationModal(
        window.translations[currentLang].cart_success_title,
        window.translations[currentLang].cart_success_desc
    );
}

// UI GENERAL MODALS & SIDEBARS
window.openModal = function(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add("open");
        document.body.style.overflow = "hidden"; // Prevent background scroll
    }
}

window.closeModal = function(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove("open");
        document.body.style.overflow = ""; // Restore scroll
    }
}

function showConfirmationModal(title, text) {
    const modal = document.getElementById("confirm-modal");
    if (!modal) return;
    
    document.getElementById("confirm-modal-title").innerText = title;
    document.getElementById("confirm-modal-text").innerText = text;
    
    openModal("confirm-modal");
}

window.toggleCart = function() {
    const drawer = document.getElementById("cart-drawer");
    if (drawer) {
        if (drawer.classList.contains("open")) {
            closeModal("cart-drawer");
        } else {
            renderCart();
            openModal("cart-drawer");
        }
    }
}

window.toggleMobileMenu = function() {
    const menu = document.getElementById("mobile-menu-drawer");
    if (menu) {
        if (menu.classList.contains("open")) {
            closeModal("mobile-menu-drawer");
        } else {
            openModal("mobile-menu-drawer");
        }
    }
}

// TOAST MESSAGE SYSTEM
function showToast(message) {
    const container = document.getElementById("toast-container");
    if (!container) return;

    const toast = document.createElement("div");
    toast.className = "toast animated slideInRight";
    toast.innerHTML = `
        <div class="toast-content">
            <i class="fas fa-check-circle" style="color: var(--color-primary); margin-right: 10px;"></i>
            <span>${message}</span>
        </div>
    `;

    container.appendChild(toast);

    setTimeout(() => {
        toast.classList.replace("slideInRight", "slideOutRight");
        toast.addEventListener("animationend", () => {
            toast.remove();
        });
    }, 3000);
}

// CONTACT FORM
function handleContactSubmit(e) {
    e.preventDefault();
    const name = document.getElementById("contact-name").value.trim();
    const email = document.getElementById("contact-email").value.trim();
    const msg = document.getElementById("contact-msg").value.trim();

    if (!name || !msg) {
        showToast(currentLang === 'en' ? 'Please fill in Name and Message fields.' : 'பெயர் மற்றும் செய்தி கட்டங்களை நிரப்பவும்.');
        return;
    }

    document.getElementById("contact-form").reset();
    showConfirmationModal(
        window.translations[currentLang].contact_form_title,
        window.translations[currentLang].contact_form_success
    );
}

// EVENT LISTENERS BINDING
function setupEventListeners() {
    // Language Toggle
    const langBtn = document.getElementById("lang-toggle");
    if (langBtn) langBtn.addEventListener("click", toggleLanguage);

    const langBtnMobile = document.getElementById("lang-toggle-mobile");
    if (langBtnMobile) {
        langBtnMobile.addEventListener("click", () => {
            closeModal("mobile-menu-drawer");
            toggleLanguage();
        });
    }

    // Search input
    const searchInput = document.getElementById("product-search");
    if (searchInput) searchInput.addEventListener("input", handleSearch);

    // Review form
    const reviewForm = document.getElementById("review-form");
    if (reviewForm) reviewForm.addEventListener("submit", handleAddReview);

    // Booking form
    const bookingForm = document.getElementById("booking-form");
    if (bookingForm) bookingForm.addEventListener("submit", handleBookingSubmit);

    // Checkout form
    const checkoutForm = document.getElementById("checkout-form");
    if (checkoutForm) checkoutForm.addEventListener("submit", handleCheckoutSubmit);

    // Contact form
    const contactForm = document.getElementById("contact-form");
    if (contactForm) contactForm.addEventListener("submit", handleContactSubmit);

    // Category button filters
    document.querySelectorAll(".category-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const cat = btn.getAttribute("data-category");
            handleCategoryFilter(cat, btn);
        });
    });

    // Close drawers on outside click
    document.querySelectorAll(".drawer").forEach(drawer => {
        drawer.addEventListener("click", (e) => {
            if (e.target === drawer) {
                closeModal(drawer.id);
            }
        });
    });

    // Close modals on outside click
    document.querySelectorAll(".modal").forEach(modal => {
        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                closeModal(modal.id);
            }
        });
    });

    // Mobile nav drawer item click
    document.querySelectorAll(".mobile-nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            closeModal("mobile-menu-drawer");
        });
    });

    // Add trigger to checkout modal
    const checkOutBtn = document.getElementById("checkout-btn");
    if (checkOutBtn) {
        checkOutBtn.addEventListener("click", () => {
            openModal("checkout-modal");
        });
    }
}

// SCROLL ANIMATIONS AND NAVIGATION ACTIVE STATE
function setupIntersectionObserver() {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-links a");
    const mobileNavLinks = document.querySelectorAll(".mobile-nav-links a");

    const options = {
        root: null,
        rootMargin: "-20% 0px -60% 0px", // Trigger when section occupies the main viewing zone
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute("id");
                
                // Active Desktop Nav
                navLinks.forEach(link => {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === `#${id}`) {
                        link.classList.add("active");
                    }
                });

                // Active Mobile Nav
                mobileNavLinks.forEach(link => {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === `#${id}`) {
                        link.classList.add("active");
                    }
                });
            }
        });
    }, options);

    sections.forEach(section => observer.observe(section));

    // Sticky Header Effect
    const header = document.querySelector("header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    });
}
