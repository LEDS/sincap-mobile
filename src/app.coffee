angular.module 'sincap', ['ionic', 'sincap.controllers']

.run ($ionicPlatform) ->
  $ionicPlatform.ready ->
    if window.cordova and window.cordova.plugins.Keyboard
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar true
    if window.StatusBar
      StatusBar.styleDefault()

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

  $urlRouterProvider.otherwise '/app/captacoes'