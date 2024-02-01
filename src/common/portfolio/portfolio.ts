/* eslint-disable no-undef */
import '../colorbox/colorbox.css';
import '../colorbox/jquery.colorbox';

document.addEventListener('DOMContentLoaded', () => {
  $('a.portfolio__link').colorbox({ maxWidth: '80%' });
}, false);
