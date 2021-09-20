/* eslint-disable no-undef */
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import '../colorbox/colorbox.css';
import '../colorbox/jquery.colorbox';

document.addEventListener('DOMContentLoaded', () => {
  $('.examples-of-projects-tmp__slider').owlCarousel({
    loop: false,
    autoplay: false,
    margin: 0,
    nav: true,
    navText: false,
    dots: false,
    items: 1,
    navClass: ['examples-of-projects-tmp__nav-button', 'examples-of-projects-tmp__nav-button examples-of-projects-tmp__nav-button_next'],
  });
  $('a.examples-of-projects-tmp__link').colorbox({ maxWidth: '80%' });
}, false);
