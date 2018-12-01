'use strict';

var FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var SIMILAR_WIZARDS_NUMBER = 4;
var ENTER_KEYCODE = 13;
var ESC_KEYCODE = 27;

var setupElement = document.querySelector('.overlay');
var setupOpenElement = document.querySelector('.setup-open');
var setupCloseElement = setupElement.querySelector('.setup-close');

var setupWizardElement = setupElement.querySelector('.setup-wizard');
var setupWizardCoatElement = setupWizardElement.querySelector('.wizard-coat');
var setupWizardEyesElement = setupWizardElement.querySelector('.wizard-eyes');
var setupWizardFireballElement = setupElement.querySelector('.setup-fireball-wrap');

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

var changeHiddenInputValue = function (inputName, newValue) {
  var selectorString = 'input' + '\[name=\"' + inputName + '\"\]';
  document.querySelector(selectorString).value = newValue;
};

var changeWizardFeature = function (feature, features, featureElement) {
  var newFeature = getRandomItem(features);
  changeHiddenInputValue(feature, newFeature);
  if (feature === 'fireball-color') {
    featureElement.style.backgroundColor = newFeature;
  } else {
    featureElement.style.fill = newFeature;
  }
};

var setupCloseClickHandler = function () {
  hideElement(setupElement);
  document.removeEventListener('keydown', documentKeydownEscHandler);
};

var setupCloseKeydownEnterHandler = function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    hideElement(setupElement);
  }
  document.removeEventListener('keydown', documentKeydownEscHandler);
};

var documentKeydownEscHandler = function (evt) {
  if (evt.keyCode === ESC_KEYCODE && evt.target.className !== 'setup-user-name') {
    hideElement(setupElement);
  }
  document.removeEventListener('keydown', documentKeydownEscHandler);
};

var setupWizardCoatClickHandler = function () {
  changeWizardFeature('coat-color', COAT_COLORS, setupWizardCoatElement);
};

var setupWizardEyesClickHandler = function () {
  changeWizardFeature('eyes-color', EYES_COLORS, setupWizardEyesElement);
};

var setupWizardFireballClickHandler = function () {
  changeWizardFeature('fireball-color', FIREBALL_COLORS, setupWizardFireballElement);
};

var addEventListenersOnSetupOpen = function () {
  setupCloseElement.addEventListener('click', setupCloseClickHandler);
  setupCloseElement.addEventListener('keydown', setupCloseKeydownEnterHandler);
  document.addEventListener('keydown', documentKeydownEscHandler);
  setupWizardCoatElement.addEventListener('click', setupWizardCoatClickHandler);
  setupWizardEyesElement.addEventListener('click', setupWizardEyesClickHandler);
  setupWizardFireballElement.addEventListener('click', setupWizardFireballClickHandler);
};

var listenSetupOpenEvent = function () {
  setupOpenElement.addEventListener('click', function () {
    showElement(setupElement);
  });
  setupOpenElement.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      showElement(setupElement);
    }
  });
  addEventListenersOnSetupOpen();
};

var init = function () {
  listenSetupOpenEvent();
  var similarWizards = createSimilarWizards(SIMILAR_WIZARDS_NUMBER);
  renderSimilarWizards(similarWizards);
  showElement(setupSimilarWizardsElement);
};

init();
