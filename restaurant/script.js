function scrollCategories(direction) {
  const container = document.getElementById("categoryScroll");
  const scrollAmount = 220;

  container.scrollBy({
    left: direction * scrollAmount,
    behavior: "smooth"
  });
}
document.addEventListener("DOMContentLoaded", function() {
  const categoryScroll = document.getElementById("categoryScroll");
  const scrollLeftButton = document.getElementById("scrollLeft");
  const scrollRightButton = document.getElementById("scrollRight");
    const scrollAmount = 220;
    scrollLeftButton.addEventListener("click", function() {
      categoryScroll.scrollBy({
        left: -scrollAmount,
        behavior: "smooth"
      });
    }
    );
    scrollRightButton.addEventListener("click", function() {
      categoryScroll.scrollBy({
        left: scrollAmount,
        behavior: "smooth"
      });
    });
}
);

  function filterMenu(category) {
    const cards = document.querySelectorAll('.menu-card');
    const buttons = document.querySelectorAll('.tab-link');

    // Highlight active tab
    buttons.forEach(btn => btn.classList.remove('active'));
    const clickedButton = Array.from(buttons).find(btn => btn.innerText.toLowerCase() === category);
    if (clickedButton) clickedButton.classList.add('active');
    
    // Show/hide cards based on category
    cards.forEach(card => {
      if (category === 'all') {
        card.style.display = 'flex'; // show all
      } else {
        if (card.classList.contains(category)) {
          card.style.display = 'flex'; // show matching category
        } else {
          card.style.display = 'none'; // hide non-matching
        }
      }
    });
  }

// Optional: Activate 'All' filter by default on page load
  window.addEventListener('DOMContentLoaded', () => {
    filterMenu('all');
    document.querySelector('.tab-link').classList.add('active');
  });

  let currentSlide = 0;
const testimonials = document.querySelectorAll('.testimonial');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
  testimonials.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
    dots[i].classList.toggle('active', i === index);
  });
  currentSlide = index;
}

// Auto-switch every 6 seconds (optional)
setInterval(() => {
  currentSlide = (currentSlide + 1) % testimonials.length;
  showSlide(currentSlide);
}, 6000);

document.querySelector('.back-to-top').addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function() {
      navLinks.classList.toggle('active');
    });
  }
});

// Smooth Scroll for Nav Links
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".nav-links a");

  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const text = this.textContent.trim().toLowerCase();

      let targetSelector = "";

      switch (text) {
        case "home":
          targetSelector = ".hero";
          break;
        case "menu":
          targetSelector = ".category-section";
          break;
        case "shop":
          targetSelector = ".how-to-order";
          break;
        case "pages":
          targetSelector = ".menu-container";
          break;
        case "blog":
          targetSelector = ".blog-section";
          break;
        case "contacts":
        case "contact":
          targetSelector = ".footer";
          break;
        default:
          return;
      }

      const target = document.querySelector(targetSelector);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});


// Show/hide back-to-top button only when not in hero section
document.addEventListener('DOMContentLoaded', function() {
  const backToTop = document.querySelector('.back-to-top');
  const heroSection = document.querySelector('.hero');

  function toggleBackToTop() {
    const heroRect = heroSection.getBoundingClientRect();
    // If the top of hero is at or above the viewport and the bottom is below the top of the viewport
    if (heroRect.top <= 0 && heroRect.bottom > 0) {
      backToTop.style.display = 'none';
    } else {
      backToTop.style.display = 'flex';
    }
  }

  // Initial check
  toggleBackToTop();

  // Listen for scroll events
  window.addEventListener('scroll', toggleBackToTop);
});


document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Login Submitted! (Demo only)");
});




