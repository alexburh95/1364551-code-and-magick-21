"use strict";
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

const COAT_COLOR = [
  `rgb(101, 137, 164)`,
  `rgb(241, 43, 107)`,
  `rgb(146, 100, 161)`,
  `rgb(56, 159, 117)`,
  `rgb(215, 210, 55)`,
  `rgb(0, 0, 0)`,
];

const EYES_COLOR = [`black`, `red`, `blue`, `yellow`, `green`];
const userSetup = document.querySelector(`.hidden`);

userSetup.classList.remove(`hidden`);
const similarListElement = userSetup.querySelector(`.setup-similar-list`);

const similarWizardTemplate = document
  .querySelector(`#similar-wizard-template`)
  .content.querySelector(`.setup-similar-item`);

const getRandomValue = (array) => {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
};
const getNewWizard = (name, surname, coat, eyes) => {
  const wizardsArray = [];
  for (let i = 0; i < NUMBER_OF_WIZARDS; i++) {
    wizardsArray.push({
      name: getRandomValue(name),
      surname: getRandomValue(surname),
      coat: getRandomValue(coat),
      eyes: getRandomValue(eyes),
    });
  }

  return wizardsArray;
};

const renderWizard = (wizard) => {
  const wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector(`.setup-similar-label`).textContent =
  `${ wizard.name } ${ wizard.surname }`;

  wizardElement.querySelector(`.wizard-coat`).style.fill = wizard.coat;
  wizardElement.querySelector(`.wizard-eyes`).style.fill = wizard.eyes;

  return wizardElement;
};
const getSetting = () => {
  const fragment = document.createDocumentFragment();
  const array = getNewWizard(NAMES, SURNAMES, COAT_COLOR, EYES_COLOR);

  array.forEach((item) => {
    fragment.appendChild(renderWizard(item));

  });

  similarListElement.appendChild(fragment);
};
getSetting();

userSetup.querySelector(`.setup-similar`).classList.remove(`hidden`);
