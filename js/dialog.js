'use strict';

var setupElement = document.querySelector('.setup');
var userPicElement = setupElement.querySelector('.setup-user-pic');
var uploadElement = setupElement.querySelector('.upload');

var uploadElementMouseDownHandler = function (evt) {
  evt.preventDefault();
  console.log('Нажатие ЛКМ на upload');
};

var userPicElementMouseDownHandler = function (evt) {
  evt.preventDefault();
  console.log('Нажатие ЛКМ на userPic');
};

userPicElement.addEventListener('mousedown', userPicElementMouseDownHandler);
uploadElement.addEventListener('mousedown', uploadElementMouseDownHandler);
