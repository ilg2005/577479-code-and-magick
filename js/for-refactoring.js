'use strict';

(function () {
  //Друзья-волшебники:
  var FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  //Друзья-волшебники:
  var LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  //Друзья-волшебники: Главный маг
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  //Друзья-волшебники: Главный маг
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  // Главный маг:
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  //Друзья-волшебники:
  var SIMILAR_WIZARDS_NUMBER = 4;

  var ENTER_KEYCODE = 13;
  var ESC_KEYCODE = 27;
//диалог:
  var setupElement = document.querySelector('.setup');
  var setupOpenElement = document.querySelector('.setup-open');
  var setupCloseElement = setupElement.querySelector('.setup-close');
//Друзья волшебники: Главный маг
  var setupWizardElement = setupElement.querySelector('.setup-wizard');
  //диалог:
  var setupWizardNameElement = setupElement.querySelector('.setup-user-name');
  //Друзья-волшебники: Главный маг
  var setupWizardCoatElement = setupWizardElement.querySelector('.wizard-coat');
  var setupWizardEyesElement = setupWizardElement.querySelector('.wizard-eyes');
  // Главный маг:
  var setupWizardFireballElement = setupElement.querySelector('.setup-fireball-wrap');

  //Друзья-волшебники:
  var wizardTemplateElement = document.querySelector('#similar-wizard-template').content;
  var setupSimilarWizardsElement = document.querySelector('.setup-similar');
  var similarListElement = setupSimilarWizardsElement.querySelector('.setup-similar-list');

  // драгндроп:
  var initialSetupElementPosition = {
    left: setupElement.style.left,
    top: setupElement.style.top
  };
// драгндроп:
  var restoreInitialSetupElementPosition = function () {
    setupElement.style.left = initialSetupElementPosition.left;
    setupElement.style.top = initialSetupElementPosition.top;
  };
//диалог: Друзья-волшебники
  var showElement = function (element) {
    element.classList.remove('hidden');
  };
//диалог:
  var hideElement = function (element) {
    element.classList.add('hidden');
  };

  var getRandomItem = function (items) {
    var randomIndex = Math.round(Math.random() * (items.length - 1));
    return items[randomIndex];
  };
//Друзья-волшебники:
  var createRandomWizard = function () {
    var wizard = {
      name: getRandomItem(FIRST_NAMES) + ' ' + getRandomItem(LAST_NAMES),
      coatColor: getRandomItem(COAT_COLORS),
      eyesColor: getRandomItem(EYES_COLORS)
    };
    return wizard;
  };
//Друзья-волшебники:
  var createSimilarWizards = function (wizardsNumber) {
    var wizards = [];
    for (var i = 0; i < wizardsNumber; i++) {
      wizards.push(createRandomWizard());
    }
    return wizards;
  };
//Друзья-волшебники:
  var renderWizard = function (wizard) {
    var wizardElement = wizardTemplateElement.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };
//Друзья-волшебники:
  var renderSimilarWizards = function (wizards) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < wizards.length; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);
  };
//Главный маг:
  var changeHiddenInputValue = function (inputName, newValue) {
    var selectorString = 'input' + '\[name=\"' + inputName + '\"\]';
    document.querySelector(selectorString).value = newValue;
  };
//Главный маг:
  var changeWizardFeature = function (feature, features, featureElement) {
    var newFeature = getRandomItem(features);
    changeHiddenInputValue(feature, newFeature);
    if (feature === 'fireball-color') {
      featureElement.style.backgroundColor = newFeature;
    } else {
      featureElement.style.fill = newFeature;
    }
  };
//диалог:
  var setupCloseClickHandler = function () {
    hideElement(setupElement);
    document.removeEventListener('keydown', documentKeydownEscHandler);
  };
//диалог:
  var setupCloseKeydownEnterHandler = function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      hideElement(setupElement);
    }
    document.removeEventListener('keydown', documentKeydownEscHandler);
  };
//диалог:
  var documentKeydownEscHandler = function (evt) {
    if (evt.keyCode === ESC_KEYCODE && evt.target !== setupWizardNameElement) {
      hideElement(setupElement);
      document.removeEventListener('keydown', documentKeydownEscHandler);
    }
  };
//Главный маг:
  var setupWizardCoatClickHandler = function () {
    changeWizardFeature('coat-color', COAT_COLORS, setupWizardCoatElement);
  };
//Главный маг:
  var setupWizardEyesClickHandler = function () {
    changeWizardFeature('eyes-color', EYES_COLORS, setupWizardEyesElement);
  };
//Главный маг:
  var setupWizardFireballClickHandler = function () {
    changeWizardFeature('fireball-color', FIREBALL_COLORS, setupWizardFireballElement);
  };

  var addEventListenersOnSetupOpen = function () {
    restoreInitialSetupElementPosition(); // драгндроп
    //диалог:
    setupCloseElement.addEventListener('click', setupCloseClickHandler);
    //диалог:
    setupCloseElement.addEventListener('keydown', setupCloseKeydownEnterHandler);
    //диалог:
    document.addEventListener('keydown', documentKeydownEscHandler);
    //Главный маг:
    setupWizardCoatElement.addEventListener('click', setupWizardCoatClickHandler);
    //Главный маг:
    setupWizardEyesElement.addEventListener('click', setupWizardEyesClickHandler);
    //Главный маг:
    setupWizardFireballElement.addEventListener('click', setupWizardFireballClickHandler);
  };

  //диалог:
  var listenSetupOpenEvent = function () {
    setupOpenElement.addEventListener('click', function () {
      showElement(setupElement);
      addEventListenersOnSetupOpen();
    });
    setupOpenElement.addEventListener('keydown', function (evt) {
      if (evt.keyCode === ENTER_KEYCODE) {
        showElement(setupElement);
        addEventListenersOnSetupOpen();
      }
    });
  };

  var init = function () {
    //диалог:
    listenSetupOpenEvent();
    //Друзья-волшебники:
    var similarWizards = createSimilarWizards(SIMILAR_WIZARDS_NUMBER);
    renderSimilarWizards(similarWizards);
    showElement(setupSimilarWizardsElement);
  };

  init();
})();
