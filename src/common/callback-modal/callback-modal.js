/* eslint-disable no-undef */
import '../jquery-modal/jquery-modal';
import '../jquery-modal/jquery-modal.css';

document.addEventListener('DOMContentLoaded', () => {
  $.modal.defaults = {
    escapeClose: true,
    clickClose: true,
    showClose: true,
    blockerClass: 'callback-modal__blocker', // CSS class added to the overlay (blocker).
  };
}, false);
