'use strict';

(function () {
  window.utilities = {
    setupElement: document.querySelector('.setup'),
    showElement: function (element) {
      element.classList.remove('hidden');
    },
    getRandomItem: function (items) {
      var randomIndex = Math.round(Math.random() * (items.length - 1));
      return items[randomIndex];
    }
  };
})();
