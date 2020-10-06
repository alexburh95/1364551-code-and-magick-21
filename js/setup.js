"use strict";

const setupOpen = document.querySelector(`.setup-open`);
const setup = document.querySelector(`.setup`);
const setupClose = setup.querySelector(`.setup-close`);

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
const FIREBALL_COLOR = [`#ee4830`, `#30a8ee`, `#5ce6c0`, `#e848d5`, `#e6e848`];

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

const coatColor = document.querySelector(`.wizard-coat`);
const eyesColor = document.querySelector(`.wizard-eyes`);
const ballColor = document.querySelector(`.setup-fireball-wrap`);

const KEYS = {
  ENTER: `Enter`,
  ESCAPE: `Escape`,
};
const getRandomValue = (array) => {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
};

const onPopupEscPress = (evt) => {
  if (evt.key === KEYS.ESCAPE) {
    evt.preventDefault();
    closePopup();
  }
};
const changeColor = (array, chosenClass, inputName, styles) => {
  const changeInputValue = document.querySelector(`input[name$=${inputName}]`);
  const color = getRandomValue(array);
  changeInputValue.value = color;
  chosenClass.style[styles] = color;
};

const coatColorHandler = () => {
  changeColor(COAT_COLOR, coatColor, `coat-color`, `fill`);
};
coatColor.addEventListener(`click`, coatColorHandler);

const eyesColorHandler = () => {
  changeColor(EYES_COLOR, eyesColor, `eyes-color`, `fill`);
};

eyesColor.addEventListener(`click`, eyesColorHandler);

const ballColorHandler = () => {
  changeColor(FIREBALL_COLOR, ballColor, `fireball-color`, `background-color`);
};
ballColor.addEventListener(`click`, ballColorHandler);
const openPopup = () => {
  setup.classList.remove(`hidden`);

  document.addEventListener(`keydown`, onPopupEscPress);
};

const closePopup = () => {
  setup.classList.add(`hidden`);

  document.removeEventListener(`keydown`, onPopupEscPress);
};

setupOpen.addEventListener(`click`, function () {
  openPopup();
});

setupOpen.addEventListener(`keydown`, function (evt) {
  if (evt.key === KEYS.ENTER) {
    openPopup();
  }
});

setupClose.addEventListener(`click`, function () {
  closePopup();
});

setupClose.addEventListener(`keydown`, function (evt) {
  if (evt.key === KEYS.ENTER) {
    closePopup();
  }
});

setupClose.addEventListener(`click`, function () {
  closePopup();
});

userSetup.classList.remove(`hidden`);
const similarListElement = userSetup.querySelector(`.setup-similar-list`);

const similarWizardTemplate = document
  .querySelector(`#similar-wizard-template`)
  .content.querySelector(`.setup-similar-item`);

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

  wizardElement.querySelector(
      `.setup-similar-label`
  ).textContent = `${wizard.name} ${wizard.surname}`;

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
