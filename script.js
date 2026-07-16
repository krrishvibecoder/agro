// State variables to track selections
let selectedProduct = "";
let selectedSize = "";
let selectedType = "";

// Array of countries
const countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan",
    "Bahrain", "Bangladesh", "Belgium", "Bhutan", "Brazil", "Canada", "China", "Denmark", "Egypt", "Finland",
    "France", "Germany", "Greece", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Japan",
    "Kuwait", "Malaysia", "Maldives", "Mexico", "Nepal", "Netherlands", "New Zealand", "Norway", "Oman", "Pakistan",
    "Philippines", "Poland", "Portugal", "Qatar", "Russia", "Saudi Arabia", "Singapore", "South Africa", "South Korea",
    "Spain", "Sri Lanka", "Sweden", "Switzerland", "Thailand", "Turkey", "Ukraine", "United Arab Emirates", "United Kingdom",
    "United States", "Vietnam", "Yemen", "Zimbabwe"
];

// Open Detail View
function openDetails(productName, imageUrl) {
    selectedProduct = productName;
    selectedSize = ""; // Reset selections
    selectedType = "";

    document.getElementById('detail-product-name').innerText = productName;
    document.getElementById('detail-product-img').src = imageUrl;

    // Remove active class from all buttons
    document.querySelectorAll('.option-button').forEach(btn => btn.classList.remove('active'));

    switchView('detail-view');
    window.scrollTo(0, 0);
}

// Go back to Home
function goBack() {
    switchView('home-view');
    window.scrollTo(0, 0);
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
    window.scrollTo(0, 0);
}

// Go back from Booking to Details
function goBackToDetails() {
    switchView('detail-view');
}

// Helper to switch active views
function switchView(viewId) {
    document.querySelectorAll('.view').forEach(view => view.classList.remove('active'));
    document.getElementById(viewId).classList.add('active');
}

// ==========================================
// COUNTRY MODAL LOGIC
// ==========================================

function openCountryModal(event) {
    if(event) {
        event.preventDefault();
        event.stopPropagation();
    }
    
    document.getElementById('modal-overlay').classList.add('active');
    document.getElementById('country-modal').classList.add('active');
    document.getElementById('country-search').value = ''; // Reset search
    
    buildCountryList();
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
    closeCountryModal();
}
