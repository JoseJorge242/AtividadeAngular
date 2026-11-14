angular.module('app').directive('appAccordion', function () {
  return {
    scope: { items: '=' },
    template:
      '<div class="accordion__item" ng-repeat="item in items" ng-class="{ open: $parent.open === $index }">' +
      '  <button class="accordion__header" ng-click="$parent.open = ($parent.open === $index ? -1 : $index)">' +
      '    {{ item.title }}' +
      '  </button>' +
      '  <div class="accordion__body">{{ item.content }}</div>' +
      '</div>',
    link: function (scope) { scope.open = -1; }
  };
});