import '../jquery-modal/jquery-modal.js';
import '../jquery-modal/jquery-modal.css';

document.addEventListener('DOMContentLoaded', function () {
  $.modal.defaults = {
    escapeClose: true,
    clickClose: true,
    showClose: true,
    blockerClass: 'callback-modal__blocker',  // CSS class added to the overlay (blocker).
  };
}, false);