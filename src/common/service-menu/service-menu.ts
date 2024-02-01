/* eslint-disable no-undef */
document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.mobile-service-menu-button');
  const menu = document.querySelector('.page-header__service-menu');
  if (button && menu) {
    button.addEventListener('click', () => menu.classList.toggle('page-header__service-menu_visible'));
  }
}, false);
