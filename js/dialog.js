'use strict';

(function () {
  var ENTER_KEYCODE = 13;
  var ESC_KEYCODE = 27;

  var setupElement = document.querySelector('.setup');
  var setupOpenElement = document.querySelector('.setup-open');
  var setupCloseElement = setupElement.querySelector('.setup-close');
  var setupWizardNameElement = setupElement.querySelector('.setup-user-name');

  var showElement = function (element) {
    element.classList.remove('hidden');
  };

  var hideElement = function (element) {
    element.classList.add('hidden');
  };

  var initialSetupElementPosition = {
    left: setupElement.style.left,
    top: setupElement.style.top
  };

  var restoreInitialSetupElementPosition = function () {
    setupElement.style.left = initialSetupElementPosition.left;
    setupElement.style.top = initialSetupElementPosition.top;
  };

  var setupCloseClickHandler = function () {
    hideElement(setupElement);
    document.removeEventListener('keydown', documentKeydownEscHandler);
  };

  var setupCloseKeydownEnterHandler = function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      hideElement(setupElement);
    }
    document.removeEventListener('keydown', documentKeydownEscHandler);
  };

  var documentKeydownEscHandler = function (evt) {
    if (evt.keyCode === ESC_KEYCODE && evt.target !== setupWizardNameElement) {
      hideElement(setupElement);
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
      showElement(setupElement);
      addEventListenersOnSetupOpen();
    });
    setupOpenElement.addEventListener('keydown', function (evt) {
      if (evt.keyCode === ENTER_KEYCODE) {
        showElement(setupElement);
        addEventListenersOnSetupOpen();
      }
    });
  };

  listenSetupOpenEvent();
})();
