(function() {
  angular.module('sincap', ['ionic', 'sincap.controllers']).run(function($ionicPlatform) {
    return $ionicPlatform.ready(function() {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if (window.StatusBar) {
        return StatusBar.styleDefault();
      }
    });
  }).config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'AppCtrl'
    }).state('app.search', {
      url: "/search",
      views: {
        'menuContent': {
          templateUrl: "templates/search.html"
        }
      }
    }).state('app.captacoes', {
      url: "/captacoes",
      views: {
        'menuContent': {
          templateUrl: "templates/captacao.html",
          controller: 'PlaylistCtrl'
        }
      }
    }).state('app.single', {
      url: "/captacoes/:processoId",
      views: {
        'menuContent': {
          templateUrl: "templates/form.html",
          controller: 'PlaylistCtrl'
        }
      }
    });
    return $urlRouterProvider.otherwise('/app/captacoes');
  });

}).call(this);
