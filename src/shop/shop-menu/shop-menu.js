/* eslint-disable no-undef */
document.addEventListener('DOMContentLoaded', () => {
  const categoriesBlocks = document.querySelectorAll('div.shop-menu__category');

  if (categoriesBlocks) {
    categoriesBlocks.forEach(block => block.addEventListener('click', ({ target }) => {
      if (target.classList.contains('shop-menu__category')) {
        categoriesBlocks.forEach((element) => {
          if (element !== target) {
            element.classList.remove('shop-menu__category_open');
            element.firstElementChild.classList.remove('shop-menu__subcategories-list_visible');
          }
        });

        target.classList.toggle('shop-menu__category_open');
        target.firstElementChild.classList.toggle('shop-menu__subcategories-list_visible');
      }
    }));
  }
}, false);
