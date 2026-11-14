angular.module('app').directive('appProgressBar', function () {
  return {
    scope: { value: '=' },
    template:
      '<div class="progress">' +
      '  <div class="progress__fill" ng-style="{ width: value + \'%\' }"></div>' +
      '  <span class="progress__label">{{ value }}%</span>' +
      '</div>'
  };
});