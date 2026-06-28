// Initial Reviews Database
let reviewsList = [
    {
        name: "Karthik Raja",
        rating: 5,
        date: "2026-05-15",
        comment_en: "I ordered authentic Siddha medicines for my family, and they were delivered to our doorstep incredibly fast. Excellent quality and very supportive guidance on dosage.",
        comment_ta: "எனது குடும்பத்தினருக்காக சித்த மருந்துகளை ஆர்டர் செய்தேன், அவை மிக விரைவாக எங்கள் வீட்டிற்கே விநியோகிக்கப்பட்டன. சிறந்த தரம் மற்றும் மருந்துகளை உட்கொள்ளும் அளவு பற்றிய விரிவான வழிகாட்டுதல்."
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
        rating: 5,
        date: "2026-06-02",
        comment_en: "As an Ayurveda doctor, I highly recommend their products. Being an official IMPCOPS distributor, they provide 100% genuine and standard-grade traditional medicines. Highly reliable service.",
        comment_ta: "ஒரு ஆயுர்வேத மருத்துவராக, இவர்களது தயாரிப்புகளை நான் பெரிதும் பரிந்துரைக்கிறேன். அதிகாரப்பூர்வ IMPCOPS விநியோகஸ்தராக இருப்பதால், இவர்கள் 100% உண்மையான மற்றும் தரமான பாரம்பரிய மருந்துகளை வழங்குகின்றனர். மிகவும் நம்பகமான சேவை."
    }
];

// Application State
let currentLang = localStorage.getItem("siddha_lang") || "en";

document.addEventListener("DOMContentLoaded", () => {
    setupWhatsAppWidget();
    // Initial Translation & Render
    initLanguage();
    renderReviews();
    initProductSelector();

    // Event Listeners
    setupEventListeners();
    setupActiveNavigation();
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
        renderReviews();  // Re-render reviews to display translated strings
        
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
            ? "assets/logo_ta.png?v=" + new Date().getTime() 
            : "assets/logo.png?v=" + new Date().getTime();
    }

    // Update favicon dynamically
    const favicon = document.getElementById("favicon");
    if (favicon) {
        favicon.href = lang === "ta" 
            ? "assets/logo_ta.png?v=" + new Date().getTime() 
            : "assets/logo.png?v=" + new Date().getTime();
    }

    // Toggle ad videos visibility and pause them when switching to English
    const adsContainer = document.getElementById("reviews-ads-container");
    if (adsContainer) {
        if (lang === "ta") {
            adsContainer.classList.remove("hidden");
        } else {
            adsContainer.classList.add("hidden");
            // Pause any playing ad videos when hiding them
            adsContainer.querySelectorAll("video").forEach(v => {
                v.pause();
            });
        }
    }

    // Apply fonts based on language
    if (lang === "ta") {
        document.documentElement.style.setProperty("--font-family-body", "'Mukta Malar', 'Noto Sans Tamil', sans-serif");
        document.documentElement.style.setProperty("--font-family-heading", "'Mukta Malar', 'Noto Sans Tamil', serif");
    } else {
        document.documentElement.style.setProperty("--font-family-body", "'Inter', sans-serif");
        document.documentElement.style.setProperty("--font-family-heading", "'Playfair Display', serif");
    }

    // Update product selection UI in the correct language
    if (typeof updateSelectedProductsUI === "function") {
        updateSelectedProductsUI();
    }
    // Update dropdown suggestions with new language names if active
    if (typeof renderDropdownResults === "function") {
        renderDropdownResults();
    }
}

// PRODUCT SELECTOR SYSTEM
let selectedProducts = [];

