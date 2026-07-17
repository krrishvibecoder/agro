// State variables to track selections
let selectedProduct = "";
let selectedSize = "";
let selectedType = "";

// Country dial codes (Master list — ~200 countries with ISD codes)
const countryDialCodes = [
    { name: "Afghanistan", code: "+93" }, { name: "Albania", code: "+355" }, { name: "Algeria", code: "+213" },
    { name: "Andorra", code: "+376" }, { name: "Angola", code: "+244" }, { name: "Antigua and Barbuda", code: "+1268" },
    { name: "Argentina", code: "+54" }, { name: "Armenia", code: "+374" }, { name: "Australia", code: "+61" },
    { name: "Austria", code: "+43" }, { name: "Azerbaijan", code: "+994" }, { name: "Bahamas", code: "+1242" },
    { name: "Bahrain", code: "+973" }, { name: "Bangladesh", code: "+880" }, { name: "Barbados", code: "+1246" },
    { name: "Belarus", code: "+375" }, { name: "Belgium", code: "+32" }, { name: "Belize", code: "+501" },
    { name: "Benin", code: "+229" }, { name: "Bhutan", code: "+975" }, { name: "Bolivia", code: "+591" },
    { name: "Bosnia and Herzegovina", code: "+387" }, { name: "Botswana", code: "+267" }, { name: "Brazil", code: "+55" },
    { name: "Brunei", code: "+673" }, { name: "Bulgaria", code: "+359" }, { name: "Burkina Faso", code: "+226" },
    { name: "Burundi", code: "+257" }, { name: "Cabo Verde", code: "+238" }, { name: "Cambodia", code: "+855" },
    { name: "Cameroon", code: "+237" }, { name: "Canada", code: "+1" }, { name: "Central African Republic", code: "+236" },
    { name: "Chad", code: "+235" }, { name: "Chile", code: "+56" }, { name: "China", code: "+86" },
    { name: "Colombia", code: "+57" }, { name: "Comoros", code: "+269" }, { name: "Congo (Brazzaville)", code: "+242" },
    { name: "Congo (DRC)", code: "+243" }, { name: "Costa Rica", code: "+506" }, { name: "Croatia", code: "+385" },
    { name: "Cuba", code: "+53" }, { name: "Cyprus", code: "+357" }, { name: "Czech Republic", code: "+420" },
    { name: "Denmark", code: "+45" }, { name: "Djibouti", code: "+253" }, { name: "Dominica", code: "+1767" },
    { name: "Dominican Republic", code: "+1809" }, { name: "Ecuador", code: "+593" }, { name: "Egypt", code: "+20" },
    { name: "El Salvador", code: "+503" }, { name: "Equatorial Guinea", code: "+240" }, { name: "Eritrea", code: "+291" },
    { name: "Estonia", code: "+372" }, { name: "Eswatini", code: "+268" }, { name: "Ethiopia", code: "+251" },
    { name: "Fiji", code: "+679" }, { name: "Finland", code: "+358" }, { name: "France", code: "+33" },
    { name: "Gabon", code: "+241" }, { name: "Gambia", code: "+220" }, { name: "Georgia", code: "+995" },
    { name: "Germany", code: "+49" }, { name: "Ghana", code: "+233" }, { name: "Greece", code: "+30" },
    { name: "Greenland", code: "+299" }, { name: "Grenada", code: "+1473" }, { name: "Guatemala", code: "+502" },
    { name: "Guinea", code: "+224" }, { name: "Guinea-Bissau", code: "+245" }, { name: "Guyana", code: "+592" },
    { name: "Haiti", code: "+509" }, { name: "Honduras", code: "+504" }, { name: "Hong Kong", code: "+852" },
    { name: "Hungary", code: "+36" }, { name: "Iceland", code: "+354" }, { name: "India", code: "+91" },
    { name: "Indonesia", code: "+62" }, { name: "Iran", code: "+98" }, { name: "Iraq", code: "+964" },
    { name: "Ireland", code: "+353" }, { name: "Israel", code: "+972" }, { name: "Italy", code: "+39" },
    { name: "Jamaica", code: "+1876" }, { name: "Japan", code: "+81" }, { name: "Jordan", code: "+962" },
    { name: "Kazakhstan", code: "+7" }, { name: "Kenya", code: "+254" }, { name: "Kiribati", code: "+686" },
    { name: "Kosovo", code: "+383" }, { name: "Kuwait", code: "+965" }, { name: "Kyrgyzstan", code: "+996" },
    { name: "Laos", code: "+856" }, { name: "Latvia", code: "+371" }, { name: "Lebanon", code: "+961" },
    { name: "Lesotho", code: "+266" }, { name: "Liberia", code: "+231" }, { name: "Libya", code: "+218" },
    { name: "Liechtenstein", code: "+423" }, { name: "Lithuania", code: "+370" }, { name: "Luxembourg", code: "+352" },
    { name: "Macau", code: "+853" }, { name: "Madagascar", code: "+261" }, { name: "Malawi", code: "+265" },
    { name: "Malaysia", code: "+60" }, { name: "Maldives", code: "+960" }, { name: "Mali", code: "+223" },
    { name: "Malta", code: "+356" }, { name: "Marshall Islands", code: "+692" }, { name: "Mauritania", code: "+222" },
    { name: "Mauritius", code: "+230" }, { name: "Mexico", code: "+52" }, { name: "Micronesia", code: "+691" },
    { name: "Moldova", code: "+373" }, { name: "Monaco", code: "+377" }, { name: "Mongolia", code: "+976" },
    { name: "Montenegro", code: "+382" }, { name: "Morocco", code: "+212" }, { name: "Mozambique", code: "+258" },
    { name: "Myanmar", code: "+95" }, { name: "Namibia", code: "+264" }, { name: "Nauru", code: "+674" },
    { name: "Nepal", code: "+977" }, { name: "Netherlands", code: "+31" }, { name: "New Zealand", code: "+64" },
    { name: "Nicaragua", code: "+505" }, { name: "Niger", code: "+227" }, { name: "Nigeria", code: "+234" },
    { name: "North Korea", code: "+850" }, { name: "North Macedonia", code: "+389" }, { name: "Norway", code: "+47" },
    { name: "Oman", code: "+968" }, { name: "Pakistan", code: "+92" }, { name: "Palau", code: "+680" },
    { name: "Palestine", code: "+970" }, { name: "Panama", code: "+507" }, { name: "Papua New Guinea", code: "+675" },
    { name: "Paraguay", code: "+595" }, { name: "Peru", code: "+51" }, { name: "Philippines", code: "+63" },
    { name: "Poland", code: "+48" }, { name: "Portugal", code: "+351" }, { name: "Puerto Rico", code: "+1787" },
    { name: "Qatar", code: "+974" }, { name: "Romania", code: "+40" }, { name: "Russia", code: "+7" },
    { name: "Rwanda", code: "+250" }, { name: "Saint Kitts and Nevis", code: "+1869" }, { name: "Saint Lucia", code: "+1758" },
    { name: "Saint Vincent and the Grenadines", code: "+1784" }, { name: "Samoa", code: "+685" }, { name: "San Marino", code: "+378" },
    { name: "Sao Tome and Principe", code: "+239" }, { name: "Saudi Arabia", code: "+966" }, { name: "Senegal", code: "+221" },
    { name: "Serbia", code: "+381" }, { name: "Seychelles", code: "+248" }, { name: "Sierra Leone", code: "+232" },
    { name: "Singapore", code: "+65" }, { name: "Slovakia", code: "+421" }, { name: "Slovenia", code: "+386" },
    { name: "Solomon Islands", code: "+677" }, { name: "Somalia", code: "+252" }, { name: "South Africa", code: "+27" },
    { name: "South Korea", code: "+82" }, { name: "South Sudan", code: "+211" }, { name: "Spain", code: "+34" },
    { name: "Sri Lanka", code: "+94" }, { name: "Sudan", code: "+249" }, { name: "Suriname", code: "+597" },
    { name: "Sweden", code: "+46" }, { name: "Switzerland", code: "+41" }, { name: "Syria", code: "+963" },
    { name: "Taiwan", code: "+886" }, { name: "Tajikistan", code: "+992" }, { name: "Tanzania", code: "+255" },
    { name: "Thailand", code: "+66" }, { name: "Timor-Leste", code: "+670" }, { name: "Togo", code: "+228" },
    { name: "Tonga", code: "+676" }, { name: "Trinidad and Tobago", code: "+1868" }, { name: "Tunisia", code: "+216" },
    { name: "Turkey", code: "+90" }, { name: "Turkmenistan", code: "+993" }, { name: "Tuvalu", code: "+688" },
    { name: "Uganda", code: "+256" }, { name: "Ukraine", code: "+380" }, { name: "United Arab Emirates", code: "+971" },
    { name: "United Kingdom", code: "+44" }, { name: "United States", code: "+1" }, { name: "Uruguay", code: "+598" },
    { name: "Uzbekistan", code: "+998" }, { name: "Vanuatu", code: "+678" }, { name: "Vatican City", code: "+379" },
    { name: "Venezuela", code: "+58" }, { name: "Vietnam", code: "+84" }, { name: "Yemen", code: "+967" },
    { name: "Zambia", code: "+260" }, { name: "Zimbabwe", code: "+263" }
];

