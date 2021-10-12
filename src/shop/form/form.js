/* eslint-disable no-undef */
document.addEventListener('DOMContentLoaded', () => {
  const inputsDescriptions = [...document.querySelectorAll('.form__radio-button-description')];
  const inputsGroups = inputsDescriptions.map(({ dataset: { id } }) => {
    const { name } = document.getElementById(id);
    return document.querySelectorAll(`[name=${name}]`);
  });

  if (inputsDescriptions) {
    const updateDescriptionsVisibility = (group) => {
      group.forEach(({ id, checked }) => {
        const description = document.querySelector(`[data-id="${id}"]`);
        if (description) {
          if (checked) {
            description.classList.add('form__radio-button-description_visible');
          } else {
            description.classList.remove('form__radio-button-description_visible');
          }
        }
      });
    };

    inputsGroups.forEach((inputsGroup) => {
      inputsGroup.forEach(input => input.addEventListener('change', () => {
        updateDescriptionsVisibility(inputsGroup);
      }));
    });

    inputsGroups.forEach(updateDescriptionsVisibility);
  }
});
