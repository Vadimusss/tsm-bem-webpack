/* eslint-disable no-undef */
/* Закрываем ссылки от поисковиков */
document.addEventListener('DOMContentLoaded', () => {
  $('.hl').replaceWith(function callback() {
    const href = $(this).data('link') ? `href="${$(this).data('link')}"` : '';
    const tagClass = this.className ? `class="${this.className}"`.replace(' hl', '') : '';
    const title = $(this).text() ? `title="${$(this).text()}"` : '';
    const content = $(this).html();
    const id = this.id ? `id="${this.id}"` : '';
    return `<a ${href} ${tagClass} ${title} ${id}>${content}</a>`;
  });
}, false);
