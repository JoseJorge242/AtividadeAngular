angular.module('app').filter('truncate', function () {
  return function (text, limit) {
    return text.length > limit ? text.substring(0, limit) + '...' : text;
  };
});