angular.module('app').factory('dataService', function () {
  var products = [];
  for (var i = 1; i <= 25; i++) {
    products.push({
      name: 'Produto ' + i,
      price: 10 * i,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.'
    });
  }

  return {
    faq: [
      { title: 'O que é AngularJS?', content: 'Lorem ipsum dolor sit amet.' },
      { title: 'Como funcionam as diretivas?', content: 'Sed do eiusmod tempor incididunt.' },
      { title: 'O que é two-way binding?', content: 'Ut enim ad minim veniam.' }
    ],
    tabs: [
      { title: 'Perfil', content: 'Lorem ipsum: dados do perfil.' },
      { title: 'Detalhes', content: 'Lorem ipsum: detalhes do produto.' },
      { title: 'Avaliações', content: 'Lorem ipsum: avaliações de clientes.' }
    ],
    options: ['Português', 'English', 'Español'],
    products: products
  };
});

// Lista de toasts; cada um some sozinho depois de 3 segundos
angular.module('app').factory('toastService', function ($timeout) {
  var toasts = [];

  function remove(toast) {
    var i = toasts.indexOf(toast);
    if (i !== -1) { toasts.splice(i, 1); }
  }

  function show(message, type) {
    var toast = { message: message, type: type };
    toasts.push(toast);
    $timeout(function () { remove(toast); }, 3000);
  }

  return { toasts: toasts, show: show, remove: remove };
});