function updateSelectedProductsUI() {
    const listDiv = document.getElementById("selected-products-list");
    const whatsappBtn = document.getElementById("whatsapp-order-selected");
    if (!listDiv || !whatsappBtn) return;

    listDiv.innerHTML = "";
    
    if (selectedProducts.length === 0) {
        whatsappBtn.style.display = "none";
        return;
    }

    selectedProducts.forEach((prod, index) => {
        const tag = document.createElement("div");
        tag.className = "selected-product-tag";
        
        const nameSpan = document.createElement("span");
        nameSpan.innerText = currentLang === "ta" ? prod.ta : prod.en;
        
        const removeBtn = document.createElement("button");
        removeBtn.type = "button";
        removeBtn.className = "remove-tag-btn";
        removeBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
        removeBtn.setAttribute("aria-label", "Remove product");
        removeBtn.addEventListener("click", () => {
            selectedProducts.splice(index, 1);
            updateSelectedProductsUI();
        });
        
        tag.appendChild(nameSpan);
        tag.appendChild(removeBtn);
        listDiv.appendChild(tag);
    });

    // Generate WhatsApp Order Link
    const dict = window.translations[currentLang];
    const prefixMsg = selectedProducts.length === 1 
        ? dict.whatsapp_order_msg 
        : dict.whatsapp_order_multi_msg;
        
    let itemsText = "";
    if (selectedProducts.length === 1) {
        itemsText = currentLang === "ta" ? selectedProducts[0].ta : selectedProducts[0].en;
    } else {
        selectedProducts.forEach((prod, idx) => {
            const pName = currentLang === "ta" ? prod.ta : prod.en;
            itemsText += `${idx + 1}. ${pName}\n`;
        });
    }

    const fullMsg = prefixMsg + itemsText;
    const encodedMsg = encodeURIComponent(fullMsg);
    whatsappBtn.href = `https://wa.me/917010600410?text=${encodedMsg}`;
    whatsappBtn.style.display = "flex";
}

function adjustDropdownPosition() {
    const resultsDiv = document.getElementById("custom-dropdown-results");
    const searchInput = document.getElementById("product-search");
    if (!resultsDiv || !searchInput || resultsDiv.style.display !== "block") return;

    const rect = searchInput.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const spaceBelow = viewportHeight - rect.bottom;
    const spaceAbove = rect.top;
    
    // Flip dropdown upward if space below is less than 220px and space above is greater
    if (spaceBelow < 220 && spaceAbove > spaceBelow) {
        resultsDiv.style.top = "auto";
        resultsDiv.style.bottom = "100%";
        resultsDiv.style.marginTop = "0px";
        resultsDiv.style.marginBottom = "5px";
        
        // Dynamically adjust height to match available space above
        const maxAvailableHeight = Math.max(120, spaceAbove - 20);
        resultsDiv.style.maxHeight = `${Math.min(250, maxAvailableHeight)}px`;
    } else {
        resultsDiv.style.top = "100%";
        resultsDiv.style.bottom = "auto";
        resultsDiv.style.marginTop = "5px";
        resultsDiv.style.marginBottom = "0px";
        
        // Dynamically adjust height to match available space below
        const maxAvailableHeight = Math.max(120, spaceBelow - 20);
        resultsDiv.style.maxHeight = `${Math.min(250, maxAvailableHeight)}px`;
    }
}

