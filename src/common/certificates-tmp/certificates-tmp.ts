/* eslint-disable no-undef */
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import '../colorbox/colorbox.css';
import '../colorbox/jquery.colorbox';

document.addEventListener('DOMContentLoaded', () => {
  $('.certificates-tmp__slider').owlCarousel({
    loop: true,
    autoplay: false,
    margin: 40,
    nav: true,
    navText: ['', ''],
    dots: false,
    navClass: ['certificates-tmp__nav-button', 'certificates-tmp__nav-button certificates-tmp__nav-button_next'],
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      450: {
        items: 2,
        nav: true,
      },
      650: {
        items: 3,
        nav: true,
      },
      850: {
        items: 4,
        nav: true,
      },
      1000: {
        items: 5,
        nav: true,
      },
      1300: {
        items: 6,
        nav: true,
      },
    },
  });
  $('a.certificates-tmp__link').colorbox({ maxWidth: '80%' });
}, false);
