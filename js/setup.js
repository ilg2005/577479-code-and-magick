'use strict';

var FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var SIMILAR_WIZARDS_NUMBER = 4;

var setupElement = document.querySelector('.overlay');
var wizardTemplateElement = document.querySelector('#similar-wizard-template').content;
var setupSimilarWizardsElement = document.querySelector('.setup-similar');
var similarListElement = setupSimilarWizardsElement.querySelector('.setup-similar-list');

var showElement = function (element) {
  element.classList.remove('hidden');
};

var getRandomItem = function (items) {
  var randomIndex = Math.round(Math.random() * (items.length - 1));
  return items[randomIndex];
};

var createRandomWizard = function () {
  var wizard = {
    name: getRandomItem(FIRST_NAMES) + ' ' + getRandomItem(LAST_NAMES),
    coatColor: getRandomItem(COAT_COLORS),
    eyesColor: getRandomItem(EYES_COLORS)
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
  showElement(setupElement);
  var similarWizards = createSimilarWizards(SIMILAR_WIZARDS_NUMBER);
  renderSimilarWizards(similarWizards);
  showElement(setupSimilarWizardsElement);
};

init();
