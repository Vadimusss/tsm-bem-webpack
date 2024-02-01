/* eslint-disable no-undef */
document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelector('.tabs');
  const tabsBtn = document.querySelectorAll('.tabs__botton');
  const tabsContent = document.querySelectorAll('.tabs__content');

  const tabsHandler = (path?: string) => {
    tabsContent.forEach((element) => element.classList.remove('tabs__content_active'));
    document.querySelector(`[data-tabs-target="${path}"]`)?.classList.add('tabs__content_active');
  };

  if (tabs) {
    tabs.addEventListener('click', ({ target }) => {
      if (target && target instanceof HTMLElement && target.classList.contains('tabs__botton')) {
        const { tabsPath } = target.dataset;
        tabsBtn.forEach((element) => element.classList.remove('tabs__botton_active'));
        document.querySelector(`[data-tabs-path="${tabsPath}"]`)?.classList.add('tabs__botton_active');
        tabsHandler(tabsPath);
      }
    });
  }
});
