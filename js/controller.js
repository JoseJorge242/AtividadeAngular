angular.module('app').controller('MainController', function (dataService, toastService) {
  var vm = this;

  vm.faq = dataService.faq;
  vm.tabs = dataService.tabs;
  vm.options = dataService.options;
  vm.products = dataService.products;

  vm.progress = 30;
  vm.onProgressChange = function () {
    if (vm.progress == 100) { toastService.show('Progresso completo!', 'success'); }
  };

  vm.language = vm.options[0];
  vm.onSelect = function (option) {
    vm.language = option;
    toastService.show('Idioma: ' + option, 'info');
  };

  vm.pageSize = 5;
  vm.page = 1;
  vm.totalPages = Math.ceil(vm.products.length / vm.pageSize);
  vm.goTo = function (page) { vm.page = page; };

  vm.notify = function (type, message) { toastService.show(message, type); };
});