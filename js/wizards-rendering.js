'use strict';

(function () {
  var SIMILAR_WIZARDS_NUMBER = 4;

  var wizardTemplateElement = document.querySelector('#similar-wizard-template').content;
  var setupSimilarWizardsElement = document.querySelector('.setup-similar');
  var similarListElement = setupSimilarWizardsElement.querySelector('.setup-similar-list');

  var createRandomWizard = function () {
    var wizard = {
      name: window.utilities.getRandomItem(window.consts.FIRST_NAMES) + ' ' + window.utilities.getRandomItem(window.consts.LAST_NAMES),
      coatColor: window.utilities.getRandomItem(window.consts.COAT_COLORS),
      eyesColor: window.utilities.getRandomItem(window.consts.EYES_COLORS)
    };
    return wizard;
  };

  var createSimilarWizards = function (wizardsNumber) {
    var wizards = [];
    for (var i = 0; i < wizardsNumber; i++) {
      wizards.push(createRandomWizard());
    }
    return wizards;
  };

  var renderWizard = function (wizard) {
    var wizardElement = wizardTemplateElement.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };

  var renderSimilarWizards = function (wizards) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < wizards.length; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);
  };

  var init = function () {
    var similarWizards = createSimilarWizards(SIMILAR_WIZARDS_NUMBER);
    renderSimilarWizards(similarWizards);
    window.utilities.showElement(setupSimilarWizardsElement);
  };
  init();
})();
