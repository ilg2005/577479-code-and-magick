'use strict';

var FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var SIMILAR_WIZARDS_NUMBER = 4;

var setupElement = document.querySelector('.overlay');
var wizardTemplateElement = document.querySelector('#similar-wizard-template');
var wizardTemplateNameElement = wizardTemplateElement.content.querySelector('.setup-similar-label');
var wizardTemplateCoatElement = wizardTemplateElement.content.querySelector('.wizard-coat');
var wizardTemplateEyesElement = wizardTemplateElement.content.querySelector('.wizard-eyes');

var getRandomItem = function (items) {
  var randomIndex = Math.round(Math.random() * (items.length - 1));
  return items[randomIndex];
};

var createRandomWizard = function () {
  var randomWizard = {
    name: getRandomItem(FIRST_NAMES) + ' ' + getRandomItem(LAST_NAMES),
    coatColor: getRandomItem(COAT_COLORS),
    eyesColor: getRandomItem(EYES_COLORS)
  };
  return randomWizard;
};

var createSimilarWizards = function (wizardsNumber) {
  var randomWizards = [];
  for (var i = 0; i < wizardsNumber; i++) {
    randomWizards.push(createRandomWizard());
  }
  return randomWizards;
};

setupElement.classList.remove('hidden');
var similarWizards = createSimilarWizards(SIMILAR_WIZARDS_NUMBER);
// console.log(similarWizards);

for (var i = 0; i < similarWizards.length; i++) {
  console.log(similarWizards[i]);
}