function renderDropdownResults() {
    const resultsDiv = document.getElementById("custom-dropdown-results");
    const searchInput = document.getElementById("product-search");
    if (!resultsDiv || !searchInput || !window.productsData) return;

    const query = searchInput.value.trim().toLowerCase();
    
    // Filter matches against BOTH English and Tamil fields for keyboard input flexibility
    let matches = [];
    if (!query) {
        matches = window.productsData.slice(0, 50);
    } else {
        matches = window.productsData.filter(prod => {
            const nameTa = prod.ta ? prod.ta.toLowerCase() : "";
            const nameEn = prod.en ? prod.en.toLowerCase() : "";
            return nameTa.includes(query) || nameEn.includes(query);
        });
    }

    resultsDiv.innerHTML = "";
    if (matches.length > 0) {
        const fragment = document.createDocumentFragment();
        matches.forEach(match => {
            const item = document.createElement("div");
            item.className = "custom-dropdown-item";
            item.innerText = currentLang === "ta" ? match.ta : match.en;
            
            // Unified touch/click selection handler
            const selectItem = (e) => {
                e.preventDefault();
                searchInput.value = currentLang === "ta" ? match.ta : match.en;
                resultsDiv.style.display = "none";
                
                const clearProductBtn = document.getElementById("clear-product-btn");
                const addProductBtn = document.getElementById("add-product-btn");
                const toggleBtn = document.getElementById("product-dropdown-toggle");
                if (clearProductBtn) clearProductBtn.style.display = "none";
                if (addProductBtn) addProductBtn.style.display = "none";
                if (toggleBtn) toggleBtn.style.transform = "rotate(0deg)";
                
                addProductAction();
                searchInput.blur(); // Dismiss mobile keyboard
            };

            // Bind touchstart for instant selection on mobile, avoiding focusout/blur issues
            item.addEventListener("touchstart", selectItem, { passive: false });
            item.addEventListener("click", selectItem);

            fragment.appendChild(item);
        });
        resultsDiv.appendChild(fragment);
    } else {
        const noResults = document.createElement("div");
        noResults.className = "custom-dropdown-item";
        noResults.style.color = "var(--color-text-muted)";
        noResults.style.cursor = "default";
        noResults.innerText = currentLang === "ta" ? "முடிவுகள் எதுவும் இல்லை" : "No products found";
        resultsDiv.appendChild(noResults);
    }
}

function addProductAction() {
    const searchInput = document.getElementById("product-search");
    const addProductBtn = document.getElementById("add-product-btn");
    const clearProductBtn = document.getElementById("clear-product-btn");
    if (!searchInput || !addProductBtn || !clearProductBtn) return;

    const val = searchInput.value.trim().toLowerCase();
    const match = window.productsData.find(prod => {
        const nameTa = prod.ta ? prod.ta.toLowerCase() : "";
        const nameEn = prod.en ? prod.en.toLowerCase() : "";
        return nameTa === val || nameEn === val;
    });

    if (match) {
        // Avoid adding duplicates by checking unique English name
        const alreadyAdded = selectedProducts.some(p => p.en === match.en);
        if (!alreadyAdded) {
            selectedProducts.push(match);
            updateSelectedProductsUI();
        }
        // Clear input and hide controls
        searchInput.value = "";
        addProductBtn.style.display = "none";
        clearProductBtn.style.display = "none";
    }
}

