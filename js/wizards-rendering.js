'use strict';

(function () {
  var SIMILAR_WIZARDS_NUMBER = 4;

  var wizardTemplateElement = document.querySelector('#similar-wizard-template').content;
  var setupSimilarWizardsElement = document.querySelector('.setup-similar');
  var similarListElement = setupSimilarWizardsElement.querySelector('.setup-similar-list');

  var loadedData;

  var renderWizard = function (wizard) {
    var wizardElement = wizardTemplateElement.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

  var getSimilarWizards = function (currentSettings) {
    var wizardsCopy = loadedData.slice();
    wizardsCopy.forEach(function (wizard) {
      var rank = 0;
      if (wizard.colorCoat === currentSettings.coatColor) {
        rank = 2;
      }
      if (wizard.colorEyes === currentSettings.eyesColor) {
        rank += 1;
      }
      wizard.rank = rank;
    });

    wizardsCopy.sort(function (wizard1, wizard2) {
      if (wizard1.rank < wizard2.rank) {
        return 1;
      }
      if (wizard1.rank > wizard2.rank) {
        return -1;
      }
      if (wizard1.rank === wizard2.rank) {
        return wizard1.name.localeCompare(wizard2.name);
      }
    });

    return wizardsCopy;
  };

  var renderSimilarWizards = function (wizards) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < SIMILAR_WIZARDS_NUMBER; i++) {
      /* var randomWizard = window.utilities.getRandomItem(wizards);*/
      fragment.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);
  };

  window.updateWizards = function (currentSettings) {
    similarListElement.innerHTML = '';
    renderSimilarWizards(getSimilarWizards(currentSettings));
  };

  var successLoadHandler = function (wizards) {
    loadedData = wizards;
    renderSimilarWizards(getSimilarWizards(window.currentSettings));
  };

  var errorLoadHandler = function (serverResponse) {
    window.utilities.renderErrorMessage(serverResponse);
  };

  var init = function () {
    window.backend.load(successLoadHandler, errorLoadHandler);
    window.utilities.showElement(setupSimilarWizardsElement);
  };
  init();
})();
