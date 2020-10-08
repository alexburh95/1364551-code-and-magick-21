"use strict";

window.FIREBALL_COLOR = [`#ee4830`, `#30a8ee`, `#5ce6c0`, `#e848d5`, `#e6e848`];
window.COAT_COLOR = [
  `rgb(101, 137, 164)`,
  `rgb(241, 43, 107)`,
  `rgb(146, 100, 161)`,
  `rgb(56, 159, 117)`,
  `rgb(215, 210, 55)`,
  `rgb(0, 0, 0)`,
];

window.EYES_COLOR = [`black`, `red`, `blue`, `yellow`, `green`];
window.userSetup = document.querySelector(`.hidden`);

const coatColor = document.querySelector(`.wizard-coat`);
const eyesColor = document.querySelector(`.wizard-eyes`);
const ballColor = document.querySelector(`.setup-fireball-wrap`);

window.KEYS = {
  ENTER: `Enter`,
  ESCAPE: `Escape`,
};
window.getRandomValue = (array) => {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
};

window.colorize(coatColor, window.COAT_COLOR, `coat-color`, `fill`);
window.colorize(eyesColor, window.EYES_COLOR, `eyes-color`, `fill`);
window.colorize(ballColor, window.FIREBALL_COLOR, `fireball-color`, `background-color`);
