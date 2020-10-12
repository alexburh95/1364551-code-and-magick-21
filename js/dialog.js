"use strict";
(function () {
  const setupOpen = document.querySelector(`.setup-open`);

  const setup = document.querySelector(`.setup`);
  const dialogHandle = setup.querySelector(`.upload`);
  const setupClose = setup.querySelector(`.setup-close`);
  const onPopupEscPress = (evt) => {
    if (evt.key === window.KEYS.ESCAPE) {
      evt.preventDefault();
      closePopup();
    }
  };
  const openPopup = () => {
    setup.classList.remove(`hidden`);

    document.addEventListener(`keydown`, onPopupEscPress);
  };

  const closePopup = () => {
    setup.classList.add(`hidden`);

    document.removeEventListener(`keydown`, onPopupEscPress);
  };

  setupOpen.addEventListener(`click`, () => {
    openPopup();
  });

  setupOpen.addEventListener(`keydown`, (evt) => {
    if (evt.key === window.KEYS.ENTER) {
      openPopup();
    }
  });

  setupClose.addEventListener(`click`, () => {
    closePopup();
  });

  setupClose.addEventListener(`keydown`, (evt) => {
    if (evt.key === window.KEYS.ENTER) {
      closePopup();
    }
  });

  setupClose.addEventListener(`click`, () => {
    closePopup();
  });

  window.userSetup.classList.remove(`hidden`);

  dialogHandle.addEventListener(`mousedown`, (evt) => {
    evt.preventDefault();

    let startCoords = {
      x: evt.clientX,
      y: evt.clientY,
    };

    let dragged = false;

    const onMouseMove = (moveEvt) => {
      moveEvt.preventDefault();

      dragged = true;

      const shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY,
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY,
      };

      setup.style.top = `${setup.offsetTop - shift.y}px`;
      setup.style.left = `${setup.offsetLeft - shift.x}px`;
    };

    const onMouseUp = (upEvt) => {
      upEvt.preventDefault();

      document.removeEventListener(`mousemove`, onMouseMove);
      document.removeEventListener(`mouseup`, onMouseUp);

      if (dragged) {
        const onClickPreventDefault = (clickEvt) => {
          clickEvt.preventDefault();
          dialogHandle.removeEventListener(`click`, onClickPreventDefault);
        };
        dialogHandle.addEventListener(`click`, onClickPreventDefault);
      }
    };

    document.addEventListener(`mousemove`, onMouseMove);
    document.addEventListener(`mouseup`, onMouseUp);
  });
  window.errorHandler = function (errorMessage) {
    const node = document.createElement(`div`);
    node.style = `z-index: 100; margin: 0 auto; text-align: center; background-color: red;`;
    node.style.position = `absolute`;
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = `30px`;

    node.textContent = errorMessage;
    document.body.insertAdjacentElement(`afterbegin`, node);
  };

  const getHideForm = () => {
    window.userSetup.classList.add(`hidden`);
  };
  const form = window.userSetup.querySelector(`.setup-wizard-form`);
  const submitHandler = (evt) => {
    window.backendSave(new FormData(form), getHideForm, window.errorHandler);
    evt.preventDefault();
  };
  form.addEventListener(`submit`, submitHandler);
})();
