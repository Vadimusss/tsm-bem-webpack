/* eslint-disable no-undef */
document.addEventListener('DOMContentLoaded', () => {
  const inputsDescriptions = [...document.querySelectorAll('.form__radio-button-description')];

  const inputs = inputsDescriptions.reduce((acc: Element[], element): Element[] => {
    if (element instanceof HTMLElement && 'id' in element.dataset) {
      const { id } = element.dataset;
      if (id !== undefined) {
        const input = document.getElementById(id);

        if (input !== null) {
          return [...acc, input];
        }
      }
    }
    return acc;
  }, []);

  const updateDescriptionsVisibility = (input: Element): void => {
    if (input instanceof HTMLInputElement) {
      const { id, checked } = input;
      const description = document.querySelector(`[data-id="${id}"]`);

      if (description) {
        if (checked) {
          description.classList.add('form__radio-button-description_visible');
        }
      }
    }
  };

  const resetDescriptionsVisibility = (): void => inputsDescriptions.forEach(
    (description) => description.classList.remove('form__radio-button-description_visible'),
  );

  inputs.forEach((input) => {
    input.addEventListener('change', () => {
      resetDescriptionsVisibility();
      updateDescriptionsVisibility(input);
    });
  });

  inputs.forEach(updateDescriptionsVisibility);
});
