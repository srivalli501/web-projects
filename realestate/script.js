// Example: Add click event to 'SEARCH NOW' button
const searchBtn = document.querySelector('.search_area button');
if (searchBtn) {
  searchBtn.addEventListener('click', function() {
    alert('Search functionality coming soon!');
  });
}


// Responsive menu toggle for mobile view
function isMobile() {
  return window.innerWidth <= 600;
}

function setupMenuToggle() {
  const menuBtn = document.querySelector('.menu-toggle');
  const menuArea = document.querySelector('.menu_area ul');
  if (menuBtn && menuArea) {
    menuBtn.addEventListener('click', function() {
      menuArea.classList.toggle('show');
    });
    // Hide menu by default on mobile
    if (isMobile()) {
      menuArea.classList.remove('show');
    } else {
      menuArea.classList.add('show');
    }
    // Hide menu when clicking outside (optional)
    document.addEventListener('click', function(e) {
      if (isMobile() && !menuArea.contains(e.target) && e.target !== menuBtn) {
        menuArea.classList.remove('show');
      }
    });
  }
}

function setupMenuLinks() {
  const menuLinks = document.querySelectorAll('.menu_area ul li');
  menuLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      const text = link.textContent.trim().toLowerCase();
      if (text === 'home') {
        // Scroll to .content section
        const content = document.querySelector('.content');
        if (content) content.scrollIntoView({ behavior: 'smooth' });
      } else if (text === 'about') {
        // Scroll to .our-latest-listing section
        const listings = document.querySelector('.our-latest-listing');
        if (listings) listings.scrollIntoView({ behavior: 'smooth' });
      } else if (text === 'properties') {
        // Scroll to .featured-properties section
        const featured = document.querySelector('.featured-properties');
        if (featured) featured.scrollIntoView({ behavior: 'smooth' });
      } else if (text === 'agents') {
        // Scroll to .our-Agents or .Agents section
        const agents = document.querySelector('.our-Agents, .Agents');
        if (agents) agents.scrollIntoView({ behavior: 'smooth' });
      } else if (text === 'blog') {
        // Scroll to .blog section
        const blog = document.querySelector('.blog');
        if (blog) blog.scrollIntoView({ behavior: 'smooth' });
      } else if (text === 'contact') {
        // Scroll to .footer section
        const footer = document.querySelector('.footer');
        if (footer) footer.scrollIntoView({ behavior: 'smooth' });
      }
      // On mobile, hide menu after click
      const menuArea = document.querySelector('.menu_area ul');
      if (isMobile() && menuArea) {
        menuArea.classList.remove('show');
      }
    });
  });
}

// Back to Top button scroll functionality and visibility
window.addEventListener('DOMContentLoaded', function() {
  const backToTopBtn = document.querySelector('.back-to-top');
  const mainContent = document.querySelector('.main_content');

  function checkBackToTopVisibility() {
    if (!backToTopBtn || !mainContent) return;
    // If main content is in view, hide the button
    const rect = mainContent.getBoundingClientRect();
    if (rect.top <= 0 && rect.bottom > 100) {
      backToTopBtn.style.display = 'none';
    } else {
      backToTopBtn.style.display = 'block';
    }
  }

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    // Initial check
    checkBackToTopVisibility();
    // Show/hide on scroll
    window.addEventListener('scroll', checkBackToTopVisibility);
  }
});

window.addEventListener('DOMContentLoaded', function() {
  setupMenuToggle();
  setupMenuLinks();
});
window.addEventListener('resize', setupMenuToggle);

