'use strict';

(function () {
  var MESSAGE_TIMEOUT = 1000;

  var removeServerMessage = function (element, timeout) {
    setTimeout(function () {
      element.remove();
    }, timeout);
  };

  window.utilities = {
    setupElement: document.querySelector('.setup'),

    showElement: function (element) {
      element.classList.remove('hidden');
    },
    getRandomItem: function (items) {
      var randomIndex = Math.round(Math.random() * (items.length - 1));
      return items[randomIndex];
    },
    renderSuccessMessage: function (message) {
      var successMessageElement = document.createElement('div');
      successMessageElement.style = 'z-index: 100; width: 300px; min-height: 50px; border-radius: 50px; margin: auto; text-align: center; background-color: green';
      successMessageElement.style.display = 'inline-flex';
      successMessageElement.style.justifyContent = 'center';
      successMessageElement.style.alignItems = 'center';
      successMessageElement.style.position = 'fixed';
      successMessageElement.style.top = '50%';
      successMessageElement.style.bottom = '50%';
      successMessageElement.style.left = 0;
      successMessageElement.style.right = 0;
      successMessageElement.style.fontSize = '18px';

      successMessageElement.textContent = message;
      document.body.insertAdjacentElement('afterbegin', successMessageElement);

      removeServerMessage(successMessageElement, MESSAGE_TIMEOUT);
    },
    renderErrorMessage: function (message) {
      var errorMessageElement = document.createElement('div');
      errorMessageElement.style = 'z-index: 100; width: 500px; min-height: 50px; margin: auto; text-align: center';
      errorMessageElement.style.fontSize = '20px';

      errorMessageElement.textContent = message;
      document.querySelector('.setup-submit').insertAdjacentElement('beforebegin', errorMessageElement);
      removeServerMessage(errorMessageElement, MESSAGE_TIMEOUT);
    }
  };
})();
