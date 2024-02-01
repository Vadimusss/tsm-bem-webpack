/* eslint-disable no-undef */
document.addEventListener('DOMContentLoaded', () => {
  const decreaseButtons = document.querySelectorAll('.product-quantity__button_type_decrease');
  const incraseButtons = document.querySelectorAll('.product-quantity__button_type_incrase');

  decreaseButtons.forEach((button) => {
    const input = button.nextElementSibling;
    button.addEventListener('click', (event) => {
      if (event.target instanceof HTMLElement) {
        if (event.target.classList.contains('product-quantity__button_prevent_true')) {
          event.preventDefault();
        }
      }

      if (input && input instanceof HTMLInputElement) {
        const currentInputValue = parseInt(input.value, 10);
        if (currentInputValue > 1) {
          input.value = String(currentInputValue - 1);
        }
        const { article } = input.dataset;
        const quantityText = document.querySelector(`.product-quantity__quantity-text_article_${article}`);
        if (quantityText?.classList.contains('product-quantity__quantity-text_color_red')) {
          quantityText.classList.remove('product-quantity__quantity-text_color_red');
        }
      }
    });
  });

  incraseButtons.forEach((button) => {
    const input = button.previousElementSibling;
    button.addEventListener('click', (event) => {
      if (event.target instanceof HTMLElement) {
        if (event.target.classList.contains('product-quantity__button_prevent_true')) {
          event.preventDefault();
        }
      }
      if (input && input instanceof HTMLInputElement) {
        const max = input.getAttribute('max');
        const availableQuantity = max ? parseInt(max, 10) : 0;
        const currentInputValue = parseInt(input.value, 10);
        if (currentInputValue < availableQuantity) {
          input.value = String(currentInputValue + 1);
        } else {
          const { article } = input.dataset;
          const quantityText = document.querySelector(`.product-quantity__quantity-text_article_${article}`);
          quantityText?.classList.add('product-quantity__quantity-text_color_red');
        }
      }
    });
  });
});
