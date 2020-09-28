"use strict";

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

const YEYS_COLOR = [`black`, `red`, `blue`, `yellow`, `green`];
const userSetup = document.querySelector(`.hidden`);

userSetup.classList.remove(`hidden`);
const similarListElement = userSetup.querySelector(`.setup-similar-list`);

const similarWizardTemplate = document
  .querySelector(`#similar-wizard-template`)
  .content.querySelector(`.setup-similar-item`);

const getRandomValue = (array) => {
  let random = Math.floor(Math.random() * array.length);
  return array[random];
};
const getNewMagik = (name, surname, coat, yeys) => {
  let randomMassiv = [];
  for (let i = 0; i < 4; i++) {
    randomMassiv[i] = {
      name: getRandomValue(name),
      surname: getRandomValue(surname),
      coat: getRandomValue(coat),
      yeys: getRandomValue(yeys),
    };
  }

  return randomMassiv;
};

const renderWizard = (wizard) => {
  let wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector(`.setup-similar-label`).textContent =
    wizard.name + ` ` + wizard.surname;

  wizardElement.querySelector(`.wizard-coat`).style.fill = wizard.coat;
  wizardElement.querySelector(`.wizard-eyes`).style.fill = wizard.yeys;

  return wizardElement;
};
const getSetting = () => {
  let fragment = document.createDocumentFragment();
  let massiv = getNewMagik(NAMES, SURNAMES, COAT_COLOR, YEYS_COLOR);
  for (let i = 0; i < massiv.length; i++) {
    fragment.appendChild(renderWizard(massiv[i]));
  }
  similarListElement.appendChild(fragment);
};
getSetting();

userSetup.querySelector(`.setup-similar`).classList.remove(`hidden`);
