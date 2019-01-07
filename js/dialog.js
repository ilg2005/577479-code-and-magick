'use strict';

(function () {
  var Keycode = {
    ENTER: 13,
    ESC: 27
  };

  var setupOpenElement = document.querySelector('.setup-open');
  var formElement = document.querySelector('form');
  var setupCloseElement = window.utilities.setupElement.querySelector('.setup-close');
  var setupWizardNameElement = window.utilities.setupElement.querySelector('.setup-user-name');

  var hideElement = function (element) {
    element.classList.add('hidden');
  };

  var initialSetupElementPosition = {
    left: window.utilities.setupElement.style.left,
    top: window.utilities.setupElement.style.top
  };

  var restoreInitialSetupElementPosition = function () {
    window.utilities.setupElement.style.left = initialSetupElementPosition.left;
    window.utilities.setupElement.style.top = initialSetupElementPosition.top;
  };

  var setupCloseClickHandler = function () {
    hideElement(window.utilities.setupElement);
    document.removeEventListener('keydown', documentKeydownEscHandler);
  };

  var setupCloseKeydownEnterHandler = function (evt) {
    if (evt.keyCode === Keycode.ENTER) {
      hideElement(window.utilities.setupElement);
    }
    document.removeEventListener('keydown', documentKeydownEscHandler);
  };

  var documentKeydownEscHandler = function (evt) {
    if (evt.keyCode === Keycode.ESC && evt.target !== setupWizardNameElement) {
      hideElement(window.utilities.setupElement);
      document.removeEventListener('keydown', documentKeydownEscHandler);
    }
  };

  var successSaveHandler = function () {
    hideElement(window.utilities.setupElement);
    window.utilities.renderSuccessMessage('Сохранено успешно!');
  };

  var errorSaveHandler = function (message) {
    window.utilities.renderErrorMessage(message);
  };

  var formSubmitHandler = function (evt) {
    evt.preventDefault();
    window.backend.save(new FormData(formElement), successSaveHandler, errorSaveHandler);
  };

  var addEventListenersOnSetupOpen = function () {
    restoreInitialSetupElementPosition();
    setupCloseElement.addEventListener('click', setupCloseClickHandler);
    setupCloseElement.addEventListener('keydown', setupCloseKeydownEnterHandler);
    formElement.addEventListener('submit', formSubmitHandler);
    document.addEventListener('keydown', documentKeydownEscHandler);
  };

  var listenSetupOpenEvent = function () {
    setupOpenElement.addEventListener('click', function () {
      window.utilities.showElement(window.utilities.setupElement);
      addEventListenersOnSetupOpen();
    });
    setupOpenElement.addEventListener('keydown', function (evt) {
      if (evt.keyCode === Keycode.ENTER) {
        window.utilities.showElement(window.utilities.setupElement);
        addEventListenersOnSetupOpen();
      }
    });
  };

  listenSetupOpenEvent();
  window.setupOpenElement = setupOpenElement;
})();