// Country names list — derived from the master dial code list so both stay in sync
const countries = countryDialCodes.map(entry => entry.name);

// Populate the phone country code dropdown
function populatePhoneCodes() {
    const select = document.getElementById('phone-code');
    if (!select) return;

    select.innerHTML = '';
    countryDialCodes.forEach(entry => {
        const option = document.createElement('option');
        option.value = entry.code;
        option.innerText = `${entry.code}`;
        option.setAttribute('data-country', entry.name);
        select.appendChild(option);
    });

    // Default to India (+91)
    select.value = "+91";
}

// Run once on load
populatePhoneCodes();

// Product Descriptions
const productDescriptions = {
    "Onion": `Onions are one of the most widely consumed vegetables globally, essential in cuisines from South Asia to the Middle East, Europe, and the Americas. Major producing countries such as India, China, Egypt, and the USA influence international supply, while price movements and seasonal harvests drive export demand.

Scientifically known as Allium Cepa, Onion belongs to the family Amaryllidaceae. India is the second largest Onion producing country after China, with two main crop cycles — November-January and January-May. Popular varieties include Agrifound Dark Red, Agrifound Light Red, NHRDF Red, Agrifound White, Pusa Ratnar and Pusa Red.

Onion is rich in natural sugars, Vitamins A, B6, C and E, along with Sodium, Potassium, Iron and Dietary Fibre. During 2015-16, India exported about 1,201,245 tons of Onion worth Rs 2,747.41 crores, mainly to Bangladesh, Malaysia, Sri Lanka, UAE and Nepal.

We bring you the most convenient route to bulk procurement of Onions, directly from the fertile fields of India — with just one click.`,

    "Rice": `Rice is the staple food for more than half the world's population and one of the largest traded agricultural commodities globally. India is the world's leading Rice exporter, supplying both Basmati and Non-Basmati varieties to markets across the Middle East, Africa, Europe and Southeast Asia.

Scientifically known as Oryza Sativa, Rice is cultivated across diverse Indian states including Punjab, Haryana, West Bengal, Uttar Pradesh and Andhra Pradesh. Major varieties available for export include Basmati (1121, Pusa, Traditional), Sona Masoori, IR-64, Swarna and Parboiled Rice.

Rice is a rich source of Carbohydrates, essential for energy, along with trace amounts of Protein, Fiber and B-Vitamins depending on the variety and processing method. India's Rice exports have consistently crossed millions of tons annually, with UAE, Saudi Arabia, Iran, Nepal and African nations among the top import destinations.

We source premium Rice directly from India's finest grain belts, ensuring consistent quality, proper grading and reliable bulk supply for global buyers.`,

    "Coconut": `Coconut is one of the most versatile agricultural products, used across food, cosmetic, and industrial applications worldwide. India ranks among the top three Coconut producing countries globally, alongside Indonesia and the Philippines, with Kerala, Tamil Nadu, Karnataka and Andhra Pradesh as major producing states.

Scientifically known as Cocos Nucifera, Coconut belongs to the family Arecaceae. It is cultivated year-round in India's coastal and tropical regions, with common export forms including Desiccated Coconut, Coconut Copra, Coconut Oil and whole Semi-Husked Coconuts.

Coconut is valued for its high content of healthy fats (Medium Chain Triglycerides), along with Vitamins C, E, and minerals like Manganese, Copper and Iron. Global demand continues to grow due to rising use in the food processing, cosmetics and health/wellness industries, with key import markets including the Middle East, USA, Europe and Southeast Asia.

We supply high-quality Coconut sourced directly from India's coastal plantations, ensuring freshness, proper handling and export-ready packaging.`
};

