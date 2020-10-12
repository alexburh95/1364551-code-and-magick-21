"use strict";
(function () {
  const NUMBER_OF_WIZARDS = 4;

  const similarListElement = window.userSetup.querySelector(
      `.setup-similar-list`
  );

  const similarWizardTemplate = document
    .querySelector(`#similar-wizard-template`)
    .content.querySelector(`.setup-similar-item`);

  const renderWizard = (wizard) => {
    const wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector(
        `.setup-similar-label`
    ).textContent = `${wizard.name}`;

    wizardElement.querySelector(`.wizard-coat`).style.fill = wizard.colorCoat;
    wizardElement.querySelector(`.wizard-eyes`).style.fill = wizard.colorEyes;

    return wizardElement;
  };

  const getRandomValue = (array) => {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
  };
  const successHandler = function (wizards) {
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < NUMBER_OF_WIZARDS; i++) {
      fragment.appendChild(renderWizard(getRandomValue(wizards)));
    }
    similarListElement.appendChild(fragment);

    window.userSetup.querySelector(`.setup-similar`).classList.remove(`hidden`);
  };

  window.backendLoad(successHandler, window.errorHandler);
})();
