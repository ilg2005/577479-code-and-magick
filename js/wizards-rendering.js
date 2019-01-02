'use strict';

(function () {
  var SIMILAR_WIZARDS_NUMBER = 4;

  var wizardTemplateElement = document.querySelector('#similar-wizard-template').content;
  var setupSimilarWizardsElement = document.querySelector('.setup-similar');
  var similarListElement = setupSimilarWizardsElement.querySelector('.setup-similar-list');

  var renderWizard = function (wizard) {
    var wizardElement = wizardTemplateElement.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

  var renderSimilarWizards = function (wizards) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < SIMILAR_WIZARDS_NUMBER; i++) {
      var randomWizard = window.utilities.getRandomItem(wizards);
      fragment.appendChild(renderWizard(randomWizard));
    }
    similarListElement.appendChild(fragment);
  };

  var successLoadHandler = function (wizards) {
    window.loadedData = wizards;
    renderSimilarWizards(wizards);
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
