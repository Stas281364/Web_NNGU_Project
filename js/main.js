// topSlider
const topSlider = new Swiper('.slider', {
    loop: true,
    spaceBetween: 100,

    autoplay: {
      delay: 5000,
     },
     speed: 1500,

    // If we need pagination
    pagination: {
      el: '.slider__nav',
      clickable: true
    },

    on: {
      init() {
        this.el.addEventListener('mouseenter', () => {
          this.autoplay.stop();
        });
  
        this.el.addEventListener('mouseleave', () => {
          this.autoplay.start();
        });
      }
    },
});

// cards slider
const swiper = new Swiper(".project__swiper", {
  slidesPerView: 'auto',
  spaceBetween: 22,
  freeMode: true,

  pagination: {
    el: ".project__pagination",
    clickable: true,
  },
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// gallery
const gallery = new Swiper('.gallery', {
  slidesPerView: 3,
  spaceBetween: 20,
});

// fancybox
Fancybox.bind("[data-fancybox]");