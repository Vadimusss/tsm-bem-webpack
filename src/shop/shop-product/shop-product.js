/* eslint-disable no-undef */

/* add removed jQuery method for old shop script */
// eslint-disable-next-line func-names
jQuery.fn.size = function () {
  return this.length;
};

document.addEventListener('DOMContentLoaded', () => {
  const decreaceButton = document.querySelector('.shop-product__order-quantity-button_type_decrease');
  const incraseButton = document.querySelector('.shop-product__order-quantity-button_type_incrase');
  const quantityInput = document.querySelector('.shop-product__quantity-input');

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
