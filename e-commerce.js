// ==================== PRODUCTS DATA ====================
const products = [
  {
    id: 1,
    name: "Luxury Modern Villa",
    price: 450000,
    image: "house1.jpeg",
    title: "Modern Family Home",
    category: "villa",
    beds: 4,
    baths: 3,
    area: 3500,
    rating: 4.8,
    description:
      "A stunning modern villa featuring contemporary architecture, spacious living areas, and premium finishes. Perfect for families seeking luxury and comfort.",
    location:
      "Premium neighborhood with excellent schools, shopping centers, and recreational facilities nearby.",
    amenities: [
      "Swimming Pool",
      "Smart Home",
      "Garage",
      "Garden",
      "Gym",
      "Security System",
    ],
  },
  {
    id: 2,
    name: "Cozy Country Retreat",
    price: 290000,
    image: "house2.jpeg",
    title: "Cozy Country House",
    category: "villa",
    beds: 3,
    baths: 2,
    area: 2200,
    rating: 4.6,
    description:
      "Charming country house nestled in serene surroundings. Ideal for those seeking peace and tranquility away from the hustle and bustle of city life.",
    location:
      "Peaceful rural area with panoramic views, surrounded by nature and greenery.",
    amenities: [
      "Garden",
      "Terrace",
      "Fireplace",
      "Storage",
      "Patio",
      "Natural Light",
    ],
  },
  {
    id: 3,
    name: "Beachfront Paradise",
    price: 750000,
    image: "house3.jpeg",
    title: "Luxury Beach Villa",
    category: "villa",
    beds: 5,
    baths: 4,
    area: 4500,
    rating: 4.9,
    description:
      "Exclusive beachfront property with private beach access, infinity pool, and spectacular ocean views. The ultimate luxury escape.",
    location: "Pristine beachfront with crystal-clear waters and sunset views.",
    amenities: [
      "Private Beach",
      "Infinity Pool",
      "Hot Tub",
      "Sauna",
      "Wine Cellar",
      "Home Theater",
    ],
  },
  {
    id: 4,
    name: "Exclusive Seaside Villa",
    price: 680000,
    image: "house4.jpeg",
    title: "Luxury Beach Detached Villa",
    category: "villa",
    beds: 5,
    baths: 3,
    area: 4200,
    rating: 4.7,
    description:
      "Detached villa with stunning coastal views. Features modern architecture, premium amenities, and direct beach access for the perfect seaside living.",
    location:
      "Exclusive coastal community with private amenities and beach club access.",
    amenities: [
      "Beach Access",
      "Pool",
      "Deck",
      "Balcony",
      "Tennis Court",
      "Parking",
    ],
  },
  {
    id: 5,
    name: "Elegant Gablefront",
    price: 520000,
    image: "house5.jpeg",
    title: "Gablefront Villa",
    category: "villa",
    beds: 4,
    baths: 3,
    area: 3800,
    rating: 4.5,
    description:
      "Beautiful gablefront villa with distinctive architectural charm. Spacious rooms, elegant design, and premium quality throughout.",
    location:
      "Upscale residential area with proximity to amenities and transportation.",
    amenities: [
      "Deck",
      "Gourmet Kitchen",
      "Master Suite",
      "Library",
      "Garage",
      "Landscaping",
    ],
  },
  {
    id: 6,
    name: "Modern Slice Design",
    price: 385000,
    image: "house6.jpeg",
    title: "Slice Villa",
    category: "apartment",
    beds: 3,
    baths: 2,
    area: 2400,
    rating: 4.4,
    description:
      "Contemporary apartment with sleek modern design. Open floor plan, high-end appliances, and stylish interiors for sophisticated living.",
    location:
      "Urban location with easy access to restaurants, shops, and entertainment.",
    amenities: [
      "Balcony",
      "Central AC",
      "Marble Floors",
      "Stainless Steel",
      "Elevator",
      "Security",
    ],
  },
  {
    id: 7,
    name: "Contemporary Townhouse",
    price: 320000,
    image: "house7.jpeg",
    title: "Split-Level Villa",
    category: "townhouse",
    beds: 3,
    baths: 2,
    area: 2000,
    rating: 4.3,
    description:
      "Modern split-level townhouse with efficient layout. Perfect for young professionals and small families seeking convenience and style.",
    location: "Walkable neighborhood with excellent connectivity and schools.",
    amenities: [
      "Parking",
      "Patio",
      "Modern Kitchen",
      "Storage",
      "Security Gate",
      "Maintenance",
    ],
  },
  {
    id: 8,
    name: "Luxury Tower Penthouse",
    price: 890000,
    image: "house8.jpeg",
    title: "Tower Penthouse",
    category: "apartment",
    beds: 4,
    baths: 4,
    area: 3200,
    rating: 5.0,
    description:
      "Ultra-luxury penthouse with panoramic city views. Floor-to-ceiling windows, premium finishes, and state-of-the-art amenities for the discerning buyer.",
    location:
      "Prime high-rise location with rooftop access and 24/7 concierge service.",
    amenities: [
      "Rooftop Access",
      "Concierge",
      "Spa",
      "Gym",
      "Wine Bar",
      "Smart Home",
    ],
  },
];

