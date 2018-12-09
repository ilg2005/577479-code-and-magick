'use strict';

var setupElement = document.querySelector('.setup');
var userPicElement = setupElement.querySelector('.setup-user-pic');

var userPicElementMouseDownHandler = function (evt) {

  console.log('Нажатие ЛКМ на userPic');
};

userPicElement.addEventListener('mousedown', userPicElementMouseDownHandler);

