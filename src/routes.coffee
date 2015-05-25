angular.module 'sincap'
.config ($stateProvider, $urlRouterProvider) ->
  $stateProvider
  .state 'app',
    url: "/app"
    abstract: true
    templateUrl: "templates/menu.html"
    controller: 'AppCtrl'

  .state 'app.search',
    url: "/search"
    views:
      'menuContent':
        templateUrl: "templates/search.html"

  .state 'app.captacoes',
    url: "/captacoes/:estado"
    views:
      'menuContent':
        templateUrl: "templates/captacao.html"
        controller: 'CaptacaoCtrl'

  .state 'app.editarCaptacao',
    url: "/captacoes/realizar/:id"
    views:
      'menuContent':
        templateUrl: "templates/form.html"
        controller: 'RealizarCaptacaoCtrl as ctrl'

  .state 'app.login',
    url: "/login"
    views:
      'menuContent':
        templateUrl: "templates/login.html"
        controller: 'LoginCtrl as ctrl'

  $urlRouterProvider.otherwise '/app/login'
