/* eslint-disable no-undef */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.unfolding-block__button').forEach((button) => {
    button.addEventListener('click', (e) => {
      if (e.target instanceof Element) {
        e.target.classList.toggle('unfolding-block__button_fold');
        e.target.nextElementSibling?.classList.toggle('unfolding-block__content_visible');
      }
    });
  });
}, false);
