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