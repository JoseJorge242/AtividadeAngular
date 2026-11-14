angular.module('app').directive('appTabs', function () {
  return {
    scope: { tabs: '=' },
    template:
      '<div class="tabs__nav">' +
      '  <button ng-repeat="tab in tabs" ng-click="$parent.active = $index"' +
      '          ng-class="{ active: $parent.active === $index }">{{ tab.title }}</button>' +
      '</div>' +
      '<div class="tabs__content">{{ tabs[active].content }}</div>',
    link: function (scope) { scope.active = 0; }
  };
});