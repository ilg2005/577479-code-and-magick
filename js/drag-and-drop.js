'use strict';

(function () {
  var userPicElement = window.utilities.setupElement.querySelector('.setup-user-pic');
  var userPicUploadElement = window.utilities.setupElement.querySelector('.upload input');

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

      window.utilities.setupElement.style.left = (window.utilities.setupElement.offsetLeft + shift.x) + 'px';
      window.utilities.setupElement.style.top = (window.utilities.setupElement.offsetTop + shift.y) + 'px';
    };

    var documentMouseUpHandler = function () {
      if (dragged === false) {
        userPicUploadElement.click();
      }
      document.removeEventListener('mousemove', documentMouseMoveHandler);
      document.removeEventListener('mouseup', documentMouseUpHandler);
    };

    document.addEventListener('mousemove', documentMouseMoveHandler);
    document.addEventListener('mouseup', documentMouseUpHandler);
  };

  userPicElement.addEventListener('mousedown', userPicElementMouseDownHandler);

  window.userPicElement = userPicElement;
})();
