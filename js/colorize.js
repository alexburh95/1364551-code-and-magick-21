"use strict";
(function () {


  window.colorize = (element, array, inputName, styles) => {
    element.addEventListener(`click`, () => {
      const changeInputValue = document.querySelector(`input[name$=${inputName}]`);
      const color = window.getRandomValue(array);
      changeInputValue.value = color;
      element.style[styles] = color;
    });

  };


})();
