// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.navbar');

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



function changeImage(type) {
  const imageMap = {
    commercial: "images/image4.jpg",
    personal: "images/image5.jpg",
    editorial: "images/image6.jpg",
    design: "images/image7.jpg"
  };

  document.getElementById("mainImage").src = imageMap[type];

  // remove active from all
  document.querySelectorAll(".menu li").forEach(li => li.classList.remove("active"));

  // add active to clicked
  document.getElementById(type).classList.add("active");
}



 function scrollGallery(direction) {
      const container = document.getElementById('gallery');
      const scrollAmount = 300;
      container.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
    }


    const backToTop = document.getElementById("backToTop");

    window.onscroll = function () {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTop.style.display = "block";
      } else {
        backToTop.style.display = "none";
      }
    };

    backToTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
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