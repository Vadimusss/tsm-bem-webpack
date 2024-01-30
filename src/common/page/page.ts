/* eslint-disable no-undef */
/* add removed jQuery method for old shop script */

// eslint-disable-next-line no-unused-vars
interface JQuery {
  size: () => number;
}

jQuery.fn.size = function size() {
  return this.length;
};

/* Закрываем ссылки от поисковиков */
document.addEventListener('DOMContentLoaded', () => {
  $('.hl').replaceWith(function callback() {
    const href: string = $(this).data('link') ? `href="${$(this).data('link')}"` : '';
    const tagClass = this.className ? `class="${this.className}"`.replace(' hl', '') : '';
    const title = $(this).text() ? `title="${$(this).text()}"` : '';
    const content = $(this).html();
    const id = this.id ? `id="${this.id}"` : '';
    const target = $(this).data('target') ? `target="${$(this).data('target')}"` : '';
    return `<a ${href} ${tagClass} ${title} ${id} ${target}>${content}</a>`;
  });
}, false);
