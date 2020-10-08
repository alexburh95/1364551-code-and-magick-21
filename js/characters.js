"use strict";
(function () {
  const NUMBER_OF_WIZARDS = 4;
  const NAMES = [
    `Иван`,
    `Хуан Себастьян`,
    `Мария`,
    `Кристоф`,
    `Виктор`,
    `Юлия`,
    `Люпита`,
    `Вашингтон`,
  ];

  const SURNAMES = [
    `да Марья`,
    `Верон`,
    `Мирабелла`,
    `Вальц`,
    `Онопко`,
    `Топольницкая`,
    `Нионго`,
    `Ирвинг`,
  ];

  const similarListElement = window.userSetup.querySelector(`.setup-similar-list`);

  const similarWizardTemplate = document
  .querySelector(`#similar-wizard-template`)
  .content.querySelector(`.setup-similar-item`);

  const getNewWizard = (name, surname, coat, eyes) => {
    const wizardsArray = [];
    for (let i = 0; i < NUMBER_OF_WIZARDS; i++) {
      wizardsArray.push({
        name: window.getRandomValue(name),
        surname: window.getRandomValue(surname),
        coat: window.getRandomValue(coat),
        eyes: window.getRandomValue(eyes),
      });
    }

    return wizardsArray;
  };

  const renderWizard = (wizard) => {
    const wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector(
        `.setup-similar-label`
    ).textContent = `${wizard.name} ${wizard.surname}`;

    wizardElement.querySelector(`.wizard-coat`).style.fill = wizard.coat;
    wizardElement.querySelector(`.wizard-eyes`).style.fill = wizard.eyes;

    return wizardElement;
  };
  const getSetting = () => {
    const fragment = document.createDocumentFragment();
    const array = getNewWizard(NAMES, SURNAMES, window.COAT_COLOR, window.EYES_COLOR);

    array.forEach((item) => {
      fragment.appendChild(renderWizard(item));
    });

    similarListElement.appendChild(fragment);
  };
  getSetting();


})();
