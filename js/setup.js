'use strict';

var FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var SIMILAR_WIZARDS_NUMBER = 4;
var ENTER_KEYCODE = 13;
var ESC_KEYCODE = 27;

var setupElement = document.querySelector('.overlay');
var setupOpenElement = document.querySelector('.setup-open');
var setupCloseElement = setupElement.querySelector('.setup-close');
var setupWizard = setupElement.querySelector('.setup-wizard');
var setupWizardCoat = setupWizard.querySelector('.wizard-coat');
var setupWizardEyes = setupWizard.querySelector('.wizard-eyes');
var wizardTemplateElement = document.querySelector('#similar-wizard-template').content;
var setupSimilarWizardsElement = document.querySelector('.setup-similar');
var similarListElement = setupSimilarWizardsElement.querySelector('.setup-similar-list');

var showElement = function (element) {
  element.classList.remove('hidden');
};

var hideElement = function (element) {
  element.classList.add('hidden');
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

var setupWizardItemClickHandler = function (item, items) {
  item.style.fill = getRandomItem(items);
};

setupOpenElement.addEventListener('click', function () {
  showElement(setupElement);
  setupWizardCoat.addEventListener('click', setupWizardItemClickHandler.bind(this, setupWizardCoat, COAT_COLORS));
  setupWizardEyes.addEventListener('click', setupWizardItemClickHandler.bind(this, setupWizardEyes, EYES_COLORS));
});

setupOpenElement.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    showElement(setupElement);
  }
});

setupCloseElement.addEventListener('click', function () {
  hideElement(setupElement);
});

setupCloseElement.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    hideElement(setupElement);
  }
});

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ESC_KEYCODE && evt.target.className !== 'setup-user-name') {
    hideElement(setupElement);
  }
});

var init = function () {
  var similarWizards = createSimilarWizards(SIMILAR_WIZARDS_NUMBER);
  renderSimilarWizards(similarWizards);
  showElement(setupSimilarWizardsElement);
};

init();
