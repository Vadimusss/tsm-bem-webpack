/* eslint-disable no-undef */
document.addEventListener('DOMContentLoaded', () => {
  const inputsDescriptions = [...document.querySelectorAll('.form__radio-button-description')];
  const inputsGroups: NodeList[] = inputsDescriptions.reduce((acc, element) => {
    if (element instanceof HTMLElement) {
      const { id } = element.dataset;
      const name = document.getElementById(id).getAttribute('name');
      return [...acc, document.querySelectorAll(`[name=${name}]`)];
    }
    return acc;
  }, []);

  if (inputsDescriptions) {
    const updateDescriptionsVisibility = (group: NodeList): void => {
      group.forEach((input) => {
        if (input instanceof HTMLInputElement) {
          const { id, checked } = input;
          const description = document.querySelector(`[data-id="${id}"]`);
          if (description) {
            if (checked) {
              description.classList.add('form__radio-button-description_visible');
            } else {
              description.classList.remove('form__radio-button-description_visible');
            }
          }
        }
      });
    };

    inputsGroups.forEach((inputsGroup) => {
      inputsGroup.forEach((input) => {
        input.addEventListener('change', () => {
          updateDescriptionsVisibility(inputsGroup);
        });
      });
    });

    inputsGroups.forEach(updateDescriptionsVisibility);
  }
});
