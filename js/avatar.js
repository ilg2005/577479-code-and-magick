'use strict';

(function () {
  var FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
  var fileChooser = document.querySelector('.upload input[type=file]');

  var readFile = function (fileToRead) {
    var fileName = fileToRead.name.toLowerCase();

    var matches = FILE_TYPES.some(function (it) {
      return fileName.endsWith(it);
    });

    if (matches) {
      var reader = new FileReader();

      reader.addEventListener('load', function () {
        window.userPicElement.src = reader.result;
        window.setupOpenElement.firstElementChild.src = reader.result;
      });

      reader.readAsDataURL(fileToRead);
    }
  };

  var fileChooserChangeHandler = function () {
    var selectedFile = fileChooser.files[0];
    readFile(selectedFile);
  };

  var userPicElementDragoverHandler = function (evt) {
    evt.preventDefault();
  };

  var userPicElementDropHandler = function (evt) {
    evt.preventDefault();
    var droppedFile = evt.dataTransfer.files[0];
    readFile(droppedFile);
  };

  fileChooser.addEventListener('change', fileChooserChangeHandler);
  window.userPicElement.addEventListener('dragover', userPicElementDragoverHandler);
  window.userPicElement.addEventListener('drop', userPicElementDropHandler);
})();
