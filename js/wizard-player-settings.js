'use strict';

(function () {
  // Друзья-волшебники: Главный маг
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  // Друзья-волшебники: Главный маг
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  // Главный маг:
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];


  // диалог:
  var setupElement = document.querySelector('.setup');

  // Друзья волшебники: Главный маг
  var setupWizardElement = setupElement.querySelector('.setup-wizard');

  // Главный маг
  var setupWizardCoatElement = setupWizardElement.querySelector('.wizard-coat');
  var setupWizardEyesElement = setupWizardElement.querySelector('.wizard-eyes');
  // Главный маг:
  var setupWizardFireballElement = setupElement.querySelector('.setup-fireball-wrap');

  // Главный маг:
  var changeHiddenInputValue = function (inputName, newValue) {
    var selectorString = 'input' + '\[name=\"' + inputName + '\"\]';
    document.querySelector(selectorString).value = newValue;
  };
  // Главный маг:
  var changeWizardFeature = function (feature, features, featureElement) {
    var newFeature = window.utilities.getRandomItem(features);
    changeHiddenInputValue(feature, newFeature);
    if (feature === 'fireball-color') {
      featureElement.style.backgroundColor = newFeature;
    } else {
      featureElement.style.fill = newFeature;
    }
  };

  // Главный маг:
  var setupWizardCoatClickHandler = function () {
    changeWizardFeature('coat-color', COAT_COLORS, setupWizardCoatElement);
  };
  // Главный маг:
  var setupWizardEyesClickHandler = function () {
    changeWizardFeature('eyes-color', EYES_COLORS, setupWizardEyesElement);
  };
  // Главный маг:
  var setupWizardFireballClickHandler = function () {
    changeWizardFeature('fireball-color', FIREBALL_COLORS, setupWizardFireballElement);
  };

  // Главный маг:
  setupWizardCoatElement.addEventListener('click', setupWizardCoatClickHandler);
  // Главный маг:
  setupWizardEyesElement.addEventListener('click', setupWizardEyesClickHandler);
  // Главный маг:
  setupWizardFireballElement.addEventListener('click', setupWizardFireballClickHandler);


})();
