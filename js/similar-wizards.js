'use strict';

(function () {
// Друзья-волшебники:
  var FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  // Друзья-волшебники:
  var LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  // Друзья-волшебники: Главный маг
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  // Друзья-волшебники: Главный маг
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  // Друзья-волшебники:
  var SIMILAR_WIZARDS_NUMBER = 4;


  // Друзья-волшебники:
  var wizardTemplateElement = document.querySelector('#similar-wizard-template').content;
  var setupSimilarWizardsElement = document.querySelector('.setup-similar');
  var similarListElement = setupSimilarWizardsElement.querySelector('.setup-similar-list');



  // Друзья-волшебники:
  var createRandomWizard = function () {
    var wizard = {
      name: window.utilities.getRandomItem(FIRST_NAMES) + ' ' + window.utilities.getRandomItem(LAST_NAMES),
      coatColor: window.utilities.getRandomItem(COAT_COLORS),
      eyesColor: window.utilities.getRandomItem(EYES_COLORS)
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
