'use strict';

(function () {
  var ENTER_KEYCODE = 13;
  var ESC_KEYCODE = 27;

  var setupOpenElement = document.querySelector('.setup-open');
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
    if (evt.keyCode === ENTER_KEYCODE) {
      hideElement(window.utilities.setupElement);
    }
    document.removeEventListener('keydown', documentKeydownEscHandler);
  };

  var documentKeydownEscHandler = function (evt) {
    if (evt.keyCode === ESC_KEYCODE && evt.target !== setupWizardNameElement) {
      hideElement(window.utilities.setupElement);
      document.removeEventListener('keydown', documentKeydownEscHandler);
    }
  };

  var addEventListenersOnSetupOpen = function () {
    restoreInitialSetupElementPosition();
    setupCloseElement.addEventListener('click', setupCloseClickHandler);
    setupCloseElement.addEventListener('keydown', setupCloseKeydownEnterHandler);
    document.addEventListener('keydown', documentKeydownEscHandler);
  };

  var listenSetupOpenEvent = function () {
    setupOpenElement.addEventListener('click', function () {
      window.utilities.showElement(window.utilities.setupElement);
      addEventListenersOnSetupOpen();
    });
    setupOpenElement.addEventListener('keydown', function (evt) {
      if (evt.keyCode === ENTER_KEYCODE) {
        window.utilities.showElement(window.utilities.setupElement);
        addEventListenersOnSetupOpen();
      }
    });
  };

  listenSetupOpenEvent();
})();
