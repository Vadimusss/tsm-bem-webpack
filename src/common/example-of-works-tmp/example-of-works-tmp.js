import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

document.addEventListener('DOMContentLoaded', function () {
  $('.example-of-works-tmp__slider').owlCarousel({
    loop: true,
    autoplay: false,
    margin: 10,
    nav: true,
    navText: false,
    dots: false,
    navClass: ['example-of-works-tmp__nav-button', 'example-of-works-tmp__nav-button example-of-works-tmp__nav-button_next'],
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      700: {
        items: 2,
        nav: true,
      },
      1000: {
        items: 3,
        nav: true,
      },
      1100: {
        items: 4,
        nav: true,
      },
    }
  });
}, false);