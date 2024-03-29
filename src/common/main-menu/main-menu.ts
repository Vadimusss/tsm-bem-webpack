/* eslint-disable no-undef */
document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.mobile-main-menu-button');
  const menu = document.querySelector('.page-header__main-menu');

  if (button && menu) {
    button.addEventListener('click', () => {
      menu.classList.toggle('page-header__main-menu_visible');
      button.classList.toggle('mobile-main-menu-button_close');
    });
  }
}, false);
