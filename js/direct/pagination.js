angular.module('app').directive('appPagination', function () {
  return {
    scope: { totalPages: '=', current: '=', onChange: '&' },
    template:
      '<div class="pagination">' +
      '  <button ng-click="onChange({ page: current - 1 })" ng-disabled="current === 1">Anterior</button>' +
      '  <button ng-repeat="n in pages()" ng-click="onChange({ page: n })"' +
      '          ng-class="{ active: n === current }">{{ n }}</button>' +
      '  <button ng-click="onChange({ page: current + 1 })" ng-disabled="current === totalPages">Próxima</button>' +
      '</div>',
    link: function (scope) {
      scope.pages = function () {
        var list = [];
        for (var i = 1; i <= scope.totalPages; i++) { list.push(i); }
        return list;
      };
    }
  };
});