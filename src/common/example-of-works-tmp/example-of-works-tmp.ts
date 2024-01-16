/* eslint-disable no-undef */
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import '../colorbox/colorbox.css';
import '../colorbox/jquery.colorbox';

document.addEventListener('DOMContentLoaded', () => {
  $('.example-of-works-tmp__slider').owlCarousel({
    loop: true,
    autoplay: false,
    margin: 10,
    nav: true,
    navText: ['', ''],
    dots: false,
    navClass: ['example-of-works-tmp__nav-button', 'example-of-works-tmp__nav-button example-of-works-tmp__nav-button_next'],
    responsive: {
      0: {
        items: 1,
        nav: true,
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
    },
  });
  $('a.example-of-works-tmp__link').colorbox({ maxWidth: '80%' });
}, false);
