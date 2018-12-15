'use strict';

(function () {
  var URL = 'https://js.dump.academy/code-and-magick';
  var SERVER_RESPONSE_OK = 200;
  var LOADING_TIMEOUT = 10000;

  var request = function (onLoad, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.timeout = LOADING_TIMEOUT;

    xhr.addEventListener('load', function () {
      if (xhr.status === SERVER_RESPONSE_OK) {
        onLoad(xhr.response); // в коллбэк-функцию передается ответ с данными сервера
      } else {
        onError('Cтатус ответа: ' + xhr.status + ' ' + xhr.statusText); // в коллбэк-функцию передается сообщение сервера об ошибке
      }
    });

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });

    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + ' мс');
    });
    return xhr;
  };

  window.backend = {
    load: function (onLoad, onError) {
      var xhr = request(onLoad, onError);
      xhr.open('GET', URL + '\/data');
      xhr.send();
    },
    save: function (data, onLoad, onError) {
      var xhr = request(onLoad, onError);
      xhr.open('POST', URL);
      xhr.send(data);
    }
  };
})();