function initProductSelector() {
    const searchInput = document.getElementById("product-search");
    const resultsDiv = document.getElementById("custom-dropdown-results");
    const whatsappBtn = document.getElementById("whatsapp-order-selected");
    const addProductBtn = document.getElementById("add-product-btn");
    const clearProductBtn = document.getElementById("clear-product-btn");
    const toggleBtn = document.getElementById("product-dropdown-toggle");

    if (!searchInput || !resultsDiv || !whatsappBtn || !addProductBtn || !clearProductBtn || !toggleBtn || !window.productsData) return;

    // Helper: Show dropdown
    function showDropdown() {
        renderDropdownResults();
        resultsDiv.style.display = "block";
        toggleBtn.style.transform = "rotate(180deg)";
        adjustDropdownPosition(); // Recalculate layout layout instantly
    }

    // Helper: Hide dropdown
    function hideDropdown() {
        resultsDiv.style.display = "none";
        toggleBtn.style.transform = "rotate(0deg)";
        // Reset positioning
        resultsDiv.style.top = "100%";
        resultsDiv.style.bottom = "auto";
        resultsDiv.style.marginTop = "5px";
        resultsDiv.style.marginBottom = "0px";
        resultsDiv.style.maxHeight = "250px";
    }

    // Populate and show dropdown suggestions on focus and input
    searchInput.addEventListener("focus", showDropdown);
    searchInput.addEventListener("input", (e) => {
        showDropdown();
        
        // Toggle Clear and Add buttons inside the input box
        const val = e.target.value.trim().toLowerCase();
        if (!val) {
            addProductBtn.style.display = "none";
            clearProductBtn.style.display = "none";
            return;
        }

        clearProductBtn.style.display = "flex";

        const match = window.productsData.find(prod => {
            const nameTa = prod.ta ? prod.ta.toLowerCase() : "";
            const nameEn = prod.en ? prod.en.toLowerCase() : "";
            return nameTa === val || nameEn === val;
        });

        if (match) {
            addProductBtn.style.display = "flex";
        } else {
            addProductBtn.style.display = "none";
        }
    });

    // Toggle dropdown button action
    toggleBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        if (resultsDiv.style.display === "block") {
            hideDropdown();
        } else {
            searchInput.focus();
            showDropdown();
        }
    });

    // Clear search input action
    clearProductBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        searchInput.value = "";
        addProductBtn.style.display = "none";
        clearProductBtn.style.display = "none";
        hideDropdown();
        searchInput.focus();
    });

    // Add product action
    addProductBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        addProductAction();
        hideDropdown();
    });

    // Press Enter to add product
    searchInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            addProductAction();
            hideDropdown();
        }
    });

    // Close dropdown when clicking outside input, toggle button, and suggestions div
    document.addEventListener("click", (e) => {
        if (e.target !== searchInput && e.target !== toggleBtn && !toggleBtn.contains(e.target) && e.target !== resultsDiv && !resultsDiv.contains(e.target)) {
            hideDropdown();
        }
    });

    // Support touchstart outside for faster response on mobile
    document.addEventListener("touchstart", (e) => {
        if (e.target !== searchInput && e.target !== toggleBtn && !toggleBtn.contains(e.target) && e.target !== resultsDiv && !resultsDiv.contains(e.target)) {
            hideDropdown();
        }
    }, { passive: true });

    // Track scroll and resize dynamics (e.g. keyboard triggers resize)
    window.addEventListener("scroll", adjustDropdownPosition, { passive: true });
    window.addEventListener("resize", adjustDropdownPosition, { passive: true });
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
        comment_ta: commentInput.value.trim()
    };

    reviewsList.push(newReview);
    renderReviews();

    // Reset Form
    nameInput.value = "";
    commentInput.value = "";
    ratingSelect.value = "5";

    // Show Success message
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

    // Review form
    const reviewForm = document.getElementById("review-form");
    if (reviewForm) reviewForm.addEventListener("submit", handleAddReview);

    // Booking form
    const bookingForm = document.getElementById("booking-form");
    if (bookingForm) bookingForm.addEventListener("submit", handleBookingSubmit);

    // Contact form
    const contactForm = document.getElementById("contact-form");
    if (contactForm) contactForm.addEventListener("submit", handleContactSubmit);

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
}

// SCROLL ANIMATIONS AND NAVIGATION ACTIVE STATE
function setupActiveNavigation() {
    const navLinks = document.querySelectorAll(".nav-links a");
    const mobileNavLinks = document.querySelectorAll(".mobile-nav-links a");
    const currentPath = window.location.pathname;
    const page = currentPath.substring(currentPath.lastIndexOf("/") + 1) || "index.html";

    const updateActive = (links) => {
        links.forEach(link => {
            link.classList.remove("active");
            const href = link.getAttribute("href");
            if (href === page || 
                (page === "index.html" && href === "#home") ||
                ((page === "product.html" || page === "products.html") && href === "products.html")) {
                link.classList.add("active");
            }
        });
    };

    updateActive(navLinks);
    updateActive(mobileNavLinks);

    // Sticky Header Effect
    const header = document.querySelector("header");
    if (header) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                header.classList.add("sticky");
            } else {
                header.classList.remove("sticky");
            }
        });
    }
}

// DYNAMIC WHATSAPP WIDGET INJECTION
function setupWhatsAppWidget() {
    if (document.getElementById("whatsapp-chat-widget")) return;

    const widget = document.createElement("div");
    widget.id = "whatsapp-chat-widget";
    widget.innerHTML = `
        <a href="https://wa.me/917010600410" target="_blank" rel="noopener noreferrer" class="whatsapp-chat-bubble" aria-label="WhatsApp Chat">
            <div class="whatsapp-chat-tooltip" data-i18n="whatsapp_chat_tooltip">Chat with us</div>
            <i class="fab fa-whatsapp"></i>
        </a>
    `;
    document.body.appendChild(widget);
}