// ==================== STATE MANAGEMENT ====================
let cart = [];
let currentFilter = "all";

// ==================== DOM ELEMENTS ====================
const propertiesGrid = document.getElementById("root");
const cartBtn = document.getElementById("cartBtn");
const cartCount = document.getElementById("cartCount");
const cartItemsContainer = document.getElementById("cartItems");
const sidebar = document.getElementById("sidebar");
const closeSidebarBtn = document.getElementById("closeSidebar");
const filterButtons = document.querySelectorAll(".filter-btn");
const searchInput = document.getElementById("searchInput");

// ==================== RENDER PROPERTIES ====================
function renderProperties(productsToRender = products) {
  propertiesGrid.innerHTML = productsToRender
    .map((product) => {
      const isInCart = cart.some((item) => item.id === product.id);
      return `
            <div class="box" data-product-id="${product.id}" onclick="openPropertyModal(${product.id})">
                <div class="img-box">
                    <img src="${product.image}" alt="${product.title}" loading="lazy">
                    <div class="image-overlay">
                        <button class="view-btn">View Details</button>
                    </div>
                </div>
                <div class="left">
                    <p>${product.title}</p>
                    <h2>$${product.price.toLocaleString()}</h2>
                    
                    <div class="property-details">
                        <div class="detail-item">
                            <i class="fas fa-bed"></i>
                            <span>${product.beds} Beds</span>
                        </div>
                        <div class="detail-item">
                            <i class="fas fa-bath"></i>
                            <span>${product.baths} Baths</span>
                        </div>
                        <div class="detail-item">
                            <i class="fas fa-ruler"></i>
                            <span>${product.area.toLocaleString()} sqft</span>
                        </div>
                    </div>

                    <div class="button-group">
                        <button class="add-to-cart" onclick="event.stopPropagation(); toggleCart(${product.id})">
                            ${isInCart ? "✓ Saved" : "Save Property"}
                        </button>
                        <button class="save-btn" onclick="event.stopPropagation(); toggleCart(${product.id})">
                            <i class="fas fa-heart${isInCart ? " fa-solid" : "-light"}"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
    })
    .join("");

  // Add animation to cards
  document.querySelectorAll(".box").forEach((box, index) => {
    box.style.animation = `fadeIn 0.6s ease-out ${index * 0.1}s both`;
  });
}

// ==================== CART MANAGEMENT ====================
function toggleCart(productId) {
  const product = products.find((p) => p.id === productId);
  const existingIndex = cart.findIndex((item) => item.id === productId);

  if (existingIndex > -1) {
    cart.splice(existingIndex, 1);
  } else {
    cart.push(product);
  }

  updateCartUI();
  renderProperties(getFilteredProducts());
}

function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  updateCartUI();
  renderProperties(getFilteredProducts());
}

function updateCartUI() {
  cartCount.textContent = cart.length;

  if (cart.length === 0) {
    cartItemsContainer.innerHTML =
      '<p class="empty-cart">No saved properties yet</p>';
    return;
  }

  cartItemsContainer.innerHTML = cart
    .map(
      (item) => `
        <div class="cart-item">
            <div>
                <div class="cart-item-name">${item.title}</div>
                <div class="cart-item-price">$${item.price.toLocaleString()}</div>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart(${item.id})">
                <i class="fas fa-trash-alt"></i>
            </button>
        </div>
    `,
    )
    .join("");
}

// ==================== FILTERING & SEARCH ====================
function getFilteredProducts() {
  let filtered = products;

  // Apply category filter
  if (currentFilter !== "all") {
    filtered = filtered.filter((p) => p.category === currentFilter);
  }

  // Apply search filter
  const searchTerm = searchInput.value.toLowerCase();
  if (searchTerm) {
    filtered = filtered.filter(
      (p) =>
        p.title.toLowerCase().includes(searchTerm) ||
        p.name.toLowerCase().includes(searchTerm),
    );
  }

  return filtered;
}

function handleFilterClick(event) {
  // Update active button
  filterButtons.forEach((btn) => btn.classList.remove("active"));
  event.target.classList.add("active");

  // Update filter
  currentFilter = event.target.dataset.filter;
  renderProperties(getFilteredProducts());
}

function handleSearch() {
  renderProperties(getFilteredProducts());
}

// ==================== SIDEBAR MANAGEMENT ====================
function toggleSidebar() {
  sidebar.classList.toggle("open");
}

closeSidebarBtn.addEventListener("click", toggleSidebar);
cartBtn.addEventListener("click", toggleSidebar);

// ==================== EVENT LISTENERS ====================
filterButtons.forEach((btn) =>
  btn.addEventListener("click", handleFilterClick),
);
searchInput.addEventListener("input", handleSearch);

// ==================== INITIALIZATION ====================
document.addEventListener("DOMContentLoaded", () => {
  renderProperties();
  updateCartUI();

  // Add smooth scroll to top on page load
  window.scrollTo(0, 0);

  // Set first filter button as active
  document
    .querySelector('.filter-btn[data-filter="all"]')
    .classList.add("active");
});

// ==================== PROPERTY MODAL MANAGEMENT ====================
function openPropertyModal(productId) {
  const product = products.find((p) => p.id === productId);
  if (!product) return;

  const modal = document.getElementById("propertyModal");
  const isInCart = cart.some((item) => item.id === productId);

  // Populate modal with product data
  document.getElementById("mainImage").src = product.image;
  document.getElementById("imageBadge").textContent =
    product.category.toUpperCase();
  document.getElementById("modalTitle").textContent = product.title;
  document.getElementById("modalCategory").textContent = `${product.category
    .charAt(0)
    .toUpperCase()}${product.category.slice(1)} • ${
    product.rating ? "★ " + product.rating : "Rating"
  }`;
  document.getElementById("modalPrice").textContent =
    `$${product.price.toLocaleString()}`;
  document.getElementById("modalBeds").textContent = `${product.beds}`;
  document.getElementById("modalBaths").textContent = `${product.baths}`;
  document.getElementById("modalArea").textContent =
    `${product.area.toLocaleString()} sqft`;
  document.getElementById("modalRating").textContent = `${
    product.rating || 4.5
  }/5`;
  document.getElementById("modalDescription").textContent = product.description;
  document.getElementById("modalLocation").textContent = product.location;

  // Populate amenities
  const amenitiesHTML = product.amenities
    .map(
      (amenity) =>
        `<div class="amenity-tag"><i class="fas fa-check"></i> ${amenity}</div>`,
    )
    .join("");
  document.getElementById("modalAmenities").innerHTML = amenitiesHTML;

  // Update save button
  const savePropBtn = document.getElementById("savePropBtn");
  savePropBtn.textContent = isInCart ? "✓ Saved" : "❤ Save Property";
  savePropBtn.onclick = () => {
    toggleCart(productId);
    savePropBtn.textContent = cart.some((item) => item.id === productId)
      ? "✓ Saved"
      : "❤ Save Property";
  };

  // Show modal
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closePropertyModal() {
  const modal = document.getElementById("propertyModal");
  modal.classList.remove("active");
  document.body.style.overflow = "auto";
}

// Modal event listeners
document
  .getElementById("modalClose")
  ?.addEventListener("click", closePropertyModal);
document.getElementById("propertyModal")?.addEventListener("click", (e) => {
  if (e.target.id === "propertyModal") {
    closePropertyModal();
  }
});

// ==================== UTILITY: Close sidebar on escape key ====================
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    sidebar.classList.remove("open");
    closePropertyModal();
  }
});

// ==================== SMOOTH SCROLL FOR NAVIGATION ====================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// ==================== SCROLL TO PROPERTIES FUNCTION ====================
function scrollToProperties() {
  const propertiesSection = document.getElementById("properties");
  if (propertiesSection) {
    propertiesSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

// ==================== CONTACT FORM HANDLING ====================
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const property = document.getElementById("property").value;
    const message = document.getElementById("message").value.trim();

    // Validate form
    if (!name || !email || !message) {
      showFormNotification("Please fill in all required fields", "error");
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showFormNotification("Please enter a valid email address", "error");
      return;
    }

    // Create form data object
    const formData = {
      name,
      email,
      phone,
      property,
      message,
      timestamp: new Date().toLocaleString(),
    };

    // Log to console (in a real application, this would send to a server)
    console.log("Contact Form Submission:", formData);

    // Store in localStorage for persistence (demo purposes)
    let submissions =
      JSON.parse(localStorage.getItem("contactSubmissions")) || [];
    submissions.push(formData);
    localStorage.setItem("contactSubmissions", JSON.stringify(submissions));

    // Show success notification
    showFormNotification(
      `Thank you, ${name}! Your message has been received. We will contact you within 24 hours.`,
      "success",
    );

    // Reset form
    contactForm.reset();

    // Scroll to top of contact section
    setTimeout(() => {
      document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
    }, 500);
  });
}

// ==================== FORM NOTIFICATION SYSTEM ====================
function showFormNotification(message, type = "info") {
  // Remove existing notification
  const existingNotif = document.querySelector(".form-notification");
  if (existingNotif) {
    existingNotif.remove();
  }

  // Create notification element
  const notification = document.createElement("div");
  notification.className = `form-notification notification-${type}`;
  notification.innerHTML = `
    <div class="notification-content">
      <i class="fas fa-${type === "success" ? "check-circle" : type === "error" ? "exclamation-circle" : "info-circle"}"></i>
      <span>${message}</span>
      <button class="notification-close" onclick="this.parentElement.parentElement.remove()">×</button>
    </div>
  `;

  // Insert at top of contact form
  const contactSection = document.getElementById("contact");
  if (contactSection) {
    contactSection.insertBefore(notification, contactSection.firstChild);

    // Auto-remove after 5 seconds
    setTimeout(() => {
      notification.style.animation = "slideOut 0.3s ease-out forwards";
      setTimeout(() => notification.remove(), 300);
    }, 5000);
  }
}

// ==================== ACTIVE NAVIGATION HIGHLIGHT ====================
function updateActiveNavLink() {
  const sections = [
    { id: "home", navSelector: 'a[href="#home"]' },
    { id: "properties", navSelector: 'a[href="#properties"]' },
    { id: "about", navSelector: 'a[href="#about"]' },
    { id: "contact", navSelector: 'a[href="#contact"]' },
  ];

  window.addEventListener("scroll", () => {
    let currentSection = "home";

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 150) {
          currentSection = id;
        }
      }
    });

    // Update active nav link
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.classList.remove("active");
    });
    const activeLink = document.querySelector(`a[href="#${currentSection}"]`);
    if (activeLink) {
      activeLink.classList.add("active");
    }
  });
}

// Initialize active nav link highlighting
updateActiveNavLink();

// ==================== CONTACT AGENT FUNCTIONALITY ====================
const contactAgentBtn = document.getElementById("contactAgentBtn");
if (contactAgentBtn) {
  contactAgentBtn.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();

    // Get current property ID from modal (using data stored from openPropertyModal)
    const modalTitle =
      document.getElementById("modalTitle")?.textContent || "a property";
    const modalPrice = document.getElementById("modalPrice")?.textContent || "";

    // Close the modal
    closePropertyModal();

    // Scroll to contact section
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });

      // Pre-fill the property of interest in the contact form
      setTimeout(() => {
        const propertySelect = document.getElementById("property");
        const messageField = document.getElementById("message");

        // Get the category from modal badge
        const modalCategory =
          document.getElementById("modalCategory")?.textContent || "";
        const category = modalCategory.toLowerCase().includes("villa")
          ? "villa"
          : modalCategory.toLowerCase().includes("apartment")
            ? "apartment"
            : modalCategory.toLowerCase().includes("townhouse")
              ? "townhouse"
              : "";

        if (propertySelect && category) {
          propertySelect.value = category;
        }

        // Pre-fill the message with the property inquiry
        if (messageField) {
          messageField.value =
            messageField.value ||
            `I am interested in ${modalTitle} ${modalPrice}. Please provide more information and availability.`;
          messageField.focus();
        }

        // Show success message
        showFormNotification(
          "Great! Our agent details are shown below. Please fill in your information and we'll contact you shortly.",
          "info",
        );
      }, 600);
    }
  });
}

// ==================== VIEW ALL SAVED PROPERTIES FUNCTIONALITY ====================
const viewAllBtn = document.getElementById("viewAllBtn");
if (viewAllBtn) {
  viewAllBtn.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();

    // Close the sidebar
    sidebar.classList.remove("open");

    // Scroll to properties section
    const propertiesSection = document.getElementById("properties");
    if (propertiesSection) {
      propertiesSection.scrollIntoView({ behavior: "smooth", block: "start" });

      // After scrolling, highlight the saved properties
      setTimeout(() => {
        // Highlight all saved properties in the grid
        cart.forEach((savedItem) => {
          const propertyCard = document.querySelector(
            `[data-product-id="${savedItem.id}"]`,
          );
          if (propertyCard) {
            propertyCard.style.animation = "highlightSaved 0.6s ease-out";
          }
        });

        // Show notification
        showFormNotification(
          `You have ${cart.length} saved ${cart.length === 1 ? "property" : "properties"}. Click on any to view details.`,
          "info",
        );
      }, 600);
    }
  });
}
