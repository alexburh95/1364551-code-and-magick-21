"use strict";
(function () {
  const StatusCode = {
    OK: 200,
  };
  const TIMEOUT_IN_MS = 10000;
  const getFindings = (element, sucsess, lost) => {
    element.responseType = `json`;

    element.addEventListener(`load`, () => {
      if (element.status === StatusCode.OK) {
        sucsess(element.response);
      } else {
        lost(`Статус ответа: ${element.status} ${element.statusText}`);
      }
    });
    element.addEventListener(`error`, () => {
      lost(`Произошла ошибка соединения`);
    });
    element.addEventListener(`timeout`, () => {
      lost(`Запрос не успел выполниться за ${element.timeout} мс`);
    });

    element.timeout = TIMEOUT_IN_MS;
  };
  window.backendLoad = (onLoad, onError) => {
    const URL = `https://21.javascript.pages.academy/code-and-magick/data`;

    const xhr = new XMLHttpRequest();
    getFindings(xhr, onLoad, onError);

    xhr.open(`GET`, URL);
    xhr.send();
  };

  window.backendSave = (data, onLoad, onError) => {
    const URL = `https://21.javascript.pages.academy/code-and-magick`;

    const xhr = new XMLHttpRequest();
    getFindings(xhr, onLoad, onError);

    xhr.open(`POST`, URL);
    xhr.send(data);
  };
})();
