/* eslint-disable no-undef */
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

document.addEventListener('DOMContentLoaded', () => {
  $('.feedbacks__slider .owl-carousel').owlCarousel({
    loop: true,
    autoplay: false,
    margin: 0,
    nav: true,
    navText: ['', ''],
    dots: false,
    items: 1,
    navClass: ['feedbacks__nav-button', 'feedbacks__nav-button feedbacks__nav-button_next'],
  });
}, false);
