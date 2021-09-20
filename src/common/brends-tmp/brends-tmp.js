/* eslint-disable no-undef */
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

document.addEventListener('DOMContentLoaded', () => {
  $('.brends-tmp__slider').owlCarousel({
    loop: true,
    autoplay: false,
    margin: 10,
    nav: true,
    navText: false,
    dots: false,
    navClass: ['brends-tmp__nav-button', 'brends-tmp__nav-button brends-tmp__nav-button_next'],
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      450: {
        items: 2,
        nav: true,
      },
      575: {
        items: 3,
        nav: true,
      },
      860: {
        items: 4,
        nav: true,
      },
      986: {
        items: 5,
        nav: true,
      },
      1300: {
        items: 6,
        nav: true,
      },
    },
  });
}, false);
