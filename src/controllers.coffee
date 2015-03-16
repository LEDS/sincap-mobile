class LoginController
  constructor: (@$scope, @$ionicModal, @$timeout) ->
    @$scope.loginData = {}

    @$ionicModal.fromTemplateUrl('templates/login.html', scope: $scope)
    .then (modal) ->
      $scope.modal = modal

  closeLogin: ->
    @$scope.modal.hide()

  login: ->
    @$scope.modal.show()

  doLogin: ->
    console.log 'Doing login', @$scope.loginData

    @$timeout ->
      @$scope.closeLogin()
    , 1000

class AppController
  constructor: (@$scope, @$ionicModal, @$timeout) ->
  

class PlaylistsController
  constructor: (@$scope) ->
    @$scope.playlists = [
      { title: 'Reggae', id: 1 }
      { title: 'Chill', id: 2 }
      { title: 'Dubstep', id: 3 }
      { title: 'Indie', id: 4 }
      { title: 'Rap', id: 5 }
      { title: 'Cowbell', id: 6 }
    ]

    @$scope.title = 'Captações'

angular.module 'sincap.controllers', []
angular.module('sincap').controller 'LoginCtrl', ['$scope', LoginController]
angular.module('sincap').controller 'AppCtrl', ['$scope', AppController]
angular.module('sincap').controller 'PlaylistCtrl', ['$scope', PlaylistsController]