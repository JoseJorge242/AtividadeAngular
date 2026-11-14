angular.module('app').directive('appDropdown', function ($document) {
  return {
    scope: { label: '@', options: '=', onSelect: '&' },
    template:
      '<button class="dropdown__toggle" ng-click="toggle($event)">{{ label }} &#9662;</button>' +
      '<ul class="dropdown__menu" ng-show="open">' +
      '  <li ng-repeat="option in options" ng-click="select(option)">{{ option }}</li>' +
      '</ul>',
    link: function (scope) {
      scope.open = false;

      scope.toggle = function (event) {
        event.stopPropagation(); 
        scope.open = !scope.open;
      };

      scope.select = function (option) {
        scope.open = false;
        scope.onSelect({ option: option });
      };

      $document.on('click', function () {
        scope.$apply(function () { scope.open = false; });
      });
    }
  };
});