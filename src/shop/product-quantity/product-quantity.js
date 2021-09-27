/* eslint-disable no-undef */
document.addEventListener('DOMContentLoaded', () => {
  const decreaceButton = document.querySelector('.product-quantity__button_type_decrease');
  const incraseButton = document.querySelector('.product-quantity__button_type_incrase');
  const quantityInput = document.querySelector('.product-quantity__input');

  decreaceButton.addEventListener('click', (event) => {
    event.preventDefault();
    let currentInputValue = Number(quantityInput.value);
    if (currentInputValue > 1) {
      quantityInput.value = String(currentInputValue -= 1);
    }
  });
  incraseButton.addEventListener('click', (event) => {
    event.preventDefault();
    let currentInputValue = Number(quantityInput.value);
    quantityInput.value = String(currentInputValue += 1);
  });
}, false);
