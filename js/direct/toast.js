angular.module('app').directive('appToast', function (toastService) {
  return {
    scope: {},
    template:
      '<div class="toast toast--{{ toast.type }}" ng-repeat="toast in toasts">' +
      '  {{ toast.message }}' +
      '  <button ng-click="remove(toast)">&times;</button>' +
      '</div>',
    link: function (scope) {
      scope.toasts = toastService.toasts;
      scope.remove = toastService.remove;
    }
  };
});