// Open Detail View
function openDetails(productName, imageUrl) {
    selectedProduct = productName;
    selectedSize = ""; // Reset selections
    selectedType = "";

    document.getElementById('detail-product-name').innerText = productName;
    document.getElementById('detail-product-img').src = imageUrl;
    document.getElementById('detail-product-desc').innerText = productDescriptions[productName] || "";

    // Remove active class from all buttons
    document.querySelectorAll('.option-button').forEach(btn => btn.classList.remove('active'));

    switchView('detail-view');
}

// Go back to Home
function goBack() {
    switchView('home-view');
}

// Select Bag Size or Bag Type
function selectOption(btn, category) {
    let parent = btn.parentElement;
    parent.querySelectorAll('.option-button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    if (category === 'size') {
        selectedSize = btn.innerText;
    } else if (category === 'type') {
        selectedType = btn.innerText;
    }
}

// Handle Next Button (Go to Booking View)
function handleNext() {
    if (!selectedSize || !selectedType) {
        alert("Please select both Bag Size and Bag Type.");
        return;
    }

    // Populate Booking Summary
    document.getElementById('summary-product').innerText = selectedProduct;
    document.getElementById('summary-weight').innerText = selectedSize;
    document.getElementById('summary-type').innerText = selectedType;

    // Populate Hidden Fields for Form Submission
    document.getElementById('hidden-product').value = selectedProduct;
    document.getElementById('hidden-size').value = selectedSize;
    document.getElementById('hidden-type').value = selectedType;

    switchView('booking-view');
}

// Go back from Booking to Details
function goBackToDetails() {
    switchView('detail-view');
}

// Helper to switch active views
function switchView(viewId) {
    document.querySelectorAll('.view').forEach(view => view.classList.remove('active'));
    document.getElementById(viewId).classList.add('active');
    window.scrollTo(0, 0);
}

// ==========================================
// COUNTRY MODAL LOGIC (KEYBOARD ISSUE FIXED)
// ==========================================

function openCountryModal(event) {
    // Prevent the click from activating the input box behind/beside the arrow
    if(event) {
        event.preventDefault();
        event.stopPropagation();
    }
    
    document.getElementById('modal-overlay').classList.add('active');
    document.getElementById('country-modal').classList.add('active');
    document.getElementById('country-search').value = ''; // Reset search
    
    buildCountryList();
    
    // .focus() hata diya hai taaki pop-up aate hi keyboard open na ho!
}

function closeCountryModal() {
    document.getElementById('modal-overlay').classList.remove('active');
    document.getElementById('country-modal').classList.remove('active');
}

function buildCountryList(filterText = '') {
    const listContainer = document.getElementById('country-list');
    listContainer.innerHTML = '';

    const filtered = countries.filter(country => 
        country.toLowerCase().includes(filterText.toLowerCase())
    );

    if (filtered.length === 0) {
        listContainer.innerHTML = '<div class="country-item" style="color: #999;">No country found</div>';
        return;
    }

    filtered.forEach(country => {
        const div = document.createElement('div');
        div.className = 'country-item';
        div.innerText = country;
        div.onclick = () => selectCountry(country);
        listContainer.appendChild(div);
    });
}

