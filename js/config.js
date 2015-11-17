let config = function($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('root', {
      abstract: true,
      templateUrl: 'templates/layout.tpl.html'
    })
    .state('root.form', {
      url: '/',
      controller: 'FormController as vm',
      templateUrl: 'templates/form.tpl.html'

    });
  

};

config.$inject = ['$urlRouterProvider', '$stateProvider'];

export default config;