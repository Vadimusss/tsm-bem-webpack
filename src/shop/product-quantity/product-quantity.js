/* eslint-disable no-undef */
document.addEventListener('DOMContentLoaded', () => {
  const decreaseButtons = document.querySelectorAll('.product-quantity__button_type_decrease');
  const incraseButtons = document.querySelectorAll('.product-quantity__button_type_incrase');

  decreaseButtons.forEach((button) => {
    const input = button.nextElementSibling;
    button.addEventListener('click', (event) => {
      if (event.target.classList.contains('product-quantity__button_prevent_true')) {
        event.preventDefault();
      }
      const currentInputValue = parseInt(input.value, 10);
      if (currentInputValue > 1) {
        input.value = currentInputValue - 1;
      }
    });
  });

  incraseButtons.forEach((button) => {
    const input = button.previousElementSibling;
    button.addEventListener('click', (event) => {
      if (event.target.classList.contains('product-quantity__button_prevent_true')) {
        event.preventDefault();
      }
      const currentInputValue = parseInt(input.value, 10);
      input.value = currentInputValue + 1;
    });
  });
});
