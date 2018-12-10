'use strict';

(function () {
  window.utilities = {
    showElement: function (element) {
      element.classList.remove('hidden');
    },
    getRandomItem: function (items) {
      var randomIndex = Math.round(Math.random() * (items.length - 1));
      return items[randomIndex];
    }
  };
})();
