// Category Slider Functions
const categorySlider = document.getElementById('categorySlider');

function scrollCategoryLeft() {
    if (categorySlider) {
        categorySlider.scrollBy({ 
            left: -300, 
            behavior: 'smooth' 
        });
    }
}

function scrollCategoryRight() {
    if (categorySlider) {
        categorySlider.scrollBy({ 
            left: 300, 
            behavior: 'smooth' 
        });
    }
}
// Best Selling Section Functions
function scrollBestSellingLeft() {
    const container = document.getElementById('cardContainer');
    if (container) {
        container.scrollBy({
            left: -250,
            behavior: 'smooth'
        });
    }
}

function scrollBestSellingRight() {
    const container = document.getElementById('cardContainer');
    if (container) {
        container.scrollBy({
            left: 250,
            behavior: 'smooth'
        });
    }
}

// Make functions global for HTML onclick access
window.scrollCategoryLeft = scrollCategoryLeft;
window.scrollCategoryRight = scrollCategoryRight;
window.scrollBestSellingLeft = scrollBestSellingLeft;
window.scrollBestSellingRight = scrollBestSellingRight;

// Optional: Auto-scroll functionality for category
let autoScrollInterval;

function startAutoScroll() {
    if (categorySlider) {
        autoScrollInterval = setInterval(() => {
            const maxScroll = categorySlider.scrollWidth - categorySlider.clientWidth;
            if (categorySlider.scrollLeft >= maxScroll) {
                categorySlider.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                scrollCategoryRight();
            }
        }, 2000);
    }
}
function stopAutoScroll() {
    clearInterval(autoScrollInterval);
}

// Event listeners
if (categorySlider) {
    categorySlider.addEventListener('mouseenter', stopAutoScroll);
    categorySlider.addEventListener('mouseleave', startAutoScroll);
}


 //   sale section  filter buttons and cards
const buttons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".card");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector(".filter-btn.active").classList.remove("active");
    button.classList.add("active");

    const filter = button.getAttribute("data-filter");

    cards.forEach((card) => {
      const category = card.getAttribute("data-category");
      if (filter === "all" || filter === category) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});


 const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    slides[index].classList.add('active');
    dots[index].classList.add('active');

    currentSlide = index;
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  setInterval(nextSlide, 4000); // Auto-slide every 4 seconds




  function openVideo() {
  const modal = document.getElementById('videoModal');
  const player = document.getElementById('youtubePlayer');
  player.src = "https://www.youtube.com/embed/rEjU6rBwmtk?autoplay=1";
  modal.style.display = "block";
}

function closeVideo() {
  const modal = document.getElementById('videoModal');
  const player = document.getElementById('youtubePlayer');
  modal.style.display = "none";
  player.src = ""; // Stop video
}




function showReview(index) {
  const allCards = document.querySelectorAll('.review-card');
  allCards.forEach((card, i) => {
    if (i === index) {
      card.classList.toggle('active');
    } else {
      card.classList.remove('active');
    }
  });
}



 // News card toggle functionality
function toggleExpand(card) {
  // Remove active class from all other cards
  document.querySelectorAll('.news-card').forEach(c => {
    if (c !== card) {
      c.classList.remove('active');
    }
  });
  
  // Toggle active class on clicked card
  card.classList.toggle('active');
}

// Optional: Close card when clicking outside
document.addEventListener('click', function(event) {
  if (!event.target.closest('.news-card')) {
    document.querySelectorAll('.news-card').forEach(card => {
      card.classList.remove('active');
    });
  }
});

// Make function globally accessible
window.toggleExpand = toggleExpand;




// Back to Top Button Functionality
window.addEventListener("scroll", function () {
  const button = document.querySelector(".back-to-top");
  const heroSection = document.querySelector('.hero-section') || document.querySelector('.hero') || document.querySelector('#hero');
  
  let threshold = 600; // Default threshold
  
  // If hero section exists, use its height as threshold
  if (heroSection) {
    threshold = heroSection.offsetHeight - 350;
  }
  
  if (button) {
    button.style.display = window.scrollY > threshold ? "block" : "none";
  }
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Make function globally accessible
window.scrollToTop = scrollToTop;



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




document.querySelectorAll('.nav-links a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);

      if (target) {
        window.scrollTo({
          top: target.offsetTop - 70, // offset for fixed header
          behavior: 'smooth'
        });
      }
    });
  });



// Cart toggle functionality
  function toggleCart() {
    document.getElementById("cartPanel").classList.toggle("active");
  }

// Sign-in toggle functionality
  function toggleSignIn() {
    document.getElementById("signInPanel").classList.toggle("active");
  }

  // Search toggle functionality
  function toggleSearch() {
    document.getElementById("searchPanel").classList.toggle("active");
  }

  // Wishlist toggle functionality
  function toggleWishlist() {
    document.getElementById("wishlistPanel").classList.toggle("active");
  }