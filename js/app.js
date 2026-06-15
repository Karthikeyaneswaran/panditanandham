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
        comment_ta: "மிகவும் நம்பகமான இடம். இராமேஸ்வரத்தில் உள்ள மருந்தகத்திற்கு நேரில் சென்றேன். மிகவும் தூய்மையானது மற்றும் பாரம்பரிய முறைகளை சரியாக பின்பற்றுகிறார்கள். வர்ம சிகிச்சை பயனுள்ளதாக இருந்தது."
    }
];

// Application State
let currentLang = localStorage.getItem("siddha_lang") || "en";

document.addEventListener("DOMContentLoaded", () => {
    // Initial Translation & Render
    initLanguage();
    renderReviews();

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
function setupIntersectionObserver() {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-links a");
    const mobileNavLinks = document.querySelectorAll(".mobile-nav-links a");

    const options = {
        root: null,
        rootMargin: "-20% 0px -60% 0px",
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
