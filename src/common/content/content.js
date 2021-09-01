/* eslint-disable no-undef */
import '../colorbox/colorbox.css';
import '../colorbox/jquery.colorbox';

document.addEventListener('DOMContentLoaded', () => {
  $('a.content__illustration-link').colorbox({ maxWidth: '80%' });
}, false);
