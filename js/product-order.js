// Application State
let currentLang = localStorage.getItem("siddha_lang") || "en";
let selectedProducts = [];
let filteredProducts = [];
let renderedCount = 0;
const BATCH_SIZE = 60;
let searchTimeout = null;

document.addEventListener("DOMContentLoaded", () => {
    // Initialize Language System
    initLanguage();
    
    // Initial Filter & Render
    filterAndResetRender();
    
    // Set up scroll loading observer
    setupScrollObserver();

    // Event Listeners
    setupEventListeners();
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
    body.style.opacity = 0;
    
    setTimeout(() => {
        currentLang = currentLang === "en" ? "ta" : "en";
        localStorage.setItem("siddha_lang", currentLang);
        
        const langToggleBtn = document.getElementById("lang-toggle");
        if (langToggleBtn) {
            langToggleBtn.innerText = currentLang === "en" ? "தமிழ்" : "English";
        }
        
        updateLanguageDOM(currentLang);
        
        // Re-render product list items in the new language
        renderBatch(true);
        
        body.style.opacity = 1;
    }, 200);
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
        ? "IMPCOPS தயாரிப்புகள் ஆர்டர் படிவம் - பண்டிட் ஆனந்தம்" 
        : "IMPCOPS Product Order Form - Pandit Anandam";

    // Update logo image src dynamically
    const logoImg = document.getElementById("logo-image");
    if (logoImg) {
        logoImg.src = lang === "ta" 
            ? "assets/logo_ta.png?v=" + new Date().getTime() 
            : "assets/logo.png?v=" + new Date().getTime();
    }
    
    // Update active state class on language specific styles
    if (lang === "ta") {
        document.documentElement.style.setProperty("--font-family-body", "'Mukta Malar', 'Noto Sans Tamil', sans-serif");
        document.documentElement.style.setProperty("--font-family-heading", "'Mukta Malar', 'Noto Sans Tamil', serif");
    } else {
        document.documentElement.style.setProperty("--font-family-body", "'Inter', sans-serif");
        document.documentElement.style.setProperty("--font-family-heading", "'Playfair Display', serif");
    }

    // Refresh selected text message in WhatsApp link
    updateFloatingBar();
}

// FILTER & PAGINATION SYSTEM
function filterAndResetRender() {
    const searchInput = document.getElementById("product-search-input");
    if (!searchInput || !window.productsData) return;

    const query = searchInput.value.trim().toLowerCase();
    
    if (!query) {
        filteredProducts = window.productsData;
    } else {
        filteredProducts = window.productsData.filter(prod => {
            const nameTa = prod.ta ? prod.ta.toLowerCase() : "";
            const nameEn = prod.en ? prod.en.toLowerCase() : "";
            return nameTa.includes(query) || nameEn.includes(query);
        });
    }

    renderedCount = 0;
    const grid = document.getElementById("product-list-grid");
    if (grid) grid.innerHTML = "";
    
    // Show/Hide fallback state
    const fallback = document.getElementById("no-matches-found");
    if (filteredProducts.length === 0) {
        if (fallback) fallback.style.display = "block";
    } else {
        if (fallback) fallback.style.display = "none";
        loadMoreProducts();
    }
}

function loadMoreProducts() {
    if (renderedCount >= filteredProducts.length) {
        const trigger = document.getElementById("load-more-trigger");
        if (trigger) trigger.style.display = "none";
        return;
    }

    const grid = document.getElementById("product-list-grid");
    if (!grid) return;

    const nextBatch = filteredProducts.slice(renderedCount, renderedCount + BATCH_SIZE);
    const fragment = document.createDocumentFragment();

    nextBatch.forEach(product => {
        const isChecked = selectedProducts.some(p => p.en === product.en);
        
        const card = document.createElement("div");
        card.className = "product-order-item" + (isChecked ? " selected" : "");
        card.dataset.productEn = product.en;

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = isChecked;
        checkbox.addEventListener("change", (e) => {
            e.stopPropagation();
            toggleProductSelection(product, checkbox.checked, card);
        });

        const nameSpan = document.createElement("span");
        nameSpan.className = "product-order-name";
        nameSpan.innerText = currentLang === "ta" ? product.ta : product.en;

        card.appendChild(checkbox);
        card.appendChild(nameSpan);

        // Click card to toggle
        card.addEventListener("click", () => {
            checkbox.checked = !checkbox.checked;
            toggleProductSelection(product, checkbox.checked, card);
        });

        fragment.appendChild(card);
    });

    grid.appendChild(fragment);
    renderedCount += nextBatch.length;

    // Show/Hide loading trigger button if there is more content to fetch
    const trigger = document.getElementById("load-more-trigger");
    if (trigger) {
        trigger.style.display = renderedCount < filteredProducts.length ? "flex" : "none";
    }
}

// Re-renders the current rendered batch to reflect language translations instantly
function renderBatch(rebuildAll = false) {
    const grid = document.getElementById("product-list-grid");
    if (!grid) return;

    if (rebuildAll) {
        const currentCount = renderedCount;
        grid.innerHTML = "";
        renderedCount = 0;
        
        const nextBatch = filteredProducts.slice(0, currentCount);
        const fragment = document.createDocumentFragment();
        nextBatch.forEach(product => {
            const isChecked = selectedProducts.some(p => p.en === product.en);
            const card = document.createElement("div");
            card.className = "product-order-item" + (isChecked ? " selected" : "");
            card.dataset.productEn = product.en;

            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.checked = isChecked;
            checkbox.addEventListener("change", (e) => {
                e.stopPropagation();
                toggleProductSelection(product, checkbox.checked, card);
            });

            const nameSpan = document.createElement("span");
            nameSpan.className = "product-order-name";
            nameSpan.innerText = currentLang === "ta" ? product.ta : product.en;

            card.appendChild(checkbox);
            card.appendChild(nameSpan);
            card.addEventListener("click", () => {
                checkbox.checked = !checkbox.checked;
                toggleProductSelection(product, checkbox.checked, card);
            });

            fragment.appendChild(card);
        });
        grid.appendChild(fragment);
        renderedCount = currentCount;
    }
}

// SELECTION STATE MANAGEMENT
function toggleProductSelection(product, isSelected, cardElement) {
    if (isSelected) {
        const exists = selectedProducts.some(p => p.en === product.en);
        if (!exists) {
            selectedProducts.push(product);
        }
        if (cardElement) cardElement.classList.add("selected");
    } else {
        selectedProducts = selectedProducts.filter(p => p.en !== product.en);
        if (cardElement) cardElement.classList.remove("selected");
    }
    updateFloatingBar();
}

function updateFloatingBar() {
    const bar = document.getElementById("checkout-floating-bar");
    const countSpan = document.getElementById("selected-count-value");
    const whatsappBtn = document.getElementById("submit-whatsapp-order");

    if (!bar || !countSpan || !whatsappBtn) return;

    countSpan.innerText = selectedProducts.length;

    if (selectedProducts.length === 0) {
        bar.style.display = "none";
        return;
    }

    bar.style.display = "block";

    // Generate URL text prefill message
    const dict = window.translations[currentLang];
    const prefixMsg = selectedProducts.length === 1 
        ? dict.whatsapp_order_msg 
        : dict.whatsapp_order_multi_msg;

    let itemsText = "";
    if (selectedProducts.length === 1) {
        itemsText = currentLang === "ta" ? selectedProducts[0].ta : selectedProducts[0].en;
    } else {
        selectedProducts.forEach((prod, idx) => {
            const name = currentLang === "ta" ? prod.ta : prod.en;
            itemsText += `${idx + 1}. ${name}\n`;
        });
    }

    const fullMsg = prefixMsg + itemsText;
    whatsappBtn.href = `https://wa.me/917010600410?text=${encodeURIComponent(fullMsg)}`;
}

function clearSelection() {
    selectedProducts = [];
    updateFloatingBar();

    // Reset all checked states and selected class in DOM
    document.querySelectorAll(".product-order-item").forEach(card => {
        card.classList.remove("selected");
        const checkbox = card.querySelector('input[type="checkbox"]');
        if (checkbox) checkbox.checked = false;
    });
}

// EVENTS & INTERSECTION OBSERVER
function setupScrollObserver() {
    const trigger = document.getElementById("load-more-trigger");
    if (!trigger) return;

    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            loadMoreProducts();
        }
    }, {
        root: null,
        rootMargin: "100px",
        threshold: 0
    });

    observer.observe(trigger);
}

function setupEventListeners() {
    // Language Toggle
    const langBtn = document.getElementById("lang-toggle");
    if (langBtn) langBtn.addEventListener("click", toggleLanguage);

    // Search input handler with debounce
    const searchInput = document.getElementById("product-search-input");
    const clearSearchBtn = document.getElementById("clear-search-btn");
    
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            const val = e.target.value.trim();
            if (clearSearchBtn) {
                clearSearchBtn.style.display = val ? "block" : "none";
            }
            
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                filterAndResetRender();
            }, 200);
        });
    }

    // Clear Search Input Button click
    if (clearSearchBtn && searchInput) {
        clearSearchBtn.addEventListener("click", () => {
            searchInput.value = "";
            clearSearchBtn.style.display = "none";
            filterAndResetRender();
            searchInput.focus();
        });
    }

    // Clear Selected items action button
    const clearSelectBtn = document.getElementById("clear-selection-btn");
    if (clearSelectBtn) {
        clearSelectBtn.addEventListener("click", clearSelection);
    }
}
