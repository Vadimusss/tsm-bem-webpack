/* eslint-disable no-undef */
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import '../colorbox/colorbox.css';
import '../colorbox/jquery.colorbox';

document.addEventListener('DOMContentLoaded', () => {
  $('.examples-of-montage-tmp__slider').owlCarousel({
    loop: false,
    autoplay: false,
    margin: 0,
    nav: true,
    navText: ['', ''],
    dots: false,
    items: 1,
    navClass: ['examples-of-montage-tmp__nav-button', 'examples-of-montage-tmp__nav-button examples-of-montage-tmp__nav-button_next'],
  });
  $('a.examples-of-montage-tmp__link').colorbox({ maxWidth: '80%' });
}, false);
