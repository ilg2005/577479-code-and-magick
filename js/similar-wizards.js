'use strict';

(function () {
// Друзья-волшебники:
  var SIMILAR_WIZARDS_NUMBER = 4;


  // Друзья-волшебники:
  var wizardTemplateElement = document.querySelector('#similar-wizard-template').content;
  var setupSimilarWizardsElement = document.querySelector('.setup-similar');
  var similarListElement = setupSimilarWizardsElement.querySelector('.setup-similar-list');



  // Друзья-волшебники:
  var createRandomWizard = function () {
    var wizard = {
      name: window.utilities.getRandomItem(window.backend.FIRST_NAMES) + ' ' + window.utilities.getRandomItem(window.backend.LAST_NAMES),
      coatColor: window.utilities.getRandomItem(window.backend.COAT_COLORS),
      eyesColor: window.utilities.getRandomItem(window.backend.EYES_COLORS)
    };
    return wizard;
  };
  // Друзья-волшебники:
  var createSimilarWizards = function (wizardsNumber) {
    var wizards = [];
    for (var i = 0; i < wizardsNumber; i++) {
      wizards.push(createRandomWizard());
    }
    return wizards;
  };
  // Друзья-волшебники:
  var renderWizard = function (wizard) {
    var wizardElement = wizardTemplateElement.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };
  // Друзья-волшебники:
  var renderSimilarWizards = function (wizards) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < wizards.length; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);
  };

  // Друзья-волшебники:
  var similarWizards = createSimilarWizards(SIMILAR_WIZARDS_NUMBER);
  renderSimilarWizards(similarWizards);
  window.utilities.showElement(setupSimilarWizardsElement);


})();
