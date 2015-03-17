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
  

class CaptacaoController
  constructor: (@$scope) ->
    @$scope.processos = dataJson

    @$scope.title = 'Captações'

angular.module 'sincap.controllers', []
angular.module('sincap').controller 'LoginCtrl', ['$scope', LoginController]
angular.module('sincap').controller 'AppCtrl', ['$scope', AppController]
angular.module('sincap').controller 'CaptacaoCtrl', ['$scope', CaptacaoController]