/* eslint-disable no-undef */

/* add removed jQuery method for old shop script */
// eslint-disable-next-line func-names
jQuery.fn.size = function () {
  return this.length;
};

document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelector('.shop-product__tabs');
  const tabsBtn = document.querySelectorAll('.shop-product__tabs-botton');
  const tabsContent = document.querySelectorAll('.shop-product__tabs-content');

  const tabsHandler = (path) => {
    tabsContent.forEach(element => element.classList.remove('shop-product__tabs-content_active'));
    document.querySelector(`[data-tabs-target="${path}"]`).classList.add('shop-product__tabs-content_active');
  };

  if (tabs) {
    tabs.addEventListener('click', ({ target }) => {
      if (target.classList.contains('shop-product__tabs-botton')) {
        const { tabsPath } = target.dataset;
        tabsBtn.forEach(element => element.classList.remove('shop-product__tabs-botton_active'));
        document.querySelector(`[data-tabs-path="${tabsPath}"]`).classList.add('shop-product__tabs-botton_active');
        tabsHandler(tabsPath);
      }
    });
  }
});
