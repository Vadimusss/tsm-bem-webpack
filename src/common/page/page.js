/* Закрываем ссылки от поисковиков */
document.addEventListener('DOMContentLoaded', function () {
  $('.hl').replaceWith(function () {
    const href = $(this).data('link') ? `href="${$(this).data('link')}"` : '';
    const tagClass = this.className ? `class="${this.className}"`.replace(' hl', '') : '';
    const title = $(this).text() ? `title="${$(this).text()}"` : '';
    const content = $(this).html();
    return `<a ${href} ${tagClass} ${title}>${content}</a>`;
  });
}, false);