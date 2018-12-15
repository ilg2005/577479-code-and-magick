'use strict';

(function () {

  window.utilities = {
    setupElement: document.querySelector('.setup'),
    formSubmitElement: document.querySelector('.setup-submit'),

    showElement: function (element) {
      element.classList.remove('hidden');
    },
    getRandomItem: function (items) {
      var randomIndex = Math.round(Math.random() * (items.length - 1));
      return items[randomIndex];
    },
    renderErrorMessage: function (message) {
      var node = document.createElement('div');
      node.style = 'z-index: 100; width: 500px; min-height: 50px; margin: auto; text-align: center';
      node.style.fontSize = '20px';

      node.textContent = message;
      this.formSubmitElement.insertAdjacentElement('beforebegin', node);
    }
  };
})();
