'use strict';

(function () {
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var setupWizardElement = window.utilities.setupElement.querySelector('.setup-wizard');

  var setupWizardCoatElement = setupWizardElement.querySelector('.wizard-coat');
  var setupWizardEyesElement = setupWizardElement.querySelector('.wizard-eyes');
  var setupWizardFireballElement = window.utilities.setupElement.querySelector('.setup-fireball-wrap');

  var changeHiddenInputValue = function (inputName, newValue) {
    var selectorString = 'input' + '\[name=\"' + inputName + '\"\]';
    document.querySelector(selectorString).value = newValue;
  };

  var changeWizardFeature = function (feature, features, featureElement) {
    var newFeature = window.utilities.getRandomItem(features);
    changeHiddenInputValue(feature, newFeature);
    if (feature === 'fireball-color') {
      featureElement.style.backgroundColor = newFeature;
    } else {
      featureElement.style.fill = newFeature;
    }
  };

  var setupWizardCoatClickHandler = function () {
    changeWizardFeature('coat-color', window.consts.COAT_COLORS, setupWizardCoatElement);
  };
  var setupWizardEyesClickHandler = function () {
    changeWizardFeature('eyes-color', window.consts.EYES_COLORS, setupWizardEyesElement);
  };
  var setupWizardFireballClickHandler = function () {
    changeWizardFeature('fireball-color', FIREBALL_COLORS, setupWizardFireballElement);
  };

  setupWizardCoatElement.addEventListener('click', setupWizardCoatClickHandler);
  setupWizardEyesElement.addEventListener('click', setupWizardEyesClickHandler);
  setupWizardFireballElement.addEventListener('click', setupWizardFireballClickHandler);
})();
