document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active class from all buttons
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    // Add active class to clicked button
    btn.classList.add('active');
    
    // Get the filter category
    const filterCategory = btn.textContent.toLowerCase();
    
    // Get all event cards
    const eventCards = document.querySelectorAll('.event-card');
    
    // Filter events based on data-category attribute
    eventCards.forEach(card => {
      const eventCategory = card.getAttribute('data-category');
      
      if (filterCategory === 'all') {
        card.style.display = 'flex';
      } else if (eventCategory === filterCategory) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

//testimonial slider
let slider = document.getElementById('testimonialSlider');
  let currentIndex = 0;
  const totalTestimonials = slider.children.length;

  setInterval(() => {
    currentIndex = (currentIndex + 1) % totalTestimonials;
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
  }, 4000);


  const buttons = document.querySelectorAll(".filter-btn");
    const items = document.querySelectorAll(".gallery-item");

    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        document.querySelector(".filter-btn.active").classList.remove("active");
        btn.classList.add("active");
        const category = btn.getAttribute("data-category");

        items.forEach((item) => {
          item.classList.remove("hidden");
          if (category !== "all" && item.getAttribute("data-category") !== category) {
            item.classList.add("hidden");
          }
        });
      });
    });

  const carousel = document.getElementById('sponsorCarousel');
const leftBtn = document.getElementById('leftBtn');
const rightBtn = document.getElementById('rightBtn');

leftBtn.addEventListener('click', () => {
  carousel.scrollBy({
    left: -200,
    behavior: 'smooth'
  });
});

rightBtn.addEventListener('click', () => {
  carousel.scrollBy({
    left: 200,
    behavior: 'smooth'
  });
});


   // Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function() {
      navLinks.classList.toggle('active');
      
      // Change hamburger icon to X when open
      if (navLinks.classList.contains('active')) {
        menuToggle.innerHTML = '✕';
      } else {
        menuToggle.innerHTML = '☰';
      }
    });

    // Close menu when clicking on a nav link
    const navItems = navLinks.querySelectorAll('li');
    navItems.forEach(item => {
      item.addEventListener('click', function() {
        navLinks.classList.remove('active');
        menuToggle.innerHTML = '☰';
      });
    });
  }
});


// Navigate to login page
function togglePassword() {
  const passInput = document.getElementById("password");
  if (passInput.type === "password") {
    passInput.type = "text";
  } else {
    passInput.type = "password";
  }
}

// Navigate to register page
function validateForm() {
  const name = document.getElementById('fullname').value.trim();
  const email = document.getElementById('email').value.trim();
  const mobile = document.getElementById('mobile').value.trim();
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  const errorMsg = document.getElementById('errorMsg');

  errorMsg.textContent = '';

  if (!name || !email || !mobile || !password || !confirmPassword) {
    errorMsg.textContent = 'All fields are required!';
    return false;
  }

  if (!/^\d{10}$/.test(mobile)) {
    errorMsg.textContent = 'Mobile number must be 10 digits!';
    return false;
  }

  if (password.length < 6) {
    errorMsg.textContent = 'Password must be at least 6 characters!';
    return false;
  }

  if (password !== confirmPassword) {
    errorMsg.textContent = 'Passwords do not match!';
    return false;
  }

  alert('Registration successful!');
  return true;
}


// Back to Top
window.addEventListener("scroll", function () {
  const button = document.querySelector(".back-to-top");
  button.style.display = window.scrollY > 200 ? "block" : "none";
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}



// Initialize Leaflet Map with overflow fix
document.addEventListener('DOMContentLoaded', function() {
  const mapContainer = document.getElementById('map');
  
  if (mapContainer) {
    // Initialize the map
    const map = L.map('map', {
      zoomControl: true,
      scrollWheelZoom: false, // Disable scroll wheel zoom to prevent overflow
      doubleClickZoom: true,
      boxZoom: false,
      keyboard: true,
      dragging: true,
      touchZoom: true,
      zoomSnap: 1,
      zoomDelta: 1,
      maxBounds: null // Remove bounds restriction
    }).setView([40.7251, -74.0016], 15);

    // Add tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
      maxZoom: 19,
      minZoom: 10,
      tileSize: 256,
      zoomOffset: 0
    }).addTo(map);

    // Add marker
    const marker = L.marker([40.7251, -74.0016]).addTo(map);
    
    marker.bindPopup(`Istanbul`).openPopup();

    // Fix map size and prevent overflow
    setTimeout(() => {
      map.invalidateSize();
      map.setView([40.7251, -74.0016], 15);
    }, 100);

    // Handle window resize
    window.addEventListener('resize', () => {
      map.invalidateSize();
    });

    // Prevent map from interfering with page scroll
    map.on('focus', function() {
      map.scrollWheelZoom.enable();
    });

    map.on('blur', function() {
      map.scrollWheelZoom.disable();
    });
  }
});



document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-links li");

  const sectionMap = {
    "HOME": "#home",
    "EVENTS": "#events",
    "PAGES": "#features",
    "GALLERY": "#gallery",
    "BLOG": "#blog",
    "CONTACT US": "#contact"
  };

  navLinks.forEach(link => {
    link.addEventListener("click", function () {
      const text = this.textContent.trim();
      const targetId = sectionMap[text];
      if (targetId) {
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });
});