function filterCountries() {
    const text = document.getElementById('country-search').value;
    buildCountryList(text);
}

function selectCountry(countryName) {
    document.getElementById('country-input').value = countryName;
    applyDialCodeForCountry(countryName);
    closeCountryModal();
}

// Auto-match dial code helper — shared by modal selection and manual typing
function applyDialCodeForCountry(countryName) {
    const match = countryDialCodes.find(entry => entry.name.toLowerCase() === countryName.trim().toLowerCase());
    const phoneCodeSelect = document.getElementById('phone-code');
    if (match && phoneCodeSelect) {
        phoneCodeSelect.value = match.code;
    }
}

// Also auto-match when the user manually types the country name instead of picking from the modal
function attachManualCountryTypingMatch() {
    const input = document.getElementById('country-input');
    if (!input) return;
    input.addEventListener('input', function() {
        applyDialCodeForCountry(input.value);
    });
    input.addEventListener('blur', function() {
        applyDialCodeForCountry(input.value);
    });
}

// ==========================================
// SUBMIT GLOW ANIMATION (right-to-left shine as feedback on click)
// Used by contact-form only. booking-form has its own AJAX handler below
// so it can show the success screen without leaving the page.
// ==========================================

function attachGlowSubmit(formId, btnSelector) {
    const form = document.getElementById(formId);
    if (!form) return;
    const btn = form.querySelector(btnSelector);
    if (!btn) return;

    form.addEventListener('submit', function(e) {
        if (btn.classList.contains('btn-glow')) return; // already animating, let it go through

        e.preventDefault();
        btn.classList.add('btn-glow');
        btn.disabled = true;

        // Let the glow animation play, then actually submit the form
        setTimeout(() => {
            HTMLFormElement.prototype.submit.call(form);
        }, 750);
    });
}

// ==========================================
// BOOKING FORM — AJAX SUBMIT + SUCCESS SCREEN (NEW)
// ==========================================

function attachBookingSubmit() {
    const form = document.getElementById('booking-form');
    if (!form) return;
    const btn = form.querySelector('.submit-booking-btn');
    if (!btn) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        if (btn.classList.contains('btn-glow')) return; // already submitting

        btn.classList.add('btn-glow');
        btn.disabled = true;

        const formData = new FormData(form);

        fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: { 'Accept': 'application/json' }
        })
        .then(res => res.json())
        .then(data => {
            // Keep the glow animation timing consistent (750ms) before revealing result
            setTimeout(() => {
                if (data.success) {
                    document.getElementById('succ-product').innerText = document.getElementById('hidden-product').value || '—';
                    document.getElementById('succ-name').innerText = form.querySelector('[name="full_name"]').value || '—';
                    document.getElementById('succ-phone').innerText =
                        (document.getElementById('phone-code').value || '') + ' ' + (document.getElementById('phone-number').value || '');
                    document.getElementById('booking-success-screen').classList.add('active');
                } else {
                    alert('Submission failed, please try again.');
                    btn.classList.remove('btn-glow');
                    btn.disabled = false;
                }
            }, 750);
        })
        .catch(() => {
            setTimeout(() => {
                alert('Network error, please try again.');
                btn.classList.remove('btn-glow');
                btn.disabled = false;
            }, 750);
        });
    });
}

// Reset the booking form + success screen so a user can make another enquiry
function resetBookingSuccess() {
    document.getElementById('booking-success-screen').classList.remove('active');
    const form = document.getElementById('booking-form');
    form.reset();

    const btn = form.querySelector('.submit-booking-btn');
    btn.classList.remove('btn-glow');
    btn.disabled = false;

    // Re-default the phone code dropdown to India after reset
    populatePhoneCodes();

    switchView('home-view');
}

document.addEventListener('DOMContentLoaded', function() {
    attachGlowSubmit('contact-form', '.submit-btn');
    attachBookingSubmit();
    attachManualCountryTypingMatch();
});
