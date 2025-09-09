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



// FAQ Functionality
document.addEventListener('DOMContentLoaded', function() {
    const faqCards = document.querySelectorAll('.faq-card');
    
    faqCards.forEach(card => {
        const question = card.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Close all other cards
            faqCards.forEach(otherCard => {
                if (otherCard !== card) {
                    otherCard.classList.remove('active');
                }
            });
            
            // Toggle current card
            card.classList.toggle('active');
        });
    });
    
    // Close FAQ when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.faq-card')) {
            faqCards.forEach(card => {
                card.classList.remove('active');
            });
        }
    });
});



 // Search toggle functionality
  function toggleSearch() {
    document.getElementById("searchPanel").classList.toggle("active");
  }




  document.querySelectorAll('nav a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1); // remove #
      const targetElement = document.getElementById(targetId) || document.querySelector(`.${targetId}`);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });