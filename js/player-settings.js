'use strict';

(function () {
  var Color = {
    COAT: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
    EYES: ['black', 'red', 'blue', 'yellow', 'green'],
    FIREBALL: ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848']
  };

  var setupWizardElement = window.utilities.setupElement.querySelector('.setup-wizard');

  var setupWizardCoatElement = setupWizardElement.querySelector('.wizard-coat');
  var setupWizardEyesElement = setupWizardElement.querySelector('.wizard-eyes');
  var setupWizardFireballElement = window.utilities.setupElement.querySelector('.setup-fireball-wrap');

  var updateCurrentWizardSettings = function () {
    var currentWizardSettings = {
      coatColor: setupWizardCoatElement.style.fill,
      eyesColor: setupWizardEyesElement.style.fill,
    };
    return currentWizardSettings;
  };

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
    changeWizardFeature('coat-color', Color.COAT, setupWizardCoatElement);
    window.currentWizardSettings = updateCurrentWizardSettings();
    console.log(window.currentWizardSettings);
  };
  var setupWizardEyesClickHandler = function () {
    changeWizardFeature('eyes-color', Color.EYES, setupWizardEyesElement);
    window.currentWizardSettings = updateCurrentWizardSettings();
    console.log(window.currentWizardSettings);
  };
  var setupWizardFireballClickHandler = function () {
    changeWizardFeature('fireball-color', Color.FIREBALL, setupWizardFireballElement);
  };

  setupWizardCoatElement.addEventListener('click', setupWizardCoatClickHandler);
  setupWizardEyesElement.addEventListener('click', setupWizardEyesClickHandler);
  setupWizardFireballElement.addEventListener('click', setupWizardFireballClickHandler);

  window.currentWizardSettings = updateCurrentWizardSettings();
})();
