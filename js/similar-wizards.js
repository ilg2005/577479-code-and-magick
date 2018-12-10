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
  // Главный маг:
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  // Друзья-волшебники:
  var SIMILAR_WIZARDS_NUMBER = 4;

  //Диалог:
  var setupElement = document.querySelector('.setup');

  //Друзья волшебники: Главный маг
  var setupWizardElement = setupElement.querySelector('.setup-wizard');

  // Друзья-волшебники: Главный маг
  var setupWizardCoatElement = setupWizardElement.querySelector('.wizard-coat');
  var setupWizardEyesElement = setupWizardElement.querySelector('.wizard-eyes');

  // Друзья-волшебники:
  var wizardTemplateElement = document.querySelector('#similar-wizard-template').content;
  var setupSimilarWizardsElement = document.querySelector('.setup-similar');
  var similarListElement = setupSimilarWizardsElement.querySelector('.setup-similar-list');


  //диалог: Друзья-волшебники
  var showElement = function (element) {
    element.classList.remove('hidden');
  };


//Друзья волшебники - главный маг
  var getRandomItem = function (items) {
    var randomIndex = Math.round(Math.random() * (items.length - 1));
    return items[randomIndex];
  };


  // Друзья-волшебники:
  var createRandomWizard = function () {
    var wizard = {
      name: getRandomItem(FIRST_NAMES) + ' ' + getRandomItem(LAST_NAMES),
      coatColor: getRandomItem(COAT_COLORS),
      eyesColor: getRandomItem(EYES_COLORS)
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
  showElement(setupSimilarWizardsElement);


})();
