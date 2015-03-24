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
    url: "/captacoes"
    views:
      'menuContent':
        templateUrl: "templates/captacao.html"
        controller: 'CaptacaoCtrl'
  
  .state 'app.single',
    url: "/captacoes/:processoId"
    views:
      'menuContent':
        templateUrl: "templates/form.html"
        controller: 'CaptacaoCtrl'
        
  .state 'app.login',
    url: "/login"
    views:
      'menuContent':
        templateUrl: "templates/login.html"
        controller: 'LoginCtrl'

  $urlRouterProvider.otherwise '/app/login'