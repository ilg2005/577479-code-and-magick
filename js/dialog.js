'use strict';

var setupElement = document.querySelector('.setup');
var userPicElement = setupElement.querySelector('.setup-user-pic');
var userPicUploadElement = setupElement.querySelector('.upload input');

var userPicElementMouseDownHandler = function (evtMouseDown) {
  evtMouseDown.preventDefault();

  var startMouseCoordinates = {
    x: evtMouseDown.clientX,
    y: evtMouseDown.clientY
  };
  var dragged = false;

  var documentMouseMoveHandler = function (evtMouseMove) {
    dragged = true;
    var shift = {
      x: evtMouseMove.clientX - startMouseCoordinates.x,
      y: evtMouseMove.clientY - startMouseCoordinates.y
    };

    startMouseCoordinates = {
      x: evtMouseMove.clientX,
      y: evtMouseMove.clientY
    };

    setupElement.style.left = (setupElement.offsetLeft + shift.x) + 'px';
    setupElement.style.top = (setupElement.offsetTop + shift.y) + 'px';
  };

  var documentMouseupHandler = function () {
    if (dragged === false) {
      userPicUploadElement.click();
    }
    document.removeEventListener('mousemove', documentMouseMoveHandler);
    document.removeEventListener('mouseup', documentMouseupHandler);
  };

  document.addEventListener('mousemove', documentMouseMoveHandler);
  document.addEventListener('mouseup', documentMouseupHandler);
};

userPicElement.addEventListener('mousedown', userPicElementMouseDownHandler